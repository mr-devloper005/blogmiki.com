import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const editorialTeam = [
  { name: 'Aarav Kapoor', role: 'Editor in Chief', focus: 'Long-form features and narrative direction.' },
  { name: 'Mira Shah', role: 'Managing Editor', focus: 'Publishing cadence, briefs, and quality checks.' },
  { name: 'Rohan Iyer', role: 'Senior Writer', focus: 'Product essays, workflow systems, and case studies.' },
  { name: 'Nia Fernandes', role: 'Visual Editor', focus: 'Image curation, cover art, and reading layouts.' },
]

export default function TeamPage() {
  return (
    <PageShell
      title="Team"
      description="The editorial group behind our weekly stories, interviews, and deep dives."
      actions={
        <Button asChild>
          <Link href="/careers">View Careers</Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-2">
        {editorialTeam.map((member) => (
          <Card key={member.name} className="border-slate-200 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <CardContent className="space-y-3 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{member.role}</p>
              <h2 className="text-xl font-semibold text-slate-900">{member.name}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{member.focus}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
