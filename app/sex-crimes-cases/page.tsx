import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Sex Crimes Defense Lawyers | Bianchi Law Group',
  description: 'Sexual offenses in NJ can lead to prison and Megan\'s Law registration. Our certified former prosecutors defend all sex crime charges. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Sex Crimes Defense Attorneys" subtitle="Serious Attorneys for Serious Cases" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">

              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Sexual offenses in New Jersey are enumerated in the New Jersey Criminal Code found in Title 2C, Chapter 14. A sex crimes conviction in New Jersey may lead to a considerable jail sentence and other penalties that may affect a defendant&apos;s finances and social and personal status. In addition to state prison time, a plea of guilty or a conviction for a sexual offense in New Jersey can expose a defendant to Megan&apos;s Law registration requirements and community supervision for life.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Megan&apos;s Law may require mandatory registration in an internet database and potential notifications to the community, your neighborhood, and your place of employment. Moreover, you are only eligible to be removed from these registration requirements after fifteen years if you meet specific criteria.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Why Choose The Bianchi Law Group for Sex Crime Defense?
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Bianchi Law Group, LLC is composed of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey. Partners Robert A. Bianchi and David J. Bruno are both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys — a distinction held by less than 1% of all New Jersey lawyers. Only 250 of over 98,000 lawyers are designated as certified criminal trial attorneys by the New Jersey Supreme Court.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                One of the most critical factors in a sex crime case is having a talented defense attorney who will watch out for your interests and ensure your rights are protected. Our skilled litigators have decades of experience, including years spent as prosecutors. We understand how the opposition works and will leverage our experience, talent, and honed skills to get you the best results possible.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Sex Crime Charges We Defend
              </h2>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Aggravated Sexual Assault — N.J.S.A. 2C:14-2(a)</li>
                <li>Sexual Assault — N.J.S.A. 2C:14-2(b) and (c)</li>
                <li>Aggravated Criminal Sexual Contact</li>
                <li>Criminal Sexual Contact</li>
                <li>Lewdness — N.J.S.A. 2C:14-4</li>
                <li>Endangering the Welfare of a Child</li>
                <li>Luring and Enticement of a Child</li>
                <li>Possession and Distribution of Child Pornography</li>
                <li>Internet Sex Crimes</li>
                <li>Observation of Sexual Contact — N.J.S.A. 2C:14-9</li>
                <li>Megan&apos;s Law Registration Challenges</li>
              </ul>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Penalties for Sex Crimes in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The penalties for sex crimes in New Jersey vary by degree:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>First Degree</strong> — 10 to 20 years in New Jersey State Prison</li>
                <li><strong>Second Degree</strong> — 5 to 10 years in New Jersey State Prison</li>
                <li><strong>Third Degree</strong> — 3 to 5 years in New Jersey State Prison</li>
                <li><strong>Fourth Degree</strong> — Up to 18 months in New Jersey State Prison</li>
                <li><strong>Disorderly Persons</strong> — Up to 6 months in County Jail</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Sentencing Judge may also order fines and restitution as prescribed by 2C:43-3 and additional penalties for sex offenders as prescribed by 2C:14-10 for all convictions.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Like in all of our cases, our experienced team of former prosecutors are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial. That is what we do and what distinguishes us from other attorneys. We are former prosecutors, trial-tested, and certified by the New Jersey Supreme Court as certified criminal trial attorneys.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', marginBottom: '1rem' }}>Speak with a former prosecutor about your sex crime case today.</p>
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
