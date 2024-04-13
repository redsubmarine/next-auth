'use client'

import { logout } from '@/actions/logout'
import { FunctionComponent } from 'react'

interface LogoutButtonProps {
  children: React.ReactNode
}

const LogoutButton: FunctionComponent<LogoutButtonProps> = ({ children }) => {
  const onClick = () => {
    logout()
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}

export default LogoutButton
