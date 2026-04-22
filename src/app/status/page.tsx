import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const services = [
  { name: 'Web App', status: 'Operational' },
  { name: 'Article API', status: 'Operational' },
  { name: 'Search Index', status: 'Operational' },
]

const incidents = [
  { date: 'Mar 12, 2026', title: 'Article thumbnail delay', status: 'Resolved in 28 mins' },
  { date: 'Feb 22, 2026', title: 'Search indexing lag', status: 'Resolved in 41 mins' },
]

export default function StatusPage() {
  return (
    <PageShell
      title="System Status"
      description="Real-time uptime and service health."
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.name} className="border-slate-200 bg-white/95">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-slate-900">{service.name}</h2>
                <Badge className="mt-3 bg-emerald-50 text-emerald-700" variant="secondary">{service.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-slate-200 bg-white/95">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Incident History</h3>
            <div className="mt-4 space-y-3">
              {incidents.map((incident) => (
                <div key={incident.title} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="text-xs text-slate-500">{incident.date}</div>
                  <div className="text-sm font-medium text-slate-900">{incident.title}</div>
                  <div className="text-xs text-slate-600">{incident.status}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
