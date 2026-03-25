import React from 'react';

export default function ContactUsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#8B1A1A', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0', color: '#fff' }}>Contact Us</h1>
        <p style={{ fontSize: '20px', marginTop: '10px', color: '#fff' }}>Get in touch with The Bianchi Law Group</p>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Left Content - 2/3 width */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          
          {/* Office Locations */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#8B1A1A', marginBottom: '30px' }}>Our Locations</h2>
            
            {/* Parsippany Location */}
            <div style={{ backgroundColor: '#2a2a2a', padding: '30px', borderRadius: '8px', marginBottom: '30px', border: '2px solid #8B1A1A' }}>
              <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '15px' }}>Parsippany Location</h3>
              <p style={{ fontSize: '16px', color: '#8B1A1A', fontWeight: 'bold', marginBottom: '15px' }}>Main Office</p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '10px 0' }}>
                8 Campus Dr #105<br />
                Parsippany, NJ 07054
              </p>
              <p style={{ fontSize: '20px', margin: '15px 0' }}>
                <a href="tel:8622924442" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>862-292-4442</a>
              </p>
              <button style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 30px', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
                Email Us Now
              </button>
            </div>

            {/* Red Bank Location */}
            <div style={{ backgroundColor: '#2a2a2a', padding: '30px', borderRadius: '8px', border: '2px solid #8B1A1A' }}>
              <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '15px' }}>Red Bank Location</h3>
              <p style={{ fontSize: '16px', color: '#8B1A1A', fontWeight: 'bold', marginBottom: '15px' }}>By Appointment Only</p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '10px 0' }}>
                125 Half Mile Rd #200<br />
                Red Bank, NJ 07701
              </p>
              <p style={{ fontSize: '20px', margin: '15px 0' }}>
                <a href="tel:7326418237" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>732-641-8237</a>
              </p>
            </div>
          </div>

          {/* Blog Section */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#8B1A1A', marginBottom: '30px' }}>Our Blogs</h2>
            
            <div style={{ backgroundColor: '#2a2a2a', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
              <p style={{ fontSize: '14px', color: '#8B1A1A', marginBottom: '10px' }}>March 17, 2026</p>
              <h3 style={{ fontSize: '22px', color: '#fff', marginBottom: '15px' }}>New Jersey Survivors Justice Act L. 2025, c. 328</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...
              </p>
              <a href="#" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>Read More →</a>
            </div>

            <div style={{ backgroundColor: '#2a2a2a', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
              <p style={{ fontSize: '14px', color: '#8B1A1A', marginBottom: '10px' }}>December 16, 2025</p>
              <h3 style={{ fontSize: '22px', color: '#fff', marginBottom: '15px' }}>Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...
              </p>
              <a href="#" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>Read More →</a>
            </div>

            <button style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 30px', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
              Read All Posts
            </button>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 style={{ fontSize: '32px', color: '#8B1A1A', marginBottom: '30px' }}>Reviews</h2>
            <div style={{ backgroundColor: '#2a2a2a', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', marginBottom: '20px' }}>See what our clients are saying about us</p>
              <button style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 30px', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer' }}>
                Read All Reviews
              </button>
            </div>
          </div>

        </div>

        {/* Right Sidebar - 1/3 width */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ position: 'sticky', top: '20px' }}>
            <div style={{ backgroundColor: '#2a2a2a', padding: '30px', borderRadius: '8px', border: '2px solid #8B1A1A' }}>
              <h2 style={{ fontSize: '28px', color: '#8B1A1A', marginBottom: '10px', textAlign: 'center' }}>Contact Us</h2>
              <p style={{ fontSize: '16px', textAlign: 'center', marginBottom: '25px' }}>To Schedule Your Free Consultation</p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#fff' }}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#fff' }}>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#fff' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#fff' }}>Subject</label>
                  <input 
                    type="text" 
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#fff' }}>Message *</label>
                  <textarea 
                    required 
                    rows={6}
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '16px', boxSizing: 'border-box', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '15px', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a52020'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
                >
                  Send Message
                </button>
              </form>

              <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '4px', textAlign: 'center' }}>
                <p style={{ fontSize: '14px', marginBottom: '10px' }}>Call Us Now</p>
                <a href="tel:8622251965" style={{ fontSize: '24px', color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>862.225.1965</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#000', padding: '30px 20px', textAlign: 'center', marginTop: '60px' }}>
        <p style={{ fontSize: '14px', color: '#fff', margin: '0' }}>© 2024 The Bianchi Law Group. All Rights Reserved.</p>
      </div>
    </div>
  );
}