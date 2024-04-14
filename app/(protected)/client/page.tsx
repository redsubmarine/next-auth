'use client'

import UserInfo from '@/components/user-info'
import { useCurrentUser } from '@/hooks/use-current-user'
import { FunctionComponent } from 'react'

interface ClientPageProps {}

const ClientPage: FunctionComponent<ClientPageProps> = () => {
  const user = useCurrentUser()
  return <UserInfo label="📱 Client component" user={user} />
}

export default ClientPage
