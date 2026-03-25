import React from 'react';
import Link from 'next/link';

export default function CriminalDefensePage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1a1a1a', padding: '1rem 0', borderBottom: '4px solid #8B1A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>The Bianchi Law Group</div>
          <nav style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link href="/criminal-defense" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>Criminal Defense</Link>
            <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
            <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>New Jersey Criminal Defense Attorneys</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto' }}>Protecting Clients Facing Mild to Serious Criminal Charges</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="tel:862-292-4442" style={{ backgroundColor: '#fff', color: '#8B1A1A', padding: '1rem 2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '4px', display: 'inline-block' }}>Call 862-292-4442</a>
            <a href="#contact" style={{ backgroundColor: 'transparent', color: '#fff', padding: '1rem 2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', border: '2px solid #fff', borderRadius: '4px', display: 'inline-block' }}>Free Consultation</a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        {/* Main Content */}
        <main>
          <section style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              When you are faced with a criminal charge, the outcome has the potential to be life-altering, and the law can appear complex and almost impossible to overcome. Even so-called minor crimes can result in a permanent criminal record that makes obtaining employment, housing, and professional licensing difficult.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Because a conviction is so serious, it is important to realize that there is no room for delay or error when it comes to presenting your defense. The sooner you contact an experienced and well-respected New Jersey criminal defense attorney, the faster your defense can be assembled and the stronger that defense will be. From the very beginning, there are specific steps that can be taken towards protecting your rights and working towards your best interests.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              At this critical time, you need a New Jersey criminal defense attorney you can count on to stand by your side and fight for you in and out of the courtroom. You can trust our talented, compassionate legal team to give you the legal counsel and representation you need.
            </p>
            <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderLeft: '4px solid #8B1A1A', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0' }}>
                Call <a href="tel:862-292-4442" style={{ color: '#8B1A1A', textDecoration: 'none' }}>862-292-4442</a> today to schedule your free consultation with our NJ criminal defense attorneys.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#8B1A1A', marginBottom: '1.5rem', borderBottom: '3px solid #1a1a1a', paddingBottom: '0.5rem' }}>How Can Working with Skilled Trial Lawyers Protect Your Rights?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Defending yourself against criminal accusations can be overwhelming and stressful. You need someone on your side who understands the nuances of New Jersey criminal law and is not afraid to fight for you. You should also have an ally who has a deep understanding of your rights and will protect your freedoms regardless of obstacles that arise.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Our New Jersey criminal lawyers have handled countless cases within the realm of criminal law. For example, we handle:
            </p>
            <ul style={{ fontSize: '1.1rem', marginBottom: '1.5rem', marginLeft: '2rem', lineHeight: '2' }}>
              <li>Theft offenses</li>
              <li>Sex crimes</li>
              <li>Simple and aggravated assault</li>
              <li>White-collar crimes</li>
              <li>DWI</li>
              <li>Domestic violence</li>
              <li>And more</li>
            </ul>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              We know the best strategies for defending and defeating criminal offenses and will apply every ounce of our dedication, energy, time, and honesty to getting your criminal charges lowered or dismissed.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              We recognize that you are a valued individual, no matter what crimes you're charged with. You also have rights that must be respected. We'll protect you throughout the legal process, ensuring law enforcement officers and other officials are held accountable for any misconduct. Contact our compassionate, capable team of attorneys today for more information about how we can help.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#8B1A1A', marginBottom: '1.5rem', borderBottom: '3px solid #1a1a1a', paddingBottom: '0.5rem' }}>Why Is Hiring a Compassionate Criminal Defense Attorney Important?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              The stress of a criminal charge is not something that you should have to face alone. You may worry about what a conviction will do to your future, how it will affect your family, and what you can do to defend yourself. Putting your case in the capable hands of an experienced criminal defense attorney gives you the best possible advantage.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Prosecutors in New Jersey typically take an aggressive stance against criminal offenses, making you an easy target without the help of criminal defense lawyers like those at The Bianchi Law Group, LLC. The sad truth is that many people receive a sentence that is unfair or too harsh for their circumstances. You can avoid such devastating sentencing by hiring an experienced NJ criminal attorney like at our law firm.
            </p>
            <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '2rem', marginBottom: '2rem', borderRadius: '4px' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our team is led by attorneys who are former prosecutors</p>
              <p style={{ fontSize: '1.1rem', margin: '0' }}>This makes us excellent allies in your criminal defense case, giving you insider knowledge and strategic advantages.</p>
            </div>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Taking an aggressive and tactical defense approach from the start gives your criminal defense team the chance to thoroughly investigate your case, research the issues, and develop a strategy. Retaining a criminal defense team that is skilled, aggressive, well-respected, and experienced as both prosecutors and defense attorneys is imperative to the success of your case and for your peace of mind.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#8B1A1A', marginBottom: '1.5rem', borderBottom: '3px solid #1a1a1a', paddingBottom: '0.5rem' }}>What Are The Benefits of Being Represented by Former Prosecutors & Criminal Trial Attorneys Certified by the New Jersey Supreme Court?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              The partners of The Bianchi Law Group, LLC are both former New Jersey prosecutors. They are certified by the Supreme Court of New Jersey as Certified Criminal Trial Attorneys.
            </p>
            <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', marginBottom: '2rem', border: '2px solid #8B1A1A', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#8B1A1A', marginBottom: '1rem', marginTop: '0' }}>Elite Recognition</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                This elite group comprises only 250 attorneys out of about 98,000 attorneys practicing in the State of New Jersey.
              </p>
              <p style={{ fontSize: '1.1rem', margin: '0' }}>
                The recognition we've received has not come by chance. We have proven ourselves through years of dedicated service, successful case outcomes, and unwavering commitment to our clients' rights and freedoms.
              </p>
            </div>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              This unique combination of prosecutorial experience and defense expertise gives us unparalleled insight into how the state builds its cases and how to effectively dismantle their arguments. We understand the system from both sides, which allows us to anticipate the prosecution's moves and build stronger defenses for our clients.
            </p>
          </section>

          <section style={{ marginBottom: '3rem', backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem', borderRadius: '4px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', marginTop: '0' }}>Don't Face Criminal Charges Alone</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Your future is too important to leave to chance. Every moment counts when you're facing criminal charges. Contact The Bianchi Law Group, LLC today for attorneys who will treat you with understanding, compassion, and aggressive representation.
            </p>
            <a href="tel:862-292-4442" style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '1rem 2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '4px', display: 'inline-block' }}>Call Now: 862-292-4442</a>
          </section>
        </main>

        {/* Sidebar */}
        <aside>
          {/* Contact Form */}
          <div id="contact" style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '4px', marginBottom: '2rem', border: '3px solid #8B1A1A' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#8B1A1A', marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>Free Consultation</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', textAlign: 'center' }}>Contact us today to discuss your case</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box' }} 
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box' }} 
                />
              </div>
              <div>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box' }} 
                />
              </div>
              <div>
                <label htmlFor="case-type" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Case Type</label>
                <select 
                  id="case-type" 
                  name="case-type" 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box' }}
                >
                  <option value="">Select...</option>
                  <option value="theft">Theft Offense</option>
                  <option value="assault">Assault</option>
                  <option value="dwi">DWI</option>
                  <option value="domestic">Domestic Violence</option>
                  <option value="white-collar">White Collar Crime</option>
                  <option value="sex-crime">Sex Crime</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box', fontFamily: 'inherit' }} 
                />
              </div>
              <button 
                type="submit" 
                style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '1rem', border: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Request Free Consultation
              </button>
            </form>
          </div>

          {/* Contact Info Box */}
          <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '1.5rem', borderRadius: '4px', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginTop: '0', marginBottom: '1rem', color: '#8B1A1A' }}>Contact Information</h3>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone:</p>
              <a href="tel:862-225-1965" style={{ color: '#fff', fontSize: '1.3rem', textDecoration: 'none', fontWeight: 'bold' }}>862-225-1965</a>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Office:</p>
              <a href="tel:862-292-4442" style={{ color: '#fff', fontSize: '1.3rem', textDecoration: 'none', fontWeight: 'bold' }}>862-292-4442</a>
            </div>
            <p style={{ fontSize: '0.95rem', marginBottom: '0', marginTop: '1.5rem' }}>Available 24/7 for emergencies</p>
          </div>

          {/* Why Choose Us Box */}
          <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '1.5rem', borderRadius: '4px', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginTop: '0', marginBottom: '1rem' }}>Why Choose Us?</h3>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', fontWeight: 'bold' }}>✓</span>
                Former Prosecutors
              </li>
              <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', fontWeight: 'bold' }}>✓</span>
                NJ Supreme Court Certified
              </li>
              <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', fontWeight: 'bold' }}>✓</span>
                Only 250 out of 98,000 NJ Attorneys
              </li>
              <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', fontWeight: 'bold' }}>✓</span>
                Aggressive Defense Strategy
              </li>
              <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', fontWeight: 'bold' }}>✓</span>
                Compassionate Representation
              </li>
              <li style={{ marginBottom: '0', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', fontWeight: 'bold' }}>✓</span>
                Free Consultation
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '4px', border: '1px solid #ddd' }}>
            <h3 style={{ fontSize: '1.3rem', marginTop: '0', marginBottom: '1rem', color: '#8B1A1A' }}>Criminal Defense Areas</h3>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #ddd' }}>
                <Link href="/theft-offenses" style={{ color: '#1a1a1a', textDecoration: 'none' }}>Theft Offenses</Link>
              </li>
              <li style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #ddd' }}>
                <Link href="/assault" style={{ color: '#1a1a1a', textDecoration: 'none' }}>Assault Charges</Link>
              </li>
              <li style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #ddd' }}>
                <Link href="/dwi" style={{ color: '#1a1a1a', textDecoration: 'none' }}>DWI Defense</Link>
              </li>
              <li style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #ddd' }}>
                <Link href="/domestic-violence" style={{ color: '#1a1a1a', textDecoration: 'none' }}>Domestic Violence</Link>
              </li>
              <li style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #ddd' }}>
                <Link href="/white-collar" style={{ color: '#1a1a1a', textDecoration: 'none' }}>White Collar Crimes</Link>
              </li>
              <li style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #ddd' }}>
                <Link href="/sex-crimes" style={{ color: '#1a1a1a', textDecoration: 'none' }}>Sex Crimes</Link>
              </li>
              <li style={{ marginBottom: '0' }}>
                <Link href="/drug-charges" style={{ color: '#1a