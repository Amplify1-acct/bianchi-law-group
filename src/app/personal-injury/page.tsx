import React from 'react';

export default function PersonalInjuryPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0', lineHeight: '1.2' }}>
            New Jersey Personal Injury Attorneys
          </h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Dedicated, aggressive, and tenacious trial attorneys fighting for your rights
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>
        
        {/* Main Content - 2/3 */}
        <div>
          {/* Philosophy Section */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ color: '#8B1A1A', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
              Our Philosophy
            </h2>
            <p style={{ color: '#1a1a1a', fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              Being injured due to the actions of another can truly be a life altering event. You and your family will have to navigate not only the physical injuries, but perhaps worse yet, the emotional trauma that is caused by the unexpected consequences of an injury that sometimes lasts a lifetime. At The Bianchi Law Group, our attorneys are dedicated, aggressive, and tenacious trial attorneys who understand that we are not only responsible for giving you the best legal representation you, but also are prepared to work in a compassionate manner so that the legal process is as painless as possible.
            </p>
          </section>

          {/* Focus Section */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ color: '#8B1A1A', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
              A Focus on Personal Injury Cases
            </h2>
            <p style={{ color: '#1a1a1a', fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              At The Bianchi Law Group, our Firm represents people who have been injured due to the actions or neglect of others. We do not – nor will we ever – represent or defend insurance companies. We are ready to fight against any insurance company in court to achieve the maximum recovery for our clients who have been injured. In addition, our fees are on a contingent basis which means that our Firm only receives a percentage of compensation for its legal services if you recover money for your case.
            </p>
            <p style={{ color: '#1a1a1a', fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              We have been honored throughout our careers to have secured millions of dollars in recovery for our clients at trial when the insurance companies refused to offer our clients an acceptable settlement. We are not afraid as former prosecutors to try a case, and will never advise a client to take an anemic settlement offer. We prepare cases for trial from the outset, which is the best way to ensure the client receives a fair settlement. If not, however, you can be assured of the attorneys at The Bianchi Law Group are willing to try a case that is prepared skillfully and aggressively.
            </p>
          </section>

          {/* Trial Ready Section */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ color: '#8B1A1A', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
              Trial Ready Personal Injury Attorneys
            </h2>
            <p style={{ color: '#1a1a1a', fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              An attorney's trial experience, tenacity, skills in a courtroom, and willingness to try a case are all key factors to a successful outcome of your case. The trial attorneys at The Bianchi Law Group have been trained from the beginning of their careers as trial prosecutors where they worked every day in the courtroom handling the most complex and demanding cases that there is in the practice of law. Hence, the courtroom is not an uncomfortable environment for the attorneys at The Bianchi Law Group – a crucial aspect to a client's success in a personal injury case. Our experience as former prosecutors in the courtroom (i.e. opening statements, direct examination, cross examination, summations, evidence rules, trial tactics, and negotiation practices) cannot be underestimated. These skills, which are invaluable for our clients, translate to successful settlements and/or verdicts.
            </p>
          </section>

          {/* Experience Section */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ color: '#8B1A1A', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
              Our Personal Injury Attorneys Have the Experience You Need
            </h2>
            <p style={{ color: '#1a1a1a', fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              You want your life back. The personal injury attorneys at The Bianchi Law Group specialize in helping people who are injured. Our attorneys will work hard to understand your particular injury and legal needs and mostly importantly, earn your trust. We have represented severely injured people whose lives has been disrupted through no fault of their own. We investigate how an injury was caused, find the experts to prove your case and use our knowledge to help make things right for you and your family. We understand the financial hardship and the emotions involved when facing threatening health and financial issues and attack them with logic and confidence that only years and variety of experience can provide.
            </p>
          </section>

          {/* Types of Cases Section */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ color: '#8B1A1A', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
              Types of Personal Injury Cases We Handle
            </h2>
            <p style={{ color: '#1a1a1a', fontSize: '16px', lineHeight: '1.8', marginBottom: '25px' }}>
              A variety of accidents qualify as personal injury cases and it is important to have the representation of a lawyer who has the knowledge and skills to handle each of these situations. The legal team at The Bianchi Law Group understands the determination and dedication it takes to successfully manage your personal injury case. In addition, The Bianchi Law Group has the reputation among adversaries, judges, and clients to back up their trial and negotiation skills. Some of the cases we handle are:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {[
                'Auto Accidents Injuries',
                'Bicycle Injuries',
                'Brain Injuries',
                'Bus Accidents',
                'Catastrophic Injuries',
                'Civil Rights Cases',
                'Construction Site Accidents',
                'Consumer Fraud',
                'Dog Bite Injuries',
                'Explosions and Fires',
                'Electrical Injuries and Electrocutions',
                'Inadequate Security',
                'Medical Malpractice',
                'Nursing Home Abuse and Injuries',
                'Pharmaceutical Litigation',
                'Premise Liability',
                'Products Liability',
                'Slip and Fall Injuries'
              ].map((caseType, index) => (
                <div key={index} style={{ color: '#1a1a1a', fontSize: '15px', padding: '12px', backgroundColor: '#f5f5f5', borderLeft: '3px solid #8B1A1A' }}>
                  {caseType}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - 1/3 */}
        <div>
          {/* Contact Form */}
          <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '30px', borderRadius: '8px', position: 'sticky', top: '20px' }}>
            <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
              Contact Us Today
            </h3>
            <p style={{ color: '#fff', fontSize: '14px', marginBottom: '20px', textAlign: 'center', lineHeight: '1.6' }}>
              Get a free consultation with our experienced personal injury attorneys
            </p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                placeholder="Full Name *"
                required
                style={{ padding: '12px', fontSize: '14px', border: 'none', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a' }}
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                style={{ padding: '12px', fontSize: '14px', border: 'none', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a' }}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                style={{ padding: '12px', fontSize: '14px', border: 'none', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a' }}
              />
              <textarea
                placeholder="Tell us about your case *"
                required
                rows={5}
                style={{ padding: '12px', fontSize: '14px', border: 'none', borderRadius: '4px', backgroundColor: '#fff', color: '#1a1a1a', resize: 'vertical' }}
              />
              <button
                type="submit"
                style={{ padding: '15px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#8B1A1A', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'opacity 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                Submit
              </button>
            </form>

            <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #444' }}>
              <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', textAlign: 'center' }}>
                Call Us Now
              </h4>
              <a href="tel:8622251965" style={{ display: 'block', textAlign: 'center', color: '#8B1A1A', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', padding: '15px', backgroundColor: '#fff', borderRadius: '4px' }}>
                862.225.1965
              </a>
            </div>

            <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#2a2a2a', borderRadius: '4px' }}>
              <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
                Why Choose Us?
              </h4>
              <ul style={{ color: '#fff', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px', margin: '0' }}>
                <li>Former prosecutors with extensive trial experience</li>
                <li>Millions recovered for our clients</li>
                <li>Contingency fee basis - no recovery, no fee</li>
                <li>Aggressive representation against insurance companies</li>
                <li>Compassionate and dedicated service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '15px' }}>
            Ready to Fight for Your Rights?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '25px' }}>
            Contact The Bianchi Law Group today for a free consultation
          </p>
          <a href="tel:8622251965" style={{ display: 'inline-block', backgroundColor: '#fff', color: '#8B1A1A', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px', transition: 'transform 0.3s' }}>
            Call 862.225.1965
          </a>
        </div>
      </div>
    </div>
  );
}