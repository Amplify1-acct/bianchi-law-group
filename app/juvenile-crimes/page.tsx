import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'New Jersey Juvenile Crime Lawyers - The Bianchi Law Group',
  description: 'If your child has been accused of a crime in New Jersey, contact The Bianchi Law Group today. Our former prosecutors protect your child\'s future. Free consultation.',
}

export default function Page() {
  return (
    <>
      <PageHero title="New Jersey Juvenile Crime Defense" breadcrumb="Juvenile Crimes" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If your child has been accused of a crime, no matter how minor or severe, contact The Bianchi Law Group, LLC right away. Our New Jersey juvenile crime attorneys will stop at nothing to ensure your child receives the highest standard of legal care possible. With the right attorney, you may be able to greatly reduce charges or even have them dropped entirely.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">New Jersey Juvenile Justice System</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">The &ldquo;Code of Juvenile Justice,&rdquo; N.J.S.A. 2A:4A-20, governs juvenile crimes in New Jersey. If your child has been accused of committing a crime and they are under the age of eighteen, this is considered a juvenile crime, and your child will be tried as a minor. Juveniles are held to a different standard and are often treated with more leniency than those tried for similar crimes as adults.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">When Can a Juvenile Be Tried as an Adult?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">If the juvenile charged with a crime is a repeat offender, executed the crime with extreme depravity or a lethal weapon, or previously attempted rehabilitation which did not work, they may be treated as an adult in court. Some older juveniles may be tried as adults before a judge, which will likely lead to more severe penalties.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Juvenile Diversion Programs</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">For minor offenses, juvenile offenders may be offered diversion programs including:</p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-gray-700">
                {[
                  'Juvenile Conference Committees (community member mediation)',
                  'Intake Services Conferences (meetings with probation officers)',
                  'Community service and counseling',
                  'Conditional dismissal programs'
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Defend Juvenile Cases</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <ul className="space-y-2 text-gray-700">
                {[
                  'Fighting to keep cases in juvenile court and out of adult court',
                  'Pursuing diversion and rehabilitation programs',
                  'Challenging evidence and witness testimony',
                  'Protecting your child\'s record from permanent damage',
                  'Expungement of juvenile records when eligible'
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Protect Your Child&apos;s Future</h3>
              <p className="mb-4">Contact our juvenile defense attorneys today for a free consultation.</p>
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
