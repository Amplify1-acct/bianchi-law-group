interface PageHeroProps {
  title: string
  subtitle?: string
  bgImage?: string
}

const W = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'

export default function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative text-white py-16 md:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(38,0,2,0.85), rgba(38,0,2,0.85)), url('${bgImage || `${W}/bg.png`}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #a61c23, #d4404a, #a61c23)' }} />
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }} className="font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '17px', maxWidth: 600, margin: '0 auto' }}>
            {subtitle}
          </p>
        )}
        <div style={{ width: 56, height: 3, background: '#a61c23', margin: '16px auto 0' }} />
      </div>
    </section>
  )
}
