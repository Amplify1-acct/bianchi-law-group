import Link from 'next/link'
import ContactSidebar from '@/components/ContactSidebar'

const W6 = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'
const W7 = 'https://bianchilawgroup.com/wp-content/uploads/2025/07'

const SERVICES = [
  { icon: W6 + '/Criminal-1.svg', title: 'Criminal Defense', href: '/criminal-defense' },
  { icon: W6 + '/app.svg', title: 'Appeals', href: '/criminal-defense/appeals' },
  { icon: W6 + '/DWI-Defense.svg', title: 'DWI / DUI Defense', href: '/criminal-defense/dwi' },
  { icon: W6 + '/Drug-Crime-Defense.svg', title: 'Drug Crimes', href: '/criminal-defense/drug-crimes' },
  { icon: W6 + '/Criminal-Investigations.svg', title: 'Criminal Investigations', href: '/criminal-defense/criminal-investigations' },
  { icon: W6 + '/White-Collar.svg', title: 'White Collar Crimes', href: '/criminal-defense/criminal-investigations' },
  { icon: W6 + '/Sex-Crime-Defense.svg', title: 'Sex Crimes', href: '/criminal-defense' },
  { icon: W6 + '/Juvenile-Crimes.svg', title: 'Juvenile Crimes', href: '/criminal-defense' },
]

const WHY = [
  { icon: W6 + '/Certified.svg', title: 'Certified Criminal Trial Attorneys', text: 'Led by NJ Supreme Court Certified Criminal Trial Attorneys — a distinction held by fewer than 2% of NJ lawyers.' },
  { icon: W6 + '/Experience.svg', title: 'Former Prosecutors Defending You', text: 'Our former prosecutors bring insider knowledge of investigation tactics, plea negotiations, and trial strategy.' },
  { icon: W6 + '/Compassionate.svg', title: 'Judgment-Free Support', text: 'We understand you may be scared and embarrassed. We treat every client with dignity and respect.' },
  { icon: W6 + '/Personal.svg', title: 'The Whole Person Approach', text: 'We understand crimes have collateral consequences beyond the courtroom affecting your career and relationships.' },
  { icon: W6 + '/Determined.svg', title: 'Strategic Team Huddles', text: 'Our unique huddle system brings together lawyers and staff three times per week to examine every case.' },
  { icon: W6 + '/Focus.svg', title: 'Crisis Management Expertise', text: 'Our team has the experience to navigate and de-escalate tense situations both in and beyond the courtroom.' },
]

const TESTIMONIALS = [
  { text: 'Bianchi Law Group has provided our company with outstanding representation in multiple matters in New Jersey. As in-house counsel for a national company, I need lawyers who are knowledgeable, responsive, and effective.', author: 'Corporate Client' },
  { text: 'Chris was amazing! He gave us the absolute best possible outcome, and we could not be more relieved and grateful. They go above and beyond in every way. Highly recommend!', author: 'Satisfied Client' },
  { text: 'I have worked with the Bianchi law group for 2 legal issues now, specifically Tricia. I am always blown away by the outcome of the case. I could not recommend them more.', author: 'Repeat Client' },
  { text: 'I was represented by the Bianchi Law Group in a very serious legal matter, and I am extremely grateful for their professional service and expertise.', author: 'Criminal Defense Client' },
]

const ATTORNEYS = [
  { name: 'Robert A. Bianchi, Esq.', role: 'Former Morris County Prosecutor, Certified Criminal Trial Attorney', img: W7 + '/bob_Bianchi.png', href: '/attorneys/robert-bianchi' },
  { name: 'David J. Bruno, Esq.', role: 'Former Major Crimes Assistant Prosecutor, Certified Criminal Trial Attorney', img: W7 + '/David-J_team.png', href: '/attorneys/david-bruno' },
  { name: 'Dennis Kessler, Esq.', role: '30 Years of Criminal Defense Experience', img: W7 + '/Dennis_teamm.png', href: '/attorneys/dennis-kessler' },
  { name: 'Danielle M. Esposito, Esq.', role: 'Criminal Defense Attorney', img: W7 + '/Danielle_teamb.png', href: '/attorneys/danielle-esposito' },
]

