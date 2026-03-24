import PageHero from '@/components/PageHero'

const W = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'

export const metadata = {
  title: 'Media',
  description: 'The Bianchi Law Group attorneys are regularly featured on major TV, radio, and print media.',
}

export default function MediaPage() {
  return (
    <main>
      <PageHero
        title="Media"
        subtitle="The Bianchi Law Group attorneys are regularly featured on major TV and Radio Networks and in various Newspapers"
      />
      <section style={{ backgroundColor: '#F0F5FA' }} className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <p style={{ color: '#a61c23', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em', marginBottom: 20, textAlign: 'center' }}>
              As Seen and Heard On
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['image-8','image-9','image-10','image-11','image-12'].map(img => (
                <img key={img} src={`${W}/${img}.png`} alt="Media outlet" className="h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', marginBottom: 12 }}>TV Appearances</h3>
            <div style={{ width: 40, height: 2, background: '#a61c23', marginBottom: 16 }} />
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#555', lineHeight: 1.8, fontSize: '15px' }}>
              Bob Bianchi and David Bruno are regular legal analysts on CNN, Fox News, HLN, and other major networks, providing expert commentary on high-profile criminal cases nationwide.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', marginBottom: 12 }}>Radio and Podcast</h3>
            <div style={{ width: 40, height: 2, background: '#a61c23', marginBottom: 16 }} />
            <ul style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#555', lineHeight: 1.9, fontSize: '15px', paddingLeft: '1.5rem', listStyle: 'disc' }}>
              <li>Bob Bianchi on NJ 101.5 discussing pandemic liability</li>
              <li>Howard Stern 101 Sirius XM appearance</li>
              <li>WCTC Radio law talk discussions</li>
              <li>Off-duty NJ police officer shooting analysis</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: '#272727', marginBottom: 12 }}>Publications</h3>
            <div style={{ width: 40, height: 2, background: '#a61c23', marginBottom: 16 }} />
            <ul style={{ fontFamily: "'Nunito Sans',sans-serif", color: '#555', lineHeight: 1.9, fontSize: '15px', paddingLeft: '1.5rem', listStyle: 'disc' }}>
              <li>Chauvin Trial cause-of-death analysis</li>
              <li>Wall hazing saga legal commentary</li>
              <li>Carteret toddler pit bull case legal issues</li>
              <li>Welcome of Christopher Eaton, former Bergen County Prosecutor</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
