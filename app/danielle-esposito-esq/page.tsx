import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Danielle M. Esposito, Esq. | Bianchi Law Group',
  description: 'Danielle M. Esposito is a former Essex County prosecutor with experience in adult trial, mental health court, and drug court. Now defending clients at Bianchi Law Group.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Danielle M. Esposito, Esq." subtitle="Former Essex County Prosecutor | Criminal Defense Attorney" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: '0.25rem' }}>Danielle M. Esposito, Esq.</h2>
                  <p style={{ color: '#a61c23', fontWeight: 600, marginBottom: '1rem' }}>Associate Attorney</p>
                  <div className="flex flex-wrap gap-2">
                    {['Former Essex County Prosecutor', 'Adult Trial Team', 'Mental Health Court', 'Drug Court'].map(c => (
                      <span key={c} className="bg-red-50 text-red-800 text-xs font-medium px-3 py-1 rounded-full border border-red-200">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Danielle M. Esposito brings extensive prosecutorial experience to The Bianchi Law Group. As a former prosecutor with the Essex County Prosecutor&apos;s Office, she gained experience with every stage of a criminal case — from pretrial detention hearings to jury trials. She was one of the first prosecutors in the State to handle pretrial detention hearings.
              </p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Prosecutorial Experience
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '0.5rem' }}>
                Danielle&apos;s prosecutorial experience covered multiple specialized units:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Adult Trial Team</strong> — Investigated and prosecuted aggravated assault, attempted murder, robbery, theft, CDS offenses, carjacking, terroristic threats, assault by auto, fraud, burglary, criminal restraint, and other offenses</li>
                <li><strong>Mental Health Court</strong> — Worked in the prosecutors&apos; mental health diversionary unit. Individuals who suffered from mental illnesses whose charged offenses were a result of such mental illness could be diverted from prosecution to treatment. If the individual successfully completed the treatment program, the charges against them would be dismissed.</li>
                <li><strong>Drug Court</strong> — Handled all aspects of Drug Court prosecution, including pleas, sentencing, and violation of drug court probation hearings. Worked closely with treatment providers, probation officers, the Office of the Public Defender, and the Court in weekly meetings.</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                For Danielle, &ldquo;It&apos;s not just about handling the criminal charge. It&apos;s about handling them as the individual.&rdquo; She is well-versed in alternative disposition programs and can connect clients with quality-of-life services to help them manage the trauma of going through the criminal justice process.
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
