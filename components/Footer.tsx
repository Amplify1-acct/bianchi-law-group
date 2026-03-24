import Link from 'next/link'

const W = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', fontFamily: "'Nunito Sans', sans-serif" }} className="text-white">
      {/* CTA strip */}
      <div style={{ backgroundColor: '#a61c23' }} className="py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem,2.5vw,2rem)' }} className="font-bold mb-3">
            Charged With a Crime? Don't Wait — Contact Us Today.
          </h3>
          <p className="text-white/90 mb-6 text-sm">Our former prosecutors are ready to fight for you. Free consultations available 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:8622924442" className="btn-primary" style={{ backgroundColor: '#fff', color: '#a61c23 !important' }}>
              📞 862-292-4442
            </a>
            <Link href="/#contact" className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
              Free Case Evaluation
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={`${W}/footer-logo.png`} alt="The Bianchi Law Group" className="h-14 w-auto mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            The Bianchi Law Group, LLC — New Jersey's premier criminal defense firm. Former prosecutors. Proven results.
          </p>
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Main Office:</strong><br />
            8 Campus Dr Suite 105<br />
            Parsippany, NJ 07054
          </p>
        </div>

        <div>
          <h4 style={{ color: '#a61c23', fontFamily: "'Playfair Display',serif" }} className="font-bold text-lg mb-4">Practice Areas</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              ['Criminal Defense', '/criminal-defense'],
              ['DWI / DUI Defense', '/criminal-defense/dwi'],
              ['Drug Crimes', '/criminal-defense/drug-crimes'],
              ['Murder & Homicide', '/criminal-defense/murder'],
              ['Robbery', '/criminal-defense/robbery'],
              ['Domestic Violence', '/criminal-defense/domestic-violence'],
              ['Appeals', '/criminal-defense/appeals'],
              ['Municipal Court', '/municipal-court'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">› {label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#a61c23', fontFamily: "'Playfair Display',serif" }} className="font-bold text-lg mb-4">Our Attorneys</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              ['Robert A. Bianchi, Esq.', '/attorneys/robert-bianchi'],
              ['Christina Hall, Esq.', '/attorneys/christina-hall'],
              ['Christopher A. Eaton, Esq.', '/attorneys/christopher-eaton'],
              ['Danielle M. Esposito, Esq.', '/attorneys/danielle-esposito'],
              ['David J. Bruno, Esq.', '/attorneys/david-bruno'],
              ['Dennis Kessler, Esq.', '/attorneys/dennis-kessler'],
              ['Paul A. Di Lella, Esq.', '/attorneys/paul-di-lella'],
              ['Tricia H. Margolis, Esq.', '/attorneys/tricia-margolis'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">› {label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#a61c23', fontFamily: "'Playfair Display',serif" }} className="font-bold text-lg mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-gray-400">
            <p>
              <a href="tel:8622924442" className="text-white font-bold text-xl hover:text-red-400 transition-colors block">862-292-4442</a>
            </p>
            <p><a href="mailto:info@bianchilawgroup.com" className="hover:text-white transition-colors">info@bianchilawgroup.com</a></p>
            <p className="leading-relaxed">
              <strong className="text-white">Parsippany:</strong><br />
              8 Campus Dr Suite 105, NJ 07054
            </p>
            <p className="leading-relaxed">
              <strong className="text-white">Red Bank:</strong><br />
              125 Half Mile Rd #200, NJ 07701
            </p>
            <Link href="/blog" className="hover:text-white transition-colors block">› Blog</Link>
            <Link href="/media" className="hover:text-white transition-colors block">› Media</Link>
            <Link href="/careers" className="hover:text-white transition-colors block">› Careers</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-gray-500 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        <p>© {new Date().getFullYear()} The Bianchi Law Group, LLC. All rights reserved. | This website is for informational purposes only and does not constitute legal advice.</p>
      </div>
    </footer>
  )
}
