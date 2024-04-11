'use client'

import CardWrapper from '@/components/auth/card-wrapper'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FunctionComponent, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { NewPasswordSchema } from '@/schemas'
import { newPassword } from '@/actions/new-password'
import { useSearchParams } from 'next/navigation'

interface NewPasswordFormProps {}

const NewPasswordForm: FunctionComponent<NewPasswordFormProps> = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>()
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError(undefined)
    setSuccess(undefined)
    // login(values); web server 로 요청해서 db 직접 붙던가
    // 또는 axios.post("/login", values) 로 api 쏘던가.
    startTransition(async () => {
      try {
        const data = await newPassword(values, token)
        setError(data?.error)
        setSuccess(data?.success)
      } catch (error) {
        setError('Something went wrong')
      }
    })
  }

  return (
    <CardWrapper headerLabel="Enter a new password" backButtonLabel="Back to login" backButtonHref="/auth/login">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" disabled={isPending} className="w-full">
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default NewPasswordForm
