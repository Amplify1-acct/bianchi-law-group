export default function ContactSidebar() {
  return (
    <aside style={{ position: 'sticky', top: 90 }}>
      {/* Contact Form */}
      <div style={{
        background: '#fff', border: '1px solid #e5e5e5',
        borderRadius: 6, overflow: 'hidden', marginBottom: 24,
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
      }}>
        <div style={{ background: '#8B1A1A', padding: '18px 20px' }}>
          <h3 style={{ color: '#fff', margin: 0, fontSize: 17, fontFamily: "'Playfair Display', serif" }}>Contact Us</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', margin: '4px 0 0', fontSize: 13 }}>To Schedule Your Free Consultation</p>
        </div>
        <div style={{ padding: '20px' }}>
          {[
            { placeholder: 'First Name *', type: 'text' },
            { placeholder: 'Last Name *', type: 'text' },
            { placeholder: 'Phone *', type: 'tel' },
            { placeholder: 'Email *', type: 'email' },
          ].map(f => (
            <input key={f.placeholder} type={f.type} placeholder={f.placeholder}
              style={{ width: '100%', padding: '10px 12px', marginBottom: 10, border: '1px solid #ddd', borderRadius: 4, fontSize: 13, display: 'block' }} />
          ))}
          <textarea placeholder="How may we help you?" rows={4}
            style={{ width: '100%', padding: '10px 12px', marginBottom: 14, border: '1px solid #ddd', borderRadius: 4, fontSize: 13, resize: 'vertical' }} />
          <button style={{ width: '100%', background: '#8B1A1A', color: '#fff', padding: '13px', border: 'none', borderRadius: 4, fontWeight: 700, fontSize: 14, cursor: 'pointer', letterSpacing: '0.03em' }}>
            GET STARTED →
          </button>
          <p style={{ fontSize: 11, color: '#999', textAlign: 'center', margin: '10px 0 0' }}>🔒 100% Confidential</p>
        </div>
      </div>

      {/* Call Box */}
      <div style={{ background: '#1a1a1a', borderRadius: 6, padding: '20px', color: '#fff', textAlign: 'center', marginBottom: 24 }}>
        <p style={{ margin: '0 0 8px', fontSize: 13, color: '#bbb' }}>Call Us Anytime — 24/7</p>
        <a href="tel:8622251965" style={{ fontSize: 24, fontWeight: 700, color: '#fff', display: 'block', marginBottom: 12 }}>862.225.1965</a>
        <a href="tel:8622251965" style={{ display: 'block', background: '#8B1A1A', color: '#fff', padding: '10px', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>☎ Call Now</a>
      </div>

      {/* Blog Posts */}
      <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 6, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <div style={{ background: '#f5f5f5', padding: '14px 18px', borderBottom: '1px solid #e5e5e5' }}>
          <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#1a1a1a' }}>Our Blogs</h4>
        </div>
        <div style={{ padding: '16px 18px' }}>
          {[
            { date: 'March 17, 2026', title: 'New Jersey Survivors Justice Act L. 2025, c. 328', href: '/blog/' },
            { date: 'December 16, 2025', title: 'Shaken Baby Syndrome: NJ Supreme Court State v Nieves', href: '/blog/' },
            { date: 'December 16, 2025', title: 'New Jersey Ghost Gun Law: Appellate Division in State v. Oliver', href: '/blog/' },
          ].map(post => (
            <div key={post.title} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: 11, color: '#8B1A1A', fontWeight: 700, marginBottom: 4 }}>{post.date}</div>
              <a href={post.href} style={{ fontSize: 13, color: '#333', lineHeight: 1.5, display: 'block' }}>{post.title}</a>
              <a href={post.href} style={{ fontSize: 12, color: '#8B1A1A', fontWeight: 700, marginTop: 4, display: 'block' }}>Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
