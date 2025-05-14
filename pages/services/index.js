import Head from 'next/head';
import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';
import NewsletterSignup from '../../components/NewsletterSignup';

export default function Services() {
  return (
    <>
      <Head>
        <title>Telemedicine Services | ThriveNC MD PLLC</title>
        <meta name="description" content="Comprehensive telemedicine services including medical weight loss, hormone optimization, and functional medicine at ThriveNC MD PLLC in North Carolina." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive telemedicine services focused on optimizing your health and wellness through personalized, physician-led care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-dark-800 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Medical Weight Loss"
              description="GLP-1-based weight loss programs personalized to your needs with ongoing physician support and lifestyle optimization."
              iconName="scale"
              href="/services/weight-loss"
            />
            <ServiceCard 
              title="Hormone Optimization"
              description="Comprehensive hormone therapy services including testosterone replacement, thyroid, and adrenal support to restore balance and improve quality of life."
              iconName="activity"
              href="/services/hormone-optimization"
            />
            <ServiceCard 
              title="Functional Medicine"
              description="Root-cause approach to chronic conditions focusing on your unique biochemistry, lifestyle factors, and environmental influences."
              iconName="stethoscope"
              href="/services/functional-medicine"
            />
            <ServiceCard 
              title="Metabolic Health"
              description="Personalized interventions to improve insulin sensitivity, balance blood sugar, and optimize metabolic function for long-term health."
              iconName="heart"
              href="/services/weight-loss"
            />
            <ServiceCard 
              title="Gut Health"
              description="Comprehensive assessment and treatment of digestive disorders, microbiome imbalances, and gut-related systemic issues."
              iconName="pills"
              href="/services/functional-medicine"
            />
            <ServiceCard 
              title="Cognitive Enhancement"
              description="Evidence-based approaches to improve mental clarity, focus, and cognitive performance through hormone optimization and functional medicine."
              iconName="brain"
              href="/services/hormone-optimization"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-dark-900 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined telemedicine process makes it easy to access high-quality care from anywhere in North Carolina.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-800 rounded-xl p-8 relative">
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4 pt-4">Initial Consultation</h3>
              <p className="text-gray-300">
                Schedule a virtual consultation with one of our physicians to discuss your health concerns, goals, and medical history.
              </p>
            </div>
            
            <div className="bg-dark-800 rounded-xl p-8 relative">
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4 pt-4">Personalized Plan</h3>
              <p className="text-gray-300">
                Receive a comprehensive treatment plan tailored to your specific needs, including medication recommendations and lifestyle adjustments.
              </p>
            </div>
            
            <div className="bg-dark-800 rounded-xl p-8 relative">
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4 pt-4">Ongoing Support</h3>
              <p className="text-gray-300">
                Benefit from regular follow-up appointments, medication adjustments, and continuous support to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-dark-800 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose ThriveNC MD</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're committed to providing exceptional care through our patient-centered, science-based approach.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-white">Board-Certified Physicians</h3>
                    <p className="text-gray-300">All care provided by experienced, board-certified physicians specializing in metabolism, hormones, and functional medicine.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-white">Convenient Telemedicine</h3>
                    <p className="text-gray-300">Connect with us from anywhere in North Carolina - no commute or waiting rooms required.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-white">Transparent Pricing</h3>
                    <p className="text-gray-300">Cash-pay model with clear, upfront pricing and no surprise bills or insurance hassles.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-white">Personalized Care</h3>
                    <p className="text-gray-300">Individualized treatment plans tailored to your specific goals, needs, and medical history.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Begin your health optimization journey with a comprehensive initial consultation. Our physicians will review your health history, discuss your goals, and develop a personalized plan to help you achieve optimal wellness.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-300">60-minute initial consultation</p>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-300">Comprehensive health assessment</p>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-300">Personalized treatment recommendations</p>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 text-primary-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-300">Clear explanation of next steps</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-2">Initial Consultation</p>
                <p className="text-3xl font-bold text-white mb-6">$199</p>
                <Link href="/contact" className="btn btn-primary w-full">
                  Schedule Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-900 to-dark-900 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Take the first step toward optimized health with our physician-led telemedicine services.
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