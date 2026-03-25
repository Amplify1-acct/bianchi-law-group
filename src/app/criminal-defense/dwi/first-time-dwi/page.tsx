import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First-Time DWI Lawyer in New Jersey - The Bianchi Law Group, LLC',
}

export default function CriminalDefenseDwiFirstTimeDwiPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey First-Time DWI Defense Attorney</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '20px' }}>Fighting to Stop Impaired Driving Charges From Destroying Our Clients' Lives</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Adults are allowed to have a drink in their own homes without worrying about authorities knocking down their doors. However, they are not allowed to get behind the wheel once their blood alcohol concentration (BAC) reaches a certain legal limit. If they do so and get stopped by the police, they could face consequences ranging from license suspension to jail time. Our state is more strict than most regarding individuals facing their first offense. That's why you should speak with a New Jersey first-time DWI lawyer before doing anything else.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At The Bianchi Law Group, we understand that drunk driving is a serious problem in our state. However, we also recognize that many people face prosecution — and even conviction — when they've done nothing wrong. There have been several recent incidents where faulty breath test results called tens of thousands of drunk driving convictions into question. In one of those situations, police hid the fact that their machines were giving inaccurate results. Additionally, we believe that a one-time mistake shouldn't define your life.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '40px' }}>
            That's why our first offense DWI lawyers in New Jersey will fight to secure a favorable outcome on your behalf. Contact us today for a free initial consultation.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '1.8rem', marginBottom: '20px' }}>What Are the Penalties for an Impaired Driving Conviction in New Jersey?</h2>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            New Jersey DWI penalties are severe, even for a person's first offense. Potential penalties can get worse based on a person's blood alcohol concentration at the time of arrest.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            For a first offense, potential penalties include:
          </p>

          <h3 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '15px', marginTop: '30px' }}>BAC 0.08% to 0.09% (Lower Tier)</h3>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            DWI cases in which the person's blood alcohol concentration is 0.08 percent or higher but less than 0.10 percent or the person operates a motor vehicle while under the influence of intoxicating liquor are the lowest tier of first-time DWI offenses in New Jersey.
          </p>

          <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', marginTop: '40px' }}>
            <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Contact The Bianchi Law Group Today</h3>
            <p style={{ lineHeight: '1.8' }}>
              If you're facing first-time DWI charges in New Jersey, don't wait. Contact our experienced legal team for a free consultation to discuss your case and explore your defense options.
            </p>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginBottom: '20px' }}>Call Now</a>
          
          <h4 style={{ color: '#8B1A1A', marginTop: '30px', marginBottom: '15px' }}>Practice Areas</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="/criminal-defense/dwi/" style={{ color: '#333', textDecoration: 'none' }}>DWI Defense</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/criminal-defense/" style={{ color: '#333', textDecoration: 'none' }}>Criminal Defense</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}