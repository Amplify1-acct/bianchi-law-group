```typescript
import React from 'react';

export default function SexCrimesDefinitionsPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New Jersey Sex Crime Definitions - The Bianchi Law Group</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: '"Nunito Sans", sans-serif', backgroundColor: '#ffffff', color: '#333', lineHeight: 1.6 }}>
        <PageHero />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          <main style={{ flex: '2 1 600px', minWidth: 0 }}>
            <ContentSection />
          </main>
          <aside style={{ flex: '1 1 300px', minWidth: '280px' }}>
            <ContactForm />
          </aside>
        </div>
      </body>
    </html>
  );
}

function PageHero() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', fontWeight: 700, margin: '0 0 20px 0', lineHeight: 1.2 }}>
          Sex Crimes Definitions in New Jersey
        </h1>
        <p style={{ fontSize: '18px', margin: 0, opacity: 0.9 }}>The Bianchi Law Group, LLC</p>
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div style={{ color: '#333' }}>
      <section style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          The Bianchi Law Group is made up of former trial prosecutors and other "of counsel" attorneys who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey including sex crimes cases.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: 700, color: '#8B1A1A', marginBottom: '20px' }}>
          Former Sex Crimes Prosecutors
        </h2>
        
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Founding Partner and Former Morris County Prosecutor Robert A. Bianchi has returned to private practice after running the operations of the entire Morris County Prosecutor's Office having served as the Morris County Prosecutor for 5 and 1/2 years (2007-2013). Mr. Bianchi was appointed as the Morris County Prosecutor by the Governor of the State of New Jersey and unanimously confirmed by the New Jersey Senate in 2007. While serving as the Morris County Prosecutor, Mr. Bianchi ran the entire office's operations, inclusive of all of its attorneys, detectives, and support staff with a budget of approximately 11 million dollars. His innovative programs and approach have led to numerous awards from State, Local, Municipal, business, and private entities. Robert Bianchi served on the Executive Board of the County Prosecutors' Association and was one of the few prosecutors in many years to actually argue cases, motions, and sentences in court, and actually tried a murder case himself, which is extremely rare for a sitting county prosecutor.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Mr. Bianchi was previously a Hudson County Assistant Prosecutor (1989-1996) and thereafter a partner in the law firm Bianchi & Bianchi (1996-2007). Robert was one of the few attorneys in the State who qualified to handle death penalty cases when New Jersey had the death penalty.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Partner David J. Bruno has also returned to private practice after serving as Morris County Assistant Prosecutor (2007-2013). As an assistant prosecutor, Mr. Bruno prosecuted murder, major crimes, white collar, internal affairs, domestic violence, elderly abuse, sex crimes cases. Additionally, Mr. Bruno handled fraud and Major Crimes investigations and successfully tried a wide variety of trials including securing convictions for several high profile murder cases.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          In December 2012, then Prosecutor Bianchi and Assistant Prosecutor Bruno worked together to secure a murder conviction against Jose Feliciano for the violent death of Father Edward Hinds in at St. Patrick's Church in Chatham, New Jersey. Mr. Feliciano was sentenced to life without parole.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Together, Robert A. Bianchi, David J. Bruno and other "of counsel" attorneys make up an aggressive, ethical, and results-oriented New Jersey Criminal Defense firm who handle all criminal, municipal and DUI/DWI cases in New Jersey including robbery cases.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: 700, color: '#8B1A1A', marginBottom: '20px' }}>
          Certified Criminal Trial Attorneys by the New Jersey Supreme Court
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Partners Robert A. Bianchi and David J. Bruno are also both certified by the Supreme Court of New Jersey as a criminal trial Attorneys.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          In New Jersey, the New Jersey Supreme Court has a certification committee which classifies certain New Jersey Lawyers as Certified Trial Attorneys. The process requires the prospective attorneys to satisfy a strict criteria including extensive jury trials, a primary focus in criminal law, an application submission, a peer review process, a character and background check and to pass a written examination. Only 250 of over 93,000 lawyers (less than 1%) are designated as certified criminal trial attorneys by the New Jersey Supreme Court. This should be an important factor in finding a New Jersey criminal defense attorney to represent you. Many New Jersey Lawyers describe themselves as trial attorneys but most do not have the New Jersey Court's distinction as Certified Criminal Trial Attorney.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: 700, color: '#8B1A1A', marginBottom: '20px' }}>
          Definition of a Sex Offense in New Jersey
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          The crimes which fall into the category of a "sex offense" can be found in N.J.S.A. 2C:7-2(b). This definition is important because a conviction, delinquent adjudication or finding of not guilty by reason of insanity to to "sex offenses" trigger mandatory Megan's Law Registration in accordance with N.J.S.A. 7-2.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          As prescribed by N.J.S.A. 7-2(b), a "Sex Offense" shall include the following New Jersey Sex Crimes:
        </p>

        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Aggravated sexual assault, sexual assault, aggravated criminal sexual contact, kidnapping pursuant to paragraph (2) of subsection c. of N.J.S.2C:13-1 or an attempt to commit any of these crimes if the court found that the offender's conduct was characterized by a pattern of repetitive, compulsive behavior.
        </p>
      </section>

      <div style={{ backgroundColor: '#f5f5f5', padding: '30px', borderLeft: '4px solid #8B1A1A', marginTop: '40px' }}>
        <p style={{ fontSize: '18px', fontWeight: 700, color: '#8B1A1A', marginBottom: '15px' }}>
          Need Legal Representation?
        </p>
        <p style={{ fontSize: '16px', margin: 0 }}>
          Contact The Bianchi Law Group today at <a href="tel:862-225-1965" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 700 }}>862.225.1965</a> for a confidential consultation regarding your sex crimes case.
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '30px', border: '1px solid #e0e0e0', position: 'sticky', top: '20px' }}>
      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#1a1a1a', marginTop: 0, marginBottom: '20px' }}>
        Contact Us Today
      </h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            required
          />
        </div>
        
        <div>
          <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontFamily: '"Nunito Sans", sans-serif', resize: 'vertical' }}
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          style={{ backgroundColor: '#8B1A1A', color: '#ffffff', padding: '14px 28px', fontSize: '16px', fontWeight: 700, border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1414'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
        >
          Get Started
        </button>
      </form>
      
      <div style={{ marginTop: '25px', paddingTop: '25px', borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>Or call us directly:</p>
        <a href="tel:862-225-1965" style={{ fontSize: '24px', fontWeight: 700, color: '#8B1A1A', textDecoration: 'none', fontFamily: '"Playfair Display", serif' }}>
          862.225.1965
        </a>
      </div>
    </div>
  );
}
```