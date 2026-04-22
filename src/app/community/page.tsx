import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const spaces = [
  { name: 'Writers Circle', activity: 'Weekly prompts and peer feedback sessions.' },
  { name: 'Reader Room', activity: 'Monthly annotation clubs around featured long-form stories.' },
  { name: 'Craft Lab', activity: 'Format experiments, headline clinics, and publishing workflows.' },
]

export default function CommunityPage() {
  return (
    <PageShell
      title="Community"
      description="A focused space for readers and writers to discuss ideas, process, and publishing craft."
      actions={
        <Button asChild>
          <Link href="/contact">Join the Community</Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {spaces.map((space) => (
          <Card key={space.name} className="border-slate-200 bg-white/95">
            <CardContent className="space-y-2 p-6">
              <h2 className="text-lg font-semibold text-slate-900">{space.name}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{space.activity}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
