import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Observation & Disclosure of Sexual Contact NJ Defense',
  description: 'Defense against charges related to observation or disclosure of sexual contact images in New Jersey. Call The Bianchi Law Group for experienced representation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Observation & Disclosure of Sexual Contact" breadcrumb="Observation & Disclosure" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              New Jersey law prohibits the observation of sexual contact without consent and the reproduction or disclosure of images of sexual contact. These charges — sometimes called voyeurism or revenge porn — are serious and require immediate legal representation.
            </p>
            <div className="bg-red-700 text-white rounded-lg p-6 text-center mt-6">
              <h3 className="text-xl font-bold mb-2">Free Consultation Available</h3>
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
