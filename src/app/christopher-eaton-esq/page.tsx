import React from 'react';

export default function ChristopherEatonEsqPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#1a1a1a' }}>
      <header style={{ backgroundColor: '#8B1A1A', padding: '20px 0', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>The Bianchi Law Group</h1>
          <p style={{ margin: '10px 0 0 0', fontSize: '18px' }}>Phone: 862.225.1965</p>
        </div>
      </header>

      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', margin: '0 0 20px 0', fontWeight: 'bold' }}>Christopher A. Eaton, Esq.</h2>
          <p style={{ fontSize: '24px', margin: 0, fontStyle: 'italic' }}>Former Deputy Bureau Chief and Senior Felony Assistant District Attorney, Brooklyn District Attorney's Office</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <main style={{ flex: '2', minWidth: '300px' }}>
          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#8B1A1A', fontSize: '32px', marginBottom: '20px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Professional Background</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              Upon graduating from St. John's University School of Law, Christopher served as an Assistant District Attorney at the Kings County District Attorney's Office in Brooklyn for six years. He spent four years assigned to the Green Zone Trial Bureau, which covers several Brooklyn neighborhoods including Coney Island, Sunset Park, Sheepshead Bay, Flatbush, Crown Heights, and Manhattan Beach.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              In that capacity, he handled thousands of misdemeanor and felony cases and managed a violent felony caseload of over fifty cases including weapons possession, robbery, assault, manslaughter, attempted murder, and gang shootings.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              Christopher presented over one hundred and fifty cases before the New York State grand jury and has interviewed thousands of victims, law enforcement officers, and civilian witnesses in preparation for court appearances, hearings, and trials. Christopher was co-counsel on two attempted murder trials for which top count convictions were obtained and the defendants were each sentenced to over twenty years of incarceration. In addition, he has conducted and supervised numerous pre-trial hearings and several bench and jury trials to verdict in both Supreme Court and Criminal Court.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#8B1A1A', fontSize: '32px', marginBottom: '20px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Leadership & Promotion</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              Christopher was promoted to Senior Felony Assistant District Attorney in 2020 and Deputy Bureau Chief of the Street Safety Bureau (Vehicular Crimes) in February 2021. The Street Safety Bureau is responsible for the prosecution of all vehicular crimes committed in Brooklyn including, but not limited to, drinking and driving offenses, reckless driving, and vehicular manslaughters.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              As Deputy Bureau Chief, Christopher managed all misdemeanor DWI prosecution in Brooklyn, supervised approximately sixty attorneys, and managed a docket of over seven hundred DWI cases. Christopher was responsible for supervising the DWI Criminal Court part, reviewing case files and police paperwork, assisting with discovery litigation and motion practice, negotiating plea offers, and training young assistants in hearing and trial preparation.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#8B1A1A', fontSize: '32px', marginBottom: '20px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Education</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              Christopher graduated from Amherst College in 2011 with a major in Political Science. He was a member of the NESCAC Championship Amherst College football team and a record-breaking thrower on the Indoor and Outdoor Track and Field Teams.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              While attending Amherst College, Christopher interned in the Kings County Supreme Court Mental Health Part as well as the United States Attorney's Office in the Eastern District of New York, Business and Securities Fraud Division.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              After graduating from Amherst College, Christopher worked for JP Morgan Chase as an analyst for one year before starting his law school career at St. John's University School of Law in 2012.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#8B1A1A', fontSize: '32px', marginBottom: '20px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Law School Experience</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              While attending St. John's Law, Christopher served as the Vice President and President of the Student Bar Association. During law school, Christopher worked in the Queens County District Attorney's Domestic Violence Prosecution Clinic where he managed a caseload of approximately forty domestic violence matters. He also interned at the New York County District Attorney's Office and at the United States Attorney's Office in the Eastern District of New York, General Crimes Division.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#8B1A1A', fontSize: '32px', marginBottom: '20px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Bar Admissions & Memberships</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              Christopher is admitted to practice law in the courts of the State of New York, State of New Jersey, and the District of New Jersey. He is a member of the Associate Board of Directors for the New York State Academy of Trial Lawyers and a member of the Cathedral Club of Brooklyn – a Catholic organization that raises funds for the Diocese of Brooklyn and funds scholarships for young men and women to attend Catholic high schools throughout the diocese.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#8B1A1A', fontSize: '32px', marginBottom: '20px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Personal Interests & Community Service</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
              Christopher is an avid fisherman and boater, spending weekends with his family at the Jersey shore. In August 2021, Christopher participated in the TD Five Boro Bike Tour and helped raise over $15,000 for HeartShare Human Services of New York, a not-for-profit organization that supports children and adults with intellectual and developmental disabilities.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#8B1A1A', fontSize: '32px', marginBottom: '20px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>Recent Blog Posts</h3>
            <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #8B1A1A' }}>
              <h4 style={{ color: '#8B1A1A', fontSize: '20px', margin: '0 0 10px 0' }}>New Jersey Survivors Justice Act L. 2025, c. 328</h4>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>March 17, 2026</p>
              <p style={{ lineHeight: '1.6', fontSize: '16px' }}>New Jersey Legislature enacts new sentencing law for victims of domestic violence On January 20,...</p>
            </div>
            <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #8B1A1A' }}>
              <h4 style={{ color: '#8B1A1A', fontSize: '20px', margin: '0 0 10px 0' }}>Shaken Baby Syndrome: New Jersey</h4>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>December 16, 2025</p>
            </div>
          </section>
        </main>

        <aside style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ position: 'sticky', top: '20px' }}>
            <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '28px', margin: '0 0 20px 0', textAlign: 'center' }}>Contact Us</h3>
              <p style={{ fontSize: '18px', margin: '0 0 20px 0', textAlign: 'center', fontWeight: 'bold' }}>To Schedule Your Free Consultation</p>
              <p style={{ fontSize: '20px', margin: '0 0 30px 0', textAlign: 'center', fontWeight: 'bold' }}>862.225.1965</p>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '16px', fontFamily: 'Arial, sans-serif', boxSizing: 'border-box', resize: 'vertical' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ width: '100%', padding: '15px', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            <div style={{ backgroundColor: '#f5f5f5', padding: '25px', borderRadius: '8px', border: '2px solid #8B1A1A' }}>
              <h4 style={{ color: '#8B1A1A', fontSize: '22px', margin: '0 0 15px 0' }}>Areas of Practice</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd', fontSize: '16px' }}>Criminal Defense</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd', fontSize: '16px' }}>DWI/DUI Defense</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd', fontSize: '16px' }}>Violent Crimes</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #ddd', fontSize: '16px' }}>Vehicular Crimes</li>
                <li style={{ padding: '10px 0', fontSize: '16px' }}>Trial Litigation</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 20px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold' }}>The Bianchi Law Group</p>
          <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Phone: 862.225.1965</p>
          <p style={{ margin: '20px 0 0 0', fontSize: '14px', color: '#999' }}>© 2024 The Bianchi Law Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}