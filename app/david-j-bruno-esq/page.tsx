import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'David J. Bruno, Esq. - Certified Criminal Trial Attorney | Bianchi Law Group',
  description: 'David J. Bruno is a Certified Criminal Trial Attorney, former Morris County Prosecutor, Super Lawyer, and national TV legal analyst on Fox News, HLN, and Fox Business.',
}

export default function Page() {
  return (
    <>
      <PageHero title="David J. Bruno, Esq." subtitle="Certified Criminal Trial Attorney | Former Morris County Prosecutor" />
      <section className="py-14" style={{ backgroundColor: '#F0F5FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-shrink-0">
                  <img src="https://bianchilawgroup.com/wp-content/uploads/2025/07/David-J_team.png" alt="David J. Bruno, Esq." className="w-48 h-auto rounded-lg shadow-md" />
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', fontWeight: 700, color: '#272727', marginBottom: '0.25rem' }}>David J. Bruno, Esq.</h2>
                  <p style={{ color: '#a61c23', fontWeight: 600, marginBottom: '1rem' }}>Partner</p>
                  <div className="flex flex-wrap gap-2">
                    {['NJ Certified Criminal Trial Attorney', 'Former Morris County Prosecutor', 'Super Lawyer', 'Top 40 Under 40 Criminal Defense', 'National TV Legal Analyst'].map(c => (
                      <span key={c} className="bg-red-50 text-red-800 text-xs font-medium px-3 py-1 rounded-full border border-red-200">{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                David began his legal career in 2006 as an associate at a New Jersey criminal defense firm, where he was mentored by a former Assistant United States Attorney and First Assistant Prosecutor of Essex County. In 2007, David joined the Morris County Prosecutor&apos;s office as an assistant prosecutor, where he gained invaluable experience building, prosecuting, and trying a wide variety of cases.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Prosecutorial Experience
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '0.5rem' }}>
                David&apos;s experience at the Morris County Prosecutor&apos;s Office covered multiple criminal units:
              </p>
              <ul style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                <li><strong>Major Crimes Unit</strong> — Homicide, attempted homicide, aggravated manslaughter, police shootings, suspicious deaths, robbery, kidnapping, carjacking, vehicular homicide, and aggravated assault</li>
                <li><strong>Vehicular Homicide and Arson Unit</strong> — Death by auto, vehicular homicide, reckless manslaughter, and arson cases. David was responsible for responding to crime scenes, obtaining warrants for blood and vehicles, making charging decisions, and handling prosecutions to trial</li>
                <li><strong>Domestic Violence Unit</strong> — Restraining order violations, contempt cases, terroristic threats, aggravated assault, kidnapping, sexual assault, criminal sexual contact, lewdness, criminal mischief, stalking, and harassment</li>
              </ul>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In 2011, then-Morris County Prosecutor Bob Bianchi and David Bruno prosecuted Jose Feliciano in Morris County Superior Court. The Bianchi/Bruno team convicted Feliciano of murdering Father Edward Hinds in Chatham. Feliciano was sentenced to life in prison for the murder.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Awards & Recognition
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                In 2010, David received the Litigation Award from ASIS International-Western New Jersey Chapter 088. From 2014 to present, David has been named a Rising Star and a Super Lawyer in criminal law by New Jersey Monthly magazine, and one of the Top 40 Under 40 Criminal Defense Lawyers in New Jersey by the American Society of Legal Advocates. He has instructed for the National Business Institute for Continuing Legal Education and the New Jersey Association of Justice.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                National TV Legal Analyst
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                David is a frequent legal commentator on Fox News, Fox Business Channel, HLN, UPN9, and Investigation Discovery. He comments on criminal law cases, terrorism, police shootings, legal decisions, and congressional investigations.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Education & Bar Memberships
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                David earned his Juris Doctorate from New York Law School, graduating Cum Laude, and his Bachelor of Science Degree in Business Finance from Seton Hall University. He is a member of the New Jersey State Bar Association, the United States District Court of New Jersey Bar, the Morris County Bar Association, New Jersey Association of Justice, and the Association of Criminal Defense Lawyers of New Jersey.
              </p>

              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', margin: '1.5rem 0 0.75rem' }}>
                Compassion Is Central to David&apos;s Practice
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
                David believes that legal excellence and tenacity without compassion is an imbalanced approach. He understands there is trauma attached to being charged with a crime and his philosophy is to address not only his client&apos;s legal concerns but also personal issues that may have contributed to or arisen from these legal challenges. David frequently works with mental health professionals to help his clients deal with and address their needs beyond the legal arena. David is a certified Daring Way Facilitator, having completed Dr. Bren&eacute; Brown&apos;s national training in San Antonio, Texas.
              </p>

              <div style={{ background: '#a61c23', borderRadius: 8, padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Free Consultation Available</h3>
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
