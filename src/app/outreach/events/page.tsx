import React from 'react';

export default function OutreachEventsPage() {
  const events = [
    {
      title: "New Jersey Survivors Justice Act L. 2025, c. 328",
      date: "3/17/2026",
      excerpt: "New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20, 2026, during his final full…"
    },
    {
      title: "Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves",
      date: "12/16/2025",
      excerpt: "New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025, the New Jersey Supreme Court,…"
    },
    {
      title: "New Jersey Ghost Gun Law: Appellate Division in State v. Oliver",
      date: "12/16/2025",
      excerpt: "New Jersey Appellate Division Decision – New Jersey Ghost Gun Law On August 12, 2025, the New Jersey Appellate Division,…"
    },
    {
      title: "Victim's Assistance and Survivor Protection Act (VASPA): New Jersey Appellate Division A.C. v. R.S.",
      date: "12/16/2025",
      excerpt: "New Jersey Appellate Division Decision – Victim's Assistance and Survivor Protection Act (VASPA) On December 1, 2025, the New Jersey…"
    },
    {
      title: "New Jersey Criminal Appeal: Appellate Division in State v. Kelly",
      date: "8/19/2025",
      excerpt: "New Superior Court of New Jersey Decision – New Jersey Criminal Appeal in Criminal Law On July 23, 2025, the…"
    },
    {
      title: "Ineffective Assistance of Counsel – NJ Supreme Court in State v. Hernandez-Peralta",
      date: "8/19/2025",
      excerpt: "New Jersey Supreme Court Decision – Ineffective Assistance of Counsel / Immigration Consequences of Plea On July 22, 2025, the…"
    }
  ];

  const recentBlogs = [
    {
      date: "March 17, 2026",
      title: "New Jersey Survivors Justice Act L. 2025, c. 328",
      excerpt: "New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,..."
    },
    {
      date: "December 16, 2025",
      title: "Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves",
      excerpt: "New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,..."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0', fontFamily: 'Georgia, serif' }}>Events</h1>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '2 1 600px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', color: '#1a1a1a', marginBottom: '30px', fontFamily: 'Georgia, serif' }}>Upcoming & Recent Legal Events</h2>
            <p style={{ fontSize: '18px', color: '#1a1a1a', lineHeight: '1.8', marginBottom: '40px' }}>
              Stay informed about important legal developments, court decisions, and legislative changes affecting New Jersey criminal law and civil rights.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {events.map((event, index) => (
              <div key={index} style={{ backgroundColor: '#fff', border: '2px solid #1a1a1a', padding: '30px', transition: 'all 0.3s ease' }}>
                <div style={{ fontSize: '14px', color: '#8B1A1A', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {event.date}
                </div>
                <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontFamily: 'Georgia, serif', lineHeight: '1.4' }}>
                  {event.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: '1.7', marginBottom: '20px' }}>
                  {event.excerpt}
                </p>
                <a href="#" style={{ display: 'inline-block', color: '#8B1A1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid #8B1A1A', paddingBottom: '2px', transition: 'all 0.3s ease' }}>
                  Read More →
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', backgroundColor: '#1a1a1a', color: '#fff', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '15px', fontFamily: 'Georgia, serif' }}>Stay Updated on Legal Developments</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '25px' }}>
              Our team closely monitors important court decisions and legislative changes that impact our clients and the legal landscape in New Jersey.
            </p>
            <a href="tel:8622251965" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.3s ease' }}>
              Call 862.225.1965
            </a>
          </div>
        </div>

        <div style={{ flex: '1 1 300px' }}>
          <div style={{ position: 'sticky', top: '20px' }}>
            <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '40px 30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '28px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Contact Us</h3>
              <p style={{ fontSize: '16px', marginBottom: '25px', lineHeight: '1.6' }}>
                To Schedule Your Free Consultation
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" placeholder="Full Name" required style={{ padding: '12px', fontSize: '14px', border: 'none', outline: 'none' }} />
                <input type="email" placeholder="Email Address" required style={{ padding: '12px', fontSize: '14px', border: 'none', outline: 'none' }} />
                <input type="tel" placeholder="Phone Number" required style={{ padding: '12px', fontSize: '14px', border: 'none', outline: 'none' }} />
                <textarea placeholder="Brief Description of Your Case" rows={4} required style={{ padding: '12px', fontSize: '14px', border: 'none', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}></textarea>
                <button type="submit" style={{ padding: '15px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  Submit
                </button>
              </form>
              <div style={{ marginTop: '25px', paddingTop: '25px', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Call Now:</p>
                <a href="tel:8622251965" style={{ fontSize: '24px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
                  862.225.1965
                </a>
              </div>
            </div>

            <div style={{ backgroundColor: '#fff', border: '2px solid #1a1a1a', padding: '30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Our Blogs</h3>
              {recentBlogs.map((blog, index) => (
                <div key={index} style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: index < recentBlogs.length - 1 ? '1px solid #ddd' : 'none' }}>
                  <div style={{ fontSize: '12px', color: '#8B1A1A', fontWeight: 'bold', marginBottom: '8px' }}>
                    {blog.date}
                  </div>
                  <h4 style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '10px', lineHeight: '1.4', fontFamily: 'Georgia, serif' }}>
                    {blog.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '10px' }}>
                    {blog.excerpt}
                  </p>
                  <a href="#" style={{ fontSize: '14px', color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>
                    Read More →
                  </a>
                </div>
              ))}
              <a href="#" style={{ display: 'inline-block', marginTop: '10px', color: '#8B1A1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid #8B1A1A', paddingBottom: '2px' }}>
                Read All Posts
              </a>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', fontFamily: 'Georgia, serif' }}>Client Reviews</h3>
              <p style={{ fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                See what our clients say about working with The Bianchi Law Group
              </p>
              <a href="#" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 30px', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                Read All Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}