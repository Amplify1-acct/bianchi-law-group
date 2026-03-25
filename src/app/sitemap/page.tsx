import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitemap - The Bianchi Law Group',
}

export default function SitemapPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Sitemap</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <nav style={{ lineHeight: '1.8' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>Home</a></li>
              <li style={{ marginTop: '20px' }}><strong>About Us</strong>
                <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '10px' }}>
                  <li><a href="/about/robert-bianchi" style={{ color: '#333', textDecoration: 'none' }}>Robert A. Bianchi, Esq</a></li>
                  <li><a href="/about/christina-hall" style={{ color: '#333', textDecoration: 'none' }}>Christina Hall, Esq.</a></li>
                  <li><a href="/about/christopher-eaton" style={{ color: '#333', textDecoration: 'none' }}>Christopher A. Eaton, Esq.</a></li>
                  <li><a href="/about/danielle-esposito" style={{ color: '#333', textDecoration: 'none' }}>Danielle M. Esposito, Esq.</a></li>
                  <li><a href="/about/david-bruno" style={{ color: '#333', textDecoration: 'none' }}>David J. Bruno, Esq.</a></li>
                  <li><a href="/about/dennis-kessler" style={{ color: '#333', textDecoration: 'none' }}>Dennis Kessler, Esq.</a></li>
                  <li><a href="/about/paul-dilella" style={{ color: '#333', textDecoration: 'none' }}>Paul A. Di Lella, Esq.</a></li>
                  <li><a href="/about/tricia-margolis" style={{ color: '#333', textDecoration: 'none' }}>Tricia H. Margolis, Esq.</a></li>
                  <li><a href="/careers" style={{ color: '#333', textDecoration: 'none' }}>Careers</a></li>
                  <li><a href="/prosecutors-perspective" style={{ color: '#333', textDecoration: 'none' }}>Prosecutor's Perspective</a></li>
                </ul>
              </li>
              <li style={{ marginTop: '20px' }}><strong>Practice Areas</strong>
                <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '10px' }}>
                  <li style={{ marginTop: '10px' }}><strong>Criminal Defense</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><a href="/practice-areas/appeals" style={{ color: '#333', textDecoration: 'none' }}>Appeals</a></li>
                      <li><a href="/practice-areas/criminal-investigations" style={{ color: '#333', textDecoration: 'none' }}>Criminal Investigations</a></li>
                      <li><a href="/practice-areas/crisis-management" style={{ color: '#333', textDecoration: 'none' }}>Crisis Management</a></li>
                    </ul>
                  </li>
                  <li style={{ marginTop: '10px' }}><strong>Municipal Court</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><a href="/practice-areas/bad-checks" style={{ color: '#333', textDecoration: 'none' }}>Bad Checks</a></li>
                      <li><a href="/practice-areas/disorderly-conduct" style={{ color: '#333', textDecoration: 'none' }}>Disorderly Conduct</a></li>
                      <li><a href="/practice-areas/leaving-scene-accident" style={{ color: '#333', textDecoration: 'none' }}>Leaving the Scene of an Accident</a></li>
                      <li><a href="/practice-areas/resisting-arrest" style={{ color: '#333', textDecoration: 'none' }}>Resisting Arrest</a></li>
                    </ul>
                  </li>
                  <li style={{ marginTop: '10px' }}><a href="/practice-areas/juvenile-crimes" style={{ color: '#333', textDecoration: 'none' }}><strong>Juvenile Crimes</strong></a></li>
                  <li style={{ marginTop: '10px' }}><strong>Sex Crimes</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><a href="/practice-areas/lewdness" style={{ color: '#333', textDecoration: 'none' }}>Lewdness</a></li>
                      <li><a href="/practice-areas/monetary-penalties-sex-offenders" style={{ color: '#333', textDecoration: 'none' }}>Monetary Penalties for Sex Offenders</a></li>
                      <li><a href="/practice-areas/observation-disclosure-sexual-contact" style={{ color: '#333', textDecoration: 'none' }}>Observation & Disclosure of Sexual Contact</a></li>
                      <li><a href="/practice-areas/rape-shield-law" style={{ color: '#333', textDecoration: 'none' }}>Rape Shield Law</a></li>
                      <li><a href="/practice-areas/registration-sex-offenders" style={{ color: '#333', textDecoration: 'none' }}>Registration of Sex Offenders</a></li>
                      <li><a href="/practice-areas/sex-crime-definitions" style={{ color: '#333', textDecoration: 'none' }}>Sex Crime Definitions</a></li>
                      <li><a href="/practice-areas/sexual-assault" style={{ color: '#333', textDecoration: 'none' }}>Sexual Assault</a></li>
                    </ul>
                  </li>
                  <li style={{ marginTop: '10px' }}><strong>White Collar Crimes</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><a href="/practice-areas/credit-card-fraud-theft" style={{ color: '#333', textDecoration: 'none' }}>Credit Card Fraud & Theft</a></li>
                      <li><a href="/practice-areas/forgery" style={{ color: '#333', textDecoration: 'none' }}>Forgery</a></li>
                    </ul>
                  </li>
                  <li style={{ marginTop: '10px' }}><a href="/practice-areas/dwi" style={{ color: '#333', textDecoration: 'none' }}><strong>DWI</strong></a></li>
                  <li style={{ marginTop: '10px' }}><strong>Drug Crimes</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><a href="/practice-areas/distribution-cds" style={{ color: '#333', textDecoration: 'none' }}>Distribution of Controlled Dangerous Substances</a></li>
                      <li><a href="/practice-areas/possession-cds" style={{ color: '#333', textDecoration: 'none' }}>Possession of Controlled Dangerous Substances</a></li>
                      <li><a href="/practice-areas/possession-intent-distribute" style={{ color: '#333', textDecoration: 'none' }}>Possession With the Intent to Distribute</a></li>
                    </ul>
                  </li>
                  <li style={{ marginTop: '10px' }}><strong>Violent Crimes</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><a href="/practice-areas/assault-by-auto" style={{ color: '#333', textDecoration: 'none' }}>Assault By Auto</a></li>
                      <li><a href="/practice-areas/carjacking" style={{ color: '#333', textDecoration: 'none' }}>Carjacking</a></li>
                      <li><a href="/practice-areas/child-cruelty-neglect" style={{ color: '#333', textDecoration: 'none' }}>Child Cruelty & Neglect</a></li>
                      <li><a href="/practice-areas/death-by-auto" style={{ color: '#333', textDecoration: 'none' }}>Death By Auto or Vehicular Homicide</a></li>
                      <li><a href="/practice-areas/domestic-violence" style={{ color: '#333', textDecoration: 'none' }}>Domestic Violence</a></li>
                      <li><a href="/practice-areas/endangering-injured-victim" style={{ color: '#333', textDecoration: 'none' }}>Endangering An Injured Victim</a></li>
                      <li><a href="/practice-areas/endangering-welfare-children" style={{ color: '#333', textDecoration: 'none' }}>Endangering The Welfare of Children</a></li>
                      <li><a href="/practice-areas/harassment" style={{ color: '#333', textDecoration: 'none' }}>Harassment</a></li>
                      <li><a href="/practice-areas/kidnapping" style={{ color: '#333', textDecoration: 'none' }}>Kidnapping</a></li>
                      <li><a href="/practice-areas/manslaughter" style={{ color: '#333', textDecoration: 'none' }}>Manslaughter & Aggravated Manslaughter</a></li>
                      <li><a href="/practice-areas/murder" style={{ color: '#333', textDecoration: 'none' }}>Murder</a></li>
                      <li><a href="/practice-areas/restraining-orders" style={{ color: '#333', textDecoration: 'none' }}>Restraining Orders</a></li>
                      <li><a href="/practice-areas/assault" style={{ color: '#333', textDecoration: 'none' }}>Simple & Aggravated Assault</a></li>
                    </ul>
                  </li>
                  <li style={{ marginTop: '10px' }}><strong>Property Crimes</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><a href="/practice-areas/criminal-mischief" style={{ color: '#333', textDecoration: 'none' }}>Criminal Mischief</a></li>
                      <li><a href="/practice-areas/burglary" style={{ color: '#333', textDecoration: 'none' }}>Burglary</a></li>
                      <li><a href="/practice-areas/motor-vehicle-theft" style={{ color: '#333', textDecoration: 'none' }}>Motor Vehicle Theft</a></li>
                      <li><a href="/practice-areas/robbery" style={{ color: '#333', textDecoration: 'none' }}>Robbery</a></li>
                      <li><a href="/practice-areas/shoplifting" style={{ color: '#333', textDecoration: 'none' }}>Shoplifting</a></li>
                    </ul>
                  </li>
                  <li style={{ marginTop: '10px' }}><a href="/practice-areas/personal-injury" style={{ color: '#333', textDecoration: 'none' }}><strong>Personal Injury</strong></a></li>
                </ul>
              </li>
              <li style={{ marginTop: '20px' }}><strong>Resources</strong>
                <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '10px' }}>
                  <li><a href="/blog" style={{ color: '#333', textDecoration: 'none' }}>Legal Blog</a></li>
                  <li><a href="/inspirational-blog" style={{ color: '#333', textDecoration: 'none' }}>Inspirational Blog</a></li>
                </ul>
              </li>
              <li style={{ marginTop: '20px' }}><strong>Media</strong>
                <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '10px' }}>
                  <li><a href="/podcast" style={{ color: '#333', textDecoration: 'none' }}>Podcast</a></li>
                  <li><a href="/blg-law-talk" style={{ color: '#333', textDecoration: 'none' }}>BLG Law Talk</a></li>
                  <li><a href="/tv-appearances" style={{ color: '#333', textDecoration: 'none' }}>TV Appearances</a></li>
                  <li><a href="/publications" style={{ color: '#333', textDecoration: 'none' }}>Publications</a></li>
                  <li><a href="/photos" style={{ color: '#333', textDecoration: 'none' }}>Photo Gallery</a></li>
                  <li style={{ marginTop: '10px' }}><strong>Radio</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><a href="/radio/trump-sued-pandemic" style={{ color: '#333', textDecoration: 'none' }}>Bob Bianchi On NJ 101.5: Can Trump Be Sued For $1 Trill. Over Pandemic?</a></li>
                      <li><a href="/radio/david-bruno-lieberman-live" style={{ color: '#333', textDecoration: 'none' }}>ICYMI: David Bruno On "Lieberman Live" On Howard Stern 101</a></li>
                      <li><a href="/radio/tough-justice-podcast" style={{ color: '#333', textDecoration: 'none' }}>Bianchi & Bruno Appeared On "Tough Justice Podcast"</a></li>
                      <li><a href="/radio/police-practices" style={{ color: '#333', textDecoration: 'none' }}>Watch Bianchi Law Group Partner Bob Bianchi Speak About Police Practices</a></li>
                      <li><a href="/radio/bob-bianchi-lieberman-live" style={{ color: '#333', textDecoration: 'none' }}>ICYMI: Bob Bianchi Appeared On "Lieberman Live" On Howard Stern 101</a></li>
                      <li><a href="/radio/off-duty-officer-shooting" style={{ color: '#333', textDecoration: 'none' }}>Off Duty NJ Police Officer Shoots Man Outside Bar: Bob Bianchi Analyzes</a></li>
                      <li><a href="/radio/nj-law-talk" style={{ color: '#333', textDecoration: 'none' }}>Bob Bianchi Appears On NJ Law Talk</a></li>
                    </ul>
                  </li>
                  <li><a href="/webinars" style={{ color: '#333', textDecoration: 'none' }}>Webinars</a></li>
                </ul>
              </li>
              <li style={{ marginTop: '20px' }}><strong>Outreach</strong>
                <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '10px' }}>
                  <li><a href="/outreach/addiction-program" style={{ color: '#333', textDecoration: 'none' }}>Addiction Program</a></li>
                  <li><a href="/outreach/career-development" style={{ color: '#333', textDecoration: 'none' }}>Career Development</a></li>
                  <li><a href="/outreach/criminal-justice-program" style={{ color: '#333', textDecoration: 'none' }}>Criminal Justice Program</a></li>
                  <li><a href="/outreach/domestic-violence-program" style={{ color: '#333', textDecoration: 'none' }}>Domestic Violence Outreach Program</a></li>
                  <li><a href="/outreach/events" style={{ color: '#333', textDecoration: 'none' }}>Events</a></li>
                  <li><a href="/outreach/mental-health-program" style={{ color: '#333', textDecoration: 'none' }}>Mental Health Program</a></li>
                  <li><a href="/outreach/police-practices-program" style={{ color: '#333', textDecoration: 'none' }}>Police Practices Program</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px' }}>Call Now</a>
        </div>
      </div>
    </div>
  )
}