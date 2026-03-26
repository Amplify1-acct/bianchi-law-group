import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bianchi Law Group, LLC | NJ Criminal Defense Attorneys',
  description: 'Former Prosecutors and Criminal Defense Attorneys in New Jersey. Safe to Talk, Safe to Trust, Ready to Fight. Call 862.225.1965 for a free consultation.',
}

const IMG = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us', href: '#', children: [
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
    ]
  },
  {
    label: 'Criminal Defense', href: '/criminal-defense/', children: [
      { label: 'Appeals', href: '/appeals/' },
      { label: 'Criminal Investigations', href: '/criminal-and-white-collar-investigations/' },
      { label: 'Crisis Management', href: '/crisis-management/' },
      { label: 'DWI Defense', href: '/criminal-defense/dwi/' },
      { label: 'Drug Crimes', href: '/criminal-defense/drug-crimes/' },
      { label: 'Domestic Violence', href: '/criminal-defense/domestic-violence/' },
      { label: 'Murder', href: '/criminal-defense/murder/' },
      { label: 'Assault & Aggravated Assault', href: '/criminal-defense/assault-and-aggravated-assault/' },
      { label: 'Robbery', href: '/criminal-defense/robbery/' },
      { label: 'Burglary', href: '/criminal-defense/burglary/' },
      { label: 'Shoplifting', href: '/criminal-defense/shoplifting/' },
      { label: 'Restraining Orders', href: '/criminal-defense/restraining-orders/' },
      { label: 'Municipal Court', href: '/municipal-court/' },
    ]
  },
  {
    label: 'Sex Crimes', href: '/sex-crimes-cases/', children: [
      { label: 'Sexual Assault', href: '/sex-crimes-cases/sexual-assault/' },
      { label: 'Lewdness', href: '/sex-crimes-cases/lewdness/' },
      { label: "Megan's Law", href: '/sex-crimes-cases/registration-of-sex-offenders-megans-law/' },
      { label: 'Sex Crime Definitions', href: '/sex-crimes-cases/sex-crimes-definitions/' },
      { label: 'Rape Shield Law', href: '/sex-crimes-cases/rape-shield-law/' },
    ]
  },
  {
    label: 'White Collar', href: '/white-collar-crimes/', children: [
      { label: 'Forgery', href: '/white-collar-crimes/forgery/' },
      { label: 'Credit Card Fraud', href: '/white-collar-crimes/credit-card-fraud-and-theft/' },
    ]
  },
  {
    label: 'More', href: '#', children: [
      { label: 'Juvenile Crimes', href: '/juvenile-crimes/' },
      { label: 'Personal Injury', href: '/personal-injury/' },
      { label: 'Bergen County', href: '/bergen-county/' },
      { label: 'Morris County', href: '/morris-county/' },
      { label: 'Monmouth County', href: '/monmouth-county/' },
      { label: 'Somerset County', href: '/somerset-county/' },
    ]
  },
  {
    label: 'Resources', href: '#', children: [
      { label: 'Legal Blog', href: '/blog/' },
      { label: 'Media', href: '/media/' },
      { label: 'Outreach', href: '/outreach/' },
      { label: 'Reviews', href: '/reviews/' },
    ]
  },
  { label: 'Contact', href: '/contact-us/' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Nunito Sans', sans-serif" }}>
        <style>{`
          * { box-sizing: border-box; }
          a { text-decoration: none; color: inherit; }
          .nav-item { position: relative; }
          .nav-item:hover .dropdown { display: block !important; }
          .dropdown { display: none; position: absolute; top: 100%; left: 0; background: #1a1a1a; min-width: 240px; z-index: 9999; box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
          .dropdown a { display: block; padding: 11px 18px; color: #ddd; font-size: 13px; border-bottom: 1px solid #2a2a2a; transition: all 0.15s; }
          .dropdown a:hover { background: #8B1A1A; color: #fff; padding-left: 24px; }
          @keyframes pulse { 0%,100%{box-shadow:0 4px 20px rgba(139,26,26,0.6)} 50%{box-shadow:0 4px 32px rgba(139,26,26,0.9)} }
        `}</style>

        {/* Top Bar */}
        <div style={{ background: '#8B1A1A', color: '#fff', padding: '7px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12.5, fontWeight: 600 }}>
          <span>Former Prosecutors Now Fighting For You — Free Consultations Available</span>
          <a href="tel:8622251965" style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
            <img src={`${IMG}/Phone-Ring.svg`} alt="" style={{ width: 16, height: 16, filter: 'invert(1)' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            862.225.1965
          </a>
        </div>

        {/* Nav */}
        <header style={{ background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
            {/* Logo */}
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 46, height: 46, background: '#8B1A1A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>BLG</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: '#1a1a1a', lineHeight: 1.2, whiteSpace: 'nowrap' }}>The Bianchi Law Group, LLC</div>
                <div style={{ fontSize: 10, color: '#888', letterSpacing: '0.12em', fontStyle: 'italic' }}>— Attorneys at Law —</div>
              </div>
            </a>

            {/* Nav Items */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map(item => (
                <div key={item.label} className="nav-item">
                  <a href={item.href} style={{ display: 'block', padding: '8px 11px', fontSize: 12.5, fontWeight: 700, color: '#1a1a1a', whiteSpace: 'nowrap', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
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
              <a href="tel:8622251965" style={{ marginLeft: 8, background: '#8B1A1A', color: '#fff', padding: '10px 16px', borderRadius: 4, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>FREE CONSULTATION</a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer style={{ background: '#111', color: '#ccc', padding: '60px 20px 0' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1.2fr', gap: 48, paddingBottom: 48 }}>
            {/* Col 1 */}
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 17, marginBottom: 10 }}>The Bianchi Law Group, LLC</div>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: '#888', marginBottom: 20 }}>New Jersey's premier criminal defense firm. Former prosecutors, proven results.</p>
              <div style={{ fontSize: 13, marginBottom: 4 }}><span style={{ color: '#fff', fontWeight: 700 }}>Phone: </span><a href="tel:8622251965" style={{ color: '#aaa' }}>862.225.1965</a></div>
              <div style={{ fontSize: 13, marginBottom: 20 }}><span style={{ color: '#fff', fontWeight: 700 }}>Email: </span><a href="mailto:blg@bianchilawgroup.com" style={{ color: '#aaa' }}>blg@bianchilawgroup.com</a></div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 13, marginBottom: 4 }}>Main Office</div>
              <div style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>8 Campus Dr Suite 105<br />Parsippany, NJ 07054<br /><a href="tel:8622924442" style={{ color: '#aaa' }}>862.292.4442</a></div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 13, marginBottom: 4 }}>Red Bank (By Appointment)</div>
              <div style={{ fontSize: 13, color: '#888' }}>125 Half Mile Rd #200<br />Red Bank, NJ 07701<br /><a href="tel:7326418237" style={{ color: '#aaa' }}>732.641.8237</a></div>
            </div>
            {/* Col 2 */}
            <div>
              <div style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Practice Areas</div>
              {['Criminal Defense', 'DWI / DUI Defense', 'Drug Crimes', 'Murder & Homicide', 'Domestic Violence', 'Robbery', 'Assault', 'Appeals', 'Juvenile Crimes', 'Sex Crimes', 'White Collar', 'Municipal Court'].map(l => (
                <div key={l} style={{ fontSize: 13, marginBottom: 7 }}>
                  <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}>› {l}</a>
                </div>
              ))}
            </div>
            {/* Col 3 */}
            <div>
              <div style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Our Attorneys</div>
              {[
                ['Robert A. Bianchi, Esq.', '/robert-bianchi-esq/'],
                ['David J. Bruno, Esq.', '/david-j-bruno-esq/'],
                ['Dennis Kessler, Esq.', '/dennis-kessler-esq/'],
                ['Christina Hall, Esq.', '/christina-hall-esq/'],
                ['Christopher A. Eaton, Esq.', '/christopher-eaton-esq/'],
                ['Danielle M. Esposito, Esq.', '/danielle-esposito-esq/'],
                ['Paul A. Di Lella, Esq.', '/paul-a-di-lella-esq/'],
                ['Tricia H. Margolis, Esq.', '/tricia-h-margolis-esq/'],
              ].map(([name, href]) => (
                <div key={name} style={{ fontSize: 13, marginBottom: 7 }}>
                  <a href={href} style={{ color: '#888' }}>› {name}</a>
                </div>
              ))}
            </div>
            {/* Col 4 */}
            <div>
              <div style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>More</div>
              {[
                ['Blog', '/blog/'],
                ['Media', '/media/'],
                ['Reviews', '/reviews/'],
                ['Outreach', '/outreach/'],
                ['Careers', '/careers/'],
                ['Bergen County', '/bergen-county/'],
                ['Morris County', '/morris-county/'],
                ['Monmouth County', '/monmouth-county/'],
                ['Somerset County', '/somerset-county/'],
                ['Contact Us', '/contact-us/'],
              ].map(([label, href]) => (
                <div key={label} style={{ fontSize: 13, marginBottom: 7 }}>
                  <a href={href} style={{ color: '#888' }}>› {label}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{ borderTop: '1px solid #222', padding: '20px', textAlign: 'center', fontSize: 12, color: '#555' }}>
            <p style={{ margin: '0 0 6px' }}>
              © 2026 Bianchi Law Group | All Rights Reserved |{' '}
              <a href="/privacy-policy/" style={{ color: '#666' }}>Privacy Policy</a> |{' '}
              <a href="/sitemap/" style={{ color: '#666' }}>Sitemap</a> |{' '}
              <a href="/disclaimer/" style={{ color: '#666' }}>Disclaimer</a>
            </p>
            <p style={{ margin: 0, color: '#444' }}>No aspect of this advertisement has been approved by the Supreme Court of New Jersey. This website is affiliated only with the Bianchi Law Group, LLC.</p>
          </div>
        </footer>

        {/* Floating Phone CTA */}
        <a href="tel:8622251965" style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, background: '#8B1A1A', color: '#fff', borderRadius: 50, padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14, boxShadow: '0 4px 20px rgba(139,26,26,0.6)', animation: 'pulse 2.5s ease-in-out infinite' }}>
          ☎ 862.225.1965
        </a>
      </body>
    </html>
  )
}
