import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Robert A. Bianchi, Esq. - Former Morris County Prosecutor | Bianchi Law Group',
  description: 'Robert A. Bianchi is a former Morris County Prosecutor, NJ Certified Criminal Trial Attorney, and national TV legal analyst on CNN, Fox News, HLN, and MSNBC.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Robert A. Bianchi, Esq." breadcrumb="Robert A. Bianchi, Esq." />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-shrink-0">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/07/bob_Bianchi.png" alt="Robert A. Bianchi, Esq." className="w-48 h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Robert A. Bianchi, Esq.</h2>
                <p className="text-red-700 font-semibold mb-4">Founding Partner</p>
                <div className="flex flex-wrap gap-2">
                  {['Former Morris County Prosecutor', 'NJ Certified Criminal Trial Attorney', 'National TV Legal Analyst', 'Super Lawyers'].map(c => (
                    <span key={c} className="bg-red-50 text-red-800 text-xs font-medium px-3 py-1 rounded-full border border-red-200">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">On May 10, 2007, Bob Bianchi was nominated by the Governor of the State of New Jersey to serve as the Morris County Prosecutor. Bob was unanimously confirmed by the New Jersey Senate Judiciary Committee and then unanimously confirmed by the New Jersey State Senate on June 18, 2007. He served as Morris County Prosecutor until February 8, 2013 — the chief law enforcement officer of Morris County with supervisory responsibility over every police department and municipal prosecutor in the county.</p>

            <p className="text-gray-700 mb-4 leading-relaxed">In 1997, Bob applied for and passed his examination to become certified by the New Jersey Supreme Court as a Certified Criminal Trial Attorney — a major accomplishment held by less than 1% of attorneys (approximately 250 attorneys) in New Jersey. He was re-certified in 2004, 2009, and 2014. He is the only attorney in the State of New Jersey who is a former governor-appointed County Prosecutor who is a certified criminal trial attorney and currently handles criminal defense cases.</p>

            <p className="text-gray-700 mb-4 leading-relaxed">Bob is aggressively fighting the government when his clients are charged with crimes. He has tried over 100 jury trials spanning murder, drug trafficking, fraud, domestic violence, and virtually every type of criminal offense. As Morris County Prosecutor, Bob managed a budget of over $11 million and a staff of approximately 170 people.</p>

            <p className="text-gray-700 mb-8 leading-relaxed">Nationally recognized as a legal analyst, Mr. Bianchi regularly appears on CNN, HLN, Fox News, MSNBC, and other major networks. It is vital in today&apos;s media age to have an attorney that knows how to handle complex media matters so that clients are properly represented in this very important environment.</p>

            <div className="bg-red-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Schedule a Free Consultation</h3>
              <p className="mb-4">Speak directly with Robert Bianchi about your case.</p>
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
