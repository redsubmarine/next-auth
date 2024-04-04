const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <nav className="bg-red-500 text-white">This is an auth navBar</nav>
      {children}
    </div>
  )
}

export default AuthLayout
