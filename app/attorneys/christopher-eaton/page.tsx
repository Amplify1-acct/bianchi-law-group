import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata = {
  title: "Christopher A. Eaton, Esq.",
  description: "Christopher A. Eaton, Esq. at The Bianchi Law Group - Criminal Defense Attorney.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="Christopher A. Eaton, Esq." subtitle="Criminal Defense Attorney" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <img src="https://bianchilawgroup.com/wp-content/uploads/2025/06/Robert.png" alt="Christopher A. Eaton, Esq." className="w-full max-h-96 object-cover object-top" />
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: 8 }}>
                  Christopher A. Eaton, Esq.
                </h2>
                <p style={{ color: '#a61c23', fontWeight: 700, fontSize: '14px', marginBottom: 20 }}>
                  Criminal Defense Attorney
                </p>
                <div style={{ width: 56, height: 3, background: '#a61c23', marginBottom: 20 }} />
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In that capacity, he handled thousands of misdemeanor and felony cases and managed a violent felony caseload of over fifty cases including weapons possession, robbery, assault, manslaughter, attempted murder, and gang shootings.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Christopher presented over one hundred and fifty cases before the New York State grand jury and has interviewed thousands of victims, law enforcement officers, and civilian witnesses in preparation for court appearances, hearings, and trials. Christopher was co-counsel on two attempted murder trials for which top count convictions were obtained and the defendants were each sentenced to over twenty years of incarceration. In addition, he has conducted and supervised numerous pre-trial hearings and several bench and jury trials to verdict in both Supreme Court and Criminal Court.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Christopher was promoted to Senior Felony Assistant District Attorney in 2020 and Deputy Bureau Chief of the Street Safety Bureau (Vehicular Crimes) in February 2021. The Street Safety Bureau is responsible for the prosecution of all vehicular crimes committed in Brooklyn including, but not limited to, drinking and driving offenses, reckless driving, and vehicular manslaughters. As Deputy Bureau Chief, Christopher managed all misdemeanor DWI prosecution in Brooklyn, supervised approximately sixty attorneys, and managed a docket of over seven hundred DWI cases. Christopher was responsible for supervising the DWI Criminal Court part, reviewing case files and police paperwork, assisting with discovery litigation and motion practice, negotiating plea offers, and training young assistants in hearing and trial preparation.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Christopher graduated from Amherst College in 2011 with a major in Political Science. He was a member of the NESCAC Championship Amherst College football team and a record-breaking thrower on the Indoor and Outdoor Track and Field Teams. While attending Amherst College, Christopher interned in the Kings County Supreme Court Mental Health Part as well as the United States Attorney’s Office in the Eastern District of New York, Business and Securities Fraud Division.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>After graduating from Amherst College, Christopher worked for JP Morgan Chase as an analyst for one year before starting his law school career at St. John’s University School of Law in 2012. While attending St. John’s Law, Christopher served as the Vice President and President of the Student Bar Association. During law school, Christopher worked in the Queens County District Attorney’s Domestic Violence Prosecution Clinic where he managed a caseload of approximately forty domestic violence matters. He also interned at the New York County District Attorney’s Office and at the United States Attorney’s Office in the Eastern District of New York, General Crimes Division.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Christopher is admitted to practice law in the courts of the State of New York, State of New Jersey, and the District of New Jersey. He is a member of the Associate Board of Directors for the New York State Academy of Trial Lawyers and a member of the Cathedral Club of Brooklyn – a Catholic organization that raises funds for the Diocese of Brooklyn and funds scholarships for young men and women to attend Catholic high schools throughout the diocese.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Christopher is an avid fisherman and boater, spending weekends with his family at the Jersey shore. In August 2021, Christopher participated in the TD Five Boro Bike Tour and helped raise over $15,000 for HeartShare Human Services of New York, a not-for-profit organization that supports children and adults with intellectual and developmental disabilities.</p>
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
