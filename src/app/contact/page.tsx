import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

function getTone(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f3f4f6] text-slate-900',
      panel: 'border border-slate-200 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.06)]',
      soft: 'border border-slate-200 bg-white/90',
      muted: 'text-slate-600',
      action: 'bg-indigo-600 text-white hover:bg-indigo-500',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#f3f4f6] text-slate-900',
      panel: 'border border-slate-200 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.06)]',
      soft: 'border border-slate-200 bg-white/90',
      muted: 'text-slate-600',
      action: 'bg-indigo-600 text-white hover:bg-indigo-500',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#f3f4f6] text-slate-900',
      panel: 'border border-slate-200 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.06)]',
      soft: 'border border-slate-200 bg-white/90',
      muted: 'text-slate-600',
      action: 'bg-indigo-600 text-white hover:bg-indigo-500',
    }
  }
  return {
    shell: 'bg-[#f3f4f6] text-slate-900',
    panel: 'border border-slate-200 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.06)]',
    soft: 'border border-slate-200 bg-white/90',
    muted: 'text-slate-600',
    action: 'bg-indigo-600 text-white hover:bg-indigo-500',
  }
}

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const tone = getTone(productKind)
  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business surface live quickly.' },
          { icon: Phone, title: 'Partnership support', body: 'Talk through bulk publishing, local growth, and operational setup questions.' },
          { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or category lane? We can shape the directory around it.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Editorial submissions', body: 'Pitch essays, columns, and long-form ideas that fit the publication.' },
            { icon: Mail, title: 'Newsletter partnerships', body: 'Coordinate sponsorships, collaborations, and issue-level campaigns.' },
            { icon: Sparkles, title: 'Contributor support', body: 'Get help with voice, formatting, and publication workflow questions.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Creator collaborations', body: 'Discuss gallery launches, creator features, and visual campaigns.' },
              { icon: Sparkles, title: 'Licensing and use', body: 'Reach out about usage rights, commercial requests, and visual partnerships.' },
              { icon: Mail, title: 'Media kits', body: 'Request creator decks, editorial support, or visual feature placement.' },
            ]
          : [
              { icon: Bookmark, title: 'Collection submissions', body: 'Suggest resources, boards, and links that deserve a place in the library.' },
              { icon: Mail, title: 'Resource partnerships', body: 'Coordinate curation projects, reference pages, and link programs.' },
              { icon: Sparkles, title: 'Curator support', body: 'Need help organizing shelves, collections, or profile-connected boards?' },
            ]

  return (
    <div className={`min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Contact {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">A faster support lane for writers and readers.</h1>
            <p className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${tone.muted}`}>Tell us what you are trying to publish, fix, or launch. We route requests to the right team so you get focused help without generic responses.</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`rounded-2xl p-5 sm:p-6 ${tone.soft}`}>
                  <lane.icon className="h-5 w-5 text-indigo-600" />
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[1.75rem] p-6 sm:p-7 ${tone.panel}`}>
            <h2 className="text-2xl font-semibold text-slate-900">Send a message</h2>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" placeholder="Your name" />
              <input className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" placeholder="What do you need help with?" />
              <textarea className="min-h-[180px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" placeholder="Share the full context so we can respond with the right next step." />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${tone.action}`}>Send message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
