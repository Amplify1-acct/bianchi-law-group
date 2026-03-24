import Link from 'next/link'
import PageHero from '@/components/PageHero'

const W = 'https://bianchilawgroup.com/wp-content/uploads/2025/06'

const POSTS = [
  { slug: 'new-jersey-survivors-justice-act-l-2025-c-328', title: 'New Jersey Survivors Justice Act L. 2025, c. 328', date: 'November 15, 2025' },
  { slug: 'new-jersey-ghost-gun-law-appellate-division-in-state-v-oliver', title: 'New Jersey Ghost Gun Law: Appellate Division in State v. Oliver', date: 'October 1, 2025' },
  { slug: 'new-jersey-criminal-appeal-appellate-division-in-state-v-kelly', title: "Prosecutor Remarks Lead to New Trial in NJ Criminal Appeal Case", date: 'August 20, 2025' },
  { slug: 'ineffective-assistance-of-counsel-nj-supreme-court-in-state-v-hernandez-peralta', title: 'No Duty to Investigate Citizenship Absent Clear Evidence', date: 'October 10, 2025' },
  { slug: 'shaken-baby-syndrome-new-jersey-supreme-court-state-v-nieves', title: 'Shaken Baby Syndrome: NJ Supreme Court State v. Nieves', date: 'September 5, 2025' },
  { slug: 'victims-assistance-and-survivor-protection-act-vaspa', title: 'Victims Assistance and Survivor Protection Act (VASPA)', date: 'July 22, 2025' },
]

export const metadata = {
  title: 'Blog',
  description: 'Legal insights and news from The Bianchi Law Group, LLC — New Jersey criminal defense attorneys.',
}

export default function BlogPage() {
  return (
    <main>
      <PageHero title="Legal Blog & Insights" subtitle="News, analysis, and legal updates from The Bianchi Law Group" />
      <section style={{ backgroundColor: '#F0F5FA' }} className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POSTS.map(post => (
              <article key={post.slug} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img src={`${W}/blog-post.png`} alt={post.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <p style={{ color: '#a61c23', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{post.date}</p>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, color: '#272727', marginBottom: 12, lineHeight: 1.4 }}>{post.title}</h2>
                  <Link href={`/blog/${post.slug}`} style={{ color: '#a61c23', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }} className="hover:underline">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
