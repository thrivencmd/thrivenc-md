import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import NewsletterSignup from '../../components/NewsletterSignup';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind GLP-1 Medications for Weight Loss',
    excerpt: 'Understanding how medications like semaglutide and tirzepatide work in the body to promote weight loss and metabolic health.',
    category: 'Weight Loss',
    date: 'May 10, 2025',
    slug: 'science-behind-glp1-medications',
    readTime: '6 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Optimizing Testosterone Levels: Benefits Beyond Muscle Mass',
    excerpt: 'Exploring the wide-ranging effects of healthy testosterone levels on energy, cognition, mood, and overall wellbeing.',
    category: 'Hormone Optimization',
    date: 'April 28, 2025',
    slug: 'testosterone-benefits-beyond-muscle',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 3,
    title: 'The Gut-Brain Connection: How Your Microbiome Affects Your Mental Health',
    excerpt: 'Research reveals the powerful link between your gut bacteria and mental health, mood, and cognitive function.',
    category: 'Functional Medicine',
    date: 'April 15, 2025',
    slug: 'gut-brain-connection',
    readTime: '7 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Personalizing Your GLP-1 Journey: Beyond the Standard Protocol',
    excerpt: 'Strategies for maximizing results on GLP-1 medications through nutritional approaches, timing, and lifestyle modifications.',
    category: 'Weight Loss',
    date: 'March 30, 2025',
    slug: 'personalizing-glp1-journey',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Thyroid Optimization: When Standard Tests Miss the Mark',
    excerpt: 'Why conventional thyroid testing may not reveal the full picture and how a comprehensive approach can uncover hidden thyroid issues.',
    category: 'Hormone Optimization',
    date: 'March 18, 2025',
    slug: 'thyroid-optimization-beyond-standard-tests',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Inflammation: The Root Cause of Chronic Disease',
    excerpt: 'Understanding how systemic inflammation contributes to various chronic conditions and functional medicine approaches to address it.',
    category: 'Functional Medicine',
    date: 'March 5, 2025',
    slug: 'inflammation-root-cause',
    readTime: '9 min read',
    featured: false
  }
];

export default function Blog() {
  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  
  // Get regular posts
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Head>
        <title>Health & Wellness Blog | ThriveNC MD PLLC</title>
        <meta name="description" content="Expert articles on medical weight loss, hormone optimization, functional medicine, and overall health from the physicians at ThriveNC MD PLLC." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-gray-300">
              Expert insights, research updates, and practical advice on weight loss, hormone optimization, and functional medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-dark-800 py-12">
          <div className="container-custom">
            <div className="border-b border-dark-700 pb-4 mb-8">
              <h2 className="text-xl font-semibold text-white">Featured Article</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 relative h-64 md:h-96 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-dark-700 flex items-center justify-center">
                  <span className="text-white text-lg">Featured post image</span>
                </div>
              </div>
              
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-900/30 text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-sm ml-4">{featuredPost.date}</span>
                  <span className="text-gray-400 text-sm ml-4">{featuredPost.readTime}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                
                <p className="text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <Link href={`/blog/${featuredPost.slug}`} className="group inline-flex items-center text-primary-400 hover:text-primary-300 font-medium">
                  Read Article
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts */}
      <section className="bg-dark-900 py-16">
        <div className="container-custom">
          <div className="border-b border-dark-700 pb-4 mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Latest Articles</h2>
              <div className="flex space-x-2">
                <button className="bg-dark-800 border border-dark-700 hover:border-primary-500 text-gray-300 px-4 py-2 rounded-md text-sm">All</button>
                <button className="bg-dark-800 border border-dark-700 hover:border-primary-500 text-gray-300 px-4 py-2 rounded-md text-sm">Weight Loss</button>
                <button className="bg-dark-800 border border-dark-700 hover:border-primary-500 text-gray-300 px-4 py-2 rounded-md text-sm">Hormones</button>
                <button className="bg-dark-800 border border-dark-700 hover:border-primary-500 text-gray-300 px-4 py-2 rounded-md text-sm">Functional</button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <article key={post.id} className="bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-dark-700 flex items-center justify-center">
                    <span className="text-white text-lg">Article image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary-900/30 text-primary-400 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs ml-3">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <Link href={`/blog/${post.slug}`} className="group inline-flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium">
                      Read More
                      <ArrowRightIcon className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="btn btn-outline">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="bg-dark-800 py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Browse by Topic</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Weight Loss</h3>
              <p className="text-gray-300 mb-4">
                Articles on GLP-1 medications, metabolism, nutrition strategies, and sustainable weight management.
              </p>
              <Link href="/blog?category=weight-loss" className="group inline-flex items-center text-primary-400 hover:text-primary-300 font-medium">
                View Articles
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-dark-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hormone Health</h3>
              <p className="text-gray-300 mb-4">
                Resources on testosterone optimization, thyroid health, adrenal function, and hormonal balance.
              </p>
              <Link href="/blog?category=hormone-health" className="group inline-flex items-center text-primary-400 hover:text-primary-300 font-medium">
                View Articles
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-dark-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Functional Medicine</h3>
              <p className="text-gray-300 mb-4">
                Insights on root-cause approaches to chronic fatigue, gut health, inflammation, and autoimmunity.
              </p>
              <Link href="/blog?category=functional-medicine" className="group inline-flex items-center text-primary-400 hover:text-primary-300 font-medium">
                View Articles
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}