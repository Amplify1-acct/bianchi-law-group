import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'David J. Bruno, Esq. - Partner | Bianchi Law Group',
  description: 'David J. Bruno is a Partner at The Bianchi Law Group, LLC. A former prosecutor with extensive courtroom experience, David regularly appears on national tel',
}

export default function Page() {
  return (
    <>
      <PageHero title="David J. Bruno, Esq." breadcrumb="David J. Bruno, Esq." />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-shrink-0">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/07/David-J_team.png" alt="David J. Bruno, Esq." className="w-48 h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">David J. Bruno, Esq.</h2>
                <p className="text-red-700 font-semibold mb-4">Partner</p>
                <span className="bg-red-50 text-red-800 text-xs font-medium px-3 py-1 rounded-full border border-red-200">Former Prosecutor</span>
              </div>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed">David J. Bruno is a Partner at The Bianchi Law Group, LLC. A former prosecutor with extensive courtroom experience, David regularly appears on national television as a legal analyst on Fox News, Fox Business, and HLN. His background as a prosecutor gives him a strategic advantage when defending clients against criminal charges throughout New Jersey.</p>
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
