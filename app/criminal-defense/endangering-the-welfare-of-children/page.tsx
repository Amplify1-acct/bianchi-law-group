import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Endangering Welfare of Children Defense NJ',
  description: 'Endangering the welfare of a child under N.J.S.A. 2C:24-4 covers a broad range of conduct from physical abuse to internet crimes involving minors. Our attorneys',
}

export default function Page() {
  return (
    <>
      <PageHero title="Child Welfare Charges" breadcrumb="Child Welfare Charges" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Endangering the welfare of a child under N.J.S.A. 2C:24-4 covers a broad range of conduct from physical abuse to internet crimes involving minors. Our attorneys provide a thorough defense.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Can Help</h2>
              <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>DCPP investigation defense</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Internet crimes involving minors</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Physical abuse charge defense</span></li>
              <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">✓</span><span>Pornography-related charges</span></li>
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
