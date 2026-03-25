```typescript
import Link from 'next/link'

export default function CriminalDefenseMurderPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New Jersey Murder Lawyers - The Bianchi Law Group</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: '"Nunito Sans", sans-serif', backgroundColor: '#ffffff', color: '#333333', lineHeight: 1.6 }}>
        {/* Header */}
        <header style={{ backgroundColor: '#1a1a1a', padding: '20px 0', borderBottom: '3px solid #8B1A1A' }}>
          <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#ffffff' }}>
              The Bianchi Law Group
            </div>
            <div style={{ display: 'flex', gap: '30px' }}>
              <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px' }}>Home</Link>
              <Link href="/criminal-defense" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px' }}>Criminal Defense</Link>
              <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px' }}>Contact</Link>
            </div>
          </nav>
        </header>

        {/* Page Hero */}
        <section style={{ backgroundColor: '#8B1A1A', color: '#ffffff', padding: '60px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', fontWeight: 700, margin: '0 0 20px 0' }}>
              New Jersey Murder Attorneys
            </h1>
            <p style={{ fontSize: '20px', margin: 0, fontWeight: 300 }}>
              Defending Clients Facing Violent Criminal Charges
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
          {/* Left Column - Main Content */}
          <article>
            <section style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                Murder or criminal homicide is one of the most serious crimes under New Jersey law. Murder was punishable by death until December 2007, at which time the New Jersey Legislature abolished the death penalty. Currently, the penalty for murder in New Jersey can range from 30 years to life without parole.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                Under New Jersey law, a felony murder charge differs significantly from other murder charges. To be charged with felony murder in New Jersey, an accused individual must have been in the process of committing certain enumerated crimes and subsequently killed someone in the commission of, or an attempt to commit, or flight after committing or attempting to commit such crimes.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                In a felony murder case, it does not need to be proven that the accused individual attempted or intended to murder or harm the victim in question. Similarly, in unique cases where death, even an accidental death, has occurred in the commission of an attempt to commit or flee after committing or attempting to commit a felony, the defendant will also be charged with felony murder.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                If you are a New Jersey resident who is being investigated or who has been arrested on a felony murder charge, it is crucial that you understand how a felony murder charge differs from a standard murder charge, as both carry serious consequences. Our criminal defense attorneys at The Bianchi Law Group, LLC can help and offer a free consultation to anyone facing this challenging situation. Call us immediately at <a href="tel:862-292-4442" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 700 }}>862-292-4442</a> to schedule your confidential consultation with our compassionate, capable team of murder defense lawyers.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
                What Felonies, Also Known as Indictable Crimes in New Jersey, Lead To A Felony Murder Charge?
              </h2>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                Many people wonder what situations could merit a felony murder charge. These are some of the most serious criminal offenses, resulting in severe penalties. If you or a loved one is facing any of the following crimes, you should contact highly skilled New Jersey criminal lawyers immediately for a strong criminal defense.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px', fontWeight: 600 }}>
                The following indictable crimes can lead to a felony murder charge in New Jersey:
              </p>
              <ul style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px', paddingLeft: '30px' }}>
                <li style={{ marginBottom: '10px' }}>Robbery</li>
                <li style={{ marginBottom: '10px' }}>Sexual assault</li>
                <li style={{ marginBottom: '10px' }}>Arson</li>
                <li style={{ marginBottom: '10px' }}>Burglary</li>
                <li style={{ marginBottom: '10px' }}>Kidnapping</li>
                <li style={{ marginBottom: '10px' }}>Carjacking</li>
                <li style={{ marginBottom: '10px' }}>Criminal escape or terrorism</li>
              </ul>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                If you are arrested under the suspicion of one of the indictable crimes above, the prosecutor must prove the crime beyond a reasonable doubt. Additionally, the prosecutor has the burden to prove that the death occurred during the course of the crime or attempt to commit the crime, or during an immediate flight from the crime.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                Please rest assured that just being arrested for one of the above crimes does not mean you'll necessarily be convicted. Our New Jersey criminal attorneys have helped countless individuals defeat or lower their felony murder charges, escaping the harsh penalties of a conviction. We'll apply our know-how, honesty, and determination to get you the most favorable outcome possible in your criminal case. Call now to schedule a free consultation where we'll discuss your criminal charges and potential defense strategies.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
                What Are The Penalties For Murder In New Jersey?
              </h2>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                Murder is a crime of the first degree. According to New Jersey law, a murder conviction can result in up to life in prison. Other cases may result in lengthy prison sentences, during which the person shall not be eligible for parole or be sentenced to a specific term of years between 30 years and life imprisonment, of which the person shall serve 30 years before being eligible for parole.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                Additionally, killing an on-duty officer of the peace or a minor under age 14 can lead to more serious charges, including losing the possibility of parole. Manslaughter and death by auto are both considered slightly less serious crimes and could result in lower penalties.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                Our criminal defense lawyers can help identify and explain the charges you're facing. We'll start by discussing your options with you in terms you can understand and help you determine which path to follow in fighting your charges. Even if you made a mistake and committed a crime, you still have rights that must be defended. We can often get our clients lower charges if police officers violate their rights.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                Contact The Bianchi Law Group, LLC, to learn more about how we can help with violent crimes, felonies, misdemeanors, and more.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>
                Can You Get The Death Penalty For Murder In New Jersey?
              </h2>
              <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                No, the death penalty was abolished in New Jersey in December 2007. While murder remains one of the most serious crimes in the state, the maximum penalty is now life imprisonment without the possibility of parole. Our experienced criminal defense attorneys understand the gravity of murder charges and will fight tirelessly to protect your rights and achieve the best possible outcome for your case.
              </p>
            </section>

            <section style={{ backgroundColor: '#f5f5f5', padding: '30px', borderLeft: '4px solid #8B1A1A', marginTop: '40px' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#1a1a1a', marginTop: 0, marginBottom: '15px' }}>
                Free Consultation Available
              </h3>
              <p style={{ fontSize: '18px', lineHeight: 1.8, margin: 0 }}>
                If you or a loved one is facing murder charges in New Jersey, time is of the essence. Contact The Bianchi Law Group, LLC today at <a href="tel:862-292-4442" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 700 }}>862-292-4442</a> for a free, confidential consultation. Our compassionate and experienced criminal defense attorneys are ready to fight for your rights and your future.
              </p>
            </section>
          </article>

          {/* Right Sidebar - Contact Form */}
          <aside>
            <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '8px', position: 'sticky', top: '20px' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#ffffff', marginTop: 0, marginBottom: '20px', textAlign: 'center' }}>
                Contact Us Today
              </h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label htmlFor="firstName" style={{ display: 'block', color: '#ffffff', marginBottom: '5px', fontSize: '14px' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={{ display: 'block', color: '#ffffff', marginBottom: '5px', fontSize: '14px' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', color: '#ffffff', marginBottom: '5px', fontSize: '14px' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', color: '#ffffff', marginBottom: '5px', fontSize: '14px' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', color: '#ffffff', marginBottom: '5px', fontSize: '14px' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box', fontFamily: '"Nunito Sans", sans-serif', resize: 'vertical' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#8B1A1A', color: '#ffffff', padding: '15px 30px', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: 700, cursor: 'pointer', transition: 'background-color 0.3s' }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6d1515')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#8B1A1A')}
                >
                  Get Started
                </button>
              </form>
              <div style={{ marginTop: '25px', textAlign: 'center', paddingTop: '25px', borderTop: '1px solid #444444' }}>
                <p style={{ color: '#ffffff', fontSize: '16px', marginBottom: '10px' }}>Call Us 24/7</p>
                <a href="tel:862-225-1965" style={{ color: '#8B1A1A', fontSize: '24px', fontWeight: 700, textDecoration: 'none', fontFamily: '"Playfair Display", serif' }}>
                  862.225.1965
                </a>
              </div>
            </div>
          </aside>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '40px 20px', marginTop: '60px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>© 2024 The Bianchi Law Group, LLC. All rights reserved.</p>
            <p style={{ fontSize: '14px', color: '#cccccc' }}>Experienced Criminal Defense Attorneys Serving New Jersey</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
```