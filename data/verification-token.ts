import { db } from '@/lib/db'

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({ where: { token } })
    return verificationToken
  } catch (err) {
    return null
  }
}

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const token = await db.verificationToken.findFirst({ where: { email } })
    return token
  } catch (err) {
    return null
  }
}
