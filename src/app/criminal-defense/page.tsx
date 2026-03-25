import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Criminal Defense Lawyers - The Bianchi Law Group',
}

export default function CriminalDefensePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Criminal Defense Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862-292-4442 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '20px' }}>Protecting Clients Facing Mild to Serious Criminal Charges</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            When you are faced with a criminal charge, the outcome has the potential to be life-altering, and the law can appear complex and almost impossible to overcome. Even so-called minor crimes can result in a permanent criminal record that makes obtaining employment, housing, and professional licensing difficult.
          </p>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Because a conviction is so serious, it is important to realize that there is no room for delay or error when it comes to presenting your defense. The sooner you contact an experienced and well-respected New Jersey criminal defense attorney, the faster your defense can be assembled and the stronger that defense will be. From the very beginning, there are specific steps that can be taken towards protecting your rights and working towards your best interests.
          </p>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At this critical time, you need a New Jersey criminal defense attorney you can count on to stand by your side and fight for you in and out of the courtroom. You can trust our talented, compassionate legal team to give you the legal counsel and representation you need. Call <strong>862-292-4442</strong> today to schedule your free consultation with our NJ criminal defense attorneys.
          </p>
          
          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px' }}>How Can Working with Skilled Trial Lawyers Protect Your Rights?</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Defending yourself against criminal accusations can be overwhelming and stressful. You need someone on your side who understands the nuances of New Jersey criminal law and is not afraid to fight for you. You should also have an ally who has a deep understanding of your rights and will protect your freedoms regardless of obstacles that arise.
          </p>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Our New Jersey criminal lawyers have handled countless cases within the realm of criminal law. For example, we handle theft offenses, sex crimes, simple and aggravated assault, white-collar crimes, DWI, domestic violence, and more. We know the best strategies for defending clients facing a wide range of criminal charges.
          </p>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862-292-4442</strong></p>
          <a href="tel:8622924442" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginBottom: '20px' }}>Call Now</a>
          
          <h3 style={{ color: '#8B1A1A', marginTop: '30px' }}>Practice Areas</h3>
          <ul style={{ lineHeight: '2', paddingLeft: '20px' }}>
            <li>Theft Offenses</li>
            <li>Sex Crimes</li>
            <li>Assault</li>
            <li>White-Collar Crimes</li>
            <li>DWI</li>
            <li>Domestic Violence</li>
          </ul>
        </div>
      </div>
    </div>
  )
}