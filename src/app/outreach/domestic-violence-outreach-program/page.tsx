import Link from 'next/link'

export default function OutreachDomesticViolenceOutreachProgramPage() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1a1a1a', padding: '1rem 0', borderBottom: '3px solid #8B1A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
            The Bianchi Law Group
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
            <Link href="/practice-areas" style={{ color: '#fff', textDecoration: 'none' }}>Practice Areas</Link>
            <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Domestic Violence Outreach Program
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Educating the community on Domestic Violence issues and protecting clients from criminal exposure in family law matters
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          {/* Content Column */}
          <div>
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>
                About Our Program
              </h2>
              <p style={{ color: '#1a1a1a', lineHeight: '1.8', marginBottom: '1rem' }}>
                There is a strong connection between family law and matrimonial/divorce matters and New Jersey criminal law matters. As former New Jersey prosecutors, defense attorneys, and Certified Criminal Trial Attorneys, we have seen many instances where family law issues wind up becoming criminal law matters, typically as a result of an alleged violation of New Jersey's Domestic Violence laws, as well as New Jersey's Criminal Code of Justice.
              </p>
              <p style={{ color: '#1a1a1a', lineHeight: '1.8', marginBottom: '1rem' }}>
                The Bianchi Law Group is proud to offer the Domestic Violence Outreach Program to the public to educate the community on issues surrounding Domestic Violence. We educate the public, attorneys, and civic groups on how to best navigate family law matters in a way that ensures clients involved in divorce proceedings are protected from possible criminal exposure as a result of their actions or statements in a family law/matrimonial matter.
              </p>
              <p style={{ color: '#1a1a1a', lineHeight: '1.8', marginBottom: '1rem' }}>
                We also speak on the legal process of Domestic Violence cases, and how those cases work their way through the investigative stage and justice process.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>
                Lecture Topics
              </h2>
              <p style={{ color: '#1a1a1a', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our lectures are tailored to the needs and interests of a particular group including, but not limited to, the following topics:
              </p>
              <ul style={{ color: '#1a1a1a', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}>How the criminal justice system works in dealing with family court matters</li>
                <li style={{ marginBottom: '0.75rem' }}>The law on Domestic Violence and its interrelation many times to the Criminal Justice System</li>
                <li style={{ marginBottom: '0.75rem' }}>What are temporary and final restraining orders and the law on how to get one</li>
                <li style={{ marginBottom: '0.75rem' }}>How to protect yourself from acts of domestic violence</li>
                <li style={{ marginBottom: '0.75rem' }}>What to do if you are charged with a TRO, FRO, or crime</li>
                <li style={{ marginBottom: '0.75rem' }}>How to avoid getting trapped into the criminal justice system during a matrimonial matter</li>
                <li style={{ marginBottom: '0.75rem' }}>Our experiences as prosecutors where family law matters became full-blown criminal prosecutions and ways that could have been prevented</li>
                <li style={{ marginBottom: '0.75rem' }}>Common areas and actions where people in a matrimonial action get into trouble with the police and prosecution</li>
                <li style={{ marginBottom: '0.75rem' }}>Domestic Violence Act, its many moving parts, and how matters are triaged and prosecuted for alleged violations</li>
                <li style={{ marginBottom: '0.75rem' }}>Computer crimes, fraud, false swearing, and other common offenses that people often commit when testifying in a divorce matter and how these matters are prosecuted</li>
                <li style={{ marginBottom: '0.75rem' }}>What to do if you are charged with a crime in the context of a family legal matter</li>
                <li style={{ marginBottom: '0.75rem' }}>What services there are in place if you are a victim of Domestic Violence and how to pursue your legal rights</li>
                <li style={{ marginBottom: '0.75rem' }}>New Jersey Child Protection & Permanency (formerly DYFS) and the interaction of prosecutors and defense attorneys in a family law matter</li>
                <li style={{ marginBottom: '0.75rem' }}>How to "issue spot" for matrimonial attorneys so that a divorce client does not provide data or evidence of a criminal act during a matrimonial matter</li>
              </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>
                Our Unique Perspective
              </h2>
              <p style={{ color: '#1a1a1a', lineHeight: '1.8', marginBottom: '1rem' }}>
                Our years of experience as New Jersey Prosecutors has shown us the many ways that people wind up being prosecuted for crimes that arise in the context of a divorce or family court matter. Now as New Jersey Defense Attorneys, we are able to offer this very unique program so that clients, victims, attorneys, civic groups are better educated on Domestic Violence laws, prosecutions, and court processes.
              </p>
              <p style={{ color: '#1a1a1a', lineHeight: '1.8', marginBottom: '1rem' }}>
                As former Prosecutors and now defense attorneys, we have a unique and vast knowledge in this area of law. This knowledge base is a very powerful tool to ensure people do not act in a way that may further complicate their lives – a scenario that occurs all too often. This Program also helps attorneys better protect their clients about the "dos and don'ts" during a matrimonial case, so that their clients know how to protect themselves from falling into a trap that later results in criminal prosecution.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: '#8B1A1A', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #8B1A1A', paddingBottom: '0.5rem' }}>
                Recent Blog Posts
              </h2>
              <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f5f5f5', borderLeft: '4px solid #8B1A1A' }}>
                <h3 style={{ color: '#8B1A1A', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  New Jersey Survivors Justice Act L. 2025, c. 328
                </h3>
                <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.5rem' }}>March 17, 2026</p>
                <p style={{ color: '#1a1a1a', lineHeight: '1.8' }}>
                  New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...
                </p>
                <Link href="/blog/survivors-justice-act" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>
                  Read More →
                </Link>
              </div>
              <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f5f5f5', borderLeft: '4px solid #8B1A1A' }}>
                <h3 style={{ color: '#8B1A1A', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves
                </h3>
                <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.5rem' }}>December 16, 2025</p>
                <p style={{ color: '#1a1a1a', lineHeight: '1.8' }}>
                  New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...
                </p>
                <Link href="/blog/shaken-baby-syndrome" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold' }}>
                  Read More →
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h3 style={{ color: '#8B1A1A', fontSize: '1.75rem', marginBottom: '1rem' }}>
                Contact Us
              </h3>
              <p style={{ color: '#fff', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                To Schedule Your Free Consultation
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{ padding: '0.75rem', border: 'none', borderRadius: '4px', fontSize: '1rem' }}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{ padding: '0.75rem', border: 'none', borderRadius: '4px', fontSize: '1rem' }}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  style={{ padding: '0.75rem', border: 'none', borderRadius: '4px', fontSize: '1rem' }}
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  style={{ padding: '0.75rem', border: 'none', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}
                  required
                ></textarea>
                <button
                  type="submit"
                  style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '1rem', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  Submit
                </button>
              </form>
            </div>

            <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h3 style={{ color: '#8B1A1A', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Call Us Today
              </h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '1rem' }}>
                862.225.1965
              </p>
              <p style={{ color: '#1a1a1a', lineHeight: '1.6' }}>
                Available for immediate consultation regarding domestic violence matters and outreach program scheduling.
              </p>
            </div>

            <div style={{ backgroundColor: '#8B1A1A', padding: '2rem', borderRadius: '8px', color: '#fff' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                Schedule Our Program
              </h3>
              <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                Contact a member of our staff so we can tailor our program to your specific needs.
              </p>
              <Link
                href="/contact"
                style={{ display: 'inline-block', backgroundColor: '#fff', color: '#8B1A1A', padding: '0.75rem 1.5rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}
              >
                Email Us for More Information
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem 0', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            © {new Date().getFullYear()} The Bianchi Law Group. All rights reserved.
          </p>
          <p style={{ color: '#999' }}>
            Parsippany, New Jersey | Phone: 862.225.1965
          </p>
        </div>
      </footer>
    </div>
  )
}