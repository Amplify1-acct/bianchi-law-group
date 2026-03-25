import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Distribution of Controlled Dangerous Substance Lawyers - The Bianchi Law Group',
}

export default function CriminalDefenseDistributionOfCdsPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Distribution of Controlled Dangerous Substance Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <section style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              In New Jersey, Distribution of Controlled Dangerous Substances and Possession with the Intent to Distribute Controlled Dangerous Substances are two of the most common allegations heard in Superior Courts across New Jersey. Both crimes are codified at N.J.S.A. 2C:35-5.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              N.J.S.A. 2C:35-5 criminalizes the manufacturing, distributing or dispensing, or to the possession with intent to manufacture, distribute or dispense, a controlled dangerous substance, controlled substance analog or counterfeit controlled dangerous substance.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '20px' }}>Former Distribution of CDS Prosecutors</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              The Bianchi Law Group is made up of former trial prosecutors and other "of counsel" attorneys who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey including Distribution of CDS.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '20px' }}>Certified Criminal Trial Attorneys by the New Jersey Supreme Court</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '15px' }}>
              Partners <strong>Robert A. Bianchi</strong> and <strong>David J. Bruno</strong> are also both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              In New Jersey, the New Jersey Supreme Court has a certification committee which classifies certain New Jersey Lawyers as Certified Trial Attorneys. The process requires the prospective attorneys to satisfy strict criteria including extensive jury trials, a primary focus in criminal law, an application submission, a peer review process, a character and background check and to pass a written examination.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Only 250 of over 98,000 lawyers (less than 1%) are designated as certified criminal trial attorneys by the New Jersey Supreme Court. This should be an important factor in finding a New Jersey criminal defense attorney to represent you. Many New Jersey Lawyers describe themselves as trial attorneys, but most do not have the New Jersey Court's distinction as Certified Criminal Trial Attorneys.
            </p>
          </section>

          <section style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginBottom: '20px' }}>Why Choose The Bianchi Law Group?</h2>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Former prosecutors with insider knowledge</li>
              <li style={{ marginBottom: '10px' }}>Certified Criminal Trial Attorneys by the NJ Supreme Court</li>
              <li style={{ marginBottom: '10px' }}>Extensive experience with Distribution of CDS cases</li>
              <li style={{ marginBottom: '10px' }}>Aggressive defense strategies</li>
              <li style={{ marginBottom: '10px' }}>Free initial consultation</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginBottom: '20px' }}>Contact Us Today</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              If you or a loved one has been charged with Distribution of Controlled Dangerous Substances in New Jersey, contact The Bianchi Law Group today for a free consultation. Our experienced criminal defense attorneys are ready to fight for your rights.
            </p>
          </section>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginBottom: '20px' }}>Call Now</a>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
          <h4 style={{ color: '#8B1A1A' }}>Practice Areas</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="/criminal-defense" style={{ color: '#333', textDecoration: 'none' }}>Criminal Defense</a></li>
            <li><a href="/criminal-defense/distribution-of-cds" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>Distribution of CDS</a></li>
            <li><a href="/criminal-defense/drug-crimes" style={{ color: '#333', textDecoration: 'none' }}>Drug Crimes</a></li>
            <li><a href="/criminal-defense/dui-dwi" style={{ color: '#333', textDecoration: 'none' }}>DUI/DWI</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}