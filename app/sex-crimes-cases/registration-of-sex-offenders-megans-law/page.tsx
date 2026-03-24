import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Megan's Law Registration Defense NJ",
  description: 'New Jersey Megan Law registration requirements apply to individuals convicted of certain sex offenses. Our attorneys help clients challenge improper registration.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Megan's Law" breadcrumb="Megan's Law" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              New Jersey's Megan's Law requires individuals convicted of certain sex offenses to register with law enforcement. Our attorneys help clients understand their obligations and challenge improper registration requirements.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Can Help</h2>
              <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Tier classification challenges</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Registration requirements</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Community notification defense</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Termination of registration eligibility</span></li>
              </ul>
            </div>
            <div className="bg-red-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Free Consultation Available</h3>
              <p className="mb-4">Speak with a former prosecutor about your case today.</p>
              <a href="tel:8622924442" className="inline-block bg-white text-red-700 font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
                Call (862) 292-4442
              </a>
            </div>
          </div>
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </>
  )
}
