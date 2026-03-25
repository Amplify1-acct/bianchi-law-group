import React from 'react';

export default function DennisKesslerEsqPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Dennis Kessler, Esq.</h1>
        <p style={{ fontSize: '24px', margin: '0' }}>Attorney at Bianchi Law Group</p>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Content Section - 2/3 */}
        <div style={{ flex: '2 1 600px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>About Dennis Kessler</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Dennis joins our firm with 30 years of experience practicing law in New Jersey. Dennis has spent time representing clients who have experienced injuries as a result of accidents as well as medical devices. He has expertise with writing motions and memorandums as well as conducting depositions.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Additionally Dennis has fought for the rights of clients accused of committing a crime and has worked hard to ensure they receive the best possible outcome for their circumstances.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a' }}>
              More recently, Dennis has taken on the key role of meeting new potential clients who have been accused of a crime. Those accused of a crime need to be able to voice their side of what happened and they need to be educated about the criminal law system which is a brand new experience for most. Dennis's strength is the ability to listen to the client, answer all questions, explaining the process and addressing concerns so that the client's stress and anxiety is reduced.
            </p>
          </div>

          {/* Our Blogs Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '30px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Our Blogs</h2>
            
            <div style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #8B1A1A' }}>
              <p style={{ fontSize: '14px', color: '#8B1A1A', fontWeight: 'bold', margin: '0 0 10px 0' }}>March 17, 2026</p>
              <h3 style={{ fontSize: '24px', color: '#1a1a1a', margin: '0 0 15px 0' }}>New Jersey Survivors Justice Act L. 2025, c. 328</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1a1a1a', marginBottom: '15px' }}>
                New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...
              </p>
              <a href="#" style={{ color: '#8B1A1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>Read More →</a>
            </div>

            <div style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #8B1A1A' }}>
              <p style={{ fontSize: '14px', color: '#8B1A1A', fontWeight: 'bold', margin: '0 0 10px 0' }}>December 16, 2025</p>
              <h3 style={{ fontSize: '24px', color: '#1a1a1a', margin: '0 0 15px 0' }}>Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1a1a1a', marginBottom: '15px' }}>
                New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...
              </p>
              <a href="#" style={{ color: '#8B1A1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>Read More →</a>
            </div>

            <a href="#" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 30px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
              Read All Posts
            </a>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '30px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Reviews</h2>
            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', textAlign: 'center', borderLeft: '4px solid #8B1A1A' }}>
              <p style={{ fontSize: '18px', color: '#1a1a1a', marginBottom: '20px' }}>See what our clients are saying about Dennis Kessler and Bianchi Law Group.</p>
              <a href="#" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 30px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
                Read All Reviews
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar - 1/3 */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 30px', borderRadius: '8px', position: 'sticky', top: '20px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#fff' }}>Contact Us</h2>
            <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>To Schedule Your Free Consultation</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', resize: 'vertical', boxSizing: 'border-box' }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '15px', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Submit
              </button>
            </form>

            <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #444' }}>
              <p style={{ fontSize: '16px', marginBottom: '10px' }}>Call us directly:</p>
              <a href="tel:862-225-1965" style={{ fontSize: '24px', fontWeight: 'bold', color: '#8B1A1A', textDecoration: 'none', display: 'block' }}>
                862.225.1965
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}