import Link from 'next/link'

export default function DisclaimerPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', color: '#fff' }}>
      <div style={{ backgroundColor: '#8B1A1A', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Disclaimer</h1>
          <p style={{ fontSize: '20px', margin: '0', opacity: '0.9' }}>Important Legal Information</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <div style={{ backgroundColor: '#fff', color: '#1a1a1a', padding: '40px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: '#8B1A1A' }}>Disclaimer</h2>
            
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '20px' }}>
                The information found on this website is for general informational, educational, and advertising purposes only. Any information found on this website does not constitute legal advice or a solicitation of clients, nor does it create an attorney-client relationship between the reader and Bianchi Law Group.
              </p>

              <p style={{ marginBottom: '20px' }}>
                Any case result information provided on any portion of this website should not be understood as a promise of any particular result in a future case because the results obtained in specific cases depend on a variety of factors unique to each case; past case results do not guarantee or predict a similar result in future cases undertaken by Bianchi Law Group.
              </p>

              <p style={{ marginBottom: '20px' }}>
                Professional legal counsel should be sought for specific advice relevant to your circumstance. Do not send any confidential information to our firm until an attorney-client relationship has been established through direct communication with an attorney at the Bianchi Law Group and subsequent mutual written agreement that our representation of you would be appropriate and acceptable.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', color: '#1a1a1a', padding: '40px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', color: '#8B1A1A' }}>Our Blogs</h2>
            
            <div style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid #e5e5e5' }}>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>March 17, 2026</p>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px', color: '#1a1a1a' }}>
                New Jersey Survivors Justice Act L. 2025, c. 328
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px', color: '#333' }}>
                New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...
              </p>
              <Link href="#" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>
                Read More →
              </Link>
            </div>

            <div style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid #e5e5e5' }}>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>December 16, 2025</p>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px', color: '#1a1a1a' }}>
                Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px', color: '#333' }}>
                New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...
              </p>
              <Link href="#" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>
                Read More →
              </Link>
            </div>

            <Link href="#" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
              Read All Posts →
            </Link>
          </div>
        </div>

        <div>
          <div style={{ backgroundColor: '#8B1A1A', padding: '40px', borderRadius: '8px', position: 'sticky', top: '20px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Contact Us</h2>
            <p style={{ fontSize: '16px', marginBottom: '30px', opacity: '0.9' }}>To Schedule Your Free Consultation</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px' }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px' }}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px' }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '16px 32px', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }}
              >
                Send Message
              </button>
            </form>

            <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Call Us Today</p>
              <a href="tel:862.225.1965" style={{ color: '#fff', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
                862.225.1965
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: '#000', padding: '40px 20px', textAlign: 'center', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>The Bianchi Law Group</p>
          <p style={{ fontSize: '14px', opacity: '0.7' }}>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}