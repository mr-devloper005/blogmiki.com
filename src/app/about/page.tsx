import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-config'

const milestones = [
  { label: 'Published essays', value: '2,400+' },
  { label: 'Monthly readers', value: '180k' },
  { label: 'Avg. read depth', value: '6.2 min' },
]

const principles = [
  {
    title: 'Clarity over noise',
    description: 'Every page is designed for reading comfort and signal-first browsing.',
  },
  {
    title: 'Editorial quality',
    description: 'We prioritize useful writing, clean structure, and trustworthy curation.',
  },
  {
    title: 'Human perspective',
    description: 'Writers and editors shape the feed, not engagement tricks.',
  },
]

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description="An editorial-first publishing studio for thoughtful stories, practical ideas, and modern internet culture."
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/team">Meet the Team</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Editorial</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-slate-200 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
          <CardContent className="space-y-5 p-6 sm:p-8">
            <Badge className="w-fit bg-indigo-50 text-indigo-700">Editorial Mission</Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Build a calmer, smarter reading space on the web.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {SITE_CONFIG.name} exists to publish high-quality articles that blend craft, product thinking, and real
              field experience. We believe good writing should be easy to find and enjoyable to read on every device.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {milestones.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {principles.map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white/95">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
