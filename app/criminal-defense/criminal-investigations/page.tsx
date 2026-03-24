import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata = {
  title: "NJ Criminal and White Collar Investigation Lawyers",
  description: "The Bianchi Law Group - NJ Criminal and White Collar Investigation Lawyers in New Jersey. Former prosecutors fighting for your rights. Free consultation: 862-292-4442.",
}

export default function Page() {
  return (
    <main>
      <PageHero title="NJ Criminal and White Collar Investigation Lawyers" subtitle="Protecting Clients Under Investigation" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>In the course of a white-collar investigation, you may find that your business relationships seem to become more complex. You may find that your business has its own attorney and the other corporate officers and managers are hiring their own personal lawyers. There may be questions about who pays for what kind of legal advice. Regulatory lawyers may be hired, in addition to the criminal defense team. Judging who can say what to whom becomes complex. The paper evidence seems endless. You need counsel you can trust. You need someone who you know is on your side. The criminal defense attorneys at The Bianchi Law Group, LLC are here to help you navigate this confusing time. As former prosecutors, we have experience with the timeline and complexity of long-term investigations. We have led them ourselves. And we know that sometimes these investigations lead to charges, sometimes these investigations lead to regulatory or civil consequences, and sometimes these investigations lead to nothing at all.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Regardless of what the ultimate outcome is, you have to be ready for anything. With the former prosecutors at The Bianchi Law Group, LLC, you will be.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>All of the criminal defense attorneys at The Bianchi Law Group, LLC are former prosecutors. With that experience comes fiercely practical perspective that we want to share with you. Our perspective goes beyond knowing what motions to file. We know what to do, when to do it. Part of our perspective is hard-won discretion earned over years of investigating and developing cases. In the midst of an investigation where you do not yet know what charges, if any, the government will bring against you, it feels like your professional and personal lives hang in the balance. A team of former prosecutors with experience in investigating and prosecuting crimes offer the perspective you need to face these charges and continue living your life and running your business. We can help you better understand what is going on in your case, so you can focus on your business.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>And if charges are brought against you, our team of former prosecutors has experience in what to expect from the government, because we have built and prosecuted these types of cases ourselves.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>We know what filings to submit, what evidence to challenge, and what arguments to make – and, critically, we know when to do these things to optimize your outcome. Judgment matters, and we have honed ours over careers as former prosecutors and as criminal defense attorneys in handling long-term investigations and complex matters. When you hire The Bianchi Law Group, LLC, you benefit from this earned perspective we bring to every case.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>By the time charges are brought against you, the government often has built what it believes to be a strong case. If you waited to hire legal counsel, you need a team of criminal defense attorneys who are ready to step in and take charge of your interests. It will be important to address the government’s allegations head-on with pretrial motions and, possibly, plea negotiations. Nothing is guaranteed in these circumstances. But with sound counsel, you can make the decisions that make sense for you and your personal and professional interests.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>If your matter proceeds to trial, no one knows this fast-paced world better than former prosecutors. As prosecutors, we were constantly going to court, filing and arguing motions, designing cases, and trying cases before juries. We know the evidentiary rules, the court’s procedures, and your constitutional rights. We leverage that knowledge to advance your interests at every stage of the litigation. And, most importantly, with that intensive experience, we are ready to stand with you through the trial of your life.</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#272727", margin: "1.5rem 0 0.5rem" }}>Are You Ready to Be Proactive?</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>You would never leave your business interests to fate. In your business, you are assertive and ready to make important decisions. There is no reason that it should be any different in protecting that business or your personal interests when it comes to a criminal or white-collar investigation against you. Now, before the government files any paperwork, is the time to for you to act.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>If you are ready to be proactive about the criminal or white-collar investigation pending against you, call our office today. By involving counsel early, you will be ready to assert your constitutional rights, have a strategy for responding to investigative inquiries, challenge evidence against you, and, if need be, stand ready to attack the government’s case at trial. But our ability to help all begins with you. Ask yourself: are you ready to face the investigation head-on, with the power of a team of former prosecutors behind you? If you are, do not wait.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>Call The Bianchi Law Group, LLC at 862-225-1965 or use our online scheduler to set up a free consultation today to learn more about your post-judgment options.</p>
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
