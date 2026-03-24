import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Crisis Management Lawyers - The Bianchi Law Group',
  description: 'The Bianchi Law Group provides crisis management legal services for individuals and businesses facing high-stakes legal and media situations in New Jersey.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Crisis Management" breadcrumb="Crisis Management" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              When facing a legal and media crisis, you need attorneys who have been on both sides of the aisle — in the courtroom and in front of the cameras. The Bianchi Law Group&apos;s crisis management team is uniquely positioned to help individuals and businesses navigate and de-escalate high-stakes situations.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              It is vital in today&apos;s media age to have an attorney who knows how to handle complex media matters so that clients are properly represented in this very important environment. With founding partner Robert Bianchi&apos;s extensive experience as both a prosecutor and national TV legal analyst, the firm has the skills to manage both the legal and public relations dimensions of a crisis.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Crisis Management Services</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Pre-charge criminal investigation defense',
                  'Media strategy and spokesperson services',
                  'Corporate criminal defense and compliance',
                  'Government investigations and grand jury representation',
                  'Executive protection during criminal investigations',
                  'Coordination with PR firms on messaging'
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Contact Us Immediately</h3>
              <p className="mb-4">Crisis situations require immediate legal attention. Call now.</p>
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
