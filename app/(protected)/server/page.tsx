import UserInfo from '@/components/user-info'
import { currentUser } from '@/lib/auth'
import { FunctionComponent } from 'react'

interface ServerPageProps {}

const ServerPage: FunctionComponent<ServerPageProps> = async () => {
  const user = await currentUser()
  return <UserInfo label="💻 Server component" user={user} />
}

export default ServerPage
