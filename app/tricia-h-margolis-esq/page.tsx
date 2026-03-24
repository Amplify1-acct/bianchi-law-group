import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Tricia H. Margolis, Esq. - Associate Attorney | Bianchi Law Group',
  description: 'Tricia H. Margolis, Esq. is an Associate Attorney at The Bianchi Law Group, LLC, dedicated to defending the rights of individuals accused of crimes in New ',
}

export default function Page() {
  return (
    <>
      <PageHero title="Tricia H. Margolis, Esq." breadcrumb="Tricia H. Margolis, Esq." />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-shrink-0">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/06/Tricia.png" alt="Tricia H. Margolis, Esq." className="w-48 h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Tricia H. Margolis, Esq.</h2>
                <p className="text-red-700 font-semibold mb-4">Associate Attorney</p>
                <span className="bg-red-50 text-red-800 text-xs font-medium px-3 py-1 rounded-full border border-red-200">Criminal Defense Attorney</span>
              </div>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed">Tricia H. Margolis, Esq. is an Associate Attorney at The Bianchi Law Group, LLC, dedicated to defending the rights of individuals accused of crimes in New Jersey. She provides personalized, attentive legal counsel and works tirelessly to achieve favorable outcomes for her clients.</p>
            <div className="bg-red-700 text-white rounded-lg p-6 text-center">
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
