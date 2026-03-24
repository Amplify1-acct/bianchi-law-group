import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Burglary Lawyers - The Bianchi Law Group',
  description: 'Facing burglary charges in NJ? Our team of former prosecutors provides aggressive criminal defense. Free consultation: (862) 292-4442.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Burglary Defense Attorneys" breadcrumb="Burglary" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At The Bianchi Law Group, our dedicated team of criminal defense lawyers knows what you&apos;re up against. Facing indictable crimes is a scary situation that could result in years behind bars. Partners Robert A. Bianchi and David J. Bruno are both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys — a distinction held by less than 1% of all New Jersey lawyers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">New Jersey Burglary Law (N.J.S.A. 2C:18-2)</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Under N.J.S.A. 2C:18-2, a person is guilty of burglary if, with a purpose to commit an offense, they:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Enter a research facility, structure, or separately secured portion thereof unless it was open to the public or the actor was licensed to enter</li>
              <li>Surreptitiously remain in a structure knowing they are not licensed or privileged to do so</li>
              <li>Trespass in or upon utility company property where public notice prohibiting trespass is given</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Burglary Penalties in New Jersey</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Sentencing guidelines for burglary are among the most strict outside of homicide cases:</p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">▸</span><span><strong>Second Degree Burglary</strong> — If the actor inflicts or threatens bodily injury, or is armed with explosives or a deadly weapon. Carries 5–10 years in prison.</span></li>
                <li className="flex items-start gap-2"><span className="text-red-700 font-bold mt-1">▸</span><span><strong>Third Degree Burglary</strong> — All other burglary. Carries 3–5 years in prison.</span></li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Defend Burglary Charges</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <ul className="space-y-2 text-gray-700">
                {['Challenging unlawful entry evidence', 'Disputing intent and purpose', 'Distinguishing burglary from trespass', 'Challenging eyewitness identification', 'Suppressing illegally obtained evidence', 'Negotiating reduced charges'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Free Consultation Available</h3>
              <p className="mb-4">Speak with a former prosecutor about your burglary case today.</p>
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
