'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FunctionComponent } from 'react'

interface BackButtonProps {
  label: string
  href: string
}

const BackButton: FunctionComponent<BackButtonProps> = ({ label, href }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}

export default BackButton
