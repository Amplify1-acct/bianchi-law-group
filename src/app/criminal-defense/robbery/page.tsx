```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Jersey Robbery Lawyers - The Bianchi Law Group',
  description: 'Experienced New Jersey robbery attorneys committed to helping clients avoid serious felony convictions. Contact us for a free consultation.',
}

export default function CriminalDefenseRobberyPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      
      <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: '#ffffff', lineHeight: '1.6' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          padding: '80px 20px',
          textAlign: 'center',
          borderBottom: '4px solid #8B1A1A'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              New Jersey Robbery Attorneys
            </h1>
            <p style={{
              fontSize: '24px',
              fontWeight: '300',
              color: '#cccccc',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Committed to Helping Our Clients Avoid Serious Felony Convictions
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 20px',
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          {/* Left Column - Main Content */}
          <div style={{ flex: '2', minWidth: '300px' }}>
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '40px',
              borderRadius: '8px',
              marginBottom: '30px'
            }}>
              <p style={{
                fontSize: '18px',
                marginBottom: '20px',
                lineHeight: '1.8'
              }}>
                In New Jersey, Robbery is a very serious crime and can be punishable with up to 20 years in New Jersey State Prison. N.J.S.A. 2C:15-1. Clearly, this is one of the most serious offenses that a person can be charged with. The elements of the crime involve more than just taking someone else's property. It's essentially theft through the use of injury, force, or threat — and the offense is always treated as an indictable offense. Because the stakes are so high, it's critical for you to have an aggressive legal defense team at your side. Our New Jersey robbery lawyers can assist.
              </p>
              <p style={{
                fontSize: '18px',
                marginBottom: '20px',
                lineHeight: '1.8'
              }}>
                At The Bianchi Law Group, we understand that you're up against a terrifying reality. A robbery conviction will almost always lead to significant jail time — especially if the prosecution claims the defendant inflicted injury during the alleged offense. It's almost impossible to exaggerate the effects that such a conviction will have on a person's life. Even after a person is no longer incarcerated, a felony on their record can affect their rights, freedoms, and ability to lead a normal life forever. Fortunately, this isn't a battle you have to fight alone. A criminal defense attorney at our law firm can assist.
              </p>
              <p style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#8B1A1A'
              }}>
                Contact us today for your free initial consultation.
              </p>
            </div>

            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '40px',
              borderRadius: '8px',
              marginBottom: '30px'
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '25px',
                color: '#8B1A1A'
              }}>
                Robbery Penalties in New Jersey
              </h2>
              <p style={{
                fontSize: '18px',
                marginBottom: '20px',
                lineHeight: '1.8'
              }}>
                Robbery is a crime of the second degree, except that it is a crime of the first degree if, in the course of committing the theft, the actor attempts to kill anyone, purposely inflicts or attempts to inflict serious bodily injury, or is armed with, or uses or threatens the immediate use of a deadly weapon. N.J.S.A, 2C:15-1. Crimes in the first degree can be punishable from 10 years to 20 years in New Jersey State Prison. Crimes in the second degree can be punishable from 5 years to 10 years in New Jersey State Prison.
              </p>
              <p style={{
                fontSize: '18px',
                marginBottom: '20px',
                lineHeight: '1.8'
              }}>
                The Sentencing Judge may also order fines and restitution as prescribed by N.J.S.A. 2C:43-3 for all robbery convictions in New Jersey. As former prosecutors, our New Jersey robbery defense attorneys have seen how strict sentencing can be when someone is convicted of a violent crime. In addition to the legal repercussions, an individual may also have difficulty engaging in normal activities in the future (e.g., voting, owning a firearm, securing housing). Put simply, the penalties are severe.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}>
                However, they're not always unavoidable. Whether you're charged with a second or first-degree crime, we'll fight to secure a favorable outcome on your behalf. Contact us today to learn more.
              </p>
            </div>

            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '40px',
              borderRadius: '8px',
              marginBottom: '30px'
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '25px',
                color: '#8B1A1A'
              }}>
                What Constitutes "Serious Bodily Injury"?
              </h2>
              <p style={{
                fontSize: '18px',
                marginBottom: '20px',
                lineHeight: '1.8'
              }}>
                Since the threat or infliction of serious bodily injury could mean the difference between first or second-degree robbery charges, it's important to understand what this term means under New Jersey law. A person inflicts bodily injury of a severe magnitude if their actions create a substantial risk of death or serious, permanent disfigurement or a protracted impairment or loss of the function of any organ or bodily member. N.J.S.A. 2C:11-1. This can be anything from a fractured skull to internal organ damage.
              </p>
              <p style={{
                fontSize: '18px',
                marginBottom: '20px',
                lineHeight: '1.8'
              }}>
                The important thing to remember is that actually inflicting such injury is not necessary for the state to bring first-degree robbery charges. The mere threat of inflicting such injury is enough. A person who has no plans to hurt anyone can still be charged with a first-degree crime that's punishable by up to 20 years in prison if the alleged victim claims they were threatened with harm. This is one of the few times a person's words can result in severe criminal charges, so make sure you're taking your situation seriously.
              </p>
              <p style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#8B1A1A'
              }}>
                Contact our law firm today for a free initial consultation.
              </p>
            </div>

            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '40px',
              borderRadius: '8px',
              marginBottom: '30px'
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '25px',
                color: '#8B1A1A'
              }}>
                Certified Criminal Trial Attorneys by the New Jersey Supreme Court
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}>
                Partners Robert A. Bianchi and David J. Bruno are also both certified by the Supreme Court of New Jersey as Criminal Trial Attorneys. In New Jersey, the New Jersey Supreme Court has a certification committee that classifies certain New Jersey Lawyers as Certified Trial Attorneys. The process requires the prospective attorneys to satisfy strict criteria, including extensive jury trials, a primary focus on criminal law, an application submission, a peer review process, a character and background check, and passing a written examination.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginTop: '20px'
              }}>
                Only 250 of over 98,000 lawyers (less than 1%) are designated as certified criminal trial attorneys in New Jersey.
              </p>
            </div>
          </div>

          {/* Right Sidebar - Contact Form */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '30px',
              borderRadius: '8px',
              position: 'sticky',
              top: '20px',
              border: '2px solid #8B1A1A'
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#ffffff',
                textAlign: 'center'
              }}>
                Contact Us Today
              </h3>
              <p style={{
                textAlign: 'center',
                marginBottom: '25px',
                fontSize: '18px',
                color: '#8B1A1A',
                fontWeight: '600'
              }}>
                862.225.1965
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid #444',
                    backgroundColor: '#2d2d2d',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid #444',
                    backgroundColor: '#2d2d2d',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  style={{
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid #444',
                    backgroundColor: '#2d2d2d',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid #444',
                    backgroundColor: '#2d2d2d',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  style={{
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid #444',
                    backgroundColor: '#2d2d2d',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: "'Nunito Sans', sans-serif",
                    resize: 'vertical'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '15px',
                    backgroundColor: '#8B1A1A',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontFamily: "'Nunito Sans', sans-serif",
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a02020'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```