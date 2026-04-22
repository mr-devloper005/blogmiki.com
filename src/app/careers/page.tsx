import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";

const roles = [
  { title: 'Editorial Product Designer', location: 'Remote', type: 'Full-time', level: 'Mid' },
  { title: 'Frontend Engineer (Reading Experience)', location: 'Remote / Hybrid', type: 'Full-time', level: 'Senior' },
  { title: 'Audience Growth Editor', location: 'Remote', type: 'Full-time', level: 'Mid' },
]

const benefits = [
  'Remote-first culture with flexible schedules',
  'Healthcare support and wellness stipend',
  'Annual writing + learning budget',
  'Quarterly editorial retreats',
]

export default function CareersPage() {
  return (
    <PageShell
      title="Careers"
      description={`Help us build a premium editorial product at ${SITE_CONFIG.name}.`}
      actions={
        <Button asChild>
          <Link href="/contact">Apply Now</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {roles.map((role) => (
            <Card key={role.title} className="border-slate-200 bg-white/95 shadow-[0_14px_32px_rgba(15,23,42,0.06)]">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="bg-indigo-50 text-indigo-700">{role.level}</Badge>
                  <Badge variant="outline">{role.type}</Badge>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">{role.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{role.location}</p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/contact">View Role</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Why {SITE_CONFIG.name}</h3>
            <p className="mt-2 text-sm text-slate-600">
              We are building a publication platform centered around calm reading, strong ideas, and modern editorial workflows.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                  {benefit}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
