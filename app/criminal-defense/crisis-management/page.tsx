import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata = {
  title: "New Jersey Crisis Management Attorneys",
  description: "The Bianchi Law Group - New Jersey Crisis Management Attorneys in New Jersey. Former prosecutors fighting for your rights. Free consultation: 862-292-4442.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="New Jersey Crisis Management Attorneys" subtitle="Navigating High-Stakes Legal Situations" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>For those whose careers place them in the public sphere, the impact can be devastating. Our firm is proud of our capacity to offer clients a Crisis Management Team alongside legal representation to help mitigate potential damage to a client’s reputation and help them better navigate the criminal justice system.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Our Crisis Management Team is led by trial-tested attorneys whose background as prosecutors provides unique insight into investigative and trial strategies from the inception of a matter. This allows for quick, effective action and expert negotiation on behalf of clients. In each case requiring Crisis Management, our plan begins with a thorough analysis of the specific factors requiring attention: thereafter, we create a team of paraprofessionals to assist us meet our objectives and protect our client.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Alongside our proactive legal team, our Crisis Management Model encompasses a comprehensive range of services that can be implemented immediately to protect a client’s reputation. These include, but are not limited to: Media relations, forensic expertise, addition and mental health counseling, and a team of former prosecutors who consult with one another as to the most effective and immediate resolution of a matter.</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#272727", margin: "1.5rem 0 0.5rem" }}>Trial Ready New Jersey Criminal Lawyers</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Like in all of our cases handled at the Bianchi Law Group, our experienced staff of trial attorneys and “of counsel” attorneys are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial. That is what we do and what distinguishes us from other attorneys. We are former prosecutors, trial-tested, and certified by the New Jersey Supreme Court as certified criminal trial attorneys… We will not hesitate to go to trial.</p>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "#272727", margin: "1.2rem 0 0.4rem" }}>Contact Us Today for an Initial Consultation</h3>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Contact Former Morris County Prosecutor Robert A. Bianchi, Esq. and David J. Bruno, Esq. at The Bianchi Law Group, LLC online or call 862-225-1965 to schedule an initial consultation with an experienced New Jersey Defense Attorney.</p>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a href="tel:8622924442" className="btn-primary">
                  Call 862-292-4442 for a Free Consultation
                </a>
              </div>
            </div>
            <aside>
              <ContactSidebar />
              <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: "1.1rem", color: "#272727", marginBottom: 12 }}>Practice Areas</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    ['DWI / DUI Defense', '/criminal-defense/dwi'],
                    ['Drug Crimes', '/criminal-defense/drug-crimes'],
                    ['Murder and Homicide', '/criminal-defense/murder'],
                    ['Robbery', '/criminal-defense/robbery'],
                    ['Domestic Violence', '/criminal-defense/domestic-violence'],
                    ['Appeals', '/criminal-defense/appeals'],
                    ['Municipal Court', '/municipal-court'],
                    ['Criminal Investigations', '/criminal-defense/criminal-investigations'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} style={{ color: '#a61c23' }} className="hover:underline">
                        &rsaquo; {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
