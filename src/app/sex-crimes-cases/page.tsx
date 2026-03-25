```typescript
import React from 'react';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: '20px'
    }}>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '24px',
        color: '#1a1a1a',
        marginBottom: '20px',
        fontWeight: '700'
      }}>Contact Us Today</h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="First Name"
          style={{
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: "'Nunito Sans', sans-serif"
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          style={{
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: "'Nunito Sans', sans-serif"
          }}
        />
        <input
          type="tel"
          placeholder="Phone"
          style={{
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: "'Nunito Sans', sans-serif"
          }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: "'Nunito Sans', sans-serif"
          }}
        />
        <textarea
          placeholder="Message"
          rows={5}
          style={{
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: "'Nunito Sans', sans-serif",
            resize: 'vertical'
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: '#8B1A1A',
            color: '#ffffff',
            padding: '15px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            fontFamily: "'Nunito Sans', sans-serif",
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1414'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
        >
          Get Started
        </button>
      </form>
      <div style={{
        marginTop: '25px',
        paddingTop: '25px',
        borderTop: '1px solid #ddd',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontSize: '14px',
          color: '#666',
          marginBottom: '10px'
        }}>Call Us Now</p>
        <a href="tel:862-292-4442" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '24px',
          color: '#8B1A1A',
          textDecoration: 'none',
          fontWeight: '700'
        }}>862.225.1965</a>
      </div>
    </div>
  );
};

const PageHero: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      padding: '80px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '48px',
          color: '#ffffff',
          marginBottom: '20px',
          fontWeight: '700',
          lineHeight: '1.2'
        }}>{title}</h1>
        <div style={{
          width: '100px',
          height: '4px',
          backgroundColor: '#8B1A1A',
          margin: '0 auto'
        }}></div>
      </div>
    </div>
  );
};

export default function SexCrimesCasesPage() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <title>New Jersey Sex Crime Lawyers - The Bianchi Law Group</title>
        <meta name="description" content="New Jersey Sex Crimes Attorneys helping clients defeat serious legal charges. Former prosecutors with decades of experience." />
      </head>
      <div style={{
        fontFamily: "'Nunito Sans', sans-serif",
        backgroundColor: '#ffffff',
        minHeight: '100vh'
      }}>
        <PageHero title="New Jersey Sex Crimes Attorneys" />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '40px',
            alignItems: 'start'
          }}>
            <div style={{
              color: '#333'
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                color: '#1a1a1a',
                marginBottom: '25px',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>Helping Clients Defeat Serious Legal Charges</h2>
              
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                Sexual offenses in New Jersey are enumerated in the New Jersey Criminal Code found in Title 2C; chapter 14. A sex crimes conviction in New Jersey may lead to a considerable jail sentence and other penalties that may affect a defendant's finances and social and personal status.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                In addition to state prison time, a plea of guilty or a conviction for a sexual offense in New Jersey can expose a defendant to Megan's Law registration requirements and community supervision for life. Megan's Law may require mandatory registration in an internet database and potential notifications to the community, your neighborhood, and your place of employment. Moreover, you are only eligible to be removed from these registration requirements after fifteen years if you meet specific criteria.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '30px',
                color: '#444'
              }}>
                The Bianchi Law Group, LLC is composed of a team of former trial prosecutors who have handled the investigations and prosecutions of most crimes in New Jersey and will defend you for all federal and state crimes in New Jersey, including a sex crime. We are standing by to take on your case and protect your rights. Call 862-292-4442 today for a free, confidential consultation.
              </p>

              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '32px',
                color: '#1a1a1a',
                marginTop: '50px',
                marginBottom: '25px',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>Are Your Sex Crimes Attorneys Experienced Litigators?</h2>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                Founding partner and former Morris County Prosecutor Robert A. Bianchi has returned to private practice after running the operations of the entire Morris County Prosecutor's Office, having served as the Morris County Prosecutor for 5 and 1/2 years (2007-2013). Mr. Bianchi was appointed Morris County Prosecutor by the Governor of the State of New Jersey and unanimously confirmed by the New Jersey Senate in 2007.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                While serving as the Morris County Prosecutor, Mr. Bianchi ran the entire office's operations, including all of its attorneys, detectives, and support staff, with an approximately 11 million dollar budget. His innovative programs and approach have led to numerous awards from state, local, municipal, business, and private entities. Robert Bianchi served on the Executive Board of the County Prosecutors' Association and was one of the few prosecutors to argue cases, motions, and sentences in court in many years. He tried a murder case himself, which is extremely rare for a sitting county prosecutor.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                Mr. Bianchi was previously a Hudson County Assistant Prosecutor (1989-1996) and thereafter a partner in the law firm Bianchi & Bianchi (1996-2007). Robert was one of the few attorneys in the State who qualified to handle death penalty cases when New Jersey had the death penalty.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                Partner David J. Bruno returned to private practice after serving as Morris County Assistant Prosecutor (2007-2013). As an assistant prosecutor, Mr. Bruno prosecuted murder, major crimes, white collar, internal affairs, domestic violence, and elderly abuse cases. Additionally, Mr. Bruno handled fraud and major crimes investigations and successfully tried a wide variety of trials, including securing convictions for several high-profile murder cases.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                In December 2012, then Prosecutor Bianchi and Assistant Prosecutor Bruno worked together to secure a murder conviction against Jose Feliciano for the violent death of Father Edward Hinds at St. Patrick's Church in Chatham, New Jersey. Mr. Feliciano was sentenced to life without parole.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '30px',
                color: '#444'
              }}>
                Together, Robert A. Bianchi, David J. Bruno, and our team of former prosecutors make up an aggressive, ethical, and results-oriented New Jersey Criminal Defense firm that handles all criminal, municipal, and DUI/DWI cases in New Jersey, including sex crimes cases.
              </p>

              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '32px',
                color: '#1a1a1a',
                marginTop: '50px',
                marginBottom: '25px',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>What Should I Do if I've Been Charged with a Sex Crime in New Jersey?</h2>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                Being charged with a sex crime can be upsetting and frustrating. These criminal charges often bring a great deal of stigma, making it difficult to defeat your charges and protect your freedoms. If you or a loved one has been charged with a sex crime, you might wonder what you can do to protect your future and avoid a conviction.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#444'
              }}>
                One of the most critical factors in a sex crime case is having a talented defense attorney on your side who will watch out for your interests and ensure your rights are protected. At The Bianchi Law Group, LLC, our skilled litigators have decades of experience, including years spent as prosecutors. We understand how the opposition works and will leverage our experience, talent, and honed skills to get you the best result.
              </p>

              <div style={{
                backgroundColor: '#8B1A1A',
                color: '#ffffff',
                padding: '40px',
                borderRadius: '8px',
                marginTop: '50px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '28px',
                  marginBottom: '15px',
                  fontWeight: '700'
                }}>Free Confidential Consultation</h3>
                <p style={{
                  fontSize: '18px',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>
                  Contact our experienced sex crimes defense attorneys today
                </p>
                <a href="tel:862-292-4442" style={{
                  display: 'inline-block',
                  backgroundColor: '#ffffff',
                  color: '#8B1A1A',
                  padding: '15px 40px',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '18px',
                  fontWeight: '700',
                  fontFamily: "'Nunito Sans', sans-serif",
                  transition: 'transform 0.3s'
                }}>862-292-4442</a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
```