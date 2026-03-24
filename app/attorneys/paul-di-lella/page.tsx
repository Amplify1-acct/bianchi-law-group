import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata = {
  title: "Paul A. Di Lella, Esq.",
  description: "Paul A. Di Lella, Esq. at The Bianchi Law Group - Criminal Defense Attorney.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="Paul A. Di Lella, Esq." subtitle="Criminal Defense Attorney" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/06/Robert.png" alt="Paul A. Di Lella, Esq." className="w-full max-h-96 object-cover object-top" />
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: 8 }}>
                  Paul A. Di Lella, Esq.
                </h2>
                <p style={{ color: '#a61c23', fontWeight: 700, fontSize: '14px', marginBottom: 20 }}>
                  Criminal Defense Attorney
                </p>
                <div style={{ width: 56, height: 3, background: '#a61c23', marginBottom: 20 }} />
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Before his retirement, he was the Director of the Passaic County Narcotics, Gangs, and Violent Crimes Task Force, supervising the legal and law enforcement staff members. As Director, Paul initiated and led all aspects of drug and gang-related investigations and criminal prosecutions within the county on behalf of the State of New Jersey. These included wiretap investigations, large-scale buy-bust operations, and gang-suppression investigations involving many federal, state, and local law enforcement agencies.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Additionally, Paul was an instructor at the Passaic County Police Academy, where he taught police officer recruits and conducted continuing education classes for law enforcement personnel. He was certified by the New Jersey Supreme Court as a Criminal Trial Attorney. Also, he is certified by the New Jersey Police Training Commission as a Police Academy Instructor.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>After retirement, Paul moved to California, obtained his license to practice law there, and utilized his vast legal experience in other roles and projects.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Paul was Director of Law Enforcement Relations with the Oakland-based non-profit organization Not In Our Town. There, using his skills as an attorney and advocate, Paul was instrumental in obtaining two U.S. Department of Justice, C.O.P.S. (Community Oriented Policing Services) Office grants to provide training and resources to police agencies nationwide to increase hate crime reporting and enhance community policing efforts. In implementing the grants, Paul conducted nationwide training for law enforcement agencies and was a regular lecturer at the annual International Association of Chiefs of Police and Major Cities Chiefs Association conferences.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Paul then became the Senior Director of Forensic Services and Litigation Support for the Silicon Valley-based tech company ShotSpotter, Inc., which provides gunshot detection and location services to its 150-plus law enforcement agency customers. There, he served as the legal expert on cutting-edge technology and regularly engaged with law enforcement customers, prosecutors, and criminal defense counsel on the best use of the company’s forensic offerings. Relying upon his prosecutorial experience, Paul developed and trained a cadre of expert witnesses to testify in criminal cases supporting ShotSpotter forensic products. He also provided training throughout the country to law enforcement agencies and prosecutor offices on best practices when using the technology in criminal cases.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>More recently, Paul was the Diversion Program Specialist for the Drug Enforcement Administration in the San Francisco Field Division. There, relying upon his experience as a narcotics prosecutor, he focused on preventing the diversion of controlled substances into the illegal drug market. He regularly engaged with drug manufacturers, drug distributors, doctors, pharmacists, and other regulated entities to ensure compliance with the federal Controlled Substance Act. Paul was also instrumental in developing outreach programs to raise awareness about prescription drug abuse, the prevalence of fake and often deadly prescription pills, and the deadly scourge of fentanyl.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>While in California, Paul also practiced criminal defense law in the San Francisco Bay Area. He regularly represented individuals charged with felonies and misdemeanors in the Superior Court of California. Paul fiercely advocated for his clients and consistently demonstrated an unwavering commitment to their defense. As a former prosecutor, he had a unique understanding of the criminal justice system he used to benefit his clients.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Paul graduated with honors from The Catholic University of America in Washington, D.C. He earned his law degree from Seton Hall University School of Law in Newark, N.J., where he was an Editorial Board member of the Seton Hall School of Law Legislative Journal. Paul is admitted to practice law in New Jersey and California. He is also admitted to practice in the Federal District Court of New Jersey and the Northern and Eastern Districts of the Federal Courts of California.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Paul joins the Bianchi Law Group, leveraging his distinguished background as a Chief Assistant Prosecutor and his extensive experience working closely with law enforcement in the private sector. His expertise, honed through years of collaboration with the DEA and his tenure as a trial attorney, equips him to adeptly navigate the complexities of criminal defense, domestic violence, and municipal court cases. Paul embodies the Bianchi Law Group's core values of courage, compassion, and commitment, bringing knowledge and a prosecutor's insight to support our clients effectively. His transition to our team significantly enhances our ability to offer unparalleled legal advocacy grounded in a profound understanding of the criminal justice system.</p>
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
