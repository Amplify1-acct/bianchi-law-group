import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Motor Vehicle Theft Lawyers | Bianchi Law Group',
  description: 'Charged with motor vehicle theft in NJ? Our former prosecutors defend auto theft charges aggressively. Do not accept a plea deal without speaking to us first.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Motor Vehicle Theft Defense Attorneys" subtitle="Former Prosecutors Fighting Auto Theft Charges" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                At The Bianchi Law Group, our dedicated team of trial attorneys understands how to make New Jersey law work for you. As former prosecutors, we know how to navigate every aspect of the criminal justice system. If you&apos;re accused of having a stolen vehicle in your possession — or any related crime — an experienced criminal defense attorney at our law firm will review your case and help you understand all your rights and options.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Do Not Fall for Prosecutorial Scare Tactics
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                You would be hard-pressed to find a law office that&apos;s better equipped to deal with your case — because our criminal defense attorneys have worked on both sides of the aisle. Far too many people agree to plea deals when the prosecutor threatens them with the potential for increased charges. After all, who wouldn&apos;t be tempted if the state offered to overlook another serious offense and charge them with a fourth-degree crime rather than a second-degree offense? While auto theft in New Jersey is a third-degree offense, there are other related crimes that prosecutors could charge in connection with the underlying criminal allegations. Don&apos;t fall for these scare tactics. Our law firm is often able to use pre-trial intervention to keep our clients out of the system.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Affirmative Defenses Available
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                It is an affirmative defense to prosecution for theft that the actor:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Was unaware that the property or service was that of another</li>
                <li>Acted under an honest claim of right to the property or service involved</li>
                <li>Took property exposed for sale, intending to purchase and pay for it promptly, or reasonably believing the owner would have consented</li>
              </ul>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Certified Criminal Trial Attorneys
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Only 250 of over 98,000 lawyers (less than 1%) are designated as certified criminal trial attorneys by the New Jersey Supreme Court. At The Bianchi Law Group, we understand that plea negotiations are an important part of the system — but they&apos;re far too often overused and abused by prosecutors and defense lawyers trying to speed things along. No matter what you&apos;ve been accused of, you&apos;re entitled to a dedicated legal defense.
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
