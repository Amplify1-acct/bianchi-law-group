import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Disorderly Conduct Lawyers - The Bianchi Law Group',
}

export default function MunicipalCourtDisorderlyConduct() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Disorderly Conduct Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '20px' }}>Fighting to Stop the Government From Turning Minor Disturbances Into Life-Changing Consequences</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            In New Jersey, a charge for disorderly conduct is set forth in N.J.S.A. 2C:33-2. Disorderly conduct is applicable to a wide range of conduct, including but not limited to fighting, being drunk in public, and using offensive language. A person doesn't even have to create a physically dangerous condition. Unfortunately, police officers frequently use this criminal offense when they can't think of anything else to charge a person with. People have been arrested for practicing free speech even when they have a legitimate purpose for their actions. That's why you need a New Jersey disorderly conduct lawyer.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At The Bianchi Law Group, we know that a conviction for any criminal offense can affect persons for their entire lives. Prosecutors will tell you that it's a minor charge and that you should just accept a plea deal. They'll likely also tell you that not accepting the deal could mean increased charges or penalties, and they'll explain the scary risk thereof. However, it's important to remember that prosecutors only want one thing: <strong>a conviction.</strong>
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '30px' }}>
            Don't give them what they want without a fight. Contact our law firm today for a free consultation. We'll help you better understand how to best handle your situation.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginBottom: '20px' }}>What Are the Specifics of a Disorderly Conduct Charge?</h2>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Disorderly conduct charges in New Jersey can take different forms. These allegations typically involve either improper behavior — defined as violent or tumultuous conduct creating a public disturbance or threat to public safety — or using unreasonably loud or offensive language to provoke or cause alarm. The law focuses on acts committed in public spaces, but private incidents can escalate in situations where conduct ends up threatening public order.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            While disorderly conduct is considered a petty disorderly persons offense in most cases, the consequences can still be serious and long-lasting. A conviction can result in fines, jail time, and a permanent criminal record that may affect employment opportunities, professional licenses, and other aspects of your life.
          </p>

          <div style={{ background: '#f9f9f9', padding: '30px', marginTop: '30px', borderLeft: '4px solid #8B1A1A' }}>
            <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Why Choose The Bianchi Law Group?</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Experienced criminal defense attorneys</li>
              <li>Free initial consultation</li>
              <li>Aggressive defense strategies</li>
              <li>Personalized attention to your case</li>
              <li>Proven track record in municipal court</li>
            </ul>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginBottom: '20px' }}>Call Now</a>
          
          <h3 style={{ color: '#8B1A1A', marginTop: '30px' }}>Practice Areas</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="/municipal-court/disorderly-conduct/" style={{ color: '#333', textDecoration: 'none' }}>Disorderly Conduct</a></li>
            <li><a href="/municipal-court/" style={{ color: '#333', textDecoration: 'none' }}>Municipal Court Defense</a></li>
            <li><a href="/" style={{ color: '#333', textDecoration: 'none' }}>All Practice Areas</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}