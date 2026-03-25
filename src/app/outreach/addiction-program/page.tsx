import Image from 'next/image'

export default function OutreachAddictionProgramPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#8B1A1A', padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>The Bianchi Law Group</div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
            <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
            <a href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a>
            <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Addiction Program</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Comprehensive legal and recovery support for those struggling with addiction
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        {/* Main Content - 2/3 */}
        <main style={{ color: '#fff' }}>
          
          {/* Introduction */}
          <section style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              The Bianchi Law group attorneys recognize that most of our clients come to us addicted and suffering. Oftentimes, these addictions were the cause of their legal troubles. Now, their legal troubles have compounded the difficulties they were already confronting in the journey of their lives.
            </p>
          </section>

          {/* Our Addiction Program Includes */}
          <section style={{ marginBottom: '3rem', backgroundColor: '#2a2a2a', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #8B1A1A' }}>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>Our Addiction Program includes:</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.8' }}>
                <span style={{ position: 'absolute', left: 0, color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                <strong>Mr. Bianchi's Grateful Way Presentation</strong>, which is a perfect presentation for those suffering from addiction issues. (Please see our Grateful Way Program on our BLG Program tab);
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.8' }}>
                <span style={{ position: 'absolute', left: 0, color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                <strong>Working with a gifted team</strong> of addiction and mental health providers to assist in the right selection of the best professional and/or facility for treatment for each individual client;
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.8' }}>
                <span style={{ position: 'absolute', left: 0, color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                <strong>Lectures to addiction and mental health providers</strong> on the criminal justice system, how it operates, and importantly how to bridge "the gap" of a lack of understanding that exists between the legal and addiction professions, to maximize services to the clients in both professional environments;
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.8' }}>
                <span style={{ position: 'absolute', left: 0, color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                <strong>Education and lecturing</strong> to students and community groups on the issues of addiction and the interplay with the criminal justice system;
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.8' }}>
                <span style={{ position: 'absolute', left: 0, color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                <strong>Working with policymakers</strong>, legislators, and members of the legal profession to better understand the addiction process and provide alternatives to incarceration.
              </li>
              <li style={{ paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.8' }}>
                <span style={{ position: 'absolute', left: 0, color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                Contact a member of our staff so we can tailor our program to your specific needs;
              </li>
            </ul>
          </section>

          {/* Philosophy Section */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{ backgroundColor: '#8B1A1A', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8', fontStyle: 'italic', textAlign: 'center' }}>
                Addictions are a disease that need treatment, care, compassion and an innovative legal approach in a legal system that for too long has misunderstood the cycles of addiction.
              </p>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              At The Bianchi Law Group, our attorneys have extensive training and regularly interface, with mental health and addiction professionals to globally address a client's treatment with their legal matter, so as to achieve maximum results for addiction remediation and optimal legal results.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Our understanding of the cycle of addiction, along with our proactive attempts to help navigate our clients through their suffering, is not only good for their legal case but perhaps more importantly, for the entire life of that client. Some of our greatest compliments come from clients who are not only impressed with our legal skills but more importantly, thank us for caring about them as a person.
            </p>
          </section>

          {/* Types of Addictions */}
          <section style={{ marginBottom: '3rem', backgroundColor: '#2a2a2a', padding: '2rem', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '1.5rem' }}>Understanding All Forms of Addiction</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Addictions come in many forms from substance abuse, anger management, numerous internet addictions, gambling addictions, and personality addictions, as well. Addiction to certain negative personality traits often leads our clients to "get into trouble." We do not judge. We only want to be there to help.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              In truth, most all people are addicted to patterns of negative behavior (not just in the traditional sense to substances) where recovery can create a more fulfilled and joyful life. These other areas of addiction are often overlooked and not addressed. The Bianchi Law Group Community Affairs Outreach Program, however, works with legal and addiction specialists to educate groups about all addictions to achieve better integration of services between experts in the legal and addiction fields to better serve our clients and educate the community.
            </p>
          </section>

          {/* Mr. Bianchi's Background */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '1.5rem' }}>Leadership in Mental Health & Addiction</h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Mr. Bianchi's commitment to the mental health and addiction fields as a Prosecutor was impressive. He spent years working with virtually all of the County's mental health providers designing and implementing Morris County's first Mental Health Court Program. This unique and proactive program worked with the jails, defense attorneys, and courts to provide alternatives to incarceration for persons suffering from mental health or addiction issues. The program was a tremendous success and in combination with his support of the Drug Court Program, assisted many defendants to successfully recover from their addiction, rather than go to prison.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Mr. Bianchi currently sits on the Board of Directors at Daytop Village which is a premiere impatient drug treatment facility for adolescents. Mr. Bianchi and Mr. Bruno are passionate about redefining addiction in ways that better help people navigate these sufferings, and as a community to provide a more proactive and effective strategy for handling this societal issue head on.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Mr. Bianchi and Mr. Bruno also were trained in 2013 by the famous psychologist and author Dr. Brene Brown at her Daring Way course in San Antonio, Texas. This experience was a great opportunity for us to learn from one of the leading experts in vulnerability, courage, and compassion.
            </p>
          </section>

          {/* Call to Action */}
          <section style={{ backgroundColor: '#8B1A1A', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to Get Help?</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Contact us today to learn more about our Addiction Program and how we can help you or your loved one.
            </p>
            <a href="#contact-form" style={{ display: 'inline-block', backgroundColor: '#fff', color: '#8B1A1A', padding: '1rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
              CLICK HERE TO EMAIL US
            </a>
          </section>

        </main>

        {/* Sidebar - 1/3 */}
        <aside>
          
          {/* Contact Form */}
          <div id="contact-form" style={{ backgroundColor: '#2a2a2a', padding: '2rem', borderRadius: '8px', position: 'sticky', top: '2rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Contact Us</h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label htmlFor="subject" style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '1rem', fontFamily: 'inherit' }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '1rem', borderRadius: '4px', border: 'none', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a52020'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
              >
                Send Message
              </button>
            </form>

            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#8B1A1A', borderRadius: '4px', textAlign: 'center' }}>
              <p style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Call Us Now</p>
              <a href="tel:862-225-1965" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
                862.225.1965
              </a>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#1a1a1a', borderRadius: '4px', borderLeft: '3px solid #8B1A1A' }}>
              <p style={{ color: '#fff', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                <strong>Confidential Consultation</strong><br />
                We understand the sensitive nature of addiction matters. All inquiries are handled with complete confidentiality.
              </p>
            </div>
          </div>

        </aside>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '2rem 0', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>The Bianchi Law Group</h4>
            <p style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
              Compassionate legal representation combined with comprehensive addiction support services.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact</h4>
            <p style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
              Phone: <a href="tel:862-225-1965" style={{ color: '#fff', textDecoration: 'none' }}>862.225.1965</a><br />
              Available 24/7 for emergencies
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Programs</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8', fontSize: '0.9rem' }}>
              <li><a href="/outreach/addiction-program" style={{ color: '#fff', textDecoration: 'none' }}>Addiction Program</a></li>
              <li><a href="/programs" style={{ color: '#fff', textDecoration: 'none' }}>Grateful Way Program</a></li>
              <li><a href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Legal Services</a></li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '2rem auto 0', padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'center', fontSize: '0.85rem' }}>
          <p>&copy; {new Date().getFullYear()} The Bianchi Law Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}