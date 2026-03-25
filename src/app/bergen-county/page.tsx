import React from 'react';

export default function BergenCountyPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            Attorneys in Bergen County, NJ
          </h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Experienced Criminal Defense Representation in Bergen County
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {/* Content Section - 2/3 */}
        <div style={{ flex: '2 1 600px', minWidth: '0' }}>
          {/* Bergen County Description */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '20px', fontWeight: '600' }}>
              About Bergen County, New Jersey
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
              Bergen County, New Jersey, is a populous region just west of New York City. The county is home to nearly one million people and is the most densely populated county in the state. Bergen County is known for its wide array of attractions, from bustling city streets to historic sites such as the Fort Lee Historic Park and Saddle River County Park. There are also many shopping centers, cultural centers, and Universities within the county, including Fairleigh Dickinson University. Bergen County's proximity to New York City makes it an ideal place for residents and visitors to commute between state lines. Cities located in Bergen include Teaneck, Paramus, Hackensack, and Englewood; each offering its own unique atmosphere.
            </p>
          </section>

          {/* Legal Services */}
          <section style={{ marginBottom: '50px', backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '20px', fontWeight: '600' }}>
              Criminal Defense Services in Bergen County
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
              Even though Bergen County offers a lot of opportunities and amenities, there are still cases of crime within the area that require legal service from criminal defense attorneys. Fortunately, <strong style={{ color: '#8B1A1A' }}>The Bianchi Law Group, LLC</strong> provides quality criminal defense services for anyone who needs representation in Bergen County or elsewhere in New Jersey.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
              The Bianchi Law Group understands that being charged with a crime can be frightening – but having an experienced lawyer on your side can make all the difference during this difficult time. All potential clients can expect personalized representation during every stage of their case. Whether you need legal advice regarding a first-offense DWI or assistance fighting a drug charge, The Bianchi Law Group stands ready to assist you with your legal needs – no matter how big or small they may seem!
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
              If you're looking for quality criminal defense services in Bergen County or beyond, reach out to our law firm today! The Bianchi Law Group has decades of experience handling criminal defense cases in New Jersey.
            </p>
          </section>

          {/* Attorney Profile */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '20px', fontWeight: '600' }}>
              Our Founding Attorney
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', marginBottom: '20px' }}>
              <strong style={{ color: '#8B1A1A' }}>Robert A. Bianchi</strong>, our founding attorney, was a former prosecutor in Morris County and is certified as a criminal trial attorney. His experience, along with the decades of combined experience from the rest of our skilled team of lawyers, can guide you through your situation with ease.
            </p>
            <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px' }}>
                Book Your Free Consultation Today
              </p>
              <p style={{ fontSize: '36px', fontWeight: '700', letterSpacing: '1px' }}>
                862-225-1965
              </p>
            </div>
          </section>

          {/* Practice Areas */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '30px', fontWeight: '600' }}>
              Practice Areas
            </h2>
            
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '26px', color: '#8B1A1A', marginBottom: '20px', fontWeight: '600' }}>
                Criminal Defense
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                {[
                  'Aggravated Manslaughter and Manslaughter',
                  'Assault by Auto',
                  'Assault and Aggravated Assault',
                  'Bad Checks',
                  'Burglary',
                  'Carjacking',
                  'Credit Card Fraud and Theft',
                  'Criminal Mischief',
                  'Disorderly Conduct',
                  'Distribution of CDS',
                  'Death by Auto',
                  'Domestic Violence',
                  'Endangering an Injured Victim',
                  'Forgery',
                  'Harassment',
                  'Kidnapping',
                  'Leaving the Scene of an Accident',
                  'Motor Vehicle Theft',
                  'Murder',
                  'Restraining Orders',
                  'Robbery'
                ].map((area, index) => (
                  <div key={index} style={{ padding: '15px', backgroundColor: '#f4f4f4', borderLeft: '4px solid #8B1A1A', fontSize: '16px', color: '#333' }}>
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '26px', color: '#8B1A1A', marginBottom: '20px', fontWeight: '600' }}>
                Sex Crimes Cases
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                {[
                  'Sexual Assault',
                  'Child Cruelty and Neglect',
                  'Endangering the Welfare of Children',
                  'Registration of Sex Offenders/Megan\'s Law',
                  'Lewdness',
                  'Rape Shield Law',
                  'Observation of Sexual Contact'
                ].map((area, index) => (
                  <div key={index} style={{ padding: '15px', backgroundColor: '#f4f4f4', borderLeft: '4px solid #8B1A1A', fontSize: '16px', color: '#333' }}>
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '26px', color: '#8B1A1A', marginBottom: '20px', fontWeight: '600' }}>
                Additional Practice Areas
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                {[
                  'Criminal Investigations',
                  'Juvenile Crimes',
                  'White Collar Crimes',
                  'Appeals',
                  'Municipal Court',
                  'DWI'
                ].map((area, index) => (
                  <div key={index} style={{ padding: '15px', backgroundColor: '#f4f4f4', borderLeft: '4px solid #8B1A1A', fontSize: '16px', color: '#333' }}>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '30px', fontWeight: '600' }}>
              Recent Blog Posts
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ padding: '30px', backgroundColor: '#fff', border: '2px solid #e0e0e0', borderRadius: '8px' }}>
                <p style={{ fontSize: '14px', color: '#8B1A1A', fontWeight: '600', marginBottom: '10px' }}>
                  March 17, 2026
                </p>
                <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: '600' }}>
                  New Jersey Survivors Justice Act L. 2025, c. 328
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', marginBottom: '15px' }}>
                  New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...
                </p>
                <a href="#" style={{ color: '#8B1A1A', fontSize: '16px', fontWeight: '600', textDecoration: 'none' }}>
                  Read More →
                </a>
              </div>
              <div style={{ padding: '30px', backgroundColor: '#fff', border: '2px solid #e0e0e0', borderRadius: '8px' }}>
                <p style={{ fontSize: '14px', color: '#8B1A1A', fontWeight: '600', marginBottom: '10px' }}>
                  December 16, 2025
                </p>
                <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: '600' }}>
                  Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', marginBottom: '15px' }}>
                  New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...
                </p>
                <a href="#" style={{ color: '#8B1A1A', fontSize: '16px', fontWeight: '600', textDecoration: 'none' }}>
                  Read More →
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar - 1/3 */}
        <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
          {/* Contact Form */}
          <div style={{ position: 'sticky', top: '20px' }}>
            <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 30px', borderRadius: '8px', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '28px', marginBottom: '10px', fontWeight: '600' }}>
                Contact Us
              </h2>
              <p style={{ fontSize: '16px', marginBottom: '30px', color: '#ccc' }}>
                To Schedule Your Free Consultation
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                    Case Type
                  </label>
                  <select
                    style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', boxSizing: 'border-box' }}
                  >
                    <option>Select a practice area</option>
                    <option>Criminal Defense</option>
                    <option>DWI</option>
                    <option>Sex Crimes</option>
                    <option>Domestic Violence</option>
                    <option>White Collar Crimes</option>
                    <option>Municipal Court</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    style={{ width: '100%', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '4px', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '16px', fontSize: '18px', fontWeight: '600', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1515'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>

            {/* Call Now Box */}
            <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', marginBottom: '15px', fontWeight: '500' }}>
                Call Us Now
              </p>
              <a href="tel:862-225-1965" style={{ color: '#fff', textDecoration: 'none', fontSize: '32px', fontWeight: '700', display: 'block', letterSpacing: '1px' }}>
                862-225-1965
              </a>
              <p style={{ fontSize: '14px', marginTop: '15px', color: '#f0f0f0' }}>
                Free Consultation Available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '600' }}>
            Ready to Discuss Your Case?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>
            The Bianchi Law Group is ready to provide you with experienced criminal defense representation in Bergen County and throughout New Jersey.
          </p>
          <a
            href="tel:862-225-1965"
            style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '18px 40px', fontSize: '20px', fontWeight: '600', textDecoration: 'none', borderRadius: '4px', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1515'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
          >
            Call 862-225-1965 Now
          </a>
        </div>
      </div>
    </div>
  );
}