export default function HomePage() {
  return (
    <main>
      <section
        className="relative text-white min-h-screen flex items-center"
        style={{
          backgroundImage: "url('" + W6 + "/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(20,0,2,0.92) 0%, rgba(20,0,2,0.7) 60%, rgba(20,0,2,0.4) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p style={{ color: '#f87171', fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase', marginBottom: 12 }}>
              Former Prosecutors - NJ Supreme Court Certified
            </p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.2, marginBottom: 20 }} className="font-bold">
              New Jersey Criminal Defense Attorneys
            </h1>
            <div style={{ width: 60, height: 3, background: '#a61c23', marginBottom: 20 }} />
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: 'rgba(255,255,255,0.88)', fontSize: '17px', lineHeight: 1.8, marginBottom: 32 }}>
              Criminal offenses, no matter how small they may seem, have the potential to disrupt your life. At The Bianchi Law Group, our team of former prosecutors fights tirelessly to protect you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8622924442" className="btn-primary text-center">Call 862-292-4442</a>
              <a href="#contact" className="btn-outline text-center" style={{ borderColor: '#fff', color: '#fff' }}>Free Case Evaluation</a>
            </div>
          </div>
          <div id="contact" className="lg:max-w-md w-full mx-auto">
            <ContactSidebar />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#a61c23' }} className="py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-white text-sm font-bold">
          {['Former Prosecutors', 'NJ Supreme Court Certified', 'Free Consultations', '24/7 Availability', 'Proven Results'].map(t => (
            <span key={t}>&#10003; {t}</span>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#F0F5FA' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p style={{ color: '#a61c23', fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Practice Areas</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#272727', fontWeight: 700, marginBottom: 12 }}>How May We Help You?</h2>
            <div style={{ width: 56, height: 3, backgroundColor: '#a61c23', margin: '0 auto' }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICES.map(s => (
              <Link key={s.title} href={s.href} className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition-all group hover:-translate-y-1">
                <img src={s.icon} alt={s.title} className="h-14 w-auto mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#272727', fontSize: '15px' }}>{s.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p style={{ color: '#a61c23', fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Why Choose Us</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#272727', fontWeight: 700, marginBottom: 8 }}>Why Choose Former Prosecutors?</h2>
              <div style={{ width: 56, height: 3, backgroundColor: '#a61c23', marginBottom: 20 }} />
              <div className="space-y-5">
                {WHY.map(item => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <img src={item.icon} alt="" className="h-10 w-10 shrink-0 mt-1" />
                    <div>
                      <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#272727', fontSize: '15px', marginBottom: 3 }}>{item.title}</p>
                      <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#666', fontSize: '14px', lineHeight: 1.7 }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={W6 + '/side-img.png'} alt="The Bianchi Law Group" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#272727' }} className="py-14 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: 8 }} className="font-bold">Our Core Values</h2>
          <p style={{ color: '#d4af37', fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontStyle: 'italic' }}>Courage, Compassion, and Commitment</p>
          <div style={{ width: 56, height: 3, background: '#a61c23', margin: '16px auto 20px' }} />
          <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '16px' }}>
            At The Bianchi Law Group, we believe every client deserves fearless representation, genuine compassion, and an unwavering commitment to justice.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F0F5FA' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#272727', fontWeight: 700, marginBottom: 8 }}>What Our Clients Say</h2>
            <div style={{ width: 56, height: 3, backgroundColor: '#a61c23', margin: '0 auto' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-lg p-7 shadow">
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#555', lineHeight: 1.8, fontSize: '15px', marginBottom: 16, fontStyle: 'italic' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#a61c23', fontSize: '14px' }}>&#8212; {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#272727', fontWeight: 700, marginBottom: 8 }}>Meet Our Attorneys</h2>
            <div style={{ width: 56, height: 3, backgroundColor: '#a61c23', margin: '0 auto' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATTORNEYS.map(a => (
              <Link key={a.name} href={a.href} className="group text-center">
                <div className="overflow-hidden rounded-lg mb-4 shadow">
                  <img src={a.img} alt={a.name} className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#272727', fontSize: '17px' }}>{a.name}</h3>
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#a61c23', fontSize: '13px', marginTop: 4 }}>{a.role}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/attorneys/robert-bianchi" className="btn-outline">View All Attorneys</Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#272727' }} className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
            The Bianchi Law Group In The Media
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['image-8','image-9','image-10','image-11','image-12'].map(img => (
              <img key={img} src={W6 + '/' + img + '.png'} alt="Media" className="h-8 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
