import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata = {
  title: "Tricia H. Margolis, Esq.",
  description: "Tricia H. Margolis, Esq. at The Bianchi Law Group - Criminal Defense Attorney.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="Tricia H. Margolis, Esq." subtitle="Criminal Defense Attorney" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/06/Tricia.png" alt="Tricia H. Margolis, Esq." className="w-full max-h-96 object-cover object-top" />
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: 8 }}>
                  Tricia H. Margolis, Esq.
                </h2>
                <p style={{ color: '#a61c23', fontWeight: 700, fontSize: '14px', marginBottom: 20 }}>
                  Criminal Defense Attorney
                </p>
                <div style={{ width: 56, height: 3, background: '#a61c23', marginBottom: 20 }} />
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>1n 1998, after graduating from law school, Tricia served as a judicial law clerk to the Honorable Richard Camp and the Honorable Hector E DeSoto both sitting on the New Jersey Superior Court Criminal Division in Essex County, Newark. There she researched legal issues and prepared bench memoranda on myriad family and criminal issues. She observed countless criminal trials including many murder trials. She also served as a mediator for special civil cases during that time.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Tricia was hired by the Essex County Prosecutor’s Office in 1999. She was the first hire of then Acting Prosecutor and Assistant Attorney General, Donald Campolo. She began in the pre-indictment units, CJP and Drug Court Then she was promoted to the Juvenile Unit where she conducted several successful juvenile bench trials where delinquency was adjudicated. She also helped divert youth offenders to rehabilitation programs when appropriate. She was then promoted to the Adult Trial Team Unit where she managed a caseload of over 65 files from post arraignment through plea negotiations, motions, jury trials, and sentencing. She successfully prosecuted and won 9 out of 10 adult jury trials.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In addition to her courtroom and legal work, she was a Public Speaker and Fundraiser and then the Early Childhood Education Director for The United Way of the Greater Lehigh Valley. She began organizing and conducting public speaking engagements to raise funds for the United Way. She then ran their Strategic Partnership with the community leaders in the industry. She acted as facilitator and mediator to the experts.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Tricia returned to the courtroom in 2013 as the Unit Leader for Domestic Violence at the Warren County Prosecutor’s Office. She prosecuted restraining order violations and investigated and prosecuted the indictable offenses.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Tricia is a graduate of the University of Delaware where she received her Bachelor of Arts in Criminal Justice. During the summer of her junior year, she was selected as 1 of 2 students at the University of Delaware to participate in a Comparative International Drug Law Summer Abroad program through Penn State in the Netherlands.</p>
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
