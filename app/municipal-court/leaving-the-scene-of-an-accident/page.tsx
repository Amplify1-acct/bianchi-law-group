import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata = {
  title: "New Jersey Leaving the Scene Lawyers",
  description: "The Bianchi Law Group - New Jersey Leaving the Scene Lawyers in New Jersey. Former prosecutors fighting for your rights. Free consultation: 862-292-4442.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="New Jersey Leaving the Scene Lawyers" subtitle="Defending Hit and Run Charges in New Jersey" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Leaving the scene of an accident can also be a criminal offense if the accident results in the death or serious bodily injury of a person involved in the accident.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>The Bianchi Law Group is made up of former trial prosecutors and other “of counsel” attorneys who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey including Leaving the Scene of an accident.</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#272727", margin: "1.5rem 0 0.5rem" }}>Certified Criminal Trial Attorneys by the New Jersey Supreme Court</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Partners Robert A. Bianchi and David J. Bruno are also both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In New Jersey, the New Jersey Supreme Court has a certification committee which classifies certain New Jersey Lawyers as Certified Trial Attorneys. The process requires the prospective attorneys to satisfy strict criteria including extensive jury trials, a primary focus in criminal law, an application submission, a peer review process, a character and background check and to pass a written examination. Only 250 of over 98,000 lawyers (less than 1%) are designated as certified criminal trial attorneys by the New Jersey Supreme Court. This should be an important factor in finding a New Jersey criminal defense attorney to represent you. Many New Jersey Lawyers describe themselves as trial attorneys but most do not have the New Jersey Court’s distinction as Certified Criminal Trial Attorney.</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#272727", margin: "1.5rem 0 0.5rem" }}>Leaving the Scene of an Accident Penalties in New Jersey</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Leaving the scene of an accident is a crime of the second-degree if the accident results in the death of another and upon conviction, thereof a person may be sentenced between 5 and 10 years in New Jersey State prison. See 2C:11-5.1.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Leaving the scene of an accident is a crime of the third-degree if the accident results in serious bodily injury of another and upon conviction, thereof a person may be sentenced between 3 and 5 years in New Jersey State prison. The presumption of non-incarceration, which typically applies to third-degree crimes, set forth in N.J.S.2C:44-1 shall not apply to persons convicted of Leaving the scene of an accident in New Jersey. See 2C:12-1.1.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>The Sentencing Judge may also order fines and restitution as prescribed by 2C:43-3 for all convictions for Leaving the scene of an accident in New Jersey.</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#272727", margin: "1.5rem 0 0.5rem" }}>Driver’s License Suspension for Leaving the scene of an accident in New Jersey</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>As with any other offense where a motor vehicle was used, the Sentencing Judge has the authority to postpone, suspend, or revoke for a period not to exceed two years the driver’s license, registration certificate, or both of any person convicted of a crime, disorderly persons offense, or petty disorderly persons offense. 2C:43-2(c).</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#272727", margin: "1.5rem 0 0.5rem" }}>Knowledge of the Death or Serious Bodily Injury</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Neither knowledge of the death or serious bodily injury nor knowledge of the violation are elements of the offense and it shall not be a defense that the driver of the motor vehicle was unaware of the death or serious bodily injury or provisions of 39:4-129.</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#272727", margin: "1.5rem 0 0.5rem" }}>Trial Ready New Jersey Criminal Lawyers</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Like in all of our cases handled at the Bianchi Law Group, our experienced staff of trial attorneys and “of counsel” attorneys are there to make sure the Government can prove its case beyond a reasonable doubt. If our attorneys cannot resolve the case with a dismissal or a fair and just plea bargain, our lawyers at The Bianchi Law Group will not hesitate to select a jury and take the case to trial. That is what we do and what distinguishes us from other attorneys. We are former prosecutors, trial-tested, and certified by the New Jersey Supreme Court as certified criminal trial attorneys… We will not hesitate to go to trial.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>At The Bianchi Law Group, we will take care to provide you Serious Attorneys for Serious Cases.</p>
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
