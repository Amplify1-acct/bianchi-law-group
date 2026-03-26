import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Criminal Defense Lawyers - The Bianchi Law Group, LLC',
  description: 'Former Prosecutors and Criminal Defense Attorneys in New Jersey. Safe to Talk, Safe to Trust, Ready to Fight. Call 862.225.1965 for a free consultation.',
}

// v3
const WP = 'https://bianchilawgroup.com/wp-content/uploads/2025'

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: '#333', margin: 0, padding: 0 }}>
      <style>{`
        * { box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
        h1,h2,h3,h4 { font-family: 'Playfair Display', serif; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.7} }
        .practice-card:hover { background: #8B1A1A !important; color: #fff !important; }
        .practice-card:hover span { color: #fff !important; }
        .btn-red { background:#8B1A1A; color:#fff; padding:14px 28px; border-radius:4px; font-weight:700; font-size:14px; display:inline-block; border:2px solid #8B1A1A; transition:all 0.2s; }
        .btn-red:hover { background:transparent; color:#8B1A1A; }
        .btn-outline { background:transparent; color:#fff; padding:14px 28px; border-radius:4px; font-weight:700; font-size:14px; display:inline-block; border:2px solid rgba(255,255,255,0.6); }
        .faq-item summary { cursor:pointer; padding:16px 20px; font-weight:700; font-size:15px; list-style:none; display:flex; justify-content:space-between; align-items:center; }
        .faq-item summary::-webkit-details-marker { display:none; }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0d0d0d 0%, #1a0505 40%, #2d0a0a 100%)', color: '#fff', minHeight: 580, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${WP}/06/hero-img.png)`, backgroundSize: 'cover', backgroundPosition: 'top right', opacity: 0.4 }} />
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'center', width: '100%' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#e8a0a0', marginBottom: 14 }}>Former Prosecutors · NJ Supreme Court Certified</div>
            <h1 style={{ fontSize: 58, fontWeight: 700, margin: '0 0 8px', lineHeight: 1.1 }}>Justice Doesn't Wait</h1>
            <h1 style={{ fontSize: 58, fontWeight: 700, margin: '0 0 24px', lineHeight: 1.1, color: '#e8a0a0' }}>Neither Do We</h1>
            <div style={{ width: 60, height: 3, background: '#8B1A1A', marginBottom: 24 }} />
            <p style={{ fontSize: 17, lineHeight: 1.75, color: '#ddd', marginBottom: 12 }}><strong style={{ color: '#fff' }}>Former Prosecutors and Criminal Defense Attorneys in New Jersey</strong></p>
            <p style={{ fontSize: 15, color: '#bbb', marginBottom: 36 }}>Safe to Talk, Safe to Trust, Ready to Fight</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-red">Schedule a Free Consultation</a>
              <a href="tel:8622251965" className="btn-outline">☎ 862.225.1965</a>
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {['Former Prosecutors', 'NJ Supreme Court Certified', 'Free Consultations', 'Proven Results'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#ccc' }}>
                  <span style={{ color: '#8B1A1A', fontWeight: 700, fontSize: 16 }}>✓</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Contact Form */}
          <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
            <div style={{ background: '#8B1A1A', padding: '20px 24px' }}>
              <h3 style={{ color: '#fff', margin: 0, fontSize: 20 }}>Get a Free Consultation</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: '4px 0 0', fontSize: 13 }}>Our team responds within 24 hours.</p>
            </div>
            <div style={{ padding: '24px' }}>
              {['Full Name *', 'Phone *', 'Email *'].map(f => (
                <input key={f} placeholder={f} style={{ width: '100%', padding: '11px 13px', marginBottom: 10, border: '1px solid #ddd', borderRadius: 4, fontSize: 14, display: 'block', color: '#333' }} />
              ))}
              <textarea placeholder="Your Case — Briefly describe your situation..." rows={3}
                style={{ width: '100%', padding: '11px 13px', marginBottom: 14, border: '1px solid #ddd', borderRadius: 4, fontSize: 14, resize: 'vertical', color: '#333' }} />
              <button style={{ width: '100%', background: '#8B1A1A', color: '#fff', padding: '14px', border: 'none', borderRadius: 4, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
                SUBMIT FREE CONSULTATION →
              </button>
              <p style={{ fontSize: 11, color: '#999', textAlign: 'center', margin: '10px 0 0' }}>🔒 100% Confidential</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IN */}
      <section style={{ background: '#f7f7f7', padding: '36px 24px', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: 24 }}>Featured in</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
            {['image-8', 'image-9', 'image-11', 'image-10', 'image-12'].map(img => (
              <img key={img} src={`${WP}/06/${img}.png`} alt="Media" style={{ height: 55, objectFit: 'contain', filter: 'grayscale(80%)', opacity: 0.7 }} />
            ))}
          </div>
        </div>
      </section>

      {/* NJ CRIMINAL DEFENSE INTRO */}
      <section style={{ background: '#fff', padding: '70px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, color: '#1a1a1a', margin: '0 0 20px', textAlign: 'center' }}>New Jersey Criminal Defense Attorneys</h2>
          <div style={{ width: 60, height: 3, background: '#8B1A1A', margin: '0 auto 30px' }} />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#555', maxWidth: 900, margin: '0 auto 16px', textAlign: 'center' }}>
            Criminal offenses, no matter how small they may seem, have the potential to disrupt your life. At The Bianchi Law Group, LLC, our team of former prosecutors fights tirelessly to protect you. We go above and beyond to ensure the most favorable outcome possible in your case.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#555', maxWidth: 900, margin: '0 auto 30px', textAlign: 'center' }}>
            The Bianchi Law Group, LLC is renowned for using all the resources available to us as former prosecutors to serve you best. If you have been charged with a crime in New Jersey, contact our law firm as soon as possible to set up a free consultation.
          </p>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#8B1A1A', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', margin: 0 }}>Our Core Values – Courage, Compassion, and Commitment</p>
          </div>

          {/* PRACTICE AREAS */}
          <h2 style={{ fontSize: 32, color: '#1a1a1a', textAlign: 'center', margin: '0 0 8px' }}>How May We Help You?</h2>
          <div style={{ width: 60, height: 3, background: '#8B1A1A', margin: '0 auto 40px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {[
              { label: 'Criminal Defense', href: '/criminal-defense/', icon: '06/Criminal-1.svg' },
              { label: 'Appeals', href: '/appeals/', icon: '06/app.svg' },
              { label: 'DWI / DUI Defense', href: '/criminal-defense/dwi/', icon: '06/DWI-Defense.svg' },
              { label: 'Drug Crimes', href: '/criminal-defense/drug-crimes/', icon: '06/Drug-Crime-Defense.svg' },
              { label: 'Criminal Investigations', href: '/criminal-and-white-collar-investigations/', icon: '06/Criminal-Investigations.svg' },
              { label: 'Personal Injury', href: '/personal-injury/', icon: '06/Personal.svg' },
              { label: 'Juvenile Crimes', href: '/juvenile-crimes/', icon: '06/Juvenile-Crimes.svg' },
              { label: 'Sex Crimes', href: '/sex-crimes-cases/', icon: '06/Sex-Crime-Defense.svg' },
              { label: 'White Collar Crimes', href: '/white-collar-crimes/', icon: '06/White-Collar.svg' },
              { label: 'Municipal Court', href: '/municipal-court/', icon: '06/Law.svg' },
            ].map(area => (
              <a key={area.label} href={area.href} className="practice-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 12px', border: '1px solid #eee', borderRadius: 6, textAlign: 'center', transition: 'all 0.2s', gap: 14, background: '#fafafa' }}>
                <img src={`${WP}/${area.icon}`} alt={area.label} style={{ width: 50, height: 50 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.4 }}>{area.label}</span>
                <span style={{ fontSize: 12, color: '#8B1A1A', fontWeight: 700 }}>Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FORMER PROSECUTORS */}
      <section style={{ background: '#111', padding: '70px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 480px', gap: 60, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B1A1A', marginBottom: 12 }}>Why Choose Us</p>
            <h2 style={{ fontSize: 38, margin: '0 0 24px', lineHeight: 1.25 }}>Why Choose Former Prosecutors for Your Criminal Defense?</h2>
            <p style={{ color: '#aaa', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>Our team understands that criminal charges create a perfect storm of legal complexity and personal crisis. We've built our practice around seven essential pillars:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {[
                { icon: '06/Certified.svg', title: 'Certified Criminal Trial Attorneys', text: 'Led by two NJ Supreme Court Certified Criminal Trial Attorneys — a distinction held by less than 0.25% of all NJ lawyers.' },
                { icon: '06/Experience.svg', title: 'Former Prosecutors Defending You', text: 'Insider knowledge of investigation tactics, charging strategies, and courtroom procedures used against you.' },
                { icon: '06/Compassionate.svg', title: 'Judgment-Free Support', text: 'We treat you with dignity during your darkest times. Your feelings matter to us.' },
                { icon: '06/Focus.svg', title: 'The Whole Person Approach', text: 'We understand crimes have collateral consequences beyond the courtroom — affecting your career, relationships, and future.' },
                { icon: '06/Determined.svg', title: 'Strategic Team Huddles', text: 'Our unique huddle system brings together lawyers and support staff three times per week to examine every case.' },
                { icon: '06/Results.svg', title: 'Crisis Management Expertise', text: 'Our team has the experience to navigate and de-escalate tense situations in and beyond the courtroom.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <img src={`${WP}/${item.icon}`} alt="" style={{ width: 30, height: 30, flexShrink: 0, filter: 'brightness(0) invert(1) opacity(0.7)', marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', marginBottom: 4, fontSize: 15 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#999', lineHeight: 1.7 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={`${WP}/06/img-1024x984.png`} alt="Bianchi Law Group Attorneys" style={{ width: '100%', borderRadius: 8, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} />
          </div>
        </div>
      </section>

      {/* PARTNER BIOS */}
      <section style={{ background: '#fff', padding: '70px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, textAlign: 'center', color: '#1a1a1a', margin: '0 0 8px' }}>Meet Our Partners</h2>
          <div style={{ width: 60, height: 3, background: '#8B1A1A', margin: '0 auto 50px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            {[
              {
                name: 'Robert A. Bianchi, Esq.',
                title: 'Former Morris County Prosecutor, Certified Criminal Trial Attorney, Partner At The Bianchi Law Group',
                img: `${WP}/07/bob_Bianchi.png`,
                href: '/robert-bianchi-esq/',
                bio: 'Bob Bianchi is a former Head County Prosecutor who aggressively fights the government when his clients are charged with crimes. Bob is NJ Supreme Court Certified Criminal Trial Attorney — a distinction held by less than 1% of NJ lawyers. He is also a regular National TV Legal Analyst appearing on CNN, Fox News, NBC, CBS and MSNBC.'
              },
              {
                name: 'David J. Bruno, Esq.',
                title: 'Former Assistant Prosecutor, Certified Criminal Trial Attorney, Partner At The Bianchi Law Group',
                img: `${WP}/07/David-J_team.png`,
                href: '/david-j-bruno-esq/',
                bio: 'Dave Bruno is a partner at The Bianchi Law Group, Former Major Crimes Assistant Prosecutor, and National TV Legal Analyst. David handles criminal defense, municipal court, and domestic violence cases in all twenty-one New Jersey counties.'
              }
            ].map(atty => (
              <div key={atty.name} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, alignItems: 'start' }}>
                <img src={atty.img} alt={atty.name} style={{ width: '100%', borderRadius: 6, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }} />
                <div>
                  <h3 style={{ fontSize: 22, margin: '0 0 8px', color: '#1a1a1a' }}>{atty.name}</h3>
                  <p style={{ fontSize: 13, color: '#8B1A1A', fontWeight: 600, margin: '0 0 14px', lineHeight: 1.5 }}>{atty.title}</p>
                  <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, margin: '0 0 16px' }}>{atty.bio}</p>
                  <a href={atty.href} style={{ display: 'inline-block', background: '#8B1A1A', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: '#f5f5f5', padding: '70px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, textAlign: 'center', color: '#1a1a1a', margin: '0 0 8px' }}>What Our Clients Say</h2>
          <div style={{ width: 60, height: 3, background: '#8B1A1A', margin: '0 auto 50px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { text: "Bianchi Law Group has provided our company with outstanding representation in multiple matters in New Jersey. As in-house counsel for a national company, I can say that the Bianchi Law Group's attorneys have the expertise and skillset of an international fortune 500 law firm, along with the practical knowledge to give us the right counsel at the right time.", author: 'Vinay S.', type: 'Corporate Client' },
              { text: "Chris was amazing! He gave us the absolute best possible outcome, and we couldn't be more relieved and grateful. They go above and beyond in every way. Every member of the firm, from the head partners to support staff care deeply about their clients, and it shows.", author: 'Amanda C.', type: 'Satisfied Client' },
              { text: "I've worked with the Bianchi law group for 2 legal issues now specifically Tricia. I'm always blown away by the outcome of the case. I couldn't recommend them enough. Don't waste time with other law groups, save time and call Bianchi first!", author: 'Mike C.', type: 'Repeat Client' },
              { text: "I was represented by the Bianchi Law Group (Christopher Eaton) in a very serious legal matter, and I am extremely grateful for their professional service and expertise. I was fortunate to receive a relatively favorable outcome in large part due to the efforts of Christopher and the legal team.", author: 'Raffaele S.', type: 'Criminal Defense Client' },
            ].map(t => (
              <div key={t.author} style={{ background: '#fff', padding: '32px', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.06)', borderLeft: '4px solid #8B1A1A', position: 'relative' }}>
                <img src={`${WP}/06/quote.svg`} alt="" style={{ width: 40, opacity: 0.15, position: 'absolute', top: 20, right: 20 }} />
                <img src={`${WP}/06/stars.svg`} alt="5 stars" style={{ height: 18, marginBottom: 14 }} />
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#444', margin: '0 0 16px' }}>{t.text}</p>
                <div style={{ fontWeight: 700, color: '#8B1A1A', fontSize: 14 }}>— {t.author}</div>
                <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>{t.type}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <a href="/reviews/" style={{ color: '#8B1A1A', fontWeight: 700, fontSize: 15, borderBottom: '2px solid #8B1A1A', paddingBottom: 2 }}>Read More Client Testimonials →</a>
          </div>
        </div>
      </section>

      {/* FULL ATTORNEY GRID */}
      <section style={{ background: '#fff', padding: '70px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, textAlign: 'center', color: '#1a1a1a', margin: '0 0 8px' }}>Our Attorneys</h2>
          <div style={{ width: 60, height: 3, background: '#8B1A1A', margin: '0 auto 50px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 36 }}>
            {[
              { name: 'Robert A. Bianchi, Esq.', href: '/robert-bianchi-esq/', img: `${WP}/07/bob_Bianchi.png` },
              { name: 'David J. Bruno, Esq.', href: '/david-j-bruno-esq/', img: `${WP}/07/David-J_team.png` },
              { name: 'Dennis Kessler, Esq.', href: '/dennis-kessler-esq/', img: `${WP}/07/Dennis_teamm.png` },
              { name: 'Danielle M. Esposito, Esq.', href: '/danielle-esposito-esq/', img: `${WP}/06/Danielle-M.-Esposito.png` },
              { name: 'Christina Hall, Esq.', href: '/christina-hall-esq/', img: `${WP}/06/Christina-Hall-Esq.png` },
              { name: 'Christopher A. Eaton, Esq.', href: '/christopher-eaton-esq/', img: `${WP}/06/team2.png` },
              { name: 'Paul A. Di Lella, Esq.', href: '/paul-a-di-lella-esq/', img: `${WP}/06/team1.png` },
              { name: 'Tricia H. Margolis, Esq.', href: '/tricia-h-margolis-esq/', img: `${WP}/06/Tricia.png` },
            ].map(a => (
              <a key={a.name} href={a.href} style={{ display: 'block', textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '1/1.1', overflow: 'hidden', borderRadius: 6, marginBottom: 12, background: '#f0f0f0', position: 'relative' }}>
                  <img src={a.img} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a1a', marginBottom: 4 }}>{a.name}</div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/service/" style={{ display: 'inline-block', border: '2px solid #8B1A1A', color: '#8B1A1A', padding: '12px 32px', borderRadius: 4, fontWeight: 700, fontSize: 14 }}>View All Attorneys</a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US ICONS */}
      <section style={{ background: '#f5f5f5', padding: '70px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, textAlign: 'center', color: '#1a1a1a', margin: '0 0 8px' }}>Why Choose Us?</h2>
          <div style={{ width: 60, height: 3, background: '#8B1A1A', margin: '0 auto 50px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { icon: '06/Experience.svg', title: 'Experience', text: 'With our decades of experience, we are the law team you want on your side when facing criminal charges.' },
              { icon: '06/Certified.svg', title: 'Certified Criminal', text: 'Our partners are certified criminal trial attorneys by the New Jersey Supreme Court — held by less than 1% of NJ lawyers.' },
              { icon: '06/Determined.svg', title: 'Determined', text: 'We are dedicated to getting you the favorable results you need and will leave no stone unturned.' },
              { icon: '06/Compassionate.svg', title: 'Compassionate', text: "We see our clients as more than just case numbers. We'll treat you with the respect, compassion, and care you deserve." },
              { icon: '06/Focus.svg', title: 'Focused', text: 'We focus our practice solely on criminal law, which means we are highly experienced in defending clients facing criminal charges.' },
              { icon: '06/Results.svg', title: 'No Judgement', text: 'Our proven record of success shows that we are the team you want standing behind you when facing criminal charges in New Jersey.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: '#fff', padding: '28px', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <img src={`${WP}/${item.icon}`} alt="" style={{ width: 48, height: 48, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#1a1a1a', marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-BOOKS */}
      <section style={{ background: '#1a1a1a', padding: '70px 24px', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, margin: '0 0 8px' }}>Download One of Our Free E-Books!</h2>
          <div style={{ width: 60, height: 3, background: '#8B1A1A', margin: '0 auto 50px' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            {[
              { img: `${WP}/06/ebook.png`, title: 'Understanding Domestic Violence Restraining Order' },
              { img: `${WP}/06/ebook1.png`, title: 'How To Obtain A Domestic Violence Restraining Order' },
              { img: `${WP}/06/ebook-1.png`, title: 'Criminal Defense Strategies By Former Prosecutors' },
            ].map(book => (
              <div key={book.title} style={{ maxWidth: 200 }}>
                <img src={book.img} alt={book.title} style={{ width: 130, borderRadius: 6, marginBottom: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }} />
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#8B1A1A', textTransform: 'uppercase', marginBottom: 8 }}>Free Download</div>
                <div style={{ fontSize: 13, color: '#bbb', lineHeight: 1.6, marginBottom: 16 }}>{book.title}</div>
                <a href="#" style={{ display: 'inline-block', background: '#8B1A1A', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Download E-Book</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '70px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 36, color: '#1a1a1a', margin: '0 0 8px' }}>Frequently Asked Questions</h2>
            <div style={{ width: 60, height: 3, background: '#8B1A1A', marginBottom: 36 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: 'Are Your Trial Attorneys Experienced in Criminal Defense?', a: 'The legal team at The Bianchi Law Group, LLC is led by two attorneys with vast experience in criminal defense. Attorneys Bianchi and Bruno have both served as leaders in the Morris County Law Enforcement system and have handled countless defense cases, including violent crimes, sex crimes, white collar crimes, and more.' },
                { q: "What Should I Do if I've Been Arrested for DWI?", a: "Being arrested for DWI can be stressful and embarrassing. Please remember to treat law enforcement officials courteously. You are under no obligation to comply with field sobriety tests, but holding a driver's license means you've given implied consent to blood testing. When placed under arrest, exercise your right to remain silent and obtain excellent legal representation." },
                { q: 'How Can a Criminal Defense Attorney Help Me Avoid Conviction?', a: 'If you are under investigation or have been arrested for any reason, you should act quickly to get legal counsel. Your attorney can help you throughout the investigation, including uncovering evidence that backs up your story and developing a defense strategy.' },
                { q: 'What Rights Do I Have When Under Criminal Investigation?', a: "Even if you made a mistake and committed a crime, you still have rights. You have the right to remain silent during police questioning and the right to an attorney. We'll ensure your constitutional rights are protected and that you get a fair ruling." },
              ].map(faq => (
                <details key={faq.q} className="faq-item" style={{ background: '#f9f9f9', borderRadius: 6, border: '1px solid #eee' }}>
                  <summary className="faq-item" style={{ cursor: 'pointer', padding: '16px 20px', fontWeight: 700, fontSize: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                    {faq.q} <span style={{ color: '#8B1A1A', fontSize: 20, fontWeight: 400 }}>+</span>
                  </summary>
                  <div style={{ padding: '0 20px 18px', fontSize: 14, color: '#555', lineHeight: 1.8 }}>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
          <div style={{ paddingTop: 52 }}>
            <img src={`${WP}/10/faq.png`} alt="FAQ" style={{ width: '100%', borderRadius: 8 }} />
          </div>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section style={{ background: '#f5f5f5', padding: '70px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, textAlign: 'center', color: '#1a1a1a', margin: '0 0 8px' }}>Our Latest Blog Posts</h2>
          <div style={{ width: 60, height: 3, background: '#8B1A1A', margin: '0 auto 50px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { date: 'March 17, 2026', title: 'New Jersey Survivors Justice Act L. 2025, c. 328', excerpt: 'New Jersey Legislature enacts new sentencing law for victims of domestic violence. Governor Murphy signed L.2025, c. 328, into law as part of the Survivors Justice Act.', href: '/blog/' },
              { date: 'December 16, 2025', title: 'Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves', excerpt: 'The New Jersey Supreme Court, in a six-to-one ruling, decided State v. Nieves, holding that expert testimony regarding shaken baby syndrome is admissible.', href: '/blog/' },
              { date: 'December 16, 2025', title: 'New Jersey Ghost Gun Law: Appellate Division in State v. Oliver', excerpt: 'The New Jersey Appellate Division decided State of New Jersey v. Malihki X. Oliver, addressing the state\'s ghost gun law in a significant criminal law decision.', href: '/blog/' },
            ].map(post => (
              <div key={post.title} style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ background: '#1a1a1a', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={`${WP}/06/blog-post.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ fontSize: 12, color: '#8B1A1A', fontWeight: 700, marginBottom: 8 }}>{post.date}</div>
                  <h3 style={{ fontSize: 16, color: '#1a1a1a', margin: '0 0 10px', lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, margin: '0 0 14px' }}>{post.excerpt}</p>
                  <a href={post.href} style={{ color: '#8B1A1A', fontWeight: 700, fontSize: 13 }}>Read More →</a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <a href="/blog/" style={{ display: 'inline-block', border: '2px solid #8B1A1A', color: '#8B1A1A', padding: '12px 32px', borderRadius: 4, fontWeight: 700, fontSize: 14 }}>Read More Posts</a>
          </div>
        </div>
      </section>

      {/* FINAL CTA + CONTACT */}
      <section id="contact" style={{ background: '#8B1A1A', padding: '70px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 42, margin: '0 0 16px', lineHeight: 1.2 }}>Charged With a Crime? Don't Wait — Contact Us Today.</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>Our former prosecutors are ready to fight for you. Free consultations available 24/7.</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="tel:8622251965" style={{ background: '#fff', color: '#8B1A1A', padding: '14px 28px', borderRadius: 4, fontWeight: 700, fontSize: 15 }}>☎ 862.225.1965</a>
              <a href="#contact" style={{ background: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: 4, fontWeight: 700, fontSize: 15, border: '2px solid rgba(255,255,255,0.5)' }}>Free Consultation</a>
            </div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: '32px' }}>
            <h3 style={{ color: '#fff', margin: '0 0 20px', fontSize: 20 }}>Contact Us Today</h3>
            {['Full Name', 'Phone', 'Email'].map(f => (
              <input key={f} placeholder={f} style={{ width: '100%', padding: '11px 13px', marginBottom: 10, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, fontSize: 14, display: 'block', background: 'rgba(255,255,255,0.1)', color: '#fff' }} />
            ))}
            <textarea placeholder="How may we help you?" rows={3} style={{ width: '100%', padding: '11px 13px', marginBottom: 14, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, fontSize: 14, background: 'rgba(255,255,255,0.1)', color: '#fff', resize: 'vertical' }} />
            <button style={{ width: '100%', background: '#fff', color: '#8B1A1A', padding: '14px', border: 'none', borderRadius: 4, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
              SEND MESSAGE →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
