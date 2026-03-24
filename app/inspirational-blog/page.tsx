import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inspirational Blog - The Bianchi Law Group',
  description: 'Inspirational thoughts and reflections from Robert Bianchi and the team at The Bianchi Law Group on life, law, and personal growth.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Inspirational Blog" breadcrumb="Inspirational Blog" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Beyond the courtroom, the team at The Bianchi Law Group shares reflections on life, resilience, gratitude, and personal growth. These posts reflect our commitment to treating every client as a whole person — not just a legal matter.
            </p>
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Visit <a href="https://bianchilawgroup.com/inspirational-blog/" className="text-red-700 underline" target="_blank" rel="noopener noreferrer">bianchilawgroup.com</a> to read the full inspirational blog archive.</p>
            </div>
          </div>
          <div className="lg:col-span-1"><ContactSidebar /></div>
        </div>
      </div>
    </>
  )
}
