import { currentRole } from '@/lib/auth'
import { FunctionComponent } from 'react'

interface AdminPageProps {}

const AdminPage: FunctionComponent<AdminPageProps> = async () => {
  const role = await currentRole()

  return <div>Current role: {role}</div>
}

export default AdminPage
