import { auth, signOut } from '@/auth'
import { FunctionComponent } from 'react'

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = async () => {
  const session = await auth()
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}

export default Settings
