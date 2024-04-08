import ErrorCard from '@/components/auth/error-card'
import { FunctionComponent } from 'react'

interface AuthErrorProps {}

const AuthError: FunctionComponent<AuthErrorProps> = () => {
  return <ErrorCard />
}

export default AuthError
