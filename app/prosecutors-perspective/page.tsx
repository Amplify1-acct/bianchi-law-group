import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata = {
  title: "Prosecutor's Perspective",
  description: 'Insights from former New Jersey prosecutors at The Bianchi Law Group.',
}

export default function Page() {
  return (
    <main>
      <PageHero title="Prosecutor's Perspective" subtitle="Insights from Former NJ Prosecutors" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', fontWeight: 700, color: '#272727', marginBottom: 16 }}>
                Understanding the System From the Inside
              </h2>
              <div style={{ width: 56, height: 3, background: '#a61c23', marginBottom: 20 }} />
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#555', lineHeight: 1.8, fontSize: '15px', marginBottom: '1rem' }}>
                At The Bianchi Law Group, our attorneys have served as prosecutors in New Jersey courtrooms. That experience gives us a unique perspective that we use every day to defend our clients.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#555', lineHeight: 1.8, fontSize: '15px', marginBottom: '1rem' }}>
                As former prosecutors, we know how the government builds its cases, what evidence they prioritize, and where weaknesses in the prosecution often arise. We use this insider knowledge to mount the most effective defense possible for every client we represent.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#555', lineHeight: 1.8, fontSize: '15px', marginBottom: '1rem' }}>
                Our founder, Robert A. Bianchi, served as the Morris County Prosecutor — one of the most senior law enforcement positions in New Jersey. He was appointed by the Governor and led a team of prosecutors handling everything from minor offenses to capital murder cases.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#555', lineHeight: 1.8, fontSize: '15px', marginBottom: 24 }}>
                This perspective — knowing how the other side thinks, what arguments they will make, and how judges and juries respond to certain evidence — is invaluable when building a criminal defense strategy.
              </p>
              <a href="tel:8622924442" className="btn-primary">
                Call 862-292-4442 for a Free Consultation
              </a>
            </div>
            <aside>
              <ContactSidebar />
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
