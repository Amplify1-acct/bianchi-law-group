'use client'
import { useState } from 'react'
import Link from 'next/link'

const W = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'

const NAV = [
  {
    label: 'About Us',
    children: [
      { label: 'Robert A. Bianchi, Esq.', href: '/attorneys/robert-bianchi' },
      { label: 'Christina Hall, Esq.', href: '/attorneys/christina-hall' },
      { label: 'Christopher A. Eaton, Esq.', href: '/attorneys/christopher-eaton' },
      { label: 'Danielle M. Esposito, Esq.', href: '/attorneys/danielle-esposito' },
      { label: 'David J. Bruno, Esq.', href: '/attorneys/david-bruno' },
      { label: 'Dennis Kessler, Esq.', href: '/attorneys/dennis-kessler' },
      { label: 'Paul A. Di Lella, Esq.', href: '/attorneys/paul-di-lella' },
      { label: 'Tricia H. Margolis, Esq.', href: '/attorneys/tricia-margolis' },
      { label: "Prosecutor's Perspective", href: '/prosecutors-perspective' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'Criminal Defense',
    href: '/criminal-defense',
    children: [
      { label: 'DWI / DUI Defense', href: '/criminal-defense/dwi' },
      { label: 'Drug Crimes', href: '/criminal-defense/drug-crimes' },
      { label: 'Murder & Homicide', href: '/criminal-defense/murder' },
      { label: 'Robbery', href: '/criminal-defense/robbery' },
      { label: 'Domestic Violence', href: '/criminal-defense/domestic-violence' },
      { label: 'Appeals', href: '/criminal-defense/appeals' },
      { label: 'Criminal Investigations', href: '/criminal-defense/criminal-investigations' },
      { label: 'Crisis Management', href: '/criminal-defense/crisis-management' },
    ],
  },
  {
    label: 'Municipal Court',
    href: '/municipal-court',
    children: [
      { label: 'Bad Checks', href: '/municipal-court/bad-checks' },
      { label: 'Disorderly Conduct', href: '/municipal-court/disorderly-conduct' },
      { label: 'Leaving Scene of Accident', href: '/municipal-court/leaving-the-scene-of-an-accident' },
      { label: 'Resisting Arrest', href: '/municipal-court/resisting-arrest' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Media', href: '/media' },
]

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Top bar */}
      <div style={{ backgroundColor: '#a61c23' }} className="py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-white text-sm font-semibold hidden md:block">
            Former Prosecutors Now Fighting For You — Free Consultations Available
          </p>
          <a href="tel:8622924442" className="text-white font-bold text-sm hover:text-yellow-200 transition-colors">
            📞 862-292-4442
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ backgroundColor: '#272727' }} className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <img
              src={`${W}/Logo-1-1-580x61.png`}
              alt="The Bianchi Law Group"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white hover:text-red-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && <span className="text-xs">▾</span>}
                  </Link>
                ) : (
                  <button className="text-white hover:text-red-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors flex items-center gap-1">
                    {item.label}
                    {item.children && <span className="text-xs">▾</span>}
                  </button>
                )}

                {item.children && open === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border-t-2 border-red-700 z-50 rounded-b">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 border-b border-gray-100 font-medium transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="tel:8622924442"
              className="ml-4 btn-primary text-sm"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ backgroundColor: '#1a1a1a' }} className="lg:hidden">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <div className="flex items-center justify-between px-4 py-3">
                  {item.href ? (
                    <Link href={item.href} className="text-white font-semibold text-sm uppercase tracking-wide flex-1" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold text-sm uppercase tracking-wide flex-1">{item.label}</span>
                  )}
                  {item.children && (
                    <button
                      className="text-white px-2"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {mobileExpanded === item.label ? '▴' : '▾'}
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div style={{ backgroundColor: '#111' }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-8 py-2.5 text-gray-300 text-sm hover:text-white border-b border-white/5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <a href="tel:8622924442" className="btn-primary block text-center">
                Call: 862-292-4442
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
