import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Data We Collect', body: 'Account details, article activity signals, and the content you choose to publish.' },
  { title: 'How We Use Data', body: 'To improve reading relevance, maintain safety, and optimize publishing performance.' },
  { title: 'Your Choices', body: 'You can update profile details, manage communication preferences, and request account deletion.' },
  { title: 'Retention', body: 'We retain data only as long as needed for service reliability, legal obligations, and support.' },
]

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How we collect, use, and protect your information."
    >
      <Card className="border-slate-200 bg-white/95">
        <CardContent className="p-6 space-y-4">
          <p className="text-xs text-muted-foreground">Last updated: March 16, 2026</p>
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">{section.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{section.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  )
}
