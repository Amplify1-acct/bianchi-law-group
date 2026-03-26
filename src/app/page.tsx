import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Criminal Defense Lawyers - The Bianchi Law Group, LLC',
  description: 'Former Prosecutors and Criminal Defense Attorneys in New Jersey. Safe to Talk, Safe to Trust, Ready to Fight. Call 862.225.1965 for a free consultation.',
}

const PHONE = '862.225.1965'
const PHONE_HREF = 'tel:8622251965'
const IMG = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'
const IMG2 = 'https://bianchilawgroup.com/wp-content/uploads/2025/07'
const IMG3 = 'https://bianchilawgroup.com/wp-content/uploads/2025/10'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#', children: [
    { label: 'Robert A. Bianchi, Esq', href: '/robert-bianchi-esq/' },
    { label: 'Christina Hall, Esq.', href: '/christina-hall-esq/' },
    { label: 'Christopher A. Eaton, Esq.', href: '/christopher-eaton-esq/' },
    { label: 'Danielle M. Esposito, Esq.', href: '/danielle-esposito-esq/' },
    { label: 'David J. Bruno, Esq.', href: '/david-j-bruno-esq/' },
    { label: 'Dennis Kessler, Esq.', href: '/dennis-kessler-esq/' },
    { label: 'Paul A. Di Lella, Esq.', href: '/paul-a-di-lella-esq/' },
    { label: 'Tricia H. Margolis, Esq.', href: '/tricia-h-margolis-esq/' },
    { label: 'Careers', href: '/careers/' },
    { label: "Prosecutor's Perspective", href: '/prosecutors-perspective/' },
  ]},
  { label: 'Practice Areas', href: '#', children: [
    { label: 'Criminal Defense', href: '/criminal-defense/' },
    { label: 'Juvenile Crimes', href: '/juvenile-crimes/' },
    { label: 'Sex Crimes', href: '/sex-crimes-cases/' },
    { label: 'White Collar Crimes', href: '/white-collar-crimes/' },
    { label: 'DWI', href: '/criminal-defense/dwi/' },
    { label: 'Drug Crimes', href: '/criminal-defense/drug-crimes/' },
    { label: 'Personal Injury', href: '/personal-injury/' },
  ]},
  { label: 'Resources', href: '#', children: [
    { label: 'Legal Blog', href: '/blog/' },
    { label: 'Media', href: '/media/' },
    { label: 'Outreach', href: '/outreach/' },
    { label: 'Reviews', href: '/reviews/' },
  ]},
  { label: 'Service Areas', href: '#', children: [
    { label: 'Bergen County', href: '/bergen-county/' },
    { label: 'Monmouth County', href: '/monmouth-county/' },
    { label: 'Morris County', href: '/morris-county/' },
    { label: 'Somerset County', href: '/somerset-county/' },
  ]},
  { label: 'Contact Us', href: '/contact-us/' },
]

const practiceAreas = [
  { label: 'Criminal Defense', href: '/criminal-defense/', icon: `${IMG}/Criminal-1.svg` },
  { label: 'Appeals', href: '/appeals/', icon: `${IMG}/app.svg` },
  { label: 'DWI', href: '/criminal-defense/dwi/', icon: `${IMG}/DWI-Defense.svg` },
  { label: 'Drug Crimes', href: '/criminal-defense/drug-crimes/', icon: `${IMG}/Drug-Crime-Defense.svg` },
  { label: 'Criminal Investigations', href: '/criminal-and-white-collar-investigations/', icon: `${IMG}/Criminal-Investigations.svg` },
  { label: 'Personal Injury', href: '/personal-injury/', icon: `${IMG}/Personal.svg` },
  { label: 'Juvenile Crimes', href: '/juvenile-crimes/', icon: `${IMG}/Juvenile-Crimes.svg` },
  { label: 'Sex Crimes', href: '/sex-crimes-cases/', icon: `${IMG}/Sex-Crime-Defense.svg` },
  { label: 'White Collar Crimes', href: '/white-collar-crimes/', icon: `${IMG}/White-Collar.svg` },
  { label: 'Municipal Court', href: '/municipal-court/', icon: `${IMG}/Law.svg` },
]

