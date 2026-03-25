import Image from 'next/image'
import { ReactNode } from 'react'

export default function OutreachCareerDevelopmentProgramPage() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#8B1A1A', padding: '60px 20px', textAlign: 'center', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>Career Development Program</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>An intensive six-week program designed for college students interested in legal careers</p>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <article style={{ flex: '2 1 600px', minWidth: '0' }}>
          <section style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              This program is designed specifically for college students interested in a career as an Attorney or Paralegal professional.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#1a1a1a', marginBottom: '20px' }}>
              Working with colleges in the surrounding area, this six-week intensive program immerses students interested in legal careers with critical knowledge and contacts from experts in the legal profession.
            </p>
          </section>

          <section style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #8B1A1A' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '20px' }}>Program Components</h2>
            
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px' }}>Meet the Professionals</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a' }}>
                Students will learn about a multitude of legal careers from various legal professionals, such as criminal defense attorneys, prosecuting attorneys, civil litigators, judges and attorneys and paralegals that practice in a wide variety of subject matters all that involve litigation.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px' }}>Introduction to the Courtroom</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a' }}>
                Few attorneys actually try cases. The lecturers at this phase of the program include attorneys and judges who are widely recognized as experts in courtroom trial litigation, and who enjoy tremendous experience and reputations among legal professionals. They will provide the students with "real world" experiences of the courtroom and discuss cases of interest and real-life scenarios of how those cases progressed in the judicial system.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px' }}>Mock Court</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a' }}>
                This evening is designed to have experienced trial attorneys conduct a mock courtroom scenario from an actual case. Questions and answers from the students are answered. It is an amazing opportunity for students to learn how attorneys and paralegals prepare their cases for trial, the stresses and concerns they have, as well as, what each day looks like to a trial attorney and paralegal.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px' }}>Resume Preparation and Interviewing Techniques</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a' }}>
                This part of the program provides instruction to students on positive and negative ways to prepare resumes, and/or interview for a job or promotion. Experts in the field of resume preparation and interviewing job applicants discuss the "ins and outs" of these processes that so often scuttle a prospective candidate for employment or promotion opportunity.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px' }}>Social Media and Developing Contacts for Job Opportunities</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a' }}>
                Students will learn from industry experts on how to put a professional look to their social media platforms, geared toward obtaining a job. They will also learn how to develop contacts and the "dos and don'ts" on how to leverage contacts to open opportunities to secure their first job.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px' }}>Mock Interviews</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a' }}>
                At this part of the program the student candidates are actually interviewed by professionals in their desired field with significant experience in interviewing persons for employment and/or promotion. A mock interview of every student is essential so that positive critique can be provided.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px' }}>Passionate Careers, Fulfilled Lives</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a' }}>
                Here, Robert Bianchi will provide his lecture on handling workplace and personal difficulties in life and how to cultivate a more positive attitude to be effective at your job and increase the likelihood of promotion and a more joyful career and life.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px' }}>Internship Program</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#1a1a1a' }}>
                During the entire program, participating law firms will also provide an opportunity for students to learn about internship opportunities at numerous law firms. Working with local colleges, credit will be given for these internships which means that students not only have a chance at an excellent opportunity to learn, they too will receive credit from their school, have an impressive distinction on their resume and gather indispensable contacts and connections that will be invaluable to them as they move into the marketplace.
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#666', marginTop: '10px', fontStyle: 'italic' }}>
                Note: This provides an opportunity for the student, not a guarantee. Not all students will get internships, but it is their opportunity to make the contacts with law firms that are interested in securing interns.
              </p>
            </div>
          </section>

          <section style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Specialized Breakout Sessions</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#fff', marginBottom: '20px' }}>
              Breakout sessions will be offered during the program designed to be tailored to those seeking to be attorneys and those seeking to be paralegal professionals.
            </p>

            <div style={{ marginTop: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '15px' }}>Breakout for Law Student Applicants:</h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#fff', marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#8B1A1A' }}>•</span>
                  How to prepare and apply to a law school
                </li>
                <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#fff', marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#8B1A1A' }}>•</span>
                  Students will learn from law school admissions administrators on the process of admissions, letters of reference and the application process
                </li>
                <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#fff', marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#8B1A1A' }}>•</span>
                  How to prepare their "personal statement" and other tips on the application process
                </li>
                <li style={{ fontSize: '16px', lineHeight: '1.7', color: '#fff', marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#8B1A1A' }}>•</span>
                  The complex process of law school admissions will be explained, and a chance to speak with current law students
                </li>
              </ul>
            </div>
          </section>

          <section style={{ marginTop: '40px' }}>
            <div style={{ backgroundColor: '#8B1A1A', padding: '30px', borderRadius: '8px', textAlign: 'center', color: '#fff' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px' }}>Get Started Today</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
                Contact a member of our staff so we can tailor our program to your specific needs
              </p>
              <a href="mailto:info@bianchilawgroup.com" style={{ display: 'inline-block', backgroundColor: '#fff', color: '#8B1A1A', padding: '15px 40px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', transition: 'all 0.3s' }}>
                Email Us for More Information
              </a>
            </div>
          </section>
        </article>

        <aside style={{ flex: '1 1 300px', minWidth: '280px' }}>
          <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '8px', position: 'sticky', top: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', color: '#fff', marginBottom: '5px', fontSize: '14px' }}>Name *</label>
                <input type="text" id="name" name="name" required style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', color: '#fff', marginBottom: '5px', fontSize: '14px' }}>Email *</label>
                <input type="email" id="email" name="email" required style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label htmlFor="phone" style={{ display: 'block', color: '#fff', marginBottom: '5px', fontSize: '14px' }}>Phone</label>
                <input type="tel" id="phone" name="phone" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label htmlFor="school" style={{ display: 'block', color: '#fff', marginBottom: '5px', fontSize: '14px' }}>School/College</label>
                <input type="text" id="school" name="school" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label htmlFor="interest" style={{ display: 'block', color: '#fff', marginBottom: '5px', fontSize: '14px' }}>Area of Interest</label>
                <select id="interest" name="interest" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#fff', fontSize: '14px', boxSizing: 'border-box' }}>
                  <option value="">Select...</option>
                  <option value="attorney">Attorney Track</option>
                  <option value="paralegal">Paralegal Track</option>
                  <option value="undecided">Undecided</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', color: '#fff', marginBottom: '5px', fontSize: '14px' }}>Message *</label>
                <textarea id="message" name="message" required rows={5} style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#fff', fontSize: '14px', resize: 'vertical', boxSizing: 'border-box' }}></textarea>
              </div>
              <button type="submit" style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '15px', borderRadius: '4px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}>
                Submit Inquiry
              </button>
            </form>
            <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #444', textAlign: 'center' }}>
              <p style={{ color: '#fff', fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>Call Us Today</p>
              <a href="tel:8622251965" style={{ color: '#8B1A1A', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
                862.225.1965
              </a>
            </div>
          </div>
        </aside>
      </main>

      <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 20px', marginTop: '60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '16px', marginBottom: '10px' }}>The Bianchi Law Group</p>
          <p style={{ fontSize: '14px', color: '#999' }}>&copy; {new Date().getFullYear()} The Bianchi Law Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}