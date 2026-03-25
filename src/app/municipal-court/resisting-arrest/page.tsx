import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Resisting Arrest Lawyers - The Bianchi Law Group',
}

export default function MunicipalCourtResistingArrestPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Resisting Arrest Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginTop: 0 }}>Staunch Legal Advocacy to Help You Avoid Serious Penalties</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            In New Jersey, an individual who is placed under arrest by a law enforcement officer must adhere to all commands and allow the officer to arrest them. This is typically true even if it's later found that the police officer did not have probable cause to arrest or was acting unlawfully. Resisting arrest is codified in N.J.S.A. 2C:29-2 and is considered a very serious crime. If convicted, the potential penalties could destroy a person's life. Fortunately, there are ways to fight back. New Jersey resisting arrest lawyers may be able to assist.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At The Bianchi Law Group, we know how strict New Jersey resisting arrest law can be. Even if an officer isn't engaged in a lawful arrest, state law does not allow physical non-compliance. There are other ways to be non-compliant — such as "passive resistance" (i.e., refusing to walk) — but most legal professionals recommend dealing with unlawful arrest cases in court rather than on the streets. Regardless of the situation you find yourself in, the state is likely to defer to the official authority of the arresting police officer.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '30px' }}>
            However, this doesn't mean a conviction is unavoidable. Contact us today for a free consultation.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginTop: '40px' }}>Why Work With Former Prosecutors?</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            The Bianchi Law Group is made up of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey. They will defend you for all federal and state crimes in New Jersey, including Resisting Arrest. When a law enforcement officer announces that you're under arrest, the difficulties you'll face are already challenging. If the officer decides to add resisting arrest to the charges, it may seem like a favorable outcome isn't possible. Fortunately, there may still be hope.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Whether you're accused of merely eluding officer custody or facing more serious allegations, our experienced legal team understands both sides of the courtroom and can craft a strategic defense tailored to your specific circumstances.
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