import Head from 'next/head';
import Link from 'next/link';
import NewsletterSignup from '../components/NewsletterSignup';

export default function About() {
  return (
    <>
      <Head>
        <title>About Our Practice | ThriveNC MD PLLC</title>
        <meta name="description" content="Learn about ThriveNC MD PLLC, a physician-led telemedicine practice in North Carolina focused on personalized care for weight loss, hormone optimization, and functional medicine." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Our Practice
            </h1>
            <p className="text-xl text-gray-300">
              ThriveNC MD PLLC is a physician-led telemedicine practice dedicated to helping patients achieve optimal health through personalized, evidence-based care.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-dark-800 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6">
                At ThriveNC MD, our mission is to provide accessible, personalized healthcare that addresses the root causes of health concerns rather than just treating symptoms.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We believe that optimal health requires a comprehensive approach that considers the whole person – their biochemistry, lifestyle, environment, and goals. By combining the latest advances in medical science with a patient-centered approach, we help our patients achieve lasting health improvements.
              </p>
              <p className="text-lg text-gray-300">
                Our telemedicine model allows us to provide high-quality care to patients throughout North Carolina without the constraints of traditional office-based practices. We've eliminated the waiting rooms, complicated insurance processes, and rushed appointments to focus on what matters most – your health.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center">
                <span className="text-white text-lg">Image representing our mission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="bg-dark-900 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden order-last lg:order-first">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-primary-900/30 flex items-center justify-center">
                <span className="text-white text-lg">Doctor's professional portrait</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Dr. Johnson</h2>
              <p className="text-xl text-gray-300 mb-6">
                Dr. Sarah Johnson, MD is a board-certified physician with over 15 years of experience in internal medicine and specialized training in metabolism, hormones, and functional medicine.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                After years of practicing in traditional healthcare settings, Dr. Johnson founded ThriveNC MD to offer a more personalized approach to care that addresses the root causes of health issues and gives patients the time and attention they deserve.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-white">Board Certification</h3>
                    <p className="text-gray-300">American Board of Internal Medicine</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-white">Advanced Training</h3>
                    <p className="text-gray-300">Functional Medicine, Hormone Optimization, Obesity Medicine</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-white">Medical Education</h3>
                    <p className="text-gray-300">University of North Carolina School of Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-dark-800 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in a patient-centered, science-based approach to healthcare that addresses the unique needs of each individual.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-700 rounded-xl p-8">
              <div className="h-12 w-12 bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personalized Care</h3>
              <p className="text-gray-300">
                We recognize that every patient is unique, with different genetics, biochemistry, lifestyle factors, and health goals. Our treatment plans are tailored to address your specific needs and circumstances.
              </p>
            </div>
            
            <div className="bg-dark-700 rounded-xl p-8">
              <div className="h-12 w-12 bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data-Driven Decisions</h3>
              <p className="text-gray-300">
                We utilize comprehensive lab testing and monitoring to identify underlying imbalances and track your progress. This data-driven approach ensures that our treatments are both effective and safe.
              </p>
            </div>
            
            <div className="bg-dark-700 rounded-xl p-8">
              <div className="h-12 w-12 bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Root Cause Focus</h3>
              <p className="text-gray-300">
                Rather than just treating symptoms, we aim to identify and address the underlying causes of your health concerns. This approach leads to more sustainable and comprehensive improvements in your health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-dark-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Values</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center mt-1 text-xl font-bold">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">Patient Empowerment</h3>
                  <p className="text-gray-300">
                    We believe in educating and empowering our patients to take an active role in their health. We explain the "why" behind our recommendations and work collaboratively with you to develop treatment plans that align with your goals and values.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center mt-1 text-xl font-bold">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
                  <p className="text-gray-300">
                    We maintain complete transparency in our pricing, recommendations, and expected outcomes. You'll never encounter surprise bills or hidden fees, and we'll always be honest about what treatments can and cannot accomplish.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center mt-1 text-xl font-bold">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">Accessibility</h3>
                  <p className="text-gray-300">
                    We believe that high-quality healthcare should be accessible to all. Our telemedicine model allows us to serve patients throughout North Carolina, eliminating geographical barriers and reducing the time and expense of in-person visits.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center mt-1 text-xl font-bold">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">Continuous Improvement</h3>
                  <p className="text-gray-300">
                    We are committed to staying at the forefront of medical research and innovation. We regularly review the latest scientific literature and incorporate new evidence-based approaches into our practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-900 to-dark-900 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Experience a different approach to healthcare with our physician-led telemedicine services.
          </p>
          <Link href="/contact" className="btn btn-primary bg-white text-primary-900 hover:bg-gray-100">
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}