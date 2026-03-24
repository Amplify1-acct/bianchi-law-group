import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Criminal & White Collar Investigation Lawyers - The Bianchi Law Group',
  description: 'Being targeted in a criminal or white collar investigation in New Jersey? Our former prosecutors defend clients from investigation through trial. Call now.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Criminal & White Collar Investigations" breadcrumb="Criminal Investigations" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you are the target or subject of a criminal or white collar investigation in New Jersey, you need experienced legal representation immediately — before charges are ever filed. The former prosecutors at The Bianchi Law Group know exactly how investigations are built and how to intervene early to protect your rights.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Investigations We Handle</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-gray-700">
                {[
                  'Federal grand jury investigations',
                  'State grand jury investigations',
                  'FBI and federal agency investigations',
                  'Securities fraud investigations (SEC)',
                  'Healthcare fraud investigations',
                  'Public corruption investigations',
                  'Money laundering investigations',
                  'RICO investigations',
                  'State police and county prosecutor investigations'
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Do Not Wait — Contact Us Now</h3>
              <p className="mb-4">Early intervention is critical. Call for a free consultation.</p>
              <a href="tel:8622924442" className="inline-block bg-white text-red-700 font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
                Call (862) 292-4442
              </a>
            </div>
          </div>
          <div className="lg:col-span-1"><ContactSidebar /></div>
        </div>
      </div>
    </>
  )
}
