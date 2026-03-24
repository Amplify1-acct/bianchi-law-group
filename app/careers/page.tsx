import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata = {
  title: "Careers at The Bianchi Law Group",
  description: "The Bianchi Law Group - Careers at The Bianchi Law Group in New Jersey. Former prosecutors fighting for your rights. Free consultation: 862-292-4442.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="Careers at The Bianchi Law Group" subtitle="Join New Jersey Premier Criminal Defense Firm" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "#272727", margin: "1.2rem 0 0.4rem" }}>Executive Assistant (Billing and Collections)</h3>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>We seek a highly skilled and organized Executive Assistant primarily focusing on billing and collections to provide comprehensive assistance to the managing partners and office manager at our prestigious law office. The ideal candidate will possess excellent communication and multitasking abilities, with a strong background in billing and collections. The Executive Assistant will play a crucial role in supporting the office's daily operations and ensuring smooth coordination among various departments.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>If you are a self-motivated individual with a strong commitment to providing outstanding administrative support, particularly in billing and collections, and contributing to the success of a dynamic law office, we encourage you to apply.</p>
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
