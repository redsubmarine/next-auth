'use client'

import { useRouter } from 'next/navigation'
import { FunctionComponent } from 'react'

interface LoginButtonProps {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

const LoginButton: FunctionComponent<LoginButtonProps> = ({ children, mode = 'redirect', asChild }) => {
  const router = useRouter()

  const onClick = () => {
    router.push('/auth/login')
  }
  if (mode === 'modal') {
    return <span>TODO: NOT Implemented modal</span>
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}

export default LoginButton
