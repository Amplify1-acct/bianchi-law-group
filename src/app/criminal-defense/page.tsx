```typescript
import React from 'react';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

function PageHero({ title, subtitle }: PageHeroProps) {
  return (
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
          margin: '0 0 16px 0',
          lineHeight: '1.2'
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '20px',
            margin: '0',
            opacity: '0.95'
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

interface ContactFormProps {
  phone: string;
}

function ContactForm({ phone }: ContactFormProps) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '32px',
      marginBottom: '32px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '28px',
        color: '#1a1a1a',
        marginTop: '0',
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        Contact Us Today
      </h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{
            display: 'block',
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '6px'
          }}>
            First Name *
          </label>
          <input
            type="text"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{
            display: 'block',
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '6px'
          }}>
            Last Name *
          </label>
          <input
            type="text"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{
            display: 'block',
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '6px'
          }}>
            Phone *
          </label>
          <input
            type="tel"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{
            display: 'block',
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '6px'
          }}>
            Email *
          </label>
          <input
            type="email"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{
            display: 'block',
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '6px'
          }}>
            Message *
          </label>
          <textarea
            required
            rows={6}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '16px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#8B1A1A',
            color: '#ffffff',
            padding: '16px 32px',
            border: 'none',
            borderRadius: '4px',
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '18px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '8px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1414'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
        >
          Get Started
        </button>
      </form>
      <div style={{
        marginTop: '24px',
        textAlign: 'center',
        paddingTop: '24px',
        borderTop: '1px solid #e0e0e0'
      }}>
        <p style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontSize: '16px',
          color: '#1a1a1a',
          margin: '0 0 8px 0'
        }}>
          Call Us Now
        </p>
        <a
          href={`tel:${phone.replace(/\./g, '')}`}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '24px',
            color: '#8B1A1A',
            textDecoration: 'none',
            fontWeight: '700'
          }}
        >
          {phone}
        </a>
      </div>
    </div>
  );
}

export default function CriminalDefensePage() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <div style={{
        backgroundColor: '#1a1a1a',
        minHeight: '100vh'
      }}>
        <PageHero 
          title="New Jersey Criminal Defense Attorneys"
          subtitle="Protecting Clients Facing Mild to Serious Criminal Charges"
        />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 20px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '40px',
          fontFamily: "'Nunito Sans', sans-serif"
        }}>
          <main style={{ color: '#ffffff' }}>
            <section style={{ marginBottom: '48px' }}>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                When you are faced with a criminal charge, the outcome has the potential to be life-altering, and the law can appear complex and almost impossible to overcome. Even so-called minor crimes can result in a permanent criminal record that makes obtaining employment, housing, and professional licensing difficult.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                Because a conviction is so serious, it is important to realize that there is no room for delay or error when it comes to presenting your defense. The sooner you contact an experienced and well-respected New Jersey criminal defense attorney, the faster your defense can be assembled and the stronger that defense will be. From the very beginning, there are specific steps that can be taken towards protecting your rights and working towards your best interests.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                At this critical time, you need a New Jersey criminal defense attorney you can count on to stand by your side and fight for you in and out of the courtroom. You can trust our talented, compassionate legal team to give you the legal counsel and representation you need. Call <a href="tel:8622254442" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: '700' }}>862-292-4442</a> today to schedule your free consultation with our NJ criminal defense attorneys.
              </p>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                color: '#ffffff',
                marginBottom: '24px',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>
                How Can Working with Skilled Trial Lawyers Protect Your Rights?
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                Defending yourself against criminal accusations can be overwhelming and stressful. You need someone on your side who understands the nuances of New Jersey criminal law and is not afraid to fight for you. You should also have an ally who has a deep understanding of your rights and will protect your freedoms regardless of obstacles that arise.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                Our New Jersey criminal lawyers have handled countless cases within the realm of criminal law. For example, we handle theft offenses, sex crimes, simple and aggravated assault, white-collar crimes, DWI, domestic violence, and more. We know the best strategies for defending and defeating this criminal offense and will apply every ounce of our dedication, energy, time, and honesty to getting your criminal charges lowered or dismissed.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                We recognize that you are a valued individual, no matter what crimes you're charged with. You also have rights that must be respected. We'll protect you throughout the legal process, ensuring law enforcement officers and other officials are held accountable for any misconduct. Contact our compassionate, capable team of attorneys today for more information about how we can help.
              </p>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                color: '#ffffff',
                marginBottom: '24px',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>
                Why Is Hiring a Compassionate Criminal Defense Attorney Important?
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                The stress of a criminal charge is not something that you should have to face alone. You may worry about what a conviction will do to your future, how it will affect your family, and what you can do to defend yourself. Putting your case in the capable hands of an experienced criminal defense attorney gives you the best possible advantage.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                Prosecutors in New Jersey typically take an aggressive stance against criminal offenses, making you an easy target without the help of criminal defense lawyers like those at The Bianchi Law Group, LLC. The sad truth is that many people receive a sentence that is unfair or too harsh for their circumstances. You can avoid such devastating sentencing by hiring an experienced NJ criminal attorney like at our law firm. Our team is led by attorneys who are former prosecutors, making us excellent allies in your criminal defense case.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                Taking an aggressive and tactical defense approach from the start gives your criminal defense team the chance to thoroughly investigate your case, research the issues, and develop a strategy. Retaining a criminal defense team that is skilled, aggressive, well-respected, and experienced as both prosecutors and defense attorneys is imperative to the success of your case and for your peace of mind. Contact The Bianchi Law Group, LLC, for attorneys who will treat you with understanding and compassion.
              </p>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                color: '#ffffff',
                marginBottom: '24px',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>
                What Are The Benefits of Being Represented by Former Prosecutors & Criminal Trial Attorneys Certified by the New Jersey Supreme Court?
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                The partners of The Bianchi Law Group, LLC are both former New Jersey prosecutors. They are certified by the Supreme Court of New Jersey as Certified Criminal Trial Attorneys. This elite group comprises only 250 attorneys out of about 98,000 attorneys practicing in the State of New Jersey. The recognition we've received has not come by chance. We have proven ourselves through years of dedicated service, successful case outcomes, and an unwavering commitment to excellence in criminal defense.
              </p>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#e8e8e8'
              }}>
                When you work with our team, you benefit from our unique perspective as former prosecutors who understand how the other side thinks and operates. This insider knowledge allows us to anticipate prosecution strategies, identify weaknesses in their case, and build a stronger defense for our clients. Our certification demonstrates our mastery of criminal trial procedures, evidence rules, and courtroom advocacy.
              </p>
            </section>

            <section style={{
              backgroundColor: '#8B1A1A',
              padding: '40px',
              borderRadius: '8px',
              marginBottom: '48px'
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '32px',
                color: '#ffffff',
                marginTop: '0',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Schedule Your Free Consultation Today
              </h3>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '24px',
                color: '#ffffff',
                textAlign: 'center'
              }}>
                Don't face criminal charges alone. Our experienced New Jersey criminal defense attorneys are ready to fight for your rights and freedom. Contact us today to discuss your case.
              </p>
              <div style={{ textAlign: 'center' }}>
                <a
                  href="tel:8622254442"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: '#8B1A1A',
                    padding: '16px 48px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '20px',
                    fontWeight: '700',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  Call 862.225.1965
                </a>
              </div>
            </section>
          </main>

          <aside>
            <ContactForm phone="862.225.1965" />
            
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '32px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '24px',
                color: '#1a1a1a',
                marginTop: '0',
                marginBottom: '20px'
              }}>
                Practice Areas
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {[
                  'Theft Offenses',
                  'Sex Crimes',
                  'Simple Assault',
                  'Aggravated Assault',
                  'White-Collar Crimes',
                  'DWI',
                  'Domestic Violence',
                  'Drug Crimes',
                  'Weapons Offenses'
                ].map((area, index) => (
                  <li key={index} style={{
                    padding: '12px 0',
                    borderBottom: '1px solid #e0e0e0',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '16px',
                    color: '#1a1a1a'
                  }}>
                    <Link href="#" style={{
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      display: 'block',
                      transition: 'color 0.3s ease'
                    }}>
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
```