import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'

const topics = [
  { title: 'Getting Started', description: 'Create an account, set up your profile, and publish your first article.' },
  { title: 'Writing & Publishing', description: 'Draft, preview, and publish long-form posts with clean formatting.' },
  { title: 'Search & Discovery', description: 'Use categories and keywords to quickly find useful stories.' },
]

export default function HelpPage() {
  return (
    <PageShell
      title="Help Center"
      description="Answers, writing guides, and publishing best practices."
      actions={
        <Button asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <Card key={topic.title} className="border-slate-200 bg-white/95 transition-transform hover:-translate-y-1">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-slate-900">{topic.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-slate-200 bg-white/95">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">FAQ</h3>
            <Accordion type="single" collapsible className="mt-4">
              {mockFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
