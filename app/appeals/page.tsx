import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Appellate Lawyers | Bianchi Law Group',
  description: 'Convicted of a crime in NJ? Our former prosecutors fight appeals at every level from municipal court to the NJ Supreme Court. Free consultation: (862) 292-4442.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Appellate Lawyers" subtitle="Fighting Wrongful Convictions From Trial Court to the Supreme Court" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                At The Bianchi Law Group, our criminal defense attorneys do more than provide dedicated legal defense at the trial court level. We also offer appellate advocacy and fight to ensure that wrongful convictions, procedural errors, and constitutional violations do not stand. The former prosecutors at The Bianchi Law Group, LLC have collective experience at every level of the New Jersey Judiciary — from municipal court to the New Jersey Supreme Court.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                A conviction is not necessarily the final word in your case. Generally, you have a right to an appeal and a right to seek other post-judgment relief. If you opt to appeal your conviction, it&apos;s important to work with a private practice attorney. Public defenders often have minimal experience in appellate court, and their caseloads are typically three times larger than average.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Our Crossover Trial & Appellate Experience
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                The attorneys at The Bianchi Law Group, LLC have crossover experience. Our trial lawyers have argued or clerked for the appellate courts, and our appellate team has pretrial and trial litigation experience. Everyone understands the preparation that goes into a successful trial and a thorough appeal. Our team-based approach melds the real-world perspective of trial lawyers with the research and writing skills of appellate attorneys. Having an appellate lawyer involved early in your matter puts these skills to use in the trial court — and can result in a favorable verdict, mistrial, or even having the case thrown out altogether.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Common Grounds for Appeal in New Jersey
              </h2>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li>Ineffective assistance of trial counsel</li>
                <li>Prosecutorial misconduct</li>
                <li>Improper admission or exclusion of evidence</li>
                <li>Incorrect jury instructions</li>
                <li>Newly discovered evidence</li>
                <li>Illegal or excessive sentence</li>
                <li>Constitutional violations during trial or investigation</li>
              </ul>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Deadlines — Do Not Wait
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                There are strict deadlines in the appeals process. If you miss one of these deadlines, you may have no additional options even if it&apos;s highly likely that appellate judges would have sided with you. Contact The Bianchi Law Group immediately after your conviction to preserve your appellate rights. We&apos;ll review your case and help you understand all your options.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', marginBottom: '1rem' }}>Contact us today to schedule your free consultation.</p>
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
