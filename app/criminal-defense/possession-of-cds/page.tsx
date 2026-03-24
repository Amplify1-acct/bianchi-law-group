import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Drug Possession Lawyers | Bianchi Law Group',
  description: 'Possession of CDS under N.J.S.A. 2C:35-10 is the most common charge in NJ courts. Our former prosecutors defend drug possession charges statewide. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Possession of CDS Defense Attorneys" subtitle="Defending the Most Common Drug Charge in New Jersey" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In New Jersey, Possession of Controlled Dangerous Substances (CDS) is probably the most common charge in Superior and Municipal courts across the State. Possession of CDS is codified at N.J.S.A. 2C:35-10. It refers to possession of drugs and narcotics, specifically those that cause physical and physiological symptoms. Drug crimes in our state are treated very seriously by the legislature and the courts, so if you&apos;re facing charges, you should have a New Jersey possession of CDS lawyer on your side.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                &ldquo;Possession&rdquo; as used in the Criminal Code signifies an intentional control and dominion of a proscribed narcotic drug accompanied by knowledge of its character. It is typically considered a third-degree offense, and this means a person could face years in prison for a conviction.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                The Advantage of Working With Former Prosecutors
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Working with former prosecutors can give you a major advantage in your case. We&apos;ve seen how law enforcement officers handle drug-related crimes, and we know the mistakes and overreach they frequently engage in. More importantly, we&apos;ve prosecuted cases like this before. As probably the most common criminal charge under New Jersey law, this means we&apos;ve handled countless cases related to these allegations. We know how the system works. We understand prosecutorial strategies. We can use this knowledge to help create a strategic defense on your behalf.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Do Not Simply Accept a Plea Deal
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The simple fact is that plea negotiations are overused in our criminal justice system. While they certainly have their place, far too many people accept pleas so that they can move on with their lives. This helps explain why over 90% of New Jersey drug charges are resolved by plea negotiations rather than trial. At The Bianchi Law Group, we believe every case deserves a thorough defense — not just a quick resolution. The Sentencing Judge may also order fines and restitution as prescribed by N.J.S.A. 2C:43-3 for all convictions for Possession of CDS.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Certified Criminal Trial Attorneys
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Only 250 of over 98,000 lawyers (less than 1%) are designated as certified criminal trial attorneys by the New Jersey Supreme Court. Partners Robert A. Bianchi and David J. Bruno both hold this distinction. Like in all of our cases, our experienced team are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or fair plea bargain, we will not hesitate to select a jury and take the case to trial.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
                <a href="tel:8622924442" style={{ display: 'inline-block', background: '#fff', color: '#a61c23', fontWeight: 700, padding: '0.75rem 2rem', borderRadius: 6 }}>
                  Call (862) 292-4442
                </a>
              </div>
            </div>
            <div className="lg:col-span-1"><ContactSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
