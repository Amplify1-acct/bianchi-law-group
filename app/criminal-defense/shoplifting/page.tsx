import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Shoplifting Lawyers | Bianchi Law Group',
  description: 'Shoplifting under N.J.S.A. 2C:20-11 can range from disorderly persons to a second-degree crime. Our former prosecutors defend shoplifting charges statewide.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Shoplifting Defense Attorneys" subtitle="Protecting Your Record Against Shoplifting Charges" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In New Jersey, shoplifting crimes are enumerated within Title 2C, Chapter 20 – Theft and Related Offenses. The relevant statute can be found at N.J.S.A. 2C:20-11. Many shoplifting cases are charged as a fourth-degree crime — but certain cases can also be charged as a second-degree crime with the potential of a decade-long prison term. Regardless of the severity of the charges against you, New Jersey shoplifting lawyers at The Bianchi Law Group may be able to assist.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                At The Bianchi Law Group, you&apos;ll work with a dedicated criminal defense attorney whose goal is to secure the most favorable outcome in your case. In some instances, this may mean helping you avoid a criminal record altogether. Every case is different, and we&apos;ll fight to help you avoid severe penalties for New Jersey shoplifting charges.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Shoplifting Penalties in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The value of the merchandise determines the grade of the offense. Additionally, any person convicted of shoplifting shall be sentenced to perform community service:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>First Offense</strong> — At least 10 days of community service</li>
                <li><strong>Second Offense</strong> — At least 15 days of community service</li>
                <li><strong>Third or Subsequent Offense</strong> — Maximum 25 days of community service and a minimum term of imprisonment of not less than 90 days (N.J.S.A. 2C:20-11(c))</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The value of merchandise involved in a violation may be aggregated in determining the grade of the offense where the acts constituting a violation were committed pursuant to one scheme or course of conduct, whether from the same person or several persons, or were committed in furtherance of an organized retail theft enterprise.
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
