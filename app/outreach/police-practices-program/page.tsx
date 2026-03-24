import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Police Practices Program | Bianchi Law Group Outreach',
  description: 'The Bianchi Law Group Police Practices Program draws on Robert Bianchi\'s experience as Morris County Prosecutor and civil rights attorney to improve police accountability.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Police Practices Program" subtitle="Community Outreach by The Bianchi Law Group" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Robert A. Bianchi, Esq. served as the Morris County Prosecutor from 2007–2013. He is one of the most experienced attorneys in New Jersey in the area of police practices, criminal trial practice, criminal prosecution, criminal defense, and Federal and State civil rights law. Mr. Bianchi has handled numerous civil rights cases on behalf of citizens against errant police officers and agencies, including matters of excessive force, malicious prosecution, and false arrest.
              </p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Improving Police Accountability
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                After his appointment as the head County Prosecutor, Mr. Bianchi implemented significant improvements in police accountability practices, including improved Internal Affairs practices and Early Warning Detection Systems to identify and address problematic officers. His progressive initiatives were praised by groups ranging from the ACLU to the most conservative law enforcement groups.
              </p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Partner David Bruno — Professional Standards Unit
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Partner David Bruno was trained in police practice cases under the tutelage of Mr. Bianchi. While an Assistant Prosecutor under then-Prosecutor Bianchi, Mr. Bruno was given the responsibility of serving in the Professional Standards Unit, which investigated and prosecuted police officers who committed crimes under the &ldquo;color of their office.&rdquo; Mr. Bianchi and Mr. Bruno are often sought out by national and local TV and print media as authoritative sources on cases involving police practice issues.
              </p>
              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Contact Us</h3>
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
