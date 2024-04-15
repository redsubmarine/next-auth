'use client'

import { useCurrentRole } from '@/hooks/use-current-role'
import { UserRole } from '@prisma/client'
import { FunctionComponent } from 'react'
import FormError from '@/components/form-error'

interface RoleGateProps {
  children: React.ReactNode
  allowedRole: UserRole
}

const RoleGate: FunctionComponent<RoleGateProps> = ({ children, allowedRole }) => {
  const role = useCurrentRole()
  if (role !== allowedRole) {
    return <FormError message="You do not have permission to view this content!" />
  }
  return <>{children}</>
}

export default RoleGate
