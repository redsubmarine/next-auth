'use client'

import { useCurrentRole } from '@/hooks/use-current-role'
import { FunctionComponent } from 'react'

interface AdminPageProps {}

const AdminPage: FunctionComponent<AdminPageProps> = () => {
  const role = useCurrentRole()

  return <div>Current role: {role}</div>
}

export default AdminPage
