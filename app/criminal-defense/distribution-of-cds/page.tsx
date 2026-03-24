import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Drug Distribution Lawyers | Bianchi Law Group',
  description: 'Distribution of CDS under N.J.S.A. 2C:35-5 can be a first-degree crime in NJ. Our former prosecutors defend drug distribution charges statewide. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Distribution of CDS Defense Attorneys" subtitle="Defending Drug Distribution Charges Across New Jersey" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                N.J.S.A. 2C:35-5 criminalizes the manufacturing, distributing, dispensing, or possessing with intent to manufacture, distribute or dispense a controlled dangerous substance, controlled substance analog, or counterfeit controlled dangerous substance. The Bianchi Law Group is made up of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey, including Distribution of CDS.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Penalties Based on Drug Type and Quantity
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The penalties for the Distribution of Controlled Dangerous Substances depend on the type of drug at issue and may even depend on the place where the distribution or possession took place:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Heroin or cocaine — 5 ounces or more</strong>: First-degree crime. Court must set parole ineligibility between one-third and one-half of the sentence. Fine up to $500,000</li>
                <li><strong>Heroin or cocaine — one-half ounce or more but less than 5 ounces</strong>: Second-degree crime (5–10 years)</li>
                <li><strong>School Zone / Public Housing Enhancement</strong>: Distribution within 500 feet of a public housing facility, public park, or public building is a second-degree crime (N.J.S.A. 2C:35-7.1)</li>
                <li><strong>MDMA, GHB, Flunitrazepam</strong>: Subject to drug enforcement and demand reduction penalty of twice the amount otherwise applicable</li>
              </ul>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Certified Criminal Trial Attorneys
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Partners Robert A. Bianchi and David J. Bruno are both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys — a distinction held by less than 1% of all New Jersey lawyers. Like in all of our cases, our experienced team of former prosecutors are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers will not hesitate to select a jury and take the case to trial.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
                <a href="tel:8622924442" style={{ display: 'inline-block', background: '#fff', color: '#a61c23', fontWeight: 700, padding: '0.75rem 2rem', borderRadius: 6 }}>Call (862) 292-4442</a>
              </div>
            </div>
            <div className="lg:col-span-1"><ContactSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
