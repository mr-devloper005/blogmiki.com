'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type RegisterFormProps = {
  actionClassName: string
}

export function RegisterForm({ actionClassName }: RegisterFormProps) {
  const { signup, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password) {
      toast({
        title: 'Missing fields',
        description: 'Add your name, email, and a password to create an account.',
        variant: 'destructive',
      })
      return
    }
    await signup(name.trim(), email.trim(), password)
    toast({
      title: 'Welcome aboard',
      description: 'Your account is saved on this device.',
    })
    router.push('/articles')
    router.refresh()
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <Input
        name="name"
        autoComplete="name"
        placeholder="Full name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        className="editorial-input h-12 rounded-xl px-4 text-sm"
      />
      <Input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        className="editorial-input h-12 rounded-xl px-4 text-sm"
      />
      <Input
        type="password"
        name="password"
        autoComplete="new-password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        className="editorial-input h-12 rounded-xl px-4 text-sm"
      />
      <Button type="submit" disabled={isLoading} className={`editorial-button h-12 rounded-full text-sm font-semibold ${actionClassName}`}>
        {isLoading ? 'Creating account…' : 'Create account'}
      </Button>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Already have an account?</span>
        <Link href="/login" className="font-semibold text-foreground hover:underline">
          Sign in
        </Link>
      </div>
    </form>
  )
}
