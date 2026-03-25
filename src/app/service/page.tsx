import React from 'react';

export default function ServicePage() {
  const services = [
    {
      title: "Lorem Ipsum Simple",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
      title: "Lorem Ipsum Simple",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
      title: "Lorem Ipsum Simple",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
      title: "Lorem Ipsum Simple",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
      title: "Lorem Ipsum Simple",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
      title: "Lorem Ipsum Simple",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
      title: "Lorem Ipsum Simple",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    }
  ];

  const blogs = [
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
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 20px 0', fontWeight: 'bold' }}>Our Services</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Dedicated legal representation with a commitment to excellence and client satisfaction
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '2', minWidth: '300px' }}>
          <section style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', color: '#1a1a1a', marginBottom: '40px', fontWeight: 'bold' }}>Why Choose Us?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {services.map((service, index) => (
                <div key={index} style={{ backgroundColor: '#fff', border: '2px solid #f0f0f0', borderRadius: '8px', padding: '30px', transition: 'all 0.3s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '22px', color: '#8B1A1A', marginBottom: '15px', fontWeight: 'bold' }}>{service.title}</h3>
                  <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', margin: '0' }}>{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', color: '#1a1a1a', marginBottom: '30px', fontWeight: 'bold' }}>Our Blogs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {blogs.map((blog, index) => (
                <article key={index} style={{ backgroundColor: '#fff', border: '2px solid #f0f0f0', borderRadius: '8px', padding: '30px', transition: 'all 0.3s ease' }}>
                  <div style={{ fontSize: '14px', color: '#8B1A1A', marginBottom: '10px', fontWeight: 'bold' }}>{blog.date}</div>
                  <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: 'bold' }}>{blog.title}</h3>
                  <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>{blog.excerpt}</p>
                  <a href="#" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>Read More →</a>
                </article>
              ))}
            </div>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <a href="#" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '15px 40px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>Read All Posts</a>
            </div>
          </section>
        </div>

        <aside style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ position: 'sticky', top: '20px' }}>
            <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px', borderRadius: '8px', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>Contact Us</h2>
              <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>To Schedule Your Free Consultation</p>
              <form>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Name *</label>
                  <input type="text" required style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#2a2a2a', color: '#fff', fontSize: '16px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Email *</label>
                  <input type="email" required style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#2a2a2a', color: '#fff', fontSize: '16px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Phone *</label>
                  <input type="tel" required style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#2a2a2a', color: '#fff', fontSize: '16px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Message *</label>
                  <textarea required rows={5} style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#2a2a2a', color: '#fff', fontSize: '16px', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#8B1A1A', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Submit</button>
              </form>
              <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #444' }}>
                <p style={{ fontSize: '16px', marginBottom: '10px' }}>Call us directly:</p>
                <a href="tel:862.225.1965" style={{ color: '#8B1A1A', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>862.225.1965</a>
              </div>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', fontWeight: 'bold' }}>Reviews</h3>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>See what our clients say about our legal services and dedication to achieving the best outcomes.</p>
              <a href="#" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 30px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Read All Reviews</a>
            </div>
          </div>
        </aside>
      </div>

      <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 20px', textAlign: 'center', marginTop: '60px' }}>
        <p style={{ margin: '0', fontSize: '16px' }}>© 2024 Bianchi Law Group. All rights reserved.</p>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#999' }}>Professional Legal Services | Call 862.225.1965</p>
      </footer>
    </div>
  );
}