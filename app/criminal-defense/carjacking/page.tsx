import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Carjacking Lawyers | Bianchi Law Group',
  description: 'Carjacking is a first-degree crime in NJ punishable by up to 30 years. Our certified former prosecutors defend carjacking charges aggressively. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Carjacking Defense Attorneys" subtitle="Defending First-Degree Carjacking Charges in New Jersey" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In New Jersey, Carjacking is a very serious first-degree crime and can be punishable with up to 30 years in New Jersey State Prison under N.J.S.A. 2C:15-2. At The Bianchi Law Group, our team of dedicated legal professionals has seen what happens when defendants are convicted of carjacking. Unlike auto theft, this criminal offense will never be charged as a second-degree crime. The state simply takes this matter too seriously. In fact, prosecutors are not allowed to downgrade to a lesser degree crime.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                This means the government&apos;s primary goal becomes permanently depriving you of your freedom — from decades in prison to a lifetime of indirect consequences from a felony conviction. Fortunately, you don&apos;t have to go through this alone.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Carjacking Penalties in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Carjacking is a crime of the first degree. Upon conviction, a person may be sentenced to an ordinary term of imprisonment between 10 and 30 years. A person convicted of carjacking shall be sentenced to a term of imprisonment that includes a minimum term of at least five years, during which the defendant shall be ineligible for parole. The Sentencing Judge may also order fines and restitution as prescribed by 2C:43-3.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                The Government Must Prove Every Element Beyond Reasonable Doubt
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Under New Jersey law, prosecutors must prove the elements of carjacking beyond a reasonable doubt. If they are unable to do so, a conviction for the first-degree crime of carjacking is unconstitutional. Our New Jersey carjacking lawyers analyze every aspect of the government&apos;s case to find weaknesses and constitutional violations.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Certified Trial Attorneys — We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Bianchi Law Group is made up of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey. Partners Robert A. Bianchi and David J. Bruno are both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys — only 250 of over 98,000 lawyers hold this distinction. Like in all of our cases, our experienced team of former prosecutors are there to ensure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers will not hesitate to select a jury and take the case to trial.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', marginBottom: '1rem' }}>Contact us at (862) 292-4442 to schedule your free consultation.</p>
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
