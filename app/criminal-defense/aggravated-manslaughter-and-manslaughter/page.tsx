import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Manslaughter & Aggravated Manslaughter Lawyers | Bianchi Law Group',
  description: 'Aggravated manslaughter is a first-degree crime in NJ with up to 30 years. Our former prosecutors defend manslaughter charges statewide. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Manslaughter & Aggravated Manslaughter Defense" subtitle="Former Prosecutors Defending the Most Serious Homicide Charges" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Murder is the most serious crime under New Jersey law. Manslaughter and Aggravated Manslaughter are similar crimes where a person is killed, but the defendant did not possess the requisite mental state that Murder requires (knowingly or purposely). You need a New Jersey manslaughter and aggravated manslaughter lawyer who consistently defends clients against such charges. At The Bianchi Law Group, the legal professionals at our firm are former county prosecutors. This means they&apos;ve dealt with these cases on both sides of the aisle.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Penalties for Aggravated Manslaughter in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Aggravated manslaughter under circumstances manifesting extreme indifference to human life is a crime of the first degree. Upon conviction, a person may be sentenced to a term of imprisonment between 10 and 30 years. Additionally, a person can be guilty of Aggravated Manslaughter if he causes the death of another person while fleeing or attempting to elude a law enforcement officer under N.J.S.A. 2C:11-4(a)(2) — also a first-degree crime carrying 10 to 20 years.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Penalties for Manslaughter in New Jersey
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Manslaughter is a crime of the second degree, and upon conviction, a person may be sentenced to a term between 5 and 10 years in New Jersey State Prison. If a motor vehicle was used in the commission of the crime, the Sentencing Judge has the authority to postpone, suspend, or revoke the defendant&apos;s driver&apos;s license for a period not to exceed two years. The Sentencing Judge may also order fines and restitution as prescribed by N.J.S.A. 2C:43-3.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Vehicular Homicide vs. Manslaughter
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Vehicular Homicide, or &ldquo;Death by Auto,&rdquo; is a similar crime to manslaughter in which a person kills another person while driving a motor vehicle or vessel recklessly. In addition to a lengthy prison term, a Vehicular Homicide offense carries a mandatory driver&apos;s license suspension of 5 years to Life — which is not mandatory for Manslaughter or Aggravated Manslaughter.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Former Prosecutors — Your Strongest Defense
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The Bianchi Law Group is made up of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey, including Manslaughter and Aggravated Manslaughter. They know what it takes to establish reasonable doubt with a self-defense or other legal strategy. Our primary goal will always be to help clients avoid a manslaughter conviction — whether through dismissal, negotiation, or trial.
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
