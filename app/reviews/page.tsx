import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Client Reviews - The Bianchi Law Group',
  description: 'Read real client reviews about The Bianchi Law Group. Our former prosecutors have earned countless 5-star reviews for criminal defense across New Jersey.',
}

const reviews = [
  {
    text: "My experience with Bianchi Law Group is that they give 100% of their resources toward your case. The attorney assigned to my complaint, Tricia Margolis was compassionate, professional and called on the expertise of the other partners at Bianchi as needed. I felt as if I not only had Ms. Margolis defending me, but the whole Bianchi team. I could reach my counsel at all hours, 7 days a week. I am extremely happy with the outcome of my case.",
    author: "Verified Client",
    attorney: "Tricia H. Margolis, Esq."
  },
  {
    text: "My case was handled with extreme consideration and care. I am beyond satisfied and grateful that The Bianchi Law Group represented me. Christopher Eaton was my attorney. Chris reassured me that he would do his best for me. He took the time to answer every question that I had, helped me through my fearful times, and tried to navigate every possible way to fight for me. He didn't settle on anything — he was willing to fight all the way through for me to get the best possible outcome.",
    author: "Verified Client",
    attorney: "Christopher A. Eaton, Esq."
  },
  {
    text: "As in-house counsel for a national company, I can say that the Bianchi Law Group's attorneys have the expertise and skillset of an international Fortune 500 law firm, along with the practical knowledge to give us the right counsel at the right time. I strongly recommend this firm.",
    author: "In-House Counsel, National Company",
    attorney: "The Bianchi Law Group Team"
  },
  {
    text: "Chris was amazing! He gave us the absolute best possible outcome, and we couldn't be more relieved and grateful. They go above and beyond in every way. Every member of the firm, from the head partners to support staff, care deeply about their clients, and it shows. We felt supported and protected during the entire process.",
    author: "Verified Client",
    attorney: "Christopher A. Eaton, Esq."
  },
  {
    text: "I've worked with the Bianchi Law Group for 2 legal issues now — specifically Tricia. I'm always blown away by the outcome of the case. I couldn't recommend them enough. Don't waste time with other law groups, save time and call Bianchi first!",
    author: "Repeat Client",
    attorney: "Tricia H. Margolis, Esq."
  },
]

export default function Page() {
  return (
    <>
      <PageHero title="Client Reviews" breadcrumb="Reviews" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our clients across New Jersey have trusted The Bianchi Law Group, LLC with their most important legal matters. Here is what they have to say about working with our team of former prosecutors.
            </p>
            <div className="space-y-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                    <p className="text-red-700 text-sm">{review.attorney}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-red-700 text-white rounded-lg p-6 text-center mt-8">
              <h3 className="text-xl font-bold mb-2">Get the Same Results</h3>
              <p className="mb-4">Call today for a free consultation with a former prosecutor.</p>
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
