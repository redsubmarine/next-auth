'use client'

import { logout } from '@/actions/logout'
import { useSession } from 'next-auth/react'
import { FunctionComponent } from 'react'

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
  const session = useSession()

  const onClick = () => {
    logout()
  }
  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <button onClick={onClick} type="submit">
          Sign out
        </button>
      </form>
    </div>
  )
}

export default Settings
