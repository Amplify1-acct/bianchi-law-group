'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  {
    label: 'About Us',
    children: [
      { label: 'Robert A. Bianchi, Esq.', href: '/robert-bianchi-esq' },
      { label: 'Christina Hall, Esq.', href: '/christina-hall-esq' },
      { label: 'Christopher A. Eaton, Esq.', href: '/christopher-eaton-esq' },
      { label: 'Danielle M. Esposito, Esq.', href: '/danielle-esposito-esq' },
      { label: 'David J. Bruno, Esq.', href: '/david-j-bruno-esq' },
      { label: 'Dennis Kessler, Esq.', href: '/dennis-kessler-esq' },
      { label: 'Paul A. Di Lella, Esq.', href: '/paul-a-di-lella-esq' },
      { label: 'Tricia H. Margolis, Esq.', href: '/tricia-h-margolis-esq' },
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
      { label: 'Assault & Aggravated Assault', href: '/criminal-defense/assault-and-aggravated-assault' },
      { label: 'Burglary', href: '/criminal-defense/burglary' },
      { label: 'Carjacking', href: '/criminal-defense/carjacking' },
      { label: 'Child Cruelty & Neglect', href: '/criminal-defense/child-cruelty-and-neglect' },
      { label: 'Criminal Mischief', href: '/criminal-defense/criminal-mischief' },
      { label: 'Death By Auto', href: '/criminal-defense/death-by-auto' },
      { label: 'Distribution of CDS', href: '/criminal-defense/distribution-of-cds' },
      { label: 'Endangering an Injured Victim', href: '/criminal-defense/endangering-an-injured-victim' },
      { label: 'Endangering Welfare of Children', href: '/criminal-defense/endangering-the-welfare-of-children' },
      { label: 'Harassment', href: '/criminal-defense/harassment' },
      { label: 'Kidnapping', href: '/criminal-defense/kidnapping' },
      { label: 'Manslaughter', href: '/criminal-defense/aggravated-manslaughter-and-manslaughter' },
      { label: 'Motor Vehicle Theft', href: '/criminal-defense/motor-vehicle-theft' },
      { label: 'Possession of CDS', href: '/criminal-defense/possession-of-cds' },
      { label: 'Possession With Intent to Distribute', href: '/criminal-defense/possession-with-the-intent-to-distribute-cds' },
      { label: 'Restraining Orders', href: '/criminal-defense/restraining-orders' },
      { label: 'Shoplifting', href: '/criminal-defense/shoplifting' },
      { label: 'Assault By Auto', href: '/criminal-defense/assault-by-auto' },
    ],
  },
  {
    label: 'Sex Crimes',
    href: '/sex-crimes-cases',
    children: [
      { label: 'Sexual Assault', href: '/sex-crimes-cases/sexual-assault' },
      { label: 'Lewdness', href: '/sex-crimes-cases/lewdness' },
      { label: "Megan's Law Registration", href: '/sex-crimes-cases/registration-of-sex-offenders-megans-law' },
      { label: 'Rape Shield Law', href: '/sex-crimes-cases/rape-shield-law' },
      { label: 'Sex Crime Definitions', href: '/sex-crimes-cases/sex-crimes-definitions' },
      { label: 'Monetary Penalties', href: '/sex-crimes-cases/monetary-penalties-for-sex-offenders-in-new-jersey' },
      { label: 'Observation & Disclosure', href: '/sex-crimes-cases/observation-of-sexual-contact-and-reproduction-or-disclosure-of-images-of-sexual-contact' },
    ],
  },
  {
    label: 'White Collar',
    href: '/white-collar-crimes',
    children: [
      { label: 'White Collar Crimes Overview', href: '/white-collar-crimes' },
      { label: 'Credit Card Fraud & Theft', href: '/white-collar-crimes/credit-card-fraud-and-theft' },
      { label: 'Forgery', href: '/white-collar-crimes/forgery' },
      { label: 'Criminal Investigations', href: '/criminal-and-white-collar-investigations' },
    ],
  },
  {
    label: 'More',
    children: [
      { label: 'Municipal Court', href: '/municipal-court' },
      { label: 'Bad Checks', href: '/municipal-court/bad-checks' },
      { label: 'Disorderly Conduct', href: '/municipal-court/disorderly-conduct' },
      { label: 'Leaving Scene of Accident', href: '/municipal-court/leaving-the-scene-of-an-accident' },
      { label: 'Resisting Arrest', href: '/municipal-court/resisting-arrest' },
      { label: '──────────', href: '#' },
      { label: 'Juvenile Crimes', href: '/juvenile-crimes' },
      { label: 'Personal Injury', href: '/personal-injury' },
      { label: 'Appeals', href: '/appeals' },
      { label: 'Crisis Management', href: '/crisis-management' },
      { label: '──────────', href: '#' },
      { label: 'Bergen County', href: '/bergen-county' },
      { label: 'Morris County', href: '/morris-county' },
      { label: 'Monmouth County', href: '/monmouth-county' },
      { label: 'Somerset County', href: '/somerset-county' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Legal Blog', href: '/blog' },
      { label: 'Inspirational Blog', href: '/inspirational-blog' },
      { label: 'Media', href: '/media' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Outreach Programs', href: '/outreach' },
    ],
  },
  { label: 'Contact', href: '/contact-us' },
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
            📞 (862) 292-4442
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ backgroundColor: '#272727' }} className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <img
              src="https://bianchilawgroup.com/wp-content/uploads/2025/06/Logo-1-1-580x61.png"
              alt="The Bianchi Law Group"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
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
                    className="text-white hover:text-red-400 px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && <span className="text-xs opacity-70">▾</span>}
                  </Link>
                ) : (
                  <button className="text-white hover:text-red-400 px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors flex items-center gap-1">
                    {item.label}
                    {item.children && <span className="text-xs opacity-70">▾</span>}
                  </button>
                )}

                {item.children && open === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border-t-2 border-red-700 z-50 rounded-b max-h-[80vh] overflow-y-auto">
                    {item.children.map((child) =>
                      child.label.startsWith('──') ? (
                        <div key={child.label} className="border-t border-gray-200 my-1" />
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 border-b border-gray-100 font-medium transition-colors"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            <a href="tel:8622924442" className="ml-3 btn-primary text-xs whitespace-nowrap">
              Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ backgroundColor: '#1a1a1a' }} className="lg:hidden max-h-screen overflow-y-auto">
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
                      className="text-white px-2 text-lg"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {mobileExpanded === item.label ? '▴' : '▾'}
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div style={{ backgroundColor: '#111' }}>
                    {item.children.map((child) =>
                      child.label.startsWith('──') ? (
                        <div key={child.label} className="border-t border-white/10 my-1" />
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-8 py-2.5 text-gray-300 text-sm hover:text-white border-b border-white/5"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <a href="tel:8622924442" className="btn-primary block text-center">
                Call: (862) 292-4442
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
