import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Paul A. Di Lella, Esq. - Retired Chief Assistant Prosecutor | Bianchi Law Group',
  description: 'Paul A. Di Lella is a retired Chief Assistant Prosecutor from the Passaic County Prosecutor\'s Office with 20 years in law enforcement. Now defending clients at Bianchi Law Group.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Paul A. Di Lella, Esq." subtitle="Retired Chief Assistant Prosecutor | Passaic County" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-shrink-0">
                  <img src="https://bianchilawgroup.com/wp-content/uploads/2025/06/Image345.png" alt="Paul A. Di Lella, Esq." className="w-48 h-auto rounded-lg shadow-md" />
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: '0.25rem' }}>Paul A. Di Lella, Esq.</h2>
                  <p style={{ color: '#a61c23', fontWeight: 600, marginBottom: '1rem' }}>Associate Attorney</p>
                  <div className="flex flex-wrap gap-2">
                    {['Retired Chief Assistant Prosecutor', 'Passaic County Prosecutor\'s Office', '20 Years Law Enforcement', 'Homicide & Major Narcotics'].map(c => (
                      <span key={c} className="bg-red-50 text-red-800 text-xs font-medium px-3 py-1 rounded-full border border-red-200">{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Paul is an accomplished trial attorney and a retired Chief Assistant Prosecutor from the Passaic County Prosecutor&apos;s Office. During his career as a prosecutor, he has tried many cases to jury verdict, including homicides, sexual assaults, kidnappings, assaults, and major narcotics cases.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                20 Years of Law Enforcement Experience
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In a law enforcement career spanning 20 years, Paul served in multiple roles including as a Senior Assistant Prosecutor in the Trial Unit and the White-Collar Crime Unit, and as the Supervisor of the Public Integrity and Organized Crime Unit. There, he directed the investigation and prosecution of corruption and abuse of office involving elected officials, government officials, and police officers. Before his retirement, he was the Director of the Passaic County Narcotics, Gangs, and Violent Crimes Task Force, supervising the legal and law enforcement staff members.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                National Law Enforcement Training & Technology
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Paul served as Director of Law Enforcement Relations with the Oakland-based non-profit organization Not In Our Town. Using his skills as an attorney and advocate, Paul was instrumental in obtaining two U.S. Department of Justice C.O.P.S. Office grants to provide training and resources to police agencies nationwide to increase hate crime reporting and enhance community policing efforts. He conducted nationwide training for law enforcement agencies and was a regular lecturer at the annual International Association of Chiefs of Police conference.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Paul then became the Senior Director of Forensic Services and Litigation Support for the Silicon Valley-based tech company ShotSpotter, Inc., which provides gunshot detection and location services to its 150-plus law enforcement agency customers.
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
