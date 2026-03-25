import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey DWI Lawyers - The Bianchi Law Group',
}

export default function CriminalDefenseDwiPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey DWI Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862-292-4442 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginTop: 0 }}>Helping Clients Avoid a DWI Conviction</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Driving under the influence can change your life forever. Aside from the grave danger that's imposed upon yourself and other drivers on the road, the consequences of driving while intoxicated can land you a lengthy sentence in jail, result in high fines, and lead to license suspension. New Jersey state law on driving while intoxicated (DWI), also referred to as driving under the influence (DUI), is strict and penalizes to the full extent those found to be drunk driving or driving under the influence of drugs.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At The Bianchi Law Group, LLC, our DWI defense attorneys understand that accidents happen. We believe you should have the right to defend yourself against any mistakes you make and should have a fighting chance at having your charges dismissed entirely.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Under the United States Constitution, every individual accused of a crime has the right to a fair trial and a right to quality legal representation. At The Bianchi Law Group, LLC, we offer a free consultation to anyone accused of DWI charges. We pledge to offer sound legal advice and a clear path for your defense moving forward. You deserve to understand the full extent of the law and every option you have for reducing your imminent penalties.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '30px' }}>
            Contact our compassionate, knowledgeable team of former prosecutors as soon as you are placed under DWI arrest. We'll provide a free consultation and give you the answers and hope you need at each step of your proceedings. You can reach our law offices at <a href="tel:8622924442" style={{ color: '#8B1A1A', fontWeight: 'bold' }}>862-292-4442</a>.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginTop: '40px' }}>What Are New Jersey's DWI Laws?</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Because of the dangers of drunk driving, New Jersey takes a strong stance against individuals who put others' lives at risk by driving while inebriated. However, this doesn't mean that everyone who is arrested for DWI is guilty or deserves maximum sentencing. You should understand some aspects of the law behind your DWI charges so you appreciate the importance of skilled legal representation.
          </p>

          <div style={{ background: '#f9f9f9', padding: '30px', marginTop: '30px', borderLeft: '4px solid #8B1A1A' }}>
            <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Why Choose The Bianchi Law Group?</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Former prosecutors with insider knowledge</li>
              <li>Free initial consultation</li>
              <li>Aggressive defense strategies</li>
              <li>Extensive experience with DWI cases</li>
              <li>Personalized attention to your case</li>
            </ul>
          </div>
        </div>
        <div>
          <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', marginBottom: '20px' }}>
            <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
            <p>Call us at <strong>862-292-4442</strong></p>
            <a href="tel:8622924442" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginBottom: '15px' }}>Call Now</a>
            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Available 24/7 for emergency consultations</p>
          </div>
          <div style={{ background: '#8B1A1A', color: '#fff', padding: '30px', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>Practice Areas</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>• DWI/DUI Defense</li>
              <li>• Criminal Defense</li>
              <li>• Traffic Violations</li>
              <li>• License Suspension</li>
              <li>• Drug-Related DWI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}