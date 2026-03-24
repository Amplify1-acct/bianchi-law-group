import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata = {
  title: "Danielle M. Esposito, Esq.",
  description: "Danielle M. Esposito, Esq. at The Bianchi Law Group - Criminal Defense Attorney.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="Danielle M. Esposito, Esq." subtitle="Criminal Defense Attorney" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/07/Danielle_teamb.png" alt="Danielle M. Esposito, Esq." className="w-full max-h-96 object-cover object-top" />
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: 8 }}>
                  Danielle M. Esposito, Esq.
                </h2>
                <p style={{ color: '#a61c23', fontWeight: 700, fontSize: '14px', marginBottom: 20 }}>
                  Criminal Defense Attorney
                </p>
                <div style={{ width: 56, height: 3, background: '#a61c23', marginBottom: 20 }} />
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In 2014, Danielle began her career as an Assistant Prosecutor in the Essex County Prosecutor’s Office. In her role as Assistant Prosecutor, Danielle has served in many assignments and has handled all aspects of criminal prosecution, from complaint to verdict.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Her experience as a prosecutor included the following:</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In addition to her role in the courtroom, Danielle served as an advocate to her fellow assistant prosecutors from all twenty-one counties in the State of New Jersey in her role as Secretary of the Assistant Prosecutors Association of New Jersey (APANJ), from November 2018 to December 2020. Prior to that, Danielle served as a Trustee of the APANJ for three years.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Danielle has taught continuing legal education courses while an assistant prosecutor, specifically, she taught courses pertaining to Detention hearings. In addition, she served as co-chair of the Criminal Law Section of the New Jersey Association for Justice’s annual Meadowlands Seminar in December 2020. She is also a member of the Essex County Bar Association.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Danielle is a graduate of William Paterson University, where she received her Bachelor of Arts degree in Psychology. In 2013, Danielle graduated magna cum laude from New York Law School, where she was a staff editor on the New York Law School Law Review and served on the Executive Board of the law school’s Criminal Law Society. She was also a John Marshall Harlan Scholar at NYLS. The John Marshall Harlan Scholars Program is a rigorous academic honors program specifically designed for law students who performed at the top of their law school class. Danielle served as a member of the Justice Action Center, where she received the award for Outstanding Work on a Capstone Project for creating a website geared specifically toward juveniles in NYC who were exposed to the criminal justice system, explaining their rights and the juvenile justice process. She further received the New York Law School Public Service Certificate, which is awarded to students who have committed substantial time to working in public interest.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In her free time, Danielle enjoys spending time with her family down at the Jersey shore, riding jet skis, paddle boarding, and at the beach. She is also an avid reader, with an interest in books about spirituality, history, and fiction.</p>
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
