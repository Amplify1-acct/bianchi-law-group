import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'New Jersey Criminal Defense Lawyers - The Bianchi Law Group',
    template: '%s - The Bianchi Law Group',
  },
  description: 'The Bianchi Law Group LLC are experienced New Jersey criminal defense lawyers. Former prosecutors fighting for your rights. Free consultation: 862-292-4442.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
