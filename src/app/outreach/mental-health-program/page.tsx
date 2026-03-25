import Link from 'next/link'

export default function OutreachMentalHealthProgramPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1a1a1a', padding: '1rem 0', borderBottom: '3px solid #8B1A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
            The Bianchi Law Group
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>Mental Health Program</h1>
          <p style={{ fontSize: '1.25rem', margin: 0, opacity: 0.95 }}>Pioneering Integrated Mental Health and Legal Services</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          {/* Left Column - Main Content */}
          <div>
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>Our Mental Health Program</h2>
              
              <div style={{ lineHeight: '1.8', color: '#1a1a1a', fontSize: '1.1rem', marginBottom: '2rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Robert Bianchi started Morris County's first Mental Health Court when he was the head County Prosecutor. It was his belief that rather than merely "warehousing" low level criminal conduct that did not threaten society, that there was a better way to deal with the mental health issues that in reality were the issues that needed to be addressed. Hence, instead of wasting precious taxpayer dollars, then Prosecutor Bianchi started the Mental Health Court.
                </p>
                
                <p style={{ marginBottom: '1.5rem' }}>
                  To do this, he had to work with an overwhelming number of mental health providers, addiction providers, the County Jail, the defense attorneys and judges in Morris County to establish a program, as well as, a constellation of services that this population needs in order to treat and address the mental health and addiction issues that they had.
                </p>
                
                <p style={{ marginBottom: '1.5rem', fontWeight: 'bold', color: '#8B1A1A', fontSize: '1.2rem' }}>
                  It was daunting work that many said could not be done, but it was done.
                </p>
              </div>
            </section>

            <section style={{ marginBottom: '3rem', backgroundColor: '#f5f5f5', padding: '2rem', borderLeft: '4px solid #8B1A1A' }}>
              <h2 style={{ color: '#8B1A1A', fontSize: '1.75rem', marginBottom: '1.5rem' }}>How We Help Our Clients</h2>
              
              <p style={{ lineHeight: '1.8', color: '#1a1a1a', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                This knowledge has allowed Partners Robert Bianchi and David Bruno to be far better able to deal with the mental health and emotional issues their clients face, both before their legal problems and during the fear added to those problems that a legal matter can exacerbate.
              </p>
              
              <p style={{ lineHeight: '1.8', color: '#1a1a1a', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                We work with high level mental health professionals very closely to ensure we can move our clients through the maze of mental health services, so that they can be placed with those professionals that have the skill, experience, and reputation to treat them best.
              </p>
              
              <p style={{ lineHeight: '1.8', color: '#1a1a1a', fontSize: '1.1rem', fontWeight: 'bold' }}>
                Again, this not only helps many clients with their legal problem, but makes them live a more meaningful and fulfilled life.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: '#8B1A1A', fontSize: '1.75rem', marginBottom: '1.5rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>Professional Education & Outreach</h2>
              
              <p style={{ lineHeight: '1.8', color: '#1a1a1a', fontSize: '1.1rem' }}>
                The Bianchi Law Group lectures with mental health providers on the very important topic of how to better integrate the professionals of both the legal and mental health services professions. Lectures are given to mental health professionals to explain the legal process and how they can help navigate their clients through this daunting process.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: '#8B1A1A', fontSize: '1.75rem', marginBottom: '1.5rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>Recent Blog Posts</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <article style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '1.5rem', borderLeft: '4px solid #8B1A1A' }}>
                  <time style={{ color: '#666', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>March 17, 2026</time>
                  <h3 style={{ color: '#1a1a1a', fontSize: '1.3rem', margin: '0 0 0.75rem 0' }}>New Jersey Survivors Justice Act L. 2025, c. 328</h3>
                  <p style={{ color: '#1a1a1a', lineHeight: '1.6', marginBottom: '1rem' }}>
                    New Jersey Legislature enacts new sentencing law for victims of domestic violence. On January 20...
                  </p>
                  <Link href="#" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem' }}>
                    Read More →
                  </Link>
                </article>

                <article style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '1.5rem', borderLeft: '4px solid #8B1A1A' }}>
                  <time style={{ color: '#666', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>December 16, 2025</time>
                  <h3 style={{ color: '#1a1a1a', fontSize: '1.3rem', margin: '0 0 0.75rem 0' }}>Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves</h3>
                  <p style={{ color: '#1a1a1a', lineHeight: '1.6', marginBottom: '1rem' }}>
                    New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma. On November 20, 2025...
                  </p>
                  <Link href="#" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem' }}>
                    Read More →
                  </Link>
                </article>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link href="#" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '0.75rem 2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem' }}>
                  Read All Posts
                </Link>
              </div>
            </section>

            <section>
              <h2 style={{ color: '#8B1A1A', fontSize: '1.75rem', marginBottom: '1.5rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>Client Reviews</h2>
              
              <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', marginBottom: '1.5rem', borderLeft: '4px solid #8B1A1A' }}>
                <p style={{ color: '#1a1a1a', fontStyle: 'italic', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>
                  "The Bianchi Law Group's compassionate approach to integrating mental health services with legal representation made all the difference in my case. They truly care about their clients as whole people."
                </p>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="#" style={{ display: 'inline-block', backgroundColor: '#1a1a1a', color: '#fff', padding: '0.75rem 2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem' }}>
                  Read All Reviews
                </Link>
              </div>
            </section>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div style={{ position: 'sticky', top: '2rem' }}>
              <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem', marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>Contact Us</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>To Schedule Your Free Consultation</p>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#fff' }}>Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      style={{ width: '100%', padding: '0.75rem', border: 'none', fontSize: '1rem', boxSizing: 'border-box' }} 
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#fff' }}>Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      style={{ width: '100%', padding: '0.75rem', border: 'none', fontSize: '1rem', boxSizing: 'border-box' }} 
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#fff' }}>Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      style={{ width: '100%', padding: '0.75rem', border: 'none', fontSize: '1rem', boxSizing: 'border-box' }} 
                    />
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#fff' }}>Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      required 
                      style={{ width: '100%', padding: '0.75rem', border: 'none', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '1rem', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a52020'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Call Us Today</h3>
                <a href="tel:862-225-1965" style={{ color: '#fff', textDecoration: 'none', fontSize: '2rem', fontWeight: 'bold', display: 'block' }}>
                  862.225.1965
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem 1.5rem', marginTop: '4rem', borderTop: '3px solid #8B1A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 'bold' }}>The Bianchi Law Group</p>
          <p style={{ margin: '0 0 0.5rem 0' }}>Phone: <a href="tel:862-225-1965" style={{ color: '#fff', textDecoration: 'none' }}>862.225.1965</a></p>
          <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>© {new Date().getFullYear()} The Bianchi Law Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}