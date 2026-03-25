import React from 'react';

export default function ChristinaHallEsqPage() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', margin: '0' }}>Christina Hall, Esq.</h1>
          <p style={{ fontSize: '24px', marginTop: '20px', fontWeight: '300' }}>Former Director of Central Appellate Research for the New Jersey Appellate Division</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Main Content - 2/3 */}
        <div style={{ flex: '2 1 600px', minWidth: '300px' }}>
          
          {/* Biography Section */}
          <div style={{ marginBottom: '50px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Christina began her legal career as an intern for the Hunterdon County Prosecutor's office and served as a judicial law clerk for the Honorable Paul A. Lowengrub of the New Jersey Chancery Court in Camden.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Christina was hired by the New Jersey Appellate Division in 1989 where she researched legal issues and prepared bench memoranda on the most complicated and lengthy appeals before the Appellate Division. During her extensive career as an appellate attorney, she produced memoranda in thousands of cases, including some of the most difficult criminal law cases involving complicated evidentiary and constitutional law issues. She was promoted in 2020 to Director of Central Appellate Research, where she managed twenty-five appellate attorneys while continuing to conduct legal research for the court.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              In addition, during her work for the Appellate Division, Christina co-authored the New Jersey Standards for Review, conducted new law clerk training for incoming appellate clerks, and taught continuing legal education classes in brief writing, administrative law, and the applicable standards of review on appeal.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Christina earned her Juris Doctorate degree from Rutgers University School of Law, with honors, where she was a Notes and Comments editor for the Rutgers Law Journal. She earned her Bachelor of Arts degree from Seton Hall University, graduating Cum Laude.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              In her free time Christina enjoys traveling with her family, hiking in the National Parks, and biking along the Delaware River and the New Jersey shore. She is also an avid reader, and loves to read classics, mysteries, adventure stories, art history books, and cookbooks!
            </p>
          </div>

          {/* Blog Section */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', color: '#8B1A1A', marginBottom: '30px', fontWeight: 'bold' }}>Our Blogs</h2>
            
            <div style={{ marginBottom: '30px', padding: '30px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #8B1A1A' }}>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>March 17, 2026</p>
              <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: 'bold' }}>New Jersey Survivors Justice Act L. 2025, c. 328</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1a1a1a', marginBottom: '15px' }}>
                New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...
              </p>
              <a href="#" style={{ color: '#8B1A1A', fontSize: '16px', textDecoration: 'none', fontWeight: 'bold' }}>Read More →</a>
            </div>

            <div style={{ marginBottom: '30px', padding: '30px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #8B1A1A' }}>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>December 16, 2025</p>
              <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: 'bold' }}>Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1a1a1a', marginBottom: '15px' }}>
                New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...
              </p>
              <a href="#" style={{ color: '#8B1A1A', fontSize: '16px', textDecoration: 'none', fontWeight: 'bold' }}>Read More →</a>
            </div>

            <a href="#" style={{ display: 'inline-block', color: '#8B1A1A', fontSize: '18px', textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' }}>Read All Posts →</a>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 style={{ fontSize: '36px', color: '#8B1A1A', marginBottom: '30px', fontWeight: 'bold' }}>Reviews</h2>
            <a href="#" style={{ display: 'inline-block', color: '#8B1A1A', fontSize: '18px', textDecoration: 'none', fontWeight: 'bold' }}>Read All Reviews →</a>
          </div>
        </div>

        {/* Sidebar - 1/3 */}
        <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
          <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 30px', borderRadius: '0' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>Contact Us</h2>
            <p style={{ fontSize: '18px', marginBottom: '30px', textAlign: 'center' }}>To Schedule Your Free Consultation</p>
            
            {/* Phone Number */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <a href="tel:862.225.1965" style={{ color: '#8B1A1A', fontSize: '28px', textDecoration: 'none', fontWeight: 'bold' }}>862.225.1965</a>
            </div>

            {/* Contact Form */}
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required
                  style={{ width: '100%', padding: '15px', fontSize: '16px', border: 'none', borderRadius: '0', boxSizing: 'border-box' }}
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  required
                  style={{ width: '100%', padding: '15px', fontSize: '16px', border: 'none', borderRadius: '0', boxSizing: 'border-box' }}
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  required
                  style={{ width: '100%', padding: '15px', fontSize: '16px', border: 'none', borderRadius: '0', boxSizing: 'border-box' }}
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Case Details *" 
                  required
                  rows={6}
                  style={{ width: '100%', padding: '15px', fontSize: '16px', border: 'none', borderRadius: '0', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '18px 30px', fontSize: '18px', fontWeight: 'bold', border: 'none', cursor: 'pointer', borderRadius: '0', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1515'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}