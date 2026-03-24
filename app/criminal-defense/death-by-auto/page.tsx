import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Death By Auto Defense Lawyers | Bianchi Law Group',
  description: 'Death by auto / vehicular homicide in NJ can result in 10–20 years in prison. Our former prosecutors defend these charges aggressively. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Death By Auto Defense Attorneys" subtitle="Vehicular Homicide Defense From Former Prosecutors" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Death by Auto is related and should be considered alongside the crimes of Murder, Aggravated Manslaughter, and Reckless Manslaughter. Murder is the most serious crime in New Jersey. Manslaughter and Aggravated Manslaughter are similar crimes where a person is killed but the defendant did not possess the requisite mental state that Murder requires (knowingly or purposely).
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                There are clear distinctions between these charges, but the repercussions can be similar. For instance, both a manslaughter and vehicular homicide charge can result in up to a 10-year prison sentence when charged as a second-degree crime. When charged with vehicular homicide as a first-degree crime, penalties can increase to up to 20 years of incarceration. Whether you&apos;re charged with vehicular manslaughter, homicide, or any similar crime, you&apos;re up against penalties that can lead to serious hardship.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Partner David Bruno — Vehicular Homicide Unit Prosecutor
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Partner David J. Bruno was assigned to the Major Crimes and Vehicular Homicide and Arson Unit as a Morris County Assistant Prosecutor, where he investigated and supervised investigations of suspicious deaths caused by vehicles. Mr. Bruno was responsible for responding to crime scenes, obtaining warrants for blood and vehicles, making charging decisions, and handling the prosecutions of these cases to trial. This insider knowledge is your advantage when you hire The Bianchi Law Group.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Aggravating Factors That Increase Charges
              </h2>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Driving while intoxicated (DWI) at the time of the fatal accident</li>
                <li>Reckless driving behavior beyond ordinary negligence</li>
                <li>Fleeing the scene after the fatal accident</li>
                <li>Prior DWI convictions</li>
                <li>Multiple victims</li>
              </ul>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                We Will Fight for the Best Possible Outcome
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
