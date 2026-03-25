import React from 'react';

export default function CareersPage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Careers</h1>
          <p style={{ fontSize: '20px', margin: '0' }}>Join Our Team at The Bianchi Law Group, LLC</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Content Section - 2/3 width */}
        <div style={{ flex: '2 1 600px', minWidth: '300px' }}>
          
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', color: '#8B1A1A', marginBottom: '20px' }}>Join Our Team Today!</h2>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              The Bianchi Law Group is always looking for talented professionals to join our prestigious law firm. 
              We offer a collaborative environment where excellence is valued and career growth is supported.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '32px', color: '#8B1A1A', marginBottom: '20px' }}>Executive Assistant (Billing and Collections)</h3>
            
            <h4 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: '600' }}>Position Overview:</h4>
            <p style={{ fontSize: '16px', marginBottom: '25px' }}>
              We seek a highly skilled and organized Executive Assistant primarily focusing on billing and collections 
              to provide comprehensive assistance to the managing partners and office manager at our prestigious law office. 
              The ideal candidate will possess excellent communication and multitasking abilities, with a strong background 
              in billing and collections. The Executive Assistant will play a crucial role in supporting the office's daily 
              operations and ensuring smooth coordination among various departments.
            </p>

            <h4 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: '600' }}>Responsibilities:</h4>
            <ul style={{ fontSize: '16px', marginBottom: '25px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Billing and Collections:</strong> Manage all aspects of billing and collections, including 
                generating invoices, tracking payments, and following up on outstanding accounts. Maintain accurate 
                financial records and ensure timely payment of office expenses.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Executive Support:</strong> Assist the managing partners in their day-to-day tasks, including 
                managing schedules, arranging meetings, and coordinating travel arrangements. Handle confidential and 
                sensitive information with utmost discretion.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Office Management:</strong> Collaborate with the office manager to ensure efficient office 
                operations. This includes managing office supplies, handling mailings, and maintaining office equipment.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Information Management:</strong> Attend regular law office huddles to stay informed about 
                ongoing operations and updates. Compile and distribute meeting minutes and agendas as necessary.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Sales Department Liaison:</strong> Serve as a key point of contact between the law office 
                and the sales department. Collaborate with the sales team to assist with tasks, provide necessary 
                information, and support sales initiatives.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Daily Operations Assistance:</strong> Support the law partners in their daily operations by 
                conducting research, preparing reports, and coordinating internal and external communications. Assist 
                with document preparation, legal research, and other administrative tasks.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Marketing Department Support:</strong> Assist the marketing department as needed. This may 
                include participating in the development and execution of marketing campaigns, coordinating events, 
                and managing social media accounts.
              </li>
            </ul>

            <h4 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', fontWeight: '600' }}>Qualifications:</h4>
            <ul style={{ fontSize: '16px', marginBottom: '25px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                Previous experience in billing and collections, preferably in a law office or professional services environment.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Strong understanding of billing and collections processes, with experience in managing financial records and accounts.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Excellent organizational and time management skills, with the ability to prioritize tasks effectively.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Proficient in using office productivity software, including Microsoft Office Suite (Word, Excel, PowerPoint, 
                Outlook) and legal software applications.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Exceptional verbal and written communication skills, with a keen eye for detail.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Ability to maintain confidentiality and handle sensitive information with discretion.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Strong problem-solving skills and ability to work independently or as part of a team.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Flexibility and adaptability to handle changing priorities and deadlines.
              </li>
              <li style={{ marginBottom: '10px' }}>
                A proactive and positive attitude, with a willingness to take on additional responsibilities as needed.
              </li>
            </ul>

            <p style={{ fontSize: '16px', marginBottom: '30px', fontStyle: 'italic' }}>
              If you are a self-motivated individual with a strong commitment to providing outstanding administrative 
              support, particularly in billing and collections, and contributing to the success of a dynamic law office, 
              we encourage you to apply.
            </p>

            <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '20px', borderRadius: '8px', textAlign: 'center', marginBottom: '40px' }}>
              <h4 style={{ fontSize: '22px', margin: '0 0 10px 0' }}>Ready to Apply?</h4>
              <p style={{ margin: '0 0 15px 0', fontSize: '16px' }}>
                Submit your application for the Executive Assistant position today
              </p>
              <a href="#contact-form" style={{ display: 'inline-block', backgroundColor: '#fff', color: '#8B1A1A', padding: '12px 30px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px', fontSize: '16px' }}>
                Apply Now
              </a>
            </div>
          </div>

          {/* Recent Blog Posts */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '28px', color: '#8B1A1A', marginBottom: '25px' }}>Our Recent Blogs</h3>
            
            <div style={{ marginBottom: '25px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px 0' }}>March 17, 2026</p>
              <h4 style={{ fontSize: '20px', margin: '0 0 10px 0', color: '#1a1a1a' }}>
                New Jersey Survivors Justice Act L. 2025, c. 328
              </h4>
              <p style={{ fontSize: '15px', margin: '0 0 12px 0' }}>
                New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...
              </p>
              <a href="/blog" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                Read More →
              </a>
            </div>

            <div style={{ marginBottom: '25px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px 0' }}>December 16, 2025</p>
              <h4 style={{ fontSize: '20px', margin: '0 0 10px 0', color: '#1a1a1a' }}>
                Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves
              </h4>
              <p style={{ fontSize: '15px', margin: '0 0 12px 0' }}>
                New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma On November 20, 2025,...
              </p>
              <a href="/blog" style={{ color: '#8B1A1A', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                Read More →
              </a>
            </div>

            <a href="/blog" style={{ display: 'inline-block', color: '#8B1A1A', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' }}>
              Read All Posts →
            </a>
          </div>
        </div>

        {/* Sidebar - 1/3 width */}
        <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
          
          {/* Contact Form */}
          <div id="contact-form" style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '24px', marginTop: '0', marginBottom: '10px', color: '#fff' }}>Contact Us</h3>
            <p style={{ fontSize: '16px', marginBottom: '25px', color: '#fff' }}>To Schedule Your Free Consultation</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="position" style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Position of Interest</label>
                <input 
                  type="text" 
                  id="position" 
                  name="position"
                  placeholder="e.g., Executive Assistant"
                  style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  required
                  style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', fontSize: '14px', resize: 'vertical', boxSizing: 'border-box' }}
                ></textarea>
              </div>

              <button 
                type="submit"
                style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1414'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{ backgroundColor: '#f9f9f9', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
            <h4 style={{ fontSize: '20px', marginTop: '0', marginBottom: '15px', color: '#8B1A1A' }}>Contact Information</h4>
            <p style={{ fontSize: '15px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 'bold' }}>📞 Phone:</span>
              <a href="tel:8622251965" style={{ color: '#1a1a1a', textDecoration: 'none' }}>862.225.1965</a>
            </p>
            <p style={{ fontSize: '15px', margin: '0' }}>
              Call us today to learn more about career opportunities at The Bianchi Law Group.
            </p>
          </div>

          {/* Why Join Us */}
          <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '25px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '20px', marginTop: '0', marginBottom: '15px' }}>Why Join Our Team?</h4>
            <ul style={{ fontSize: '15px', paddingLeft: '20px', margin: '0' }}>
              <li style={{ marginBottom: '10px' }}>Collaborative work environment</li>
              <li style={{ marginBottom: '10px' }}>Professional development opportunities</li>
              <li style={{ marginBottom: '10px' }}>Competitive compensation</li>
              <li style={{ marginBottom: '10px' }}>Supportive leadership</li>
              <li style={{ marginBottom: '0' }}>Work-life balance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '32px', color: '#8B1A1A', marginBottom: '20px' }}>Ready to Start Your Career with Us?</h3>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#1a1a1a' }}>
            Contact The Bianchi Law Group today to discuss available opportunities and take the next step in your legal career.
          </p>
          <a 
            href="tel:8622251965" 
            style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '15px 40px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px', fontSize: '18px' }}
          >
            Call 862.225.1965
          </a>
        </div>
      </div>
    </div>
  );
}