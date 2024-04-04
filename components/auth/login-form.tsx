import CardWrapper from '@/components/auth/card-wrapper'
import { FunctionComponent } from 'react'

interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form!
    </CardWrapper>
  )
}

export default LoginForm
