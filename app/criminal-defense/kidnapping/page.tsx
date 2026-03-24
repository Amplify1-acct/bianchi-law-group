import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Kidnapping Lawyers | Bianchi Law Group',
  description: 'Kidnapping under N.J.S.A. 2C:13-1 is punishable by 15-30 years in NJ. Our certified former prosecutors defend kidnapping charges statewide. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Kidnapping Defense Attorneys" subtitle="Defending One of New Jersey's Most Serious Criminal Charges" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In New Jersey, Kidnapping is one of the most serious crimes, codified by N.J.S.A. 2C:13-1 and punishable up to life in prison under certain circumstances. The Bianchi Law Group is made up of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey, including kidnapping. Partner David J. Bruno prosecuted kidnapping cases as part of the Major Crimes Unit at the Morris County Prosecutor&apos;s Office.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Kidnapping Penalties in New Jersey
              </h2>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>First Degree</strong> — 15 to 30 years in New Jersey State Prison</li>
                <li><strong>Reduced to Second Degree</strong> — If the actor releases the victim unharmed and in a safe place prior to apprehension: up to 10 years in New Jersey State Prison</li>
                <li><strong>Life Sentence</strong> — When the victim is 16 years or under and the actor committed sexual crimes against that victim</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Sentencing Judge may also order fines and restitution as prescribed by 2C:43-3 and possibly penalties assessed against sex offenders as prescribed by 2C:14-10 (if applicable) for all convictions for Kidnapping in New Jersey.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Certified Criminal Trial Attorneys — We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Only 250 of over 98,000 lawyers (less than 1%) are designated as certified criminal trial attorneys by the New Jersey Supreme Court. This should be a crucial factor in finding a New Jersey criminal defense attorney to represent you. Like in all of our cases, our experienced team of former prosecutors are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial.
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
