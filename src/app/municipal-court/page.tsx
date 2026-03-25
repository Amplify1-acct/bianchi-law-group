import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Municipal Court Lawyers - The Bianchi Law Group',
}

export default function MunicipalCourtPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Municipal Court Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '20px' }}>Preventing Minor Offenses From Derailing Our Clients' Lives</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            New Jersey state law is a bit unique compared to other states. There are different categories of criminal acts that can make defending yourself against charges a challenging endeavor. However, the Garden State is similar in the fact that Municipal offenses are heard in Municipal Court. While the county prosecutor's office might try to convince you that a conviction in municipal court will carry no major repercussions, the truth is that they're simply trying to speed things along. Don't play their game by their rules. A New Jersey Municipal Court lawyer will be able to assist.
          </p>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At The Bianchi Law Group, you'll work with a team of aggressive legal advocates who will not stop fighting for you. There are former prosecutors on our team, and this means your legal representation has in-depth insight into the inner workings of the system. We'll fight to ensure the Municipal Court's decision is favorable for you. From simple assault to reckless driving and any other accusation with the potential for fines and county jail time — we're here to fight for you.
          </p>
          
          <p style={{ lineHeight: '1.8', marginBottom: '30px', fontWeight: 'bold' }}>
            Contact us today for your free consultation.
          </p>
          
          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginBottom: '20px', marginTop: '40px' }}>What Offenses Are Municipal Court Offenses?</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Municipal Court offenses, including disorderly persons and petty disorderly offenses are often considered to be "quasi-criminal," because they can range from certain traffic offenses to minor "offenses" that can be found in the Criminal Code. Even still, offenses in Municipal Court can have severe consequences, including DMV points, hefty fines, loss of your driver's license, insurance surcharges, license suspension, and jail sentences.
          </p>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            You also must know that despite the fact that these municipal court cases sound minor, you are still entitled to many of the same protections you have in criminal matters. Most importantly, you are still entitled to the right to legal representation and a fair trial.
          </p>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginTop: '20px' }}>Call Now</a>
        </div>
      </div>
    </div>
  )
}