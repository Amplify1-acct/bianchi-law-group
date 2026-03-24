import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Restraining Order Defense Lawyers | Bianchi Law Group',
  description: 'Facing a final restraining order hearing in NJ? Our former prosecutors defend FRO proceedings and protect your rights. Free consultation: (862) 292-4442.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Restraining Order Defense Attorneys" subtitle="Certified Criminal Trial Attorneys Defending Your Rights at FRO Hearings" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                At the time a victim reports an alleged domestic incident, the police may give them the option to file a Temporary Restraining Order (TRO) against the defendant for immediate protection. The FRO hearing typically takes place within 10 days. These hearings are trials — and it can be very overwhelming and complicated if you do not have an attorney. The Bianchi Law Group is a law firm located in NJ made up of certified criminal trial attorneys who provide legal assistance in restraining order defense cases.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                What Happens at a Final Restraining Order Hearing?
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                At the FRO Hearing, the parties present evidence both as to the allegations of domestic violence and as to the need for injunctive relief, such as spousal or child support, custody or visitation, and the need for substance testing or counseling. The judge may order a risk assessment as well. In order for a Final Restraining Order to be entered, the judge must find there was a predicate act, a prior history of domestic violence, and that a reasonable person would be in fear for their safety based on the totality of the circumstances.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Consequences of a Final Restraining Order
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                If the defendant is found to have committed an act of domestic violence, a Final Restraining Order is entered and the aggressor is fingerprinted, and the order is registered in the state and national domestic violence database. An FRO is permanent. As established in New Jersey case law, courts must ensure defendants understand their rights before a final order is decided, including the right to retain legal counsel and notification of the severe collateral consequences — including mandatory inclusion in the New Jersey Domestic Violence Registry and a permanent ban on possessing firearms.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Only 250 of Over 98,000 NJ Lawyers Are Certified Criminal Trial Attorneys
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The New Jersey Supreme Court has a certification committee which classifies certain New Jersey Lawyers as Certified Trial Attorneys. Only 250 of over 98,000 lawyers are so designated. This should be an important factor in finding a New Jersey criminal defense attorney to represent you. The partners at The Bianchi Law Group — Robert Bianchi and David Bruno — are former prosecutors who have handled thousands of domestic violence investigations and trials and are both Certified Criminal Trial Attorneys.
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
