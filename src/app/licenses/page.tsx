import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const licenses = [
  { name: 'Next.js', description: 'MIT License - framework and routing runtime' },
  { name: 'React', description: 'MIT License - component rendering library' },
  { name: 'Tailwind CSS', description: 'MIT License - utility-first styling system' },
  { name: 'Lucide React', description: 'ISC License - icon set and component package' },
]

export default function LicensesPage() {
  return (
    <PageShell
      title="Licenses"
      description="Open source licenses and acknowledgements."
    >
      <Card className="border-slate-200 bg-white/95">
        <CardContent className="p-6 space-y-3">
          {licenses.map((license) => (
            <div key={license.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">{license.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{license.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  )
}
