import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Appellate Lawyers - The Bianchi Law Group',
  description: 'Were you convicted of a crime and need help with filing an appeal? Contact our New Jersey appellate lawyers today for a free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Appellate Lawyers" breadcrumb="Appeals" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Were you convicted of a crime and need help with filing an appeal? The former prosecutors at The Bianchi Law Group, LLC have collective experience at every level of the New Jersey Judiciary — from municipal court to the New Jersey Supreme Court. We&apos;ll review your case and help you understand all your options.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens After an Appeal?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              These are complex potentialities. An overturned conviction may result in a person&apos;s release from incarceration and clearance of their criminal record. However, unless the Appellate Division found the defendant not guilty or the charges were dismissed, the government may opt to retry the case. A reduced sentence is always beneficial — but there&apos;s no guarantee that such a reduction will be significant. This is why you should always work with New Jersey appeals lawyers when trying to navigate the system.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Grounds for Appeal in New Jersey</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <ul className="space-y-2 text-gray-700">
                {[
                  'Ineffective assistance of trial counsel',
                  'Prosecutorial misconduct',
                  'Improper admission or exclusion of evidence',
                  'Incorrect jury instructions',
                  'Newly discovered evidence',
                  'Illegal or excessive sentence',
                  'Constitutional violations during trial or investigation'
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Free Consultation Available</h3>
              <p className="mb-4">Contact us today to schedule your free consultation.</p>
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
