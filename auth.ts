import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'

import authConfig from '@/auth.config'
import { getUserById } from '@/data/user'
import { db } from '@/lib/db'
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      console.log(user)
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== 'credentials') {
        return true
      }

      if (!user.id) {
        return false
      }
      const existingUser = await getUserById(user.id)

      if (!existingUser || !existingUser.emailVerified) {
        return false
      }

      // TODO: Add 2FA check here
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

        if (!twoFactorConfirmation) {
          return false
        }

        await db.twoFactorConfirmation.delete({ where: { id: twoFactorConfirmation.id } })
      }
      return true
    },
    async session({ token, session }) {
      if (!!token.sub && !!session.user) {
        session.user.id = token.sub
      }

      if (!!token.role && !!session.user) {
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token
      }
      const existingUser = await getUserById(token.sub)
      if (!existingUser) {
        return token
      }

      token.role = existingUser.role

      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
})