const whyChooseUs = [
  { title: 'Certified Criminal Trial Attorneys', text: 'Led by two NJ Supreme Court Certified Criminal Trial Attorneys — a distinction held by less than 0.25% of all NJ lawyers.', icon: `${IMG}/Certified.svg` },
  { title: 'Former Prosecutors Defending You', text: 'Our team brings insider knowledge of the entire criminal justice process—investigation tactics, charging strategies, and courtroom procedures.', icon: `${IMG}/Experience.svg` },
  { title: 'Judgment-Free Support', text: 'We understand you may be scared and embarrassed. We treat every client with dignity and respect during their darkest times.', icon: `${IMG}/Compassionate.svg` },
  { title: 'The Whole Person Approach', text: 'We understand crimes have collateral consequences beyond the courtroom—affecting your career, relationships, and future.', icon: `${IMG}/Focus.svg` },
  { title: 'Strategic Team Huddles', text: 'Our unique huddle system brings together lawyers and support staff three times per week to examine every client case.', icon: `${IMG}/Determined.svg` },
  { title: 'Crisis Management Expertise', text: 'Our team has the experience to navigate and de-escalate tense situations both in and beyond the courtroom.', icon: `${IMG}/Results.svg` },
]

const testimonials = [
  { text: 'Bianchi Law Group has provided our company with outstanding representation in multiple matters in New Jersey. As in-house counsel for a national company, I can say that the Bianchi Law Group\'s attorneys have the expertise and skillset of a international fortune 500 law firm.', author: 'Vinay S.' },
  { text: 'Chris was amazing! He gave us the absolute best possible outcome, and we couldn\'t be more relieved and grateful. They go above and beyond in every way. Every member of the firm care deeply about their clients, and it shows.', author: 'Amanda C.' },
  { text: "I've worked with the Bianchi law group for 2 legal issues now specifically Tricia. I'm always blown away by the outcome of the case. I couldn't recommend them enough.", author: 'Mike C.' },
  { text: 'I was represented by the Bianchi Law Group (Christopher Eaton) in a very serious legal matter, and I am extremely grateful for their professional service and expertise.', author: 'Raffaele S.' },
]

const attorneys = [
  { name: 'Robert A. Bianchi, Esq.', title: 'Former Morris County Prosecutor, Certified Criminal Trial Attorney', href: '/robert-bianchi-esq/', img: `${IMG2}/bob_Bianchi.png` },
  { name: 'David J. Bruno, Esq.', title: 'Former Assistant Prosecutor, Certified Criminal Trial Attorney', href: '/david-j-bruno-esq/', img: `${IMG2}/David-J_team.png` },
  { name: 'Dennis Kessler, Esq.', title: '30 Years of Criminal Defense Experience', href: '/dennis-kessler-esq/', img: `${IMG2}/Dennis_teamm.png` },
  { name: 'Danielle M. Esposito, Esq.', title: 'Criminal Defense Attorney', href: '/danielle-esposito-esq/', img: `${IMG}/Danielle-M.-Esposito.png` },
  { name: 'Christina Hall, Esq.', title: 'Criminal Defense Attorney', href: '/christina-hall-esq/', img: `${IMG}/Christina-Hall-Esq.png` },
  { name: 'Christopher A. Eaton, Esq.', title: 'Former Brooklyn Prosecutor', href: '/christopher-eaton-esq/', img: `${IMG}/team2.png` },
  { name: 'Paul A. Di Lella, Esq.', title: 'Criminal Defense Attorney', href: '/paul-a-di-lella-esq/', img: `${IMG}/team1.png` },
  { name: 'Tricia H. Margolis, Esq.', title: 'Criminal Defense Attorney', href: '/tricia-h-margolis-esq/', img: `${IMG}/Tricia.png` },
]

