import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Lewdness Lawyers | Bianchi Law Group',
  description: 'In NJ, lewdness is codified in N.J.S.A. 2C:14-4. Our former prosecutors defend clients against lewdness charges statewide. Free consultation: (862) 292-4442.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Lewdness Attorneys" subtitle="Fighting To Defend Clients Against Criminal Allegations Of A Sexual Nature" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">

              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In New Jersey, the crime of Lewdness is codified in N.J.S.A. 2C:14-4. The statute criminalizes certain types of inappropriate or offensive sexual behavior conducted in public or in situations likely to alarm or offend others. As an offense that involves alleged sexual conduct, the potential repercussions are very serious. This is why you should seriously consider discussing your case with an experienced New Jersey lewdness lawyer before doing anything else.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Bianchi Law Group is made up of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey. We will defend you for all federal and state crimes in New Jersey, including Lewdness. The prosecution may toss around terms like &ldquo;flagrantly lewd&rdquo; and &ldquo;gratifying the sexual desire of the actor,&rdquo; but in many cases, these are just attempts to use scary descriptors to make you feel like you have no control.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                However, you do have control. Our experienced criminal defense lawyers can defend you against the government&apos;s allegations of a lewdness offense. Contact us today for your free consultation.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Penalties for Lewdness in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The penalties for Lewdness in New Jersey depend on the circumstances of the offense. Lewdness may be a fourth-degree crime or a disorderly persons offense, depending on the circumstances:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Fourth-Degree Crime</strong> — Punishable by up to 18 months in New Jersey State Prison</li>
                <li><strong>Disorderly Persons Offense</strong> — Punishable by up to 6 months in County Jail</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Sentencing Judge may also order fines and restitution as prescribed by N.J.S.A. 2C:43-3 for all convictions for Lewdness in New Jersey.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Lifetime Consequences of a Lewdness Conviction
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Unfortunately, this isn&apos;t where the difficulties end. If a person commits the criminal offense of lewdness — or even if they are wrongfully convicted of doing so — they&apos;ll face a lifetime of hurdles due to a criminal record. Having a record can interfere with your ability to secure housing, employment, and academic resources — and even impact the immigration status of certain individuals. Clearly, a conviction for a disorderly persons offense carries repercussions that last a lifetime. Luckily, it may be possible to avoid such outcomes. Contact our lewd act attorneys in New Jersey today to learn how we can help.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Certified Criminal Trial Attorneys — We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Partners Robert A. Bianchi and David J. Bruno are both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys. Only 250 of over 93,000 lawyers (less than 1%) are designated as certified criminal trial attorneys by the New Jersey Supreme Court. Like in all of our cases, our experienced team of former prosecutors are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial. That is what we do and what distinguishes us from other attorneys.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', marginBottom: '1rem' }}>Contact Former Morris County Prosecutor Robert A. Bianchi, Esq. to schedule your free consultation.</p>
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
