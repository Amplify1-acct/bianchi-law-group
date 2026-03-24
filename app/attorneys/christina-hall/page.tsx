import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata = {
  title: "Christina Hall, Esq.",
  description: "Christina Hall, Esq. at The Bianchi Law Group - Certified Criminal Trial Attorney, Partner.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="Christina Hall, Esq." subtitle="Certified Criminal Trial Attorney, Partner" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/06/Christina-Hall-Esq.png" alt="Christina Hall, Esq." className="w-full max-h-96 object-cover object-top" />
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: 8 }}>
                  Christina Hall, Esq.
                </h2>
                <p style={{ color: '#a61c23', fontWeight: 700, fontSize: '14px', marginBottom: 20 }}>
                  Certified Criminal Trial Attorney, Partner
                </p>
                <div style={{ width: 56, height: 3, background: '#a61c23', marginBottom: 20 }} />
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Christina was hired by the New Jersey Appellate Division in 1989 where she researched legal issues and prepared bench memoranda on the most complicated and lengthy appeals before the Appellate Division. During her extensive career as an appellate attorney, she produced memoranda in thousands of cases, including some of the most difficult criminal law cases involving complicated evidentiary and constitutional law issues. She was promoted in 2020 to Director of Central Appellate Research, where she managed twenty-five appellate attorneys while continuing to conduct legal research for the court.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In addition, during her work for the Appellate Division, Christina co-authored the New Jersey Standards for Review, conducted new law clerk training for incoming appellate clerks, and taught continuing legal education classes in brief writing, administrative law, and the applicable standards of review on appeal.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Christina earned her Juris Doctorate degree from Rutgers University School of Law, with honors, where she was a Notes and Comments editor for the Rutgers Law Journal. She earned her Bachelor of Arts degree from Seton Hall University, graduating Cum Laude.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In her free time Christina enjoys traveling with her family, hiking in the National Parks, and biking along the Delaware River and the New Jersey shore. She is also an avid reader, and loves to read classics, mysteries, adventure stories, art history books, and cookbooks!</p>
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
