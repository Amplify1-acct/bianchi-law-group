import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Joyful Journey Program - Bianchi Law Group Outreach',
  description: 'The Bianchi Law Group community outreach program: Joyful Journey Program. Giving back to New Jersey communities.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Joyful Journey Program" breadcrumb="Joyful Journey Program" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Bianchi Law Group is proud to offer the Joyful Journey Program program as part of our commitment to serving New Jersey communities beyond the courtroom. Learn more about how we can help.
            </p>
            <div className="bg-red-700 text-white rounded-lg p-6 text-center mt-6">
              <h3 className="text-xl font-bold mb-2">Contact Us to Learn More</h3>
              <a href="tel:8622924442" className="inline-block bg-white text-red-700 font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
                Call (862) 292-4442
              </a>
            </div>
          </div>
          <div className="lg:col-span-1"><ContactSidebar /></div>
        </div>
      </div>
    </>
  )
}
