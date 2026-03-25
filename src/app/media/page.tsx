import Link from 'next/link';

export default function MediaPage() {
  const mediaItems = [
    {
      id: 1,
      title: "💥How to Build \"Relationship Grit\": Kathryn Gordon Joins Nothing But The Truth",
      description: "Get ready to be inspired! 🎙️ Join us this Saturday morning at 9:30 AM as we chat with the amazing Kathryn Gordon co-author of \"Relationship Grit.\" Learn about her incredible journey and how she found positivity in the face of adversity. Tune in to WMTR or catch it live on our social!",
      fullDescription: "📘 Kathryn's journey is one of true resilience, marked by struggles that have led to becoming one of the most positive and influential voices on relationships and positivity. Alongside her husband Jon Gordon, she has crafted a narrative that speaks to the power of perseverance and love. 🌟 This morning, we delve into Kathryn's remarkable story, uncovering the lessons and experiences that shaped her into the empowering figure she is today. It's an episode filled with heartfelt advice, practical wisdom, and inspiring tales of triumph over adversity. 🙌 We are incredibly grateful for the chance to bring these transformative stories to our community. Every interview, every conversation is an opportunity to learn and grow together. Kathryn's insights are particularly poignant, offering guidance and inspiration to anyone navigating life's complexities. 📣 Don't miss this! Tune in for an uplifting and enlightening conversation that's sure to start your weekend on a high note. Share this with friends and family – everyone can benefit from the wealth of knowledge and positivity Kathryn brings to the table with your Host Bob Bianchi and David Bruno.",
      category: "Podcast",
      tags: ["#KathrynGordon", "#RelationshipGrit", "#BianchiLawGroup", "#Empowerment", "#Resilience", "#LifeLessons", "#PositiveVibes"]
    },
    {
      id: 2,
      title: "Good Enough Isn't Good Enough: From Couch to COO with Kara James, MS, LPC",
      description: "Meet Kara James, MS, LPC, a Licensed Professional Counselor who cracked the code on scaling clinical excellence. Starting with 15 years on the front lines of mental health—from juvenile justice to in-home family therapy—Kara realized her clinical passion had an unexpected twin: the business of wellness.",
      fullDescription: "In this episode, Bob and Dave talk with Kara—now the Chief Operating Officer of Wellness Counseling, overseeing three thriving locations and 29 professionals. Discover how she transformed her clinical expertise into operational excellence and learn the lessons that can help you scale your own practice or business.",
      category: "Podcast",
      tags: ["#BusinessGrowth", "#MentalHealth", "#Leadership", "#BianchiLawGroup"]
    }
  ];

  const categories = [
    { name: "Podcast", icon: "🎙️" },
    { name: "BLG Law Talk", icon: "⚖️" },
    { name: "TV Appearances", icon: "📺" },
    { name: "Publications", icon: "📰" },
    { name: "Photo Gallery", icon: "📸" },
    { name: "Radio", icon: "📻" },
    { name: "Webinars", icon: "💻" }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ backgroundColor: '#8B1A1A', color: '#fff', padding: '80px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0', fontFamily: 'Georgia, serif' }}>Media</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Stay connected with The Bianchi Law Group through our podcasts, TV appearances, publications, and more
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '30px', borderBottom: '3px solid #8B1A1A', paddingBottom: '10px' }}>
                Featured Media
              </h2>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}>
              {categories.map((cat, index) => (
                <button
                  key={index}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#fff',
                    border: '2px solid #8B1A1A',
                    borderRadius: '25px',
                    color: '#8B1A1A',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#8B1A1A';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = '#8B1A1A';
                  }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {mediaItems.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '30px', marginBottom: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#8B1A1A', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '600', marginBottom: '15px' }}>
                  {item.category}
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '15px', lineHeight: '1.4' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.8', marginBottom: '15px' }}>
                  {item.description}
                </p>
                <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                  {item.fullDescription}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {item.tags.map((tag, idx) => (
                    <span key={idx} style={{ backgroundColor: '#fff', color: '#8B1A1A', padding: '5px 12px', borderRadius: '15px', fontSize: '13px', border: '1px solid #8B1A1A' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button style={{
                    padding: '12px 30px',
                    backgroundColor: '#8B1A1A',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1414'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}>
                    ▶️ Now Playing
                  </button>
                  <button style={{
                    padding: '12px 30px',
                    backgroundColor: '#fff',
                    color: '#8B1A1A',
                    border: '2px solid #8B1A1A',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#8B1A1A';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = '#8B1A1A';
                  }}>
                    Show More
                  </button>
                </div>
                <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff5f5', borderLeft: '4px solid #8B1A1A', borderRadius: '4px' }}>
                  <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', margin: 0 }}>
                    - this episode is a 'live' prerecorded and already broadcasted program -
                  </p>
                </div>
              </div>
            ))}

            <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px', borderRadius: '12px', marginTop: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px' }}>
                Subscribe to Our Content
              </h3>
              <p style={{ fontSize: '16px', marginBottom: '25px', color: '#ddd' }}>
                Never miss an episode of BLG Law Talk, Nothing But The Truth, and exclusive legal insights
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button style={{ padding: '14px 35px', backgroundColor: '#8B1A1A', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
                  📧 Email Updates
                </button>
                <button style={{ padding: '14px 35px', backgroundColor: '#fff', color: '#1a1a1a', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
                  🔔 RSS Feed
                </button>
              </div>
            </div>
          </div>

          <div>
            <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px', borderRadius: '12px', position: 'sticky', top: '20px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
                Contact Us
              </h3>
              <p style={{ fontSize: '16px', marginBottom: '30px', textAlign: 'center', color: '#ddd' }}>
                Get in touch with The Bianchi Law Group for legal assistance or media inquiries
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #444',
                      borderRadius: '6px',
                      fontSize: '16px',
                      backgroundColor: '#2a2a2a',
                      color: '#fff',
                      boxSizing: 'border-box'
                    }}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #444',
                      borderRadius: '6px',
                      fontSize: '16px',
                      backgroundColor: '#2a2a2a',
                      color: '#fff',
                      boxSizing: 'border-box'
                    }}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #444',
                      borderRadius: '6px',
                      fontSize: '16px',
                      backgroundColor: '#2a2a2a',
                      color: '#fff',
                      boxSizing: 'border-box'
                    }}
                    placeholder="862.225.1965"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Subject *
                  </label>
                  <select
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #444',
                      borderRadius: '6px',
                      fontSize: '16px',
                      backgroundColor: '#2a2a2a',
                      color: '#fff',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="media">Media Inquiry</option>
                    <option value="legal">Legal Consultation</option>
                    <option value="podcast">Podcast Guest</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #444',
                      borderRadius: '6px',
                      fontSize: '16px',
                      backgroundColor: '#2a2a2a',
                      color: '#fff',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '16px',
                    backgroundColor: '#8B1A1A',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '10px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d1414'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B1A1A'}
                >
                  Send Message
                </button>
              </form>
              <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#8B1A1A', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                  📞 Call Us Directly
                </p>
                <a href="tel:8622251965" style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', textDecoration: 'none', display: 'block' }}>
                  862.225.1965
                </a>
              </div>
              <div style={{ marginTop: '25px', textAlign: 'center' }}>
                <p style={{ fontSize: '14px', color: '#999', marginBottom: '15px' }}>
                  Follow our media channels
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '24px' }}>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>📘</a>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>📸</a>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>🐦</a>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>▶️</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '60px 20px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
            The Bianchi Law Group Media Hub
          </h2>
          <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px', color: '#ddd', lineHeight: '1.8' }}>
            From award-winning podcasts to TV appearances and publications, we're committed to educating and empowering our community through various media platforms. Join us on our journey to make legal knowledge accessible to everyone.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {categories.map((cat, index) => (
              <div key={index} style={{ padding: '30px', backgroundColor: '#2a2a2a', borderRadius: '12px', transition: 'transform 0.3s ease' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>{cat.icon}</div>
                <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>{cat.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}