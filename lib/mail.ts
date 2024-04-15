import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  if (process.env.RESEND_ENABLED !== 'true') {
    console.log('two factor', token)
    return
  }

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: '2FA Code',
    html: `
      <h1>2FA Code</h1>
      <p>Your 2FA Code: ${token}</p>
    `,
  })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`
  if (process.env.RESEND_ENABLED !== 'true') {
    console.log('reset', resetLink)
    return
  }

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `
      <h1>Reset your password</h1>
      <p>Click the link below to reset your password.</p>
      <a href="${resetLink}">Reset Password</a>
    `,
  })
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`
  if (process.env.RESEND_ENABLED !== 'true') {
    console.log('veri', confirmLink)
    return
  }

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Confirm your email',
    html: `
      <h1>Confirm your email</h1>
      <p>Click the link below to confirm your email address.</p>
      <a href="${confirmLink}">Confirm email</a>
    `,
  })
}
