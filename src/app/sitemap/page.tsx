import React from 'react';

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Practice Areas', href: '/practice-areas' },
        { name: 'Resources', href: '/resources' },
        { name: 'Contact Us', href: '/contact' },
      ]
    },
    {
      title: 'Our Team',
      links: [
        { name: 'Robert A. Bianchi, Esq', href: '/team/robert-bianchi' },
        { name: 'Christina Hall, Esq.', href: '/team/christina-hall' },
        { name: 'Christopher A. Eaton, Esq.', href: '/team/christopher-eaton' },
        { name: 'Danielle M. Esposito, Esq.', href: '/team/danielle-esposito' },
        { name: 'David J. Bruno, Esq.', href: '/team/david-bruno' },
        { name: 'Dennis Kessler, Esq.', href: '/team/dennis-kessler' },
        { name: 'Paul A. Di Lella, Esq.', href: '/team/paul-dilella' },
        { name: 'Tricia H. Margolis, Esq.', href: '/team/tricia-margolis' },
        { name: 'Careers', href: '/careers' },
        { name: "Prosecutor's Perspective", href: '/prosecutors-perspective' },
      ]
    },
    {
      title: 'Criminal Defense',
      links: [
        { name: 'Criminal Defense Overview', href: '/practice-areas/criminal-defense' },
        { name: 'Appeals', href: '/practice-areas/appeals' },
        { name: 'Criminal Investigations', href: '/practice-areas/criminal-investigations' },
        { name: 'Crisis Management', href: '/practice-areas/crisis-management' },
        { name: 'Municipal Court', href: '/practice-areas/municipal-court' },
        { name: 'Juvenile Crimes', href: '/practice-areas/juvenile-crimes' },
      ]
    },
    {
      title: 'Municipal Court',
      links: [
        { name: 'Bad Checks', href: '/practice-areas/bad-checks' },
        { name: 'Disorderly Conduct', href: '/practice-areas/disorderly-conduct' },
        { name: 'Leaving the Scene of an Accident', href: '/practice-areas/leaving-scene-accident' },
        { name: 'Resisting Arrest', href: '/practice-areas/resisting-arrest' },
      ]
    },
    {
      title: 'Sex Crimes',
      links: [
        { name: 'Sex Crimes Overview', href: '/practice-areas/sex-crimes' },
        { name: 'Lewdness', href: '/practice-areas/lewdness' },
        { name: 'Monetary Penalties for Sex Offenders', href: '/practice-areas/monetary-penalties-sex-offenders' },
        { name: 'Observation & Disclosure of Sexual Contact', href: '/practice-areas/observation-disclosure-sexual-contact' },
        { name: 'Rape Shield Law', href: '/practice-areas/rape-shield-law' },
        { name: 'Registration of Sex Offenders', href: '/practice-areas/sex-offender-registration' },
        { name: 'Sex Crime Definitions', href: '/practice-areas/sex-crime-definitions' },
        { name: 'Sexual Assault', href: '/practice-areas/sexual-assault' },
      ]
    },
    {
      title: 'White Collar Crimes',
      links: [
        { name: 'White Collar Crimes Overview', href: '/practice-areas/white-collar-crimes' },
        { name: 'Credit Card Fraud & Theft', href: '/practice-areas/credit-card-fraud' },
        { name: 'Forgery', href: '/practice-areas/forgery' },
      ]
    },
    {
      title: 'DWI & Drug Crimes',
      links: [
        { name: 'DWI', href: '/practice-areas/dwi' },
        { name: 'Drug Crimes', href: '/practice-areas/drug-crimes' },
        { name: 'Distribution of Controlled Dangerous Substances', href: '/practice-areas/distribution-cds' },
        { name: 'Possession of Controlled Dangerous Substances', href: '/practice-areas/possession-cds' },
        { name: 'Possession With the Intent to Distribute', href: '/practice-areas/possession-intent-distribute' },
      ]
    },
    {
      title: 'Violent Crimes',
      links: [
        { name: 'Violent Crimes Overview', href: '/practice-areas/violent-crimes' },
        { name: 'Assault By Auto', href: '/practice-areas/assault-by-auto' },
        { name: 'Carjacking', href: '/practice-areas/carjacking' },
        { name: 'Child Cruelty & Neglect', href: '/practice-areas/child-cruelty-neglect' },
        { name: 'Death By Auto or Vehicular Homicide', href: '/practice-areas/death-by-auto' },
        { name: 'Domestic Violence', href: '/practice-areas/domestic-violence' },
        { name: 'Endangering An Injured Victim', href: '/practice-areas/endangering-injured-victim' },
        { name: 'Endangering The Welfare of Children', href: '/practice-areas/endangering-welfare-children' },
        { name: 'Harassment', href: '/practice-areas/harassment' },
        { name: 'Kidnapping', href: '/practice-areas/kidnapping' },
        { name: 'Manslaughter & Aggravated Manslaughter', href: '/practice-areas/manslaughter' },
        { name: 'Murder', href: '/practice-areas/murder' },
        { name: 'Restraining Orders', href: '/practice-areas/restraining-orders' },
        { name: 'Simple & Aggravated Assault', href: '/practice-areas/assault' },
      ]
    },
    {
      title: 'Property Crimes',
      links: [
        { name: 'Property Crimes Overview', href: '/practice-areas/property-crimes' },
        { name: 'Criminal Mischief', href: '/practice-areas/criminal-mischief' },
        { name: 'Burglary', href: '/practice-areas/burglary' },
        { name: 'Motor Vehicle Theft', href: '/practice-areas/motor-vehicle-theft' },
        { name: 'Robbery', href: '/practice-areas/robbery' },
        { name: 'Shoplifting', href: '/practice-areas/shoplifting' },
      ]
    },
    {
      title: 'Resources & Media',
      links: [
        { name: 'Legal Blog', href: '/blog' },
        { name: 'Inspirational Blog', href: '/inspirational-blog' },
        { name: 'Media', href: '/media' },
        { name: 'Podcast - BLG Law Talk', href: '/podcast' },
        { name: 'TV Appearances', href: '/tv-appearances' },
        { name: 'Publications', href: '/publications' },
        { name: 'Photo Gallery', href: '/gallery' },
        { name: 'Radio Appearances', href: '/radio' },
        { name: 'Webinars', href: '/webinars' },
      ]
    },
    {
      title: 'Outreach Programs',
      links: [
        { name: 'Outreach Overview', href: '/outreach' },
        { name: 'Addiction Program', href: '/outreach/addiction' },
        { name: 'Career Development', href: '/outreach/career-development' },
        { name: 'Criminal Justice Program', href: '/outreach/criminal-justice' },
        { name: 'Domestic Violence Outreach Program', href: '/outreach/domestic-violence' },
        { name: 'Events', href: '/outreach/events' },
        { name: 'Mental Health Program', href: '/outreach/mental-health' },
        { name: 'Police Practices Program', href: '/outreach/police-practices' },
        { name: 'The Joyful Journey Program', href: '/outreach/joyful-journey' },
      ]
    },
    {
      title: 'Service Areas',
      links: [
        { name: 'Bergen County', href: '/service-areas/bergen-county' },
        { name: 'Monmouth County', href: '/service-areas/monmouth-county' },
        { name: 'Morris County', href: '/service-areas/morris-county' },
        { name: 'Somerset County', href: '/service-areas/somerset-county' },
      ]
    },
  ];

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
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', lineHeight: '1.6' }}>
      <div style={{ 
        background: 'linear-gradient(135deg, #8B1A1A 0%, #1a1a1a 100%)', 
        color: '#fff', 
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            margin: '0 0 20px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Sitemap
          </h1>
          <p style={{ fontSize: '1.3rem', margin: '0', opacity: '0.95' }}>
            Complete Directory of Our Legal Services and Resources
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                color: '#8B1A1A', 
                marginBottom: '20px',
                borderBottom: '3px solid #8B1A1A',
                paddingBottom: '10px'
              }}>
                Site Navigation
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.8' }}>
                The Bianchi Law Group provides comprehensive legal representation across New Jersey. 
                Our experienced attorneys specialize in criminal defense, personal injury, and various 
                practice areas. Use this sitemap to navigate our website and learn more about our services.
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '30px',
              marginBottom: '40px'
            }}>
              {sitemapSections.map((section, index) => (
                <div 
                  key={index} 
                  style={{ 
                    background: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '25px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    color: '#8B1A1A', 
                    marginBottom: '15px',
                    fontWeight: 'bold',
                    borderLeft: '4px solid #8B1A1A',
                    paddingLeft: '12px'
                  }}>
                    {section.title}
                  </h3>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: '0', 
                    margin: '0' 
                  }}>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} style={{ marginBottom: '10px' }}>
                        <a 
                          href={link.href} 
                          style={{ 
                            color: '#1a1a1a', 
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.color = '#8B1A1A';
                            e.currentTarget.style.paddingLeft = '8px';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.color = '#1a1a1a';
                            e.currentTarget.style.paddingLeft = '0';
                          }}
                        >
                          <span style={{ marginRight: '8px' }}>→</span>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ 
              background: '#f9f9f9', 
              padding: '40px', 
              borderRadius: '8px',
              marginTop: '40px',
              borderLeft: '5px solid #8B1A1A'
            }}>
              <h2 style={{ 
                fontSize: '1.8rem', 
                color: '#8B1A1A', 
                marginBottom: '20px' 
              }}>
                Recent Blog Posts
              </h2>
              
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  color: '#1a1a1a', 
                  marginBottom: '10px' 
                }}>
                  New Jersey Survivors Justice Act L. 2025, c. 328
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#666', 
                  marginBottom: '10px' 
                }}>
                  March 17, 2026
                </p>
                <p style={{ marginBottom: '15px' }}>
                  New Jersey Legislature enacts new sentencing law for victims of domestic violence 
                  On January 20...
                </p>
                <a 
                  href="/blog/survivors-justice-act" 
                  style={{ 
                    color: '#8B1A1A', 
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '0.95rem'
                  }}
                >
                  Read More →
                </a>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  color: '#1a1a1a', 
                  marginBottom: '10px' 
                }}>
                  Shaken Baby Syndrome: New Jersey Supreme Court State v Nieves
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#666', 
                  marginBottom: '10px' 
                }}>
                  December 16, 2025
                </p>
                <p style={{ marginBottom: '15px' }}>
                  New Jersey Supreme Court Decision – Shaken Baby Syndrome/Abusive Head Trauma 
                  On November 20, 2025...
                </p>
                <a 
                  href="/blog/shaken-baby-syndrome" 
                  style={{ 
                    color: '#8B1A1A', 
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '0.95rem'
                  }}
                >
                  Read More →
                </a>
              </div>

              <a 
                href="/blog" 
                style={{ 
                  display: 'inline-block',
                  background: '#8B1A1A',
                  color: '#fff',
                  padding: '12px 30px',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  marginTop: '10px'
                }}
              >
                View All Blog Posts
              </a>
            </div>

            <div style={{ 
              background: '#1a1a1a', 
              color: '#fff',
              padding: '40px', 
              borderRadius: '8px',
              marginTop: '40px'
            }}>
              <h2 style={{ 
                fontSize: '1.8rem', 
                color: '#fff', 
                marginBottom: '20px' 
              }}>
                Why Choose The Bianchi Law Group?
              </h2>
              <ul style={{ 
                listStyle: 'none', 
                padding: '0',
                fontSize: '1.05rem',
                lineHeight: '2'
              }}>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    color: '#8B1A1A',
                    fontSize: '1.3rem'
                  }}>✓</span>
                  Former prosecutors with insider knowledge
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    color: '#8B1A1A',
                    fontSize: '1.3rem'
                  }}>✓</span>
                  Comprehensive criminal defense representation
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    color: '#8B1A1A',
                    fontSize: '1.3rem'
                  }}>✓</span>
                  Aggressive advocacy for our clients
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    color: '#8B1A1A',
                    fontSize: '1.3rem'
                  }}>✓</span>
                  Serving Bergen, Monmouth, Morris, and Somerset Counties
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    color: '#8B1A1A',
                    fontSize: '1.3rem'
                  }}>✓</span>
                  Free initial consultations available
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    color: '#8B1A1A',
                    fontSize: '1.3rem'
                  }}>✓</span>
                  Community outreach and education programs
                </li>
              </ul>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '300px' }}>
            <div style={{ 
              position: 'sticky', 
              top: '20px',
              background: '#fff',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '2px solid #8B1A1A'
            }}>
              <h2 style={{ 
                fontSize: '1.8rem', 
                color: '#8B1A1A', 
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                Schedule Your Free Consultation
              </h2>
              <p style={{ 
                textAlign: 'center', 
                marginBottom: '25px',
                fontSize: '1rem',
                color: '#666'
              }}>
                Contact us today to discuss your case
              </p>

              <div style={{ 
                background: '#8B1A1A', 
                color: '#fff', 
                padding: '20px', 
                borderRadius: '6px',
                textAlign: 'center',
                marginBottom: '25px'
              }}>
                <div style={{ fontSize: '0.9rem', marginBottom: '8px', opacity: '0.9' }}>
                  Call Us Now
                </div>
                <a 
                  href="tel:862-225-1965" 
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  862.225.1965
                </a>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    fontSize: '0.95rem'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '2px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{