const faqs = [
  { q: 'Are Your Trial Attorneys Experienced in Criminal Defense?', a: 'The legal team at The Bianchi Law Group, LLC is led by two attorneys with vast experience in criminal defense. Attorneys Bianchi and Bruno have both served as leaders in the Morris County Law Enforcement system and have handled countless defense cases.' },
  { q: 'What Should I Do if I\'ve Been Arrested for DWI?', a: 'Being arrested for DWI can be stressful and embarrassing. Please remember to treat law enforcement officials courteously. You are under no obligation to comply with field sobriety tests, but holding a driver\'s license means you\'ve given implied consent to blood testing. Exercise your right to remain silent and obtain excellent legal representation.' },
  { q: 'How Can a Criminal Defense Attorney Help Me Avoid Conviction?', a: 'If you are under investigation or have been arrested, you should act quickly to get legal counsel. Your attorney can help throughout the investigation, including uncovering evidence that backs up your story, and developing a defense strategy to get your charges lowered or dismissed.' },
  { q: 'What Rights Do I Have When Under Criminal Investigation?', a: 'Even if you made a mistake, you still have rights. You have the right to remain silent during police questioning and the right to an attorney. We\'ll ensure your constitutional rights are protected and that you get a fair ruling.' },
]

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif", color: '#333', margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        .nav-item:hover .dropdown { display: block !important; }
        .dropdown { display: none; position: absolute; top: 100%; left: 0; background: #1a1a1a; min-width: 220px; z-index: 999; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
        .dropdown a { display: block; padding: 10px 16px; color: #fff; font-size: 14px; border-bottom: 1px solid #333; }
        .dropdown a:hover { background: #8B1A1A; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100%{box-shadow:0 8px 32px rgba(139,26,26,0.5)} 50%{box-shadow:0 8px 48px rgba(139,26,26,0.8)} }
      `}</style>

      {/* Top Bar */}
      <div style={{ background: '#8B1A1A', color: '#fff', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
        <span>Former Prosecutors Now Fighting For You — Free Consultations Available</span>
        <a href={PHONE_HREF} style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>☎ {PHONE}</a>
      </div>

      {/* Header / Nav */}
      <header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 75 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 50, height: 50, background: '#8B1A1A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18 }}>BLG</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, color: '#1a1a1a', lineHeight: 1.2 }}>The Bianchi Law Group, LLC</div>
              <div style={{ fontSize: 11, color: '#666', letterSpacing: '0.1em' }}>— Attorneys at Law —</div>
            </div>
          </a>
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {navItems.map(item => (
              <div key={item.label} className="nav-item" style={{ position: 'relative' }}>
                <a href={item.href} style={{ display: 'block', padding: '8px 12px', fontSize: 13, fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap' }}>
                  {item.label}{item.children ? ' ▾' : ''}
                </a>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map(child => (
                      <a key={child.label} href={child.href}>{child.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={PHONE_HREF} style={{ marginLeft: 8, background: '#8B1A1A', color: '#fff', padding: '10px 18px', borderRadius: 4, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>FREE CONSULTATION</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d0a0a 50%, #8B1A1A 100%)', color: '#fff', padding: '80px 20px', position: 'relative', overflow: 'hidden', minHeight: 500, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${IMG}/hero-img.png)`, backgroundSize: 'cover', backgroundPosition: 'center right', opacity: 0.3 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 400px', gap: 60, alignItems: 'center', width: '100%' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e8a0a0', marginBottom: 16 }}>Former Prosecutors · NJ Supreme Court Certified</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 700, margin: '0 0 20px', lineHeight: 1.15 }}>Justice Doesn't Wait<br /><span style={{ color: '#e8a0a0' }}>Neither Do We</span></h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#e0e0e0', marginBottom: 32, maxWidth: 560 }}>Former Prosecutors and Criminal Defense Attorneys in New Jersey — Safe to Talk, Safe to Trust, Ready to Fight</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" style={{ background: '#8B1A1A', color: '#fff', padding: '16px 32px', borderRadius: 4, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>Schedule a Free Consultation</a>
              <a href={PHONE_HREF} style={{ background: 'transparent', color: '#fff', padding: '16px 32px', borderRadius: 4, fontWeight: 700, fontSize: 15, border: '2px solid rgba(255,255,255,0.5)', display: 'inline-block' }}>Call {PHONE}</a>
            </div>
          </div>
          {/* Contact Form */}
          <div style={{ background: '#fff', borderRadius: 8, padding: 32, color: '#333' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#8B1A1A', margin: '0 0 8px', fontSize: 20 }}>Get a Free Consultation</h3>
            <p style={{ fontSize: 13, color: '#666', margin: '0 0 20px' }}>Our team responds within 24 hours.</p>
            {['Full Name', 'Phone', 'Email'].map(f => (
              <input key={f} placeholder={f} style={{ width: '100%', padding: '12px 14px', marginBottom: 12, border: '1px solid #ddd', borderRadius: 4, fontSize: 14, display: 'block' }} />
            ))}
            <textarea placeholder="Your Case — Briefly describe your situation..." rows={3} style={{ width: '100%', padding: '12px 14px', marginBottom: 16, border: '1px solid #ddd', borderRadius: 4, fontSize: 14, resize: 'vertical' }} />
            <button style={{ width: '100%', background: '#8B1A1A', color: '#fff', padding: '14px', border: 'none', borderRadius: 4, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>SUBMIT FREE CONSULTATION →</button>
            <p style={{ fontSize: 11, color: '#999', textAlign: 'center', margin: '12px 0 0' }}>🔒 100% Confidential</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ background: '#8B1A1A', padding: '16px 20px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {['✓ Former Prosecutors', '✓ NJ Supreme Court Certified', '✓ Free Consultations', '✓ 24/7 Availability', '✓ Proven Results'].map(b => (
            <span key={b} style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* Featured In */}
      <section style={{ background: '#f9f9f9', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: '#1a1a1a', marginBottom: 30 }}>Featured in</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap', alignItems: 'center' }}>
            {['image-8', 'image-9', 'image-11', 'image-10', 'image-12'].map(img => (
              <img key={img} src={`${IMG}/${img}.png`} alt="Media Logo" style={{ height: 60, objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }} />
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section style={{ background: '#fff', padding: '70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B1A1A', marginBottom: 12 }}>Practice Areas</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: '#1a1a1a', margin: '0 0 50px' }}>How May We Help You?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
            {practiceAreas.map(area => (
              <a key={area.label} href={area.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 16px', border: '1px solid #eee', borderRadius: 8, transition: 'all 0.2s', gap: 12 }}>
                <img src={area.icon} alt={area.label} style={{ width: 48, height: 48 }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>{area.label}</span>
                <span style={{ fontSize: 12, color: '#8B1A1A', fontWeight: 600 }}>Learn More</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Former Prosecutors */}
      <section style={{ background: '#1a1a1a', padding: '70px 20px', color: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, margin: '0 0 30px', lineHeight: 1.3 }}>Why Choose Former Prosecutors for Your Criminal Defense?</h2>
            <p style={{ color: '#ccc', lineHeight: 1.7, marginBottom: 30 }}>Our team of former prosecutors understands that criminal charges create a perfect storm of legal complexity and personal crisis. That's why we've built our practice around seven essential pillars:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {whyChooseUs.map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <img src={item.icon} alt={item.title} style={{ width: 32, height: 32, flexShrink: 0, filter: 'invert(1) brightness(0.8)' }} />
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4, color: '#fff' }}>{item.title}</div>
                    <div style={{ fontSize: 14, color: '#bbb', lineHeight: 1.6 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={`${IMG}/img-1024x984.png`} alt="Bianchi Law Group" style={{ width: '100%', borderRadius: 8 }} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#f9f9f9', padding: '70px 20px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: '#1a1a1a', margin: '0 0 50px' }}>What Our Clients Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {testimonials.map(t => (
              <div key={t.author} style={{ background: '#fff', padding: 32, borderRadius: 8, textAlign: 'left', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '4px solid #8B1A1A' }}>
                <div style={{ color: '#f4a' , fontSize: 40, lineHeight: 1, marginBottom: 12 }}>❝</div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#444', margin: '0 0 16px' }}>{t.text}</p>
                <div style={{ fontWeight: 700, color: '#8B1A1A' }}>— {t.author}</div>
              </div>
            ))}
          </div>
          <a href="/reviews/" style={{ display: 'inline-block', marginTop: 30, color: '#8B1A1A', fontWeight: 700, borderBottom: '2px solid #8B1A1A', paddingBottom: 2 }}>Read More Client Testimonials →</a>
        </div>
      </section>

      {/* Meet Our Attorneys */}
      <section style={{ background: '#fff', padding: '70px 20px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: '#1a1a1a', margin: '0 0 50px' }}>Meet Our Attorneys</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {attorneys.map(att => (
              <a key={att.name} href={att.href} style={{ display: 'block', textAlign: 'center' }}>
                <div style={{ width: '100%', paddingBottom: '120%', position: 'relative', overflow: 'hidden', borderRadius: 8, marginBottom: 12, background: '#f0f0f0' }}>
                  <img src={att.img} alt={att.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#1a1a1a', marginBottom: 6 }}>{att.name}</div>
                <div style={{ fontSize: 12, color: '#666', lineHeight: 1.5 }}>{att.title}</div>
              </a>
            ))}
          </div>
          <a href="/service/" style={{ display: 'inline-block', marginTop: 40, border: '2px solid #8B1A1A', color: '#8B1A1A', padding: '12px 32px', borderRadius: 4, fontWeight: 700 }}>View All Attorneys</a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f9f9f9', padding: '70px 20px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: '#1a1a1a', margin: '0 0 30px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {faqs.map(faq => (
                <div key={faq.q} style={{ background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: 10, fontSize: 15 }}>{faq.q}</div>
                  <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={`${IMG3}/faq.png`} alt="FAQ" style={{ width: '100%', borderRadius: 8 }} />
          </div>
        </div>
      </section>

      {/* E-Books */}
      <section style={{ background: '#1a1a1a', padding: '70px 20px', textAlign: 'center', color: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, margin: '0 0 50px' }}>Download One of Our Free E-Books!</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {[
              { img: `${IMG}/ebook.png`, title: 'Understanding Domestic Violence Restraining Order' },
              { img: `${IMG}/ebook1.png`, title: 'How To Obtain A Domestic Violence Restraining Order' },
              { img: `${IMG}/ebook-1.png`, title: 'Criminal Defense Strategies By Former Prosecutors' },
            ].map(book => (
              <div key={book.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, maxWidth: 200 }}>
                <img src={book.img} alt={book.title} style={{ width: 120, borderRadius: 4 }} />
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#8B1A1A', textTransform: 'uppercase' }}>Free Download</div>
                <div style={{ fontSize: 14, color: '#ccc', lineHeight: 1.5 }}>{book.title}</div>
                <a href="#" style={{ background: '#8B1A1A', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Download E-Book</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" style={{ background: '#8B1A1A', padding: '70px 20px', textAlign: 'center', color: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, margin: '0 0 16px' }}>Charged With a Crime? Don't Wait — Contact Us Today.</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', marginBottom: 36 }}>Our former prosecutors are ready to fight for you. Free consultations available 24/7.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} style={{ background: '#fff', color: '#8B1A1A', padding: '16px 36px', borderRadius: 4, fontWeight: 700, fontSize: 16 }}>☎ {PHONE}</a>
            <a href="#contact" style={{ background: 'transparent', color: '#fff', padding: '16px 36px', borderRadius: 4, fontWeight: 700, fontSize: 16, border: '2px solid rgba(255,255,255,0.6)' }}>Free Consultation</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#111', color: '#ccc', padding: '60px 20px 30px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 18, marginBottom: 12 }}>The Bianchi Law Group, LLC</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#999', marginBottom: 16 }}>New Jersey's premier criminal defense firm. Former prosecutors, proven results.</p>
            <div style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Main Office</div>
            <div style={{ fontSize: 13, color: '#999' }}>8 Campus Dr Suite 105<br />Parsippany, NJ 07054</div>
            <div style={{ marginTop: 12, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Red Bank</div>
            <div style={{ fontSize: 13, color: '#999' }}>125 Half Mile Rd #200<br />Red Bank, NJ 07701</div>
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>Practice Areas</div>
            {['Criminal Defense', 'DWI / DUI Defense', 'Drug Crimes', 'Murder & Homicide', 'Robbery', 'Domestic Violence', 'Appeals', 'Municipal Court'].map(l => (
              <div key={l} style={{ fontSize: 13, marginBottom: 8 }}><a href="#" style={{ color: '#999' }}>› {l}</a></div>
            ))}
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>Our Attorneys</div>
            {attorneys.slice(0, 8).map(a => (
              <div key={a.name} style={{ fontSize: 13, marginBottom: 8 }}><a href={a.href} style={{ color: '#999' }}>› {a.name}</a></div>
            ))}
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>Contact</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>862.292.4442</div>
            <div style={{ fontSize: 13, color: '#999', marginBottom: 16 }}>blg@bianchilawgroup.com</div>
            <div style={{ color: '#fff', fontWeight: 700, marginBottom: 8, fontSize: 13 }}>Parsippany:</div>
            <div style={{ fontSize: 13, color: '#999', marginBottom: 16 }}>8 Campus Dr Suite 105, NJ 07054</div>
            <div style={{ color: '#fff', fontWeight: 700, marginBottom: 8, fontSize: 13 }}>Red Bank:</div>
            <div style={{ fontSize: 13, color: '#999' }}>125 Half Mile Rd #200, NJ 07701</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: 24, textAlign: 'center', fontSize: 12, color: '#666' }}>
          <p>© 2026 Bianchi Law Group | All Rights Reserved | <a href="/privacy-policy/" style={{ color: '#999' }}>Privacy Policy</a> | <a href="/sitemap/" style={{ color: '#999' }}>Sitemap</a> | <a href="/disclaimer/" style={{ color: '#999' }}>Disclaimer</a></p>
          <p style={{ marginTop: 8 }}>No aspect of this advertisement has been approved by the Supreme Court of New Jersey. This website and the legal business it describes are affiliated only with the Bianchi Law Group, LLC.</p>
        </div>
      </footer>

      {/* Floating Phone */}
      <a href={PHONE_HREF} style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, background: '#8B1A1A', color: '#fff', borderRadius: 100, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15, animation: 'pulse 2.5s ease-in-out infinite' }}>
        ☎ <span>{PHONE}</span>
      </a>
    </div>
  )
}
