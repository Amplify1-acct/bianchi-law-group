import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata = {
  title: `Victims Assistance and Survivor Protection Act (VASPA)`,
  description: `Legal analysis from The Bianchi Law Group on New Jersey criminal defense law.`,
}

export default function Page() {
  return (
    <main>
      <PageHero title="Victims Assistance and Survivor Protection Act (VASPA)" />
      <section style={{ backgroundColor: '#F0F5FA' }} className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <p style={{ color: '#a61c23', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>July 22, 2025</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>New Jersey Appellate Division Decision – Victim's Assistance and Survivor Protection Act (VASPA)</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>On December 1, 2025, the New Jersey Appellate Division decided A.C. v. R.S., ___ N.J. Super ___ (App. Div. 2025), determining that a text message can be considered an online communication under the Victim's Assistance and Survivor Protection Act (VASPA), N.J.S.A. 2C:14-13 to -21. .</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.5rem' }}>Facts and Procedural History</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>Plaintiff A.C. filed a complaint alleging defendant R.S. committed stalking and cyber-harassment. She obtained a temporary protective order against defendant because of a single incident which occurred outside of plaintiff’s home. Plaintiff and defendant did not know each other; however, at the time of the incident plaintiff engaged in a romantic relationship with defendant’s husband.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>At the conclusion of a hearing, the trial court entered a final protective order (FPO) finding that although plaintiff had not proved stalking because there was only one incident, she had proved defendant committed cyber-harassment when she sent a text threatening to contact the Essex County Department of Corrections (ECDOC) and plaintiff's new employer. The trial judge also found defendant's text regarding her husband having performed oral sex on her was a lewd comment directed at plaintiff "for the purposes of harassment." The intent to harass was further supported by the fact that defendant sent the texts at 2:00 a.m., did not leave after her encounter with the police, and went to the home where the father of plaintiff's children resided.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>Defendant appealed from the FPO arguing that the court’s finding of cyber-harassment was erroneous because her communications were not made online or through social media and, therefore, a text communication cannot be considered cyber-harassment.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>The Appellate Division reversed finding that plaintiff did not establish a predicate act under VASPA. The record did not support a finding of cyber-harassment under N.J.S.A. 2C:14-14(a)(1), because defendant did not commit a “lewd act” by bragging about her own sexual prowess and did not threaten to inflict injury or harm to or commit a crime against plaintiff's property.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>The Appellate Division also held that although a threat against one's job by contacting an employer can be a form of threat against property under N.J.S.A. 2C:14-14(a)(1), in this case there was no evidence that defendant intended to do anything other than inform plaintiff's employer about the relationship between plaintiff and defendant's husband, which was not actionable conduct under N.J.S.A. 2C:14-14(a)(1).</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>Nonethless, the Appellate Division rejected defendant's contention that a text message is not a "communication[] in an online capacity" under N.J.S.A. 2C:14-14(a)(1). The court reasoned that because text messages can be sent via a cellular network or the internet, they are a form of online communication. Therefore, given the ubiquity of texting and the New Jersey Supreme Court's interpretation of the Legislative intent of VASPA to afford victims maximum protection of the law, the Appellate Division concluded that the Legislature did not intend to exclude text messages as a form of online communications under N.J.S.A. 2C:14-14(a)(1).</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.5rem' }}>Conclusion – Key Takeaways from the VASPA Case</h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>Text messages can be considered an online communication under VASPA, N.J.S.A. 2C:14-14(a)(1).</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>Criminal law is complicated and constantly changing. If you are facing criminal charges, you should immediately contact our team of experienced former prosecutors to schedule a free case review with one of our expert criminal defense attorneys. A complete understanding of criminal law by your attorney is crucial to your defense. Your rights and freedoms are in jeopardy, and you owe it to yourself to act. We are available to provide immediate assistance and further counsel on your case at 862-225-1965.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>No aspect of this attorney advertisement has been approved by the Supreme Court of New Jersey.</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>8 Campus Dr #105Parsippany, NJ 07054</p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>125 Half Mile Rd #200Red Bank, NJ 07701</p>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link href="/blog" style={{ color: '#a61c23', fontWeight: 700 }} className="hover:underline">← Back to Blog</Link>
              </div>
            </article>
            <aside>
              <ContactSidebar />
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
