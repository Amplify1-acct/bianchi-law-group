import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'David J. Bruno, Esq. - Certified Criminal Trial Attorney | Bianchi Law Group',
  description: 'David J. Bruno is a Certified Criminal Trial Attorney, former Morris County prosecutor, and national TV legal analyst on Fox News, Fox Business, and HLN.',
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
                <div className="flex flex-wrap gap-2">
                  {['NJ Certified Criminal Trial Attorney', 'Former Morris County Prosecutor', 'National TV Legal Analyst', 'Certified Daring Way Facilitator'].map(c => (
                    <span key={c} className="bg-red-50 text-red-800 text-xs font-medium px-3 py-1 rounded-full border border-red-200">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">In 2007, David joined the Morris County Prosecutor&apos;s office as an assistant prosecutor, where he gained invaluable experience building, prosecuting, and trying a wide variety of cases. His experience covered the Major Crimes Unit (homicide, attempted homicide, aggravated manslaughter, police shootings, robbery, kidnapping, carjacking, vehicular homicide) and the Vehicular Homicide and Arson Unit.</p>

            <p className="text-gray-700 mb-4 leading-relaxed">David is a frequent legal commentator on Fox News, Fox Business Channel, HLN, UPN9, and Investigation Discovery, commenting on criminal law cases, terrorism, police shootings, legal decisions, and congressional investigations.</p>

            <p className="text-gray-700 mb-4 leading-relaxed">David also believes that legal excellence and tenacity without compassion is an imbalanced approach. He understands there is trauma attached to being charged with a crime and his philosophy is to address not only his client&apos;s legal concerns but also personal issues that may have contributed to or arisen from these legal challenges. David is a certified Daring Way Facilitator and has completed Dr. Bren&eacute; Brown&apos;s national training in San Antonio, Texas.</p>

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
