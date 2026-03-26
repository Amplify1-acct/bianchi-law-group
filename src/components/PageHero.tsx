const IMG = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <div style={{
      background: 'linear-gradient(to right, #1a1a1a, #2d0a0a)',
      color: '#fff',
      padding: '50px 20px',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '4px solid #8B1A1A'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${IMG}/blog-post.png)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.15
      }} />
      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {breadcrumb && (
          <div style={{ fontSize: 12, color: '#aaa', marginBottom: 10, letterSpacing: '0.05em' }}>
            <a href="/" style={{ color: '#aaa' }}>Home</a> › {breadcrumb}
          </div>
        )}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 40, fontWeight: 700, margin: '0 0 12px', lineHeight: 1.2
        }}>{title}</h1>
        {subtitle && (
          <p style={{ fontSize: 16, color: '#ddd', margin: 0 }}>{subtitle}</p>
        )}
      </div>
    </div>
  )
}
