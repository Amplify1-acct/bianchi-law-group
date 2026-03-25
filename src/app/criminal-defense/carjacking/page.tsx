```typescript
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Jersey Carjacking Lawyers - The Bianchi Law Group',
  description: 'Building Solid Legal Defense Strategies Against the Most Serious Crimes. Former prosecutors defending carjacking charges in New Jersey.',
}

export default function CriminalDefenseCarjackingPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito+Sans:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={{ 
        backgroundColor: '#ffffff', 
        fontFamily: "'Nunito Sans', sans-serif",
        color: '#1a1a1a',
        lineHeight: '1.8'
      }}>
        {/* Hero Section */}
        <div style={{
          backgroundColor: '#8B1A1A',
          color: '#ffffff',
          padding: '80px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '48px',
              fontWeight: '700',
              margin: '0 0 20px 0',
              lineHeight: '1.2'
            }}>
              New Jersey Carjacking Attorneys
            </h1>
            <p style={{
              fontSize: '20px',
              margin: '0',
              fontWeight: '300'
            }}>
              Building Solid Legal Defense Strategies Against the Most Serious Crimes
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '60px auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '60px'
        }}>
          {/* Left Column - Main Content */}
          <div>
            <p style={{ 
              fontSize: '18px', 
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              Many crimes under New Jersey law carry severe punishments, but few are treated as strictly as carjacking. This offense could land a person in prison for decades, so it's important to not procrastinate or "hope for the best." You need a New Jersey carjacking defense lawyer who understands the law and has a proven record of securing favorable outcomes for their clients. The rest of your life could literally depend on the decisions you make today, so take time to find legal representation who will fight to get the best possible outcome in your case.
            </p>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              At The Bianchi Law Group, our team of dedicated legal professionals has seen what happens when defendants are convicted of carjacking. Unlike auto theft, this criminal offense will never be charged as a second-degree crime. The state simply takes this matter too seriously. In fact, prosecutors are not allowed to downgrade to a lesser degree crime. This means the government's primary goal becomes permanently depriving you of your freedom — from decades in prison to a lifetime of indirect consequences from a felony conviction.
            </p>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '40px',
              lineHeight: '1.8',
              fontWeight: '600'
            }}>
              Fortunately, you don't have to go through this alone. Contact us today for your free consultation.
            </p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '36px',
              fontWeight: '700',
              color: '#8B1A1A',
              marginBottom: '24px',
              lineHeight: '1.3'
            }}>
              What Constitutes Carjacking Under New Jersey Law?
            </h2>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              In New Jersey, Carjacking is a very serious first-degree crime and can be punishable with up to 30 years in New Jersey State Prison. N.J.S.A. 2C:15-2. A person is guilty of carjacking if in the course of committing an unlawful taking of a motor vehicle, as defined in N.J.S.A. 39:1-1, or in an attempt to commit an unlawful taking of a motor vehicle if they:
            </p>

            <ul style={{
              fontSize: '18px',
              marginBottom: '24px',
              lineHeight: '1.8',
              paddingLeft: '40px'
            }}>
              <li style={{ marginBottom: '12px' }}>
                Inflict bodily injury or use force upon an occupant or person in possession or control of a motor vehicle;
              </li>
              <li style={{ marginBottom: '12px' }}>
                threaten an occupant or person in control with, or purposely or knowingly puts an occupant or person in control of the motor vehicle in fear of immediate bodily injury;
              </li>
              <li style={{ marginBottom: '12px' }}>
                commit or threaten immediately to commit any crime of the first or second degree; or
              </li>
              <li style={{ marginBottom: '12px' }}>
                operate or cause the said vehicle to be operated with the person who was in possession or control or was an occupant of the motor vehicle at the time of the taking remaining in the vehicle.
              </li>
            </ul>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              Under New Jersey law, prosecutors must prove these elements beyond a reasonable doubt. If they're unable to do so, a conviction for the first-degree crime of carjacking is unconstitutional. Unfortunately, our prison system has a significant portion of inmates who are guilty of the charges against them. Any criminal offense has the potential to result in unjust outcomes, and in many cases, these occur when defendants don't secure competent legal representation.
            </p>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '40px',
              lineHeight: '1.8',
              fontWeight: '600'
            }}>
              At The Bianchi Law Group, our New Jersey carjacking lawyers are here to help. And since we offer free consultations, you have nothing to lose by reaching out today.
            </p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '36px',
              fontWeight: '700',
              color: '#8B1A1A',
              marginBottom: '24px',
              lineHeight: '1.3'
            }}>
              Former Carjacking Prosecutors
            </h2>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              The Bianchi Law Group is made up of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey, including carjacking. Do not let promises by prosecutors of potentially reduced sentencing fool you: carjacking is a serious offense. If the government comes after you for this crime, they're typically going to seek as harsh of a punishment as they can. Any promises of leniency are typically based on a desire to get the case over with quickly.
            </p>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              This is just one of the many tactics utilized by prosecuting attorneys. They also frequently overcharge cases in order to scare defendants into pleading guilty to other crimes. At Bianchi Law Group, we know these tactics because we used to work in prosecutor offices. Thanks to our experience on both sides of the aisle, we're frequently able to successfully advocate for our clients — oftentimes securing charge dismissal or exoneration on their behalf. Of course, every case is different, and the best possible defense strategy will vary based on situational circumstances.
            </p>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '40px',
              lineHeight: '1.8',
              fontWeight: '600'
            }}>
              When you're facing felony charges in New Jersey, it's important to understand the gravity of your situation. Our law firm is here to help. Contact us today for a free consultation.
            </p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '36px',
              fontWeight: '700',
              color: '#8B1A1A',
              marginBottom: '24px',
              lineHeight: '1.3'
            }}>
              Certified Criminal Trial Attorneys by the New Jersey Supreme Court
            </h2>

            <p style={{ 
              fontSize: '18px', 
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              Partners Robert A. Bianchi and David J. Bruno are also both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys. This certification represents the highest level of professional recognition in criminal defense, demonstrating exceptional knowledge, skill, and experience in criminal law. When you work with The Bianchi Law Group, you benefit from the expertise of attorneys who have proven their excellence both as prosecutors and as defense counsel.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div style={{
              position: 'sticky',
              top: '20px'
            }}>
              <div style={{
                backgroundColor: '#f8f8f8',
                padding: '40px 30px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#8B1A1A',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  Get Your Free Consultation
                </h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    style={{
                      padding: '14px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontFamily: "'Nunito Sans', sans-serif"
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    style={{
                      padding: '14px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontFamily: "'Nunito Sans', sans-serif"
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    style={{
                      padding: '14px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontFamily: "'Nunito Sans', sans-serif"
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{
                      padding: '14px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontFamily: "'Nunito Sans', sans-serif"
                    }}
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    required
                    style={{
                      padding: '14px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontFamily: "'Nunito Sans', sans-serif",
                      resize: 'vertical'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#8B1A1A',
                      color: '#ffffff',
                      padding: '16px 32px',
                      fontSize: '18px',
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontFamily: "'Nunito Sans', sans-serif",
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1515'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
                  >
                    Get Started
                  </button>
                </form>
                <div style={{
                  marginTop: '30px',
                  paddingTop: '30px',
                  borderTop: '1px solid #ddd',
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontSize: '16px',
                    color: '#666',
                    marginBottom: '8px'
                  }}>
                    Call Us Today
                  </p>
                  <a
                    href="tel:862.225.1965"
                    style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#8B1A1A',
                      textDecoration: 'none',
                      fontFamily: "'Playfair Display', serif"
                    }}
                  >
                    862.225.1965
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```