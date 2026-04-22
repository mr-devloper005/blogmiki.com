import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Essential Cookies', body: 'Required for authentication, session safety, and core page functionality.' },
  { title: 'Analytics Cookies', body: 'Used in aggregated form to understand reading behavior and improve experience.' },
  { title: 'Preference Cookies', body: 'Remember your local preferences such as theme state and saved interactions.' },
  { title: 'Control', body: 'You can manage cookie choices from browser settings at any time.' },
]

export default function CookiesPage() {
  return (
    <PageShell
      title="Cookie Policy"
      description="Details about the cookies we use."
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
