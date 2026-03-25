import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Drug Crime Lawyers - The Bianchi Law Group',
}

export default function DrugCrimesPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Drug Crimes Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            In New Jersey, possession of controlled dangerous substances is one of the most commonly occurring charges. Drug crimes can severely negatively impact your criminal record, which can put you at risk of being ineligible for certain types of employment in the future. A drug charge can change your life, from spending years in prison, to carrying around a criminal record that can haunt you forever.
          </p>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            Sometimes, innocent people can get caught in bad situations. If you've been arrested for possession of a controlled dangerous substances, you need to work with a New Jersey drug crime attorney with a strong understanding of the associated law. Don't run the risk of letting a drug charge change your life forever.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginTop: '40px', marginBottom: '20px' }}>
            What Kind of Drug Charges are Recognized By New Jersey Law?
          </h2>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            According to New Jersey state law, the idea of possession signifies an individual's intentional control of a drug, accompanied by knowledge of that individual's possession, and a knowledge of the drug's capabilities and characteristics.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Beyond possession, there are also charges that penalize an intent to distribute. For example, if a law enforcement official discovers a controlled dangerous substance in an individual's vehicle, such as narcotics or a street drug, that individual will be arrested for drug possession.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            However, if that individual is discovered to be in possession of a drug in large quantities with, for example, a scale and many empty bags, it can be inferred that that individual had an intent to distribute the drugs. An intent to distribute charge carries more weight than simple possession, and is a more serious drug charge.
          </p>

          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginTop: '40px', marginBottom: '20px' }}>
            What is Considered a Controlled Substance in New Jersey?
          </h2>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Under New Jersey state legislature, a controlled substance is a drug whose use and possession is regulated by the law, including your typical "street drugs," but also extending to prescription drugs as well.
          </p>

          <div style={{ background: '#f9f9f9', padding: '30px', marginTop: '40px', borderLeft: '4px solid #8B1A1A' }}>
            <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Facing Drug Charges?</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '15px' }}>
              Don't let a drug charge impact your future. Contact The Bianchi Law Group today for experienced legal representation.
            </p>
            <a href="tel:8622251965" style={{ display: 'inline-block', background: '#8B1A1A', color: '#fff', padding: '12px 30px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
              Call 862.225.1965
            </a>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px', marginBottom: '20px' }}>Call Now</a>
          
          <h4 style={{ color: '#8B1A1A', marginTop: '30px', marginBottom: '15px' }}>Practice Areas</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="/criminal-defense" style={{ color: '#333', textDecoration: 'none' }}>Criminal Defense</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/criminal-defense/drug-crimes" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>Drug Crimes</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/contact" style={{ color: '#333', textDecoration: 'none' }}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}