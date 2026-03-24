import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Harassment Defense Lawyers | Bianchi Law Group',
  description: 'Harassment under N.J.S.A. 2C:33-4 is a petty disorderly persons offense but can trigger restraining orders. Our former prosecutors defend harassment charges statewide.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Harassment Defense Attorneys" subtitle="Defending Harassment and Domestic Violence Related Charges" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Harassment is an offense in New Jersey that prohibits a wide variety of actions. Harassment in New Jersey is commonly considered a less serious charge than terroristic threats and assault. However, harassment is also enumerated in the domestic violence act and is commonly used as a basis to obtain a restraining order in New Jersey — making the consequences far more serious than the criminal grade of the offense might suggest. The Bianchi Law Group is made up of former trial prosecutors who will defend you for all federal and state crimes in New Jersey, including harassment and other domestic violence related harassment charges.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Harassment Penalties in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Harassment is a petty disorderly persons offense in New Jersey — unless the actor, in committing criminal harassment, was serving a term of imprisonment or was on parole or probation as the result of a conviction of any indictable offense, in which case harassment is elevated to a fourth-degree crime.
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Petty Disorderly Persons Offense</strong> — Up to 30 days in County Jail</li>
                <li><strong>Fourth Degree (if on parole/probation)</strong> — Up to 18 months in New Jersey State Prison</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Sentencing Judge may also order fines and restitution as prescribed by 2C:43-3. Former Assistant Prosecutor David Bruno leads the firm&apos;s defense of harassment charges and distinguishes assault charges from certain acts that also constitute harassment — a distinction that matters enormously to how your case is charged and prosecuted.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Harassment and Restraining Orders
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Because harassment is a predicate act under New Jersey&apos;s Prevention of Domestic Violence Act, a harassment charge can lead to a Temporary Restraining Order (TRO) and a Final Restraining Order (FRO) hearing. An FRO is permanent and has life-altering consequences. Our attorneys defend against both the criminal harassment charge and the restraining order proceeding simultaneously.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Like in all of our cases, our experienced team of former prosecutors are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial.
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
