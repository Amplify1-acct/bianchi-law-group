import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Carjacking Lawyers - The Bianchi Law Group',
}

export default function CriminalDefenseCarjackingPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Carjacking Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginTop: 0 }}>Building Solid Legal Defense Strategies Against the Most Serious Crimes</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Many crimes under New Jersey law carry severe punishments, but few are treated as strictly as carjacking. This offense could land a person in prison for decades, so it's important to not procrastinate or "hope for the best." You need a New Jersey carjacking defense lawyer who understands the law and has a proven record of securing favorable outcomes for their clients. The rest of your life could literally depend on the decisions you make today, so take time to find legal representation who will fight to get the best possible outcome in your case.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At The Bianchi Law Group, our team of dedicated legal professionals has seen what happens when defendants are convicted of carjacking. Unlike auto theft, this criminal offense will never be charged as a second-degree crime. The state simply takes this matter too seriously. In fact, prosecutors are not allowed to downgrade to a lesser degree crime. This means the government's primary goal becomes permanently depriving you of your freedom — from decades in prison to a lifetime of indirect consequences from a felony conviction.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Fortunately, you don't have to go through this alone. Contact us today for your free consultation.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginTop: '40px' }}>What Constitutes Carjacking Under New Jersey Law?</h2>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            In New Jersey, Carjacking is a very serious first-degree crime and can be punishable with up to 30 years in New Jersey State Prison. N.J.S.A. 2C:15-2. A person is guilty of carjacking if in the course of committing an unlawful taking of a motor vehicle, as defined in N.J.S.A. 39:1-1, or in an attempt to commit an unlawful taking of a motor vehicle if they:
          </p>

          <ul style={{ lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Inflict bodily injury or use force upon an occupant or person in possession or control of a motor vehicle;</li>
            <li>Threaten an occupant or person in control with, or purposely or knowingly puts an occupant or person in control of the motor vehicle in fear of immediate bodily injury;</li>
            <li>Commit or threaten immediately to commit any crime of the first or second degree; or</li>
            <li>Operate or cause the motor vehicle to be operated with the person who was in possession or control or was an occupant of the motor vehicle at the time of the taking remaining in the vehicle.</li>
          </ul>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Given the severity of carjacking charges, it is essential to have experienced legal representation who can examine every detail of your case and build a strong defense strategy.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginTop: '40px' }}>Why Choose The Bianchi Law Group?</h2>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            When facing first-degree carjacking charges, you need attorneys who understand the complexities of New Jersey criminal law and who will aggressively defend your rights. Our experienced team has successfully handled serious criminal cases and knows how to challenge the prosecution's evidence, negotiate with prosecutors, and fight for the best possible outcome.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Don't wait to secure legal representation. Contact The Bianchi Law Group today for your free consultation and let us start building your defense.
          </p>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginBottom: '20px' }}>Call Now</a>
          
          <h3 style={{ color: '#8B1A1A', marginTop: '30px' }}>Practice Areas</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><a href="/criminal-defense" style={{ color: '#333', textDecoration: 'none' }}>Criminal Defense</a></li>
            <li style={{ marginBottom: '10px' }}><a href="/criminal-defense/carjacking" style={{ color: '#8B1A1A', fontWeight: 'bold', textDecoration: 'none' }}>Carjacking</a></li>
          </ul>

          <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '4px' }}>
            <h4 style={{ color: '#8B1A1A', marginTop: 0 }}>Available 24/7</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>We understand that criminal charges don't happen on a schedule. That's why we're available around the clock to assist you.</p>
          </div>
        </div>
      </div>
    </div>
  )
}