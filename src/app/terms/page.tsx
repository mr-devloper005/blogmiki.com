import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/site-config";

const sections = [
  { title: "Account Usage", body: "Keep your account secure and use the platform in line with editorial community standards." },
  {
    title: "Content Ownership",
    body: "You own your work and grant us a limited license to host and display it across product surfaces.",
  },
  { title: "Acceptable Use", body: "No spam, abuse, plagiarism, hate content, or unlawful behavior." },
  { title: "Service Availability", body: "We continuously improve reliability, but temporary outages may occur during maintenance." },
];

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      description={`The rules and guidelines for using ${SITE_CONFIG.name}.`}
    >
      <Card className="border-slate-200 bg-white/95">
        <CardContent className="space-y-4 p-6">
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
  );
}
