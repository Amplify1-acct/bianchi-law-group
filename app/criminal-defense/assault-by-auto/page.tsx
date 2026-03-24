import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Assault By Auto Lawyers | Bianchi Law Group',
  description: 'Charged with assault by auto in NJ? Our former prosecutors — including David Bruno who prosecuted these cases — defend you aggressively. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Assault By Auto Defense Attorneys" subtitle="Former Prosecutors With Insider Knowledge of These Cases" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Being charged with a New Jersey assault by auto offense is a serious situation. This is why it&apos;s ideal to have an experienced attorney on your side — particularly a legal professional with experience as a former prosecutor. The Bianchi Law Group is made up of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey, including Assault by Auto.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Partner David J. Bruno was assigned to the Major Crimes and Vehicular Homicide Unit as an Assistant Prosecutor, where he investigated and supervised investigations of suspicious deaths caused by vehicles. Mr. Bruno was responsible for responding to crime scenes, obtaining warrants for blood and vehicles, making charging decisions, and handling the prosecutions of these cases to trial.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                What Is Assault By Auto in New Jersey?
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The New Jersey Assault by Auto statute, N.J.S.A. 2C:12-1(c), criminalizes the act of recklessly operating a motor vehicle (or a vessel) and causing injury to another. A person acts recklessly when he consciously disregards a substantial and unjustifiable risk that the material element exists or will result from his conduct.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                The Reality of These Charges
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Imagine a reckless conduct charge being taken to trial as a fourth-degree offense. How about an aggravated assault charge being tried as a third-degree assault or even a second-degree crime? This reality happens to individuals every day when they&apos;re accused of causing serious bodily injury through the reckless operation of certain vehicles. If convicted, the repercussions could be life-altering. That&apos;s why anyone facing such charges should speak with a New Jersey assault by auto lawyer at The Bianchi Law Group.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                We Will Not Hesitate to Go to Trial
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                When serious bodily injury results from an alleged crime, prosecutors may try to offer a plea deal. However, you should never accept such a deal without first having your New Jersey assault by auto attorney review the specifics. And while it&apos;s sometimes possible to have charges dropped altogether, prosecutors will also frequently refuse to do what&apos;s right. When this happens, we&apos;re prepared to go to trial — and our certification shows that we&apos;re equipped for the job at hand.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Like in all of our cases, our experienced team of former prosecutors are there to ensure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', marginBottom: '1rem' }}>Contact us today to learn more about how we can help.</p>
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
