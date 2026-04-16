'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function HeroNewsletter() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className="mt-10 max-w-xl">
      <form
        className="flex flex-col gap-2 rounded-full border border-white/20 bg-white p-1.5 pl-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:flex-row sm:items-center"
        onSubmit={handleSearch}
      >
        <label htmlFor="hero-search" className="sr-only">
          Search articles
        </label>
        <Search className="hidden h-4 w-4 shrink-0 text-slate-400 sm:block" aria-hidden />
        <input
          id="hero-search"
          name="q"
          type="search"
          autoComplete="off"
          placeholder="Search articles…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Search
        </button>
      </form>
    </div>
  )
}
