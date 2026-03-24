import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata = {
  title: "David J. Bruno, Esq.",
  description: "David J. Bruno, Esq. at The Bianchi Law Group - Former Major Crimes Assistant Prosecutor, Certified Criminal Trial Attorney, Partner.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="David J. Bruno, Esq." subtitle="Former Major Crimes Assistant Prosecutor, Certified Criminal Trial Attorney, Partner" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/07/David-J_team.png" alt="David J. Bruno, Esq." className="w-full max-h-96 object-cover object-top" />
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: 8 }}>
                  David J. Bruno, Esq.
                </h2>
                <p style={{ color: '#a61c23', fontWeight: 700, fontSize: '14px', marginBottom: 20 }}>
                  Former Major Crimes Assistant Prosecutor, Certified Criminal Trial Attorney, Partner
                </p>
                <div style={{ width: 56, height: 3, background: '#a61c23', marginBottom: 20 }} />
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>David began his legal career in 2006 as an associate at a New Jersey criminal defense firm, where he was mentored by a former Assistant United States Attorney and First Assistant Prosecutor of Essex County. While at the firm, David defended individuals criminally charged at both the state and federal level, as well as police officers of the PBA and FOP on administrative charges, appeals, and criminal charges.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>A former Assistant Prosecutor in the Morris County Prosecutor’s Office and trial defense attorney, David brings to his practice considerable experience both building and defending cases, an asset that proves invaluable when representing his clients. He is certified by the New Jersey Supreme Court as a Certified Criminal Trial Attorney, one of only approximately 250 out of the more than 98,000 attorneys in New Jersey.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In 2010, David received the Litigation Award from ASIS International-Western New Jersey Chapter 088 for his efforts during the trial prosecution of Jonathan Zarate for the murder of Jennifer Parks in 2005. David also was featured on the Investigation Discovery network’s crime series, “Deadly Sins,” which aired on February 15, 2014, relating to the same trial.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In 2014 through the present, David was named a Rising Star and a Super Lawyer in criminal law-related fields by the publishers of New Jersey Monthly magazine and one of the top 40 under 40 Criminal Defense lawyers in New Jersey by the American Society of Legal Advocates. He has instructed for the National Business Institute for Continuing Legal Education for Attorneys and the New Jersey Association of Justice.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>David is also a frequent legal commentator on several national media networks such as Fox News, the Fox Business Channel, HLN, UPN9, and Investigation Discovery. David uses his experience and training to comment on legal issues such as acts of criminal law related cases, terrorism, police shootings, legal decisions and congressional investigations.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In 2007 David joined the Morris County Prosecutor’s office as an assistant prosecutor, where he gained invaluable experience in building, prosecuting and trying a wide variety of cases within a wide variety of criminal units. His experiences covered:</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In 2011, then-Morris County Prosecutor Bob and Dave prosecuted Jose Feliciano in Morris County Superior Court. The Bianchi/Bruno team convicted Feliciano of murdering Father Edward Hinds in Chatham. Feliciano was sentenced to life in prison for the murder.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>This variety of experience, including preparing cases for presentment to the Grand Jury and at trial as well as the considerable network of contacts within the legal system that David established as an Assistant Prosecutor, makes him a highly effective representative of his clients today.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>David also believes that legal excellence and tenacity without compassion is an imbalanced approach. David believes that in addition to representing his client’s legal interest, he must also heal the whole person. David understands there is trauma attached to being charged with a crime and his philosophy is to address not only his client’s legal concerns but also personal issues that may have contributed to or arisen from these legal challenges. This is why David frequently works with Mental Health professionals to help his clients deal with and address their needs in other ways besides just legal. David is a certified Daring Way Facilitator and has completed Dr. Brené Brown’s national training for the Daring Way in San Antonio, Texas.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>David also works with a number of family law firms who seek his advice on criminal law issues relating to their clients. As a former prosecutor and certified criminal trial lawyer, David is able to help family lawyers navigate through criminal issues that may develop during their family law representation.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>David earned his Juris Doctorate from New York Law School, graduating Cum Laude, and his Bachelor of Science Degree in Business Finance from Seton Hall University. He is a member of the New Jersey State Bar Association, the United States District Court of New Jersey Bar, the Morris County Bar Association, New Jersey Association of Justice and the Association of Criminal Defense Lawyers of New Jersey.</p>
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
