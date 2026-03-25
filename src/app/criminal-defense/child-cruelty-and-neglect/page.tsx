import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Child Cruelty & Neglect Lawyers - The Bianchi Law Group',
}

export default function CriminalDefenseChildCrueltyAndNeglectPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Child Cruelty & Neglect Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginTop: 0 }}>Aggressively Defending Clients Against Extreme Criminal Allegations</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Child Neglect can result in Division of Child Protection and Permanency (DCP&P) charges against a parent or guardian and may also result in criminal charges. N.J.S.A. 9:6-3 prohibits any abuse, abandonment, cruelty to, or neglect of children. This fourth-degree crime carries less of a sentence than Endangering the Welfare of a child, in violation of N.J.S.A. 2C:24-4, which is a second-degree crime. However, this doesn't mean the N.J.S.A. 9:6-3 charges are not serious. As an indictable offense, a person could find themselves serving a lengthy prison sentence. That's why it's critical to have a New Jersey child cruelty and neglect lawyer on your side.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At The Bianchi Law Group, our law firm has seen what can happen to individuals convicted of child abuse, neglect, and similar crimes. In addition to incarceration, a person could face significant fines and other criminal penalties — Even worse, they could lose their child(ren) to New Jersey's Division of Child Protection and Permanency (DCP&P). Our legislature and courts take New Jersey child abuse allegations seriously, and they certainly should. Unfortunately, the state's desire to prosecute these cases to the maximum can result in innocent people facing disastrous outcomes.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Luckily, you don't have to go through this alone. Contact our New Jersey child cruelty and neglect lawyers today for your free consultation.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginTop: '40px' }}>Why Hire Former Child Cruelty or Neglect Prosecutors?</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            The Bianchi Law Group is made up of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey, including Child Neglect or Cruelty. If you've found yourself facing such charges — which can stem from many issues — our experienced legal team understands both sides of the courtroom and will use that knowledge to build the strongest possible defense for your case.
          </p>

          <div style={{ background: '#f9f9f9', padding: '30px', marginTop: '40px', borderLeft: '4px solid #8B1A1A' }}>
            <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Contact The Bianchi Law Group Today</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '10px' }}>
              If you or a loved one is facing child cruelty or neglect charges in New Jersey, don't wait. Contact our experienced criminal defense attorneys for a free consultation.
            </p>
            <p style={{ lineHeight: '1.8', margin: 0 }}>
              <strong>Call us at 862.225.1965</strong>
            </p>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginBottom: '20px' }}>Call Now</a>
          
          <h4 style={{ color: '#8B1A1A', fontSize: '1.1rem', marginTop: '30px' }}>Practice Areas</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="/criminal-defense" style={{ color: '#333', textDecoration: 'none' }}>Criminal Defense</a></li>
            <li><a href="/criminal-defense/domestic-violence" style={{ color: '#333', textDecoration: 'none' }}>Domestic Violence</a></li>
            <li><a href="/criminal-defense/drug-crimes" style={{ color: '#333', textDecoration: 'none' }}>Drug Crimes</a></li>
            <li><a href="/criminal-defense/dui-dwi" style={{ color: '#333', textDecoration: 'none' }}>DUI/DWI</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}