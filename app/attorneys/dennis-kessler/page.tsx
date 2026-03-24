import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata = {
  title: "Dennis Kessler, Esq.",
  description: "Dennis Kessler, Esq. at The Bianchi Law Group - Senior Criminal Defense Attorney.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="Dennis Kessler, Esq." subtitle="Senior Criminal Defense Attorney" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/07/Dennis_teamm.png" alt="Dennis Kessler, Esq." className="w-full max-h-96 object-cover object-top" />
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: 8 }}>
                  Dennis Kessler, Esq.
                </h2>
                <p style={{ color: '#a61c23', fontWeight: 700, fontSize: '14px', marginBottom: 20 }}>
                  Senior Criminal Defense Attorney
                </p>
                <div style={{ width: 56, height: 3, background: '#a61c23', marginBottom: 20 }} />
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Additionally Dennis has fought for the rights of clients accused of committing a crime and has worked hard to ensure they receive the best possible outcome for their circumstances.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>More recently, Dennis has taken on the key role of meeting new potential clients who have been accused of a crime. Those accused of a crime need to be able to voice their side of what happened and they need to be educated about the criminal law system which is a brand new experience for most. Dennis’s strength is the ability to listen to the client, answer all questions, explaining the process and addressing concerns so that the client’s stress and anxiety is reduced.</p>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a href="tel:8622924442" className="btn-primary">
                    Schedule a Free Consultation
                  </a>
                </div>
              </div>
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
