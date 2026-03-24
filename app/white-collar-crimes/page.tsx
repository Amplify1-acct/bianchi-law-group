import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'White Collar Crime Defense Lawyers NJ',
  description: 'White collar crimes can result in federal prosecution, massive fines, and decades in prison. Our former prosecutors defend against complex financial crime allegations.',
}

export default function Page() {
  return (
    <>
      <PageHero title="White Collar Crimes" breadcrumb="White Collar Crimes" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              White collar crimes can result in federal prosecution, massive fines, asset forfeiture, and decades in prison. The Bianchi Law Group&apos;s former prosecutors have the experience to defend against complex financial crime allegations.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">White Collar Crimes We Defend</h2>
              <ul className="space-y-2 text-gray-700">
                {['Wire Fraud', 'Securities Fraud', 'Insurance Fraud', 'Tax Evasion', 'Money Laundering', 'Embezzlement', 'RICO Violations', 'Credit Card Fraud', 'Forgery'].map(c => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
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
