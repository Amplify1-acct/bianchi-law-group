import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey White Collar Crime Defense Lawyers | Bianchi Law Group',
  description: 'Accused of a white collar crime in NJ? Our former prosecutors defend fraud, embezzlement, money laundering and more. Free consultation: (862) 292-4442.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey White Collar Crime Defense Attorneys" subtitle="Former Prosecutors Defending Complex Financial Crimes" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">

              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Unlike many criminal defense lawyers, our lead attorneys are former prosecutors who have both spent time leading the law enforcement offices for the entire Morris County. Leading the law enforcement for the county has given both Attorney Bianchi and Attorney Bruno in-depth experience in the criminal process. Our attorneys understand how law enforcement works and use that knowledge to defend and protect our clients.
              </p>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                We help our clients navigate the complex legal system, including in white collar criminal defense cases. You can count on our criminal defense team for compassionate responses as you go through this critical time. We&apos;ll help you know what to say during the investigation so you avoid accidental self-incrimination. We will also be your staunch defenders both in negotiations and in the courtroom before a judge or jury.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                White Collar Crimes We Defend
              </h2>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Health Care Fraud</strong> — Misrepresenting an injury or illness to receive benefits or certain prescriptions</li>
                <li><strong>Money Laundering</strong> — Making money through illegal means and covering up the true source of income</li>
                <li><strong>Insider Trading</strong> — Trading stock with nonpublic information that gives a financial advantage</li>
                <li><strong>Embezzlement</strong> — Unlawfully receiving money or property or withholding assets for personal gain</li>
                <li><strong>Tax Evasion</strong> — Failure to pay tax or comply with provisions of the Internal Revenue Code</li>
                <li><strong>Wire and Mail Fraud</strong></li>
                <li><strong>Securities Fraud</strong></li>
                <li><strong>Ponzi Schemes and Investment Fraud</strong></li>
                <li><strong>Bribery and Public Corruption</strong></li>
                <li><strong>Computer and Internet Fraud</strong></li>
                <li><strong>RICO (Racketeering) Violations</strong></li>
                <li><strong>Mortgage Fraud</strong></li>
              </ul>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Federal and State White Collar Prosecutions
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Our time spent leading the law enforcement offices of Morris County has prepared our criminal defense lawyers to handle a wide range of criminal cases. We are prepared to defend our clients in municipal court and against federal prosecutors in federal courts. We offer excellent legal counsel based on our years as prosecutors and our decades practicing criminal defense law.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Certified Criminal Trial Attorneys
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                Attorney Robert Bianchi is a certified trial attorney, as nominated and confirmed by the New Jersey Supreme Court — a distinction held by less than 1% of New Jersey lawyers. With this major honor and accomplishment, it&apos;s no surprise that our law offices have a proven record of success in some of the state&apos;s most challenging white collar cases. Additionally, our clients consistently report a high level of satisfaction with the services and representation we offer.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', marginBottom: '1rem' }}>Contact The Bianchi Law Group today to learn how we can help with your unique circumstances.</p>
                <a href="tel:8622924442" style={{ display: 'inline-block', background: '#fff', color: '#a61c23', fontWeight: 700, padding: '0.75rem 2rem', borderRadius: 6 }}>
                  Call (862) 292-4442
                </a>
              </div>
            </div>
            <div className="lg:col-span-1"><ContactSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
