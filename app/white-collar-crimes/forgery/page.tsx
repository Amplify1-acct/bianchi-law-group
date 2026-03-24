import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Forgery Defense Attorney NJ',
  description: 'Forgery charges in New Jersey under N.J.S.A. 2C:21-1 are serious felony-level offenses that can result in years in prison. Our criminal defense attorneys challe',
}

export default function Page() {
  return (
    <>
      <PageHero title="Forgery" breadcrumb="Forgery" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Forgery charges in New Jersey under N.J.S.A. 2C:21-1 are serious felony-level offenses that can result in years in prison. Our criminal defense attorneys challenge the elements of forgery charges and protect your rights.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Can Help</h2>
              <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Challenging intent to defraud</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Document authentication issues</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Distinguishing forgery from fraud</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Negotiating reduced charges</span></li>
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
