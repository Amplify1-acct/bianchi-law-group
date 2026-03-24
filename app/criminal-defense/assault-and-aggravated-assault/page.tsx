import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Assault & Aggravated Assault Defense Lawyers | Bianchi Law Group',
  description: 'Simple assault is a disorderly persons offense; aggravated assault can be second-degree. Our former prosecutors defend all assault charges in NJ. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Assault & Aggravated Assault Defense Attorneys" subtitle="Aggressive Defense Against Assault Charges Across New Jersey" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                An assault charge may be one of the most difficult charges to deal with because the government usually aggressively prosecutes assault charges. Without an experienced defense attorney on your side, you may not stand a chance against the prosecutor&apos;s resources and skills. At The Bianchi Law Group, LLC, we are experts in the field of criminal law and have taken on and won countless cases for our clients. Our experience gives us insight as to what may work for your assault case — chances are, we have seen something similar before.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Simple Assault in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Simple assault is less serious than an aggravated assault and primarily depends on the degree of injury or the intent to cause such injury. Simple assault in New Jersey is a disorderly persons offense — unless committed in a fight or scuffle entered into by mutual consent, in which case it is a petty disorderly persons offense. A person convicted of a disorderly persons offense may be sentenced to imprisonment up to 6 months.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Aggravated Assault Penalties in New Jersey
              </h2>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Second Degree</strong> — 5 to 10 years in New Jersey State Prison</li>
                <li><strong>Third Degree</strong> — 3 to 5 years in New Jersey State Prison</li>
                <li><strong>Fourth Degree</strong> — Up to 18 months in New Jersey State Prison</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Sentencing Judge may also order fines and restitution as prescribed by 2C:43-3 for all convictions for Aggravated Assault. While some assault charges are not as severe as others, any type of assault charge has the potential to disrupt your life if you are convicted. If you have been charged with an aggravated assault, for which the consequences are severe, hiring our team of criminal defense attorneys is essential.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Like in all of our cases, our experienced team of former prosecutors are there to make sure the Government can prove its case beyond a reasonable doubt. Partners Robert A. Bianchi and David J. Bruno are both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys — a distinction held by less than 1% of all New Jersey lawyers. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial.
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
