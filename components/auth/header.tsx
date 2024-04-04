import { Poppins } from 'next/font/google'
import { FunctionComponent } from 'react'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

interface HeaderProps {
  label: string
}

const Header: FunctionComponent<HeaderProps> = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">🔐 Auth</h1>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}

export default Header
