import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Juvenile Crime Lawyers - The Bianchi Law Group',
}

export default function JuvenileCrimesPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '60px 40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>New Jersey Juvenile Crime Attorneys</h1>
        <p style={{ margin: '10px 0 0', fontSize: '1.1rem' }}>Call 862.225.1965 for a free consultation</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginTop: 0 }}>Fighting to Help Youth in Our State Avoid Life-Altering Consequences</h2>
          
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            A juvenile crime, no matter how minor or severe, can impact your child for the rest of their life. Many juveniles run into trouble with law enforcement for criminal acts ranging from shoplifting and underage drinking to assault or domestic violence. If your child has been arrested in New Jersey, you need to work with an attorney who is accustomed to this unique type of legal situation. The simple fact is that not all legal professionals are experienced in this alternate justice system. That's why it's critical to seek the services of a New Jersey juvenile crime lawyer.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            At The Bianchi Law Group, our dedicated legal team shares broad experience in the family court system — where every case classified as a juvenile criminal offense is dealt with. Persons under the age of eighteen are legally considered juveniles and are typically treated with more leniency than individuals who go through adult criminal court. However, there are many factors involved in every case, and the mitigating circumstances surrounding the criminal act may warrant a more severe penalty for your child. If your child gets into trouble with the law, you need to consult with an attorney right away.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            Some older juveniles may be tried as adults before a judge, which will likely lead to more severe penalties and a more difficult case to defend. Consult with The Bianchi Law Group, LLC as soon as your child comes in contact with law enforcement. You need strong, aggressive legal representation who cares about your child's future. With the right attorney, you may be able to greatly reduce charges or even have them dropped entirely. If your child has been accused of a crime, no matter how minor or severe, contact The Bianchi Law Group, LLC right away.
          </p>

          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            You deserve to feel confident and assured about your child's future.
          </p>
        </div>
        <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px' }}>
          <h3 style={{ color: '#8B1A1A', marginTop: 0 }}>Free Consultation</h3>
          <p>Call us at <strong>862.225.1965</strong></p>
          <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '15px', textAlign: 'center', textDecoration: 'none', borderRadius: '4px' }}>Call Now</a>
        </div>
      </div>
    </div>
  )
}