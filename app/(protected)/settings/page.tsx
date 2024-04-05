import { auth } from '@/auth'
import { FunctionComponent } from 'react'

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = async () => {
  const session = await auth()
  return <div>{JSON.stringify(session)}</div>
}

export default Settings
