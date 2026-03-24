import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Forgery Defense Lawyers | Bianchi Law Group',
  description: 'Facing forgery charges in NJ? Our former prosecutors — including David Bruno who prosecuted these cases — defend forgery charges statewide. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Forgery Defense Attorneys" subtitle="Former Prosecutors Defending Forgery and Fraud Charges" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Bianchi Law Group is made up of former trial prosecutors and other &ldquo;of counsel&rdquo; attorneys who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey, including Forgery. Partner David J. Bruno prosecuted forgery cases as part of the Fraud and White Collar Crime Unit at the Morris County Prosecutor&apos;s Office, giving our team unique insider knowledge of how these cases are built and how to dismantle them.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Forgery Penalties in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The penalties for Forgery Crimes in New Jersey depend on the circumstances. Forgery can be charged as a second, third, or fourth-degree crime depending on the type of document involved and the intent behind the forgery:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Second Degree</strong> — 5 to 10 years in New Jersey State Prison</li>
                <li><strong>Third Degree</strong> — 3 to 5 years in New Jersey State Prison</li>
                <li><strong>Fourth Degree</strong> — Up to 18 months in New Jersey State Prison</li>
              </ul>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Certified Criminal Trial Attorneys
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Founding Partner Robert A. Bianchi served as the Morris County Prosecutor, overseeing all white collar and fraud prosecutions in the county. He is one of only approximately 250 Certified Criminal Trial Attorneys in New Jersey — a distinction held by less than 1% of all lawyers in the state. Like in all of our cases, our experienced team of former prosecutors are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial.
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
