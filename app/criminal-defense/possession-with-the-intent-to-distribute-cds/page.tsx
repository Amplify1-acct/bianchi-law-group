import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey PWID Lawyers - Possession With Intent to Distribute | Bianchi Law Group',
  description: 'Possession with intent to distribute CDS under N.J.S.A. 2C:35-5 carries serious penalties in NJ. Our former prosecutors defend PWID charges statewide. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Possession With Intent to Distribute Defense" subtitle="Defending PWID Charges — Serious Attorneys for Serious Cases" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Bianchi Law Group is made up of former trial prosecutors and other &ldquo;of counsel&rdquo; attorneys who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey, including Possession with the Intent to Distribute CDS. Partners Robert A. Bianchi and David J. Bruno are both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys — a distinction held by less than 1% of all New Jersey lawyers.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                School Zone and Public Housing Enhancements
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Any person who violates N.J.S.A. 2C:35-5 by distributing, dispensing, or possessing with intent to distribute a controlled dangerous substance while in, on, or within 500 feet of the real property comprising a public housing facility, a public park, or a public building is guilty of a crime of the second degree — except that it is a crime of the third degree if the violation involved less than one ounce of marijuana. (N.J.S.A. 2C:35-7.1)
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Second-Degree Crime</strong> — 5 to 10 years in New Jersey State Prison</li>
                <li><strong>Third-Degree Crime</strong> — 3 to 5 years in New Jersey State Prison</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Sentencing Judge may also order fines and restitution as prescribed by 2C:43-3 for all convictions for Possession with the Intent to Distribute CDS in New Jersey.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Like in all of our cases, our experienced team of former prosecutors are there to ensure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial. That is what we do and what distinguishes us from other attorneys.
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
