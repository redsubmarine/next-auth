'use client'

import { logout } from '@/actions/logout'
import { useCurrentUser } from '@/hooks/use-current-user'
import { FunctionComponent } from 'react'

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
  const user = useCurrentUser()

  const onClick = () => {
    logout()
  }
  return (
    <div className="bg-white p-10 rounded-xl">
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  )
}

export default Settings
