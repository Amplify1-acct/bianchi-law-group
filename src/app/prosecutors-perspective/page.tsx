import Image from 'next/image'
import Link from 'next/link'

export default function ProsecutorsPerspectivePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
            Prosecutor's Perspective
          </h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Expert Legal Commentary & Community Outreach
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        {/* Left Column - Main Content */}
        <div>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Mr. Bianchi and Mr. Bruno have tremendous experience and excellent reputations as criminal law practitioners. Their opinions on legal matters are coveted by those that wish to educate themselves in the art of criminal trial practice and the criminal justice system. This is why they are often asked to lecture to other attorneys, community groups, education establishments, and are often used as "go to" authoritative sources with the national TV media, print media, and scholarly publications.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              They regularly appear as legal analysts to media groups ranging from national TV media outlets such as Fox News to local TV and print media. We are very proud that we are recognized as experts worthy of commentary to these media platforms.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderLeft: '4px solid #8B1A1A', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', color: '#8B1A1A', marginBottom: '25px', fontWeight: 'bold' }}>
              The Bianchi Law Group's Community Affairs Outreach Program
            </h2>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Our "Prosecutor's Perspective" program is often in demand with:
            </p>
            <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
              <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                Multiple media outlets that need explanation and context into the criminal justice system, and prosecutors in particular, as few have the experiences at the highest policy making levels as Mr. Bianchi does, and in practicing on high profile cases as both Mr. Bianchi and Mr. Bruno do
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                Continuing Legal Education Programs that know having criminal trial attorneys that have experience both as prosecutors and defense attorneys is invaluable to educate other attorneys
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                Education programs for University and High School Students interested in a legal career, either as a defense attorney or prosecutor
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                Educating the public on criminal justice issues
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: '#8B1A1A', fontWeight: 'bold' }}>•</span>
                Preparation and dissemination to the Media or our social media platforms articles entitled "Prosecutor's Perspective" that shed light on the role of prosecutors and the interplay with criminal defense attorneys in the criminal justice system
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '30px', textAlign: 'center', marginBottom: '40px', borderRadius: '8px' }}>
            <p style={{ fontSize: '18px', marginBottom: '20px', fontWeight: 'bold' }}>
              Contact a member of our staff so we can tailor our program to your specific needs
            </p>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#fff', color: '#8B1A1A', padding: '15px 40px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
              CLICK HERE FOR MORE INFORMATION
            </Link>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '25px', fontWeight: 'bold' }}>
              Invaluable Prosecutorial Experience
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              To be a great defense attorney, commentator to the media, to train trial attorneys, or educate those interested in legal careers, the experiences of having been prosecutors is invaluable!
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Our unique knowledge in this regard is not only of immeasurable value to our clients and their cases, but so too provides to the community a better understanding of the Prosecutor's role in the criminal justice system which is key to any great defense attorney who defends criminal prosecutions.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '24px', color: '#8B1A1A', marginBottom: '20px', fontWeight: 'bold' }}>
              Robert A. Bianchi, Esq.
            </h3>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '15px' }}>
              Robert A. Bianchi, Esq., was honored to be only 1 of 21 head County Prosecutors in New Jersey from 2007-2013. Becoming the head County Prosecutor is a highly coveted distinction in the legal community that very few attorneys ever achieve.
            </p>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '15px' }}>
              Nominated by the Governor of New Jersey to serve as the Morris County Prosecutor from 2007-2013, Mr. Bianchi served as the "chief law enforcement officer" in charge of all prosecutions and supervised all police agencies in the county. He also worked with the heads of all Federal, State, and County law enforcement agencies in the State of New Jersey. The experience and contacts made in this position are invaluable.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', marginBottom: '30px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '24px', color: '#8B1A1A', marginBottom: '20px', fontWeight: 'bold' }}>
              David J. Bruno, Esq.
            </h3>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '15px' }}>
              Mr. Bruno served under then Prosecutor Bianchi as a major crimes/homicide Assistant Prosecutor and tried some of the most high profile murder cases in the county. Mr. Bruno was also responsible for police misconduct cases and fraud cases while at the office, in addition to his Major Crimes responsibilities.
            </p>
          </div>

          <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '30px', marginBottom: '40px', borderRadius: '8px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '15px' }}>
              Now partners in private practice at The Bianchi Law Group specializing in criminal defense cases, Mr. Bianchi and Mr. Bruno are 2 of only 250 attorneys in the entire State of New Jersey that are certified by the New Jersey Supreme court as Certified Criminal Trial Attorneys. Hence, they are considered experts in the field of criminal justice. To put this into perspective, there are over 93,000 attorneys in New Jersey.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', fontWeight: 'bold', color: '#8B1A1A' }}>
              Mr. Bianchi is the only attorney in New Jersey that practices criminal defense, was a former prosecutor, and who is also a Certified Criminal Trial Attorney.
            </p>
          </div>

          <div style={{ marginTop: '60px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '30px', fontWeight: 'bold' }}>
              Our Latest Insights
            </h2>
            <div style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '25px', marginBottom: '25px' }}>
              <p style={{ fontSize: '14px', color: '#8B1A1A', marginBottom: '10px', fontWeight: 'bold' }}>
                March 17, 2026
              </p>
              <h3 style={{ fontSize: '22px', color: '#1a1a1a', marginBottom: '12px', fontWeight: 'bold' }}>
                New Jersey Survivors Justice Act L. 2025, c. 328
              </h3>
              <p style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '15px' }}>
                New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...
              </p>
              <Link href="/blog/survivors-justice-act" style={{ color: '#8B1A1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>
                Read More →
              </Link>
            </div>
            <div style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '25px', marginBottom: '25px' }}>
              <p style={{ fontSize: '14px', color: '#8B1A1A', marginBottom: '10px', fontWeight: 'bold' }}>
                December 16, 2025
              </p>
              <h3 style={{ fontSize: '22px', color: '#1a1a1a', marginBottom: '12px', fontWeight: 'bold' }}>
                Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves
              </h3>
              <p style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '15px' }}>
                New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...
              </p>
              <Link href="/blog/shaken-baby-syndrome" style={{ color: '#8B1A1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>
                Read More →
              </Link>
            </div>
            <Link href="/blog" style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 30px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
              Read All Posts
            </Link>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '8px', position: 'sticky', top: '20px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', marginBottom: '10px', fontWeight: 'bold' }}>
              Contact Us
            </h2>
            <p style={{ fontSize: '16px', color: '#fff', marginBottom: '25px' }}>
              To Schedule Your Free Consultation
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                placeholder="Full Name *"
                required
                style={{ padding: '12px', fontSize: '16px', border: '1px solid #444', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a' }}
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                style={{ padding: '12px', fontSize: '16px', border: '1px solid #444', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a' }}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                style={{ padding: '12px', fontSize: '16px', border: '1px solid #444', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a' }}
              />
              <select
                style={{ padding: '12px', fontSize: '16px', border: '1px solid #444', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a' }}
              >
                <option>Case Type</option>
                <option>Criminal Defense</option>
                <option>DUI/DWI</option>
                <option>Drug Charges</option>
                <option>Assault</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Tell us about your case *"
                required
                rows={5}
                style={{ padding: '12px', fontSize: '16px', border: '1px solid #444', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a', resize: 'vertical' }}
              ></textarea>
              <button
                type="submit"
                style={{ padding: '15px', fontSize: '18px', fontWeight: 'bold', backgroundColor: '#8B1A1A', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Send Message
              </button>
            </form>
            <div style={{ marginTop: '25px', paddingTop: '25px', borderTop: '1px solid #444' }}>
              <p style={{ fontSize: '16px', color: '#fff', marginBottom: '10px' }}>
                <strong>Call Now:</strong>
              </p>
              <a href="tel:8622251965" style={{ fontSize: '24px', color: '#8B1A1A', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
                862.225.1965
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: 'bold' }}>
            Ready to Schedule Your Free Consultation?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>
            Contact The Bianchi Law Group today to discuss your case with experienced criminal defense attorneys.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:8622251965" style={{ display: 'inline-block', backgroundColor: '#fff', color: '#8B1A1A', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
              Call 862.225.1965
            </a>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1a1a1a', color: '#fff', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px' }}>
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}