import React from 'react';
import Link from 'next/link';

export default function ReviewsPage() {
  const blogs = [
    {
      date: 'March 17, 2026',
      title: 'New Jersey Survivors Justice Act L. 2025, c. 328',
      excerpt: 'New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...',
    },
    {
      date: 'December 16, 2025',
      title: 'Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves',
      excerpt: 'New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <header style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Reviews</h1>
          <p style={{ fontSize: '24px', margin: '0' }}>Read What People Have Said About Their Past Experiences…</p>
          <p style={{ fontSize: '14px', marginTop: '20px', opacity: '0.9' }}>Results may vary depending on your particular facts and legal circumstances.</p>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '2', minWidth: '300px' }}>
          <section style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', color: '#1a1a1a', marginBottom: '30px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Client Reviews</h2>
            <div style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '8px', marginBottom: '30px' }}>
              <p style={{ fontSize: '18px', color: '#1a1a1a', lineHeight: '1.8', marginBottom: '20px' }}>
                At The Bianchi Law Group, we pride ourselves on delivering exceptional legal representation and personalized service to every client. Our commitment to justice and our clients' well-being has earned us numerous positive testimonials.
              </p>
              <p style={{ fontSize: '18px', color: '#1a1a1a', lineHeight: '1.8', marginBottom: '20px' }}>
                We understand that facing legal challenges can be stressful and overwhelming. That's why we work tirelessly to ensure our clients receive the best possible outcome while maintaining clear communication throughout the entire process.
              </p>
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
                  Read All Reviews
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '36px', color: '#1a1a1a', marginBottom: '30px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Our Blogs</h2>
            {blogs.map((blog, index) => (
              <article key={index} style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '30px', marginBottom: '20px', borderRadius: '4px' }}>
                <p style={{ fontSize: '14px', color: '#8B1A1A', fontWeight: 'bold', marginBottom: '10px' }}>{blog.date}</p>
                <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: 'bold' }}>{blog.title}</h3>
                <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>{blog.excerpt}</p>
                <Link href="#" style={{ color: '#8B1A1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>
                  Read More →
                </Link>
              </article>
            ))}
            <div style={{ marginTop: '30px' }}>
              <Link href="/blog" style={{ display: 'inline-block', backgroundColor: '#1a1a1a', color: '#fff', padding: '12px 30px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
                Read All Posts
              </Link>
            </div>
          </section>
        </div>

        <aside style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '30px', borderRadius: '8px', position: 'sticky', top: '20px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>Contact Us</h2>
            <p style={{ fontSize: '16px', marginBottom: '25px' }}>To Schedule Your Free Consultation</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                placeholder="Full Name"
                required
                style={{ padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px' }}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                style={{ padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px' }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                style={{ padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px' }}
              />
              <textarea
                placeholder="Brief Description of Your Case"
                rows={4}
                required
                style={{ padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', resize: 'vertical' }}
              />
              <button
                type="submit"
                style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '15px', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Submit
              </button>
            </form>

            <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Call Us Today</p>
              <a href="tel:862.225.1965" style={{ fontSize: '24px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
                862.225.1965
              </a>
            </div>

            <div style={{ marginTop: '25px' }}>
              <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: '0.9' }}>
                Available for consultations Monday through Friday. Emergency appointments available upon request.
              </p>
            </div>
          </div>
        </aside>
      </main>

      <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 20px', marginTop: '60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '16px', marginBottom: '10px' }}>© 2024 The Bianchi Law Group. All rights reserved.</p>
          <p style={{ fontSize: '14px', opacity: '0.8' }}>Experienced Legal Representation in New Jersey</p>
        </div>
      </footer>
    </div>
  );
}