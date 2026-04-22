'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type LoginFormProps = {
  actionClassName: string
}

export function LoginForm({ actionClassName }: LoginFormProps) {
  const { login, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password) {
      toast({
        title: 'Missing fields',
        description: 'Enter your email and password to continue.',
        variant: 'destructive',
      })
      return
    }
    await login(email.trim(), password)
    toast({
      title: 'Signed in',
      description: 'Your session is saved on this device.',
    })
    router.push('/articles')
    router.refresh()
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
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
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        className="editorial-input h-12 rounded-xl px-4 text-sm"
      />
      <Button type="submit" disabled={isLoading} className={`editorial-button h-12 rounded-full text-sm font-semibold ${actionClassName}`}>
        {isLoading ? 'Signing in…' : 'Sign in'}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We keep you signed in locally on this browser for a smoother reading experience.
      </p>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <Link href="/forgot-password" className="hover:underline">
          Forgot password?
        </Link>
        <Link href="/register" className="font-semibold text-foreground hover:underline">
          Create account
        </Link>
      </div>
    </form>
  )
}
