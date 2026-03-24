import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Criminal Mischief Lawyers | Bianchi Law Group',
  description: 'Criminal mischief under N.J.S.A. 2C:17-3 charges depend on damage amount. Our former prosecutors defend these charges statewide. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Criminal Mischief Defense Attorneys" subtitle="Protecting Your Rights Against Property Damage Charges" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In New Jersey, a charge for criminal mischief is codified by N.J.S.A. 2C:17-3. Criminal mischief is applicable when someone damages the property of another. It is a common charge seen in New Jersey Domestic Violence and Juvenile cases. The Bianchi Law Group is made up of former trial prosecutors and other &ldquo;of counsel&rdquo; attorneys who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey, including Criminal Mischief.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Criminal Mischief Penalties in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The penalties for Criminal Mischief depend on either the extent of damage to the victim&apos;s property or the type of property destroyed. The New Jersey Criminal Mischief statute grades the degree of crime based on value:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Third-Degree Crime</strong> — Damage of $2,000.00 or more (3–5 years in State Prison)</li>
                <li><strong>Fourth-Degree Crime</strong> — Damage between $500.00 and $2,000.00 (up to 18 months in State Prison)</li>
                <li><strong>Disorderly Persons Offense</strong> — Damage of $500.00 or less (up to 6 months in County Jail)</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Additionally, the degree of the crime may depend on the type of property damaged. The Sentencing Judge may also order fines and restitution as prescribed by 2C:43-3. By statute, the Judge can order a defendant convicted of Criminal Mischief to pay monetary restitution in the amount of the pecuniary damage caused by any act of graffiti and to perform community service, which shall include removing the graffiti from the property, if appropriate.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Like in all of our cases, our experienced team of former prosecutors are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial. We are former prosecutors, trial-tested, and certified by the New Jersey Supreme Court as certified criminal trial attorneys.
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
