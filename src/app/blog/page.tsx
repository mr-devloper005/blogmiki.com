import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const latestNotes = [
  {
    title: 'How small writing rituals improve product thinking',
    category: 'Editorial',
    summary: 'A practical workflow for teams who want clearer decisions and better communication.',
  },
  {
    title: 'Designing article pages people actually finish',
    category: 'Design',
    summary: 'Typography, spacing, and rhythm choices that increase completion without clickbait.',
  },
  {
    title: 'The case for slower publishing',
    category: 'Strategy',
    summary: 'Why quality frequency often beats quantity when trust is your main growth engine.',
  },
]

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      description="Short editorial notes from our writers, designers, and publishing team."
      actions={
        <Button asChild>
          <Link href="/articles">Read All Articles</Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {latestNotes.map((post) => (
          <Card key={post.title} className="border-slate-200 bg-white/95 transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]">
            <CardContent className="space-y-3 p-6">
              <Badge variant="secondary" className="w-fit bg-indigo-50 text-indigo-700">
                {post.category}
              </Badge>
              <h2 className="text-lg font-semibold text-slate-900">{post.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{post.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
