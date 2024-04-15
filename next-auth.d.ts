import { UserRole } from '@prisma/client'
import { type DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole
  // TODO: 토큰에 커스텀 필드 추가.
  isTwoFactorEnabled: boolean
  isOAuth: boolean
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    role: UserRole
  }
}
