import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const docs = [
  { title: 'Publishing API', detail: 'Submit and update article drafts programmatically.' },
  { title: 'Search Endpoints', detail: 'Query articles, tags, and authors with faceted filters.' },
  { title: 'Webhooks', detail: 'Receive events for publish, archive, and editorial review states.' },
]

export default function DevelopersPage() {
  return (
    <PageShell
      title="Developers"
      description="Documentation and integration notes for teams building on top of our editorial stack."
      actions={
        <Button asChild>
          <Link href="/help">Developer Help</Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {docs.map((item) => (
          <Card key={item.title} className="border-slate-200 bg-white/95">
            <CardContent className="space-y-2 p-6">
              <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
