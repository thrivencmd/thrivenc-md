import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Components
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  return (
    <>
      <Head>
        <title>ThriveNC MD PLLC - Telemedicine Specialists in North Carolina</title>
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark-800 via-dark-900 to-primary-900/30"></div>
        <div className="container-custom relative z-10 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-bold text-white">
                Modern Healthcare <br className="hidden md:block" />
                <span className="text-primary-400">Personalized For You</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Physician-led, cash-pay telemedicine clinic based in North Carolina offering weight loss, hormone optimization, and functional medicine services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Book a Consultation
                </Link>
                <Link href="/services" className="btn btn-outline flex items-center">
                  Explore Our Services
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-auto md:pl-8 order-first lg:order-last">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500/30 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute bottom-0 right-4 w-80 h-80 bg-secondary-500/20 rounded-full filter blur-3xl opacity-70"></div>
              <div className="relative z-10 bg-gradient-to-tr from-dark-800 to-dark-700 rounded-2xl p-1">
                <div className="rounded-xl overflow-hidden relative w-full h-72 md:h-96">
                  {/* This would normally be an actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center">
                    <span className="text-white text-lg">Image of medical professional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-dark-800 section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Our Services</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We offer a range of telemedicine services focused on helping you achieve optimal health and wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Weight Loss"
              description="GLP-1-based weight loss programs personalized to your needs with ongoing physician support."
              iconName="scale"
              href="/services/weight-loss"
            />
            <ServiceCard 
              title="Hormone Optimization"
              description="Comprehensive hormone therapy services to restore balance and improve quality of life."
              iconName="activity"
              href="/services/hormone-optimization"
            />
            <ServiceCard 
              title="Functional Medicine"
              description="Root-cause approach to chronic conditions focusing on your unique biochemistry."
              iconName="stethoscope"
              href="/services/functional-medicine"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-dark-900 section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center">
                  <span className="text-white text-lg">Image of telemedicine consultation</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-white">Why Choose ThriveNC MD?</h2>
              <p className="text-gray-300">
                Our physician-led practice combines medical expertise with a personalized approach to care.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl text-white font-semibold">Board-Certified Physicians</h3>
                    <p className="text-gray-300">All care provided by experienced, board-certified physicians.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl text-white font-semibold">Convenient Telemedicine</h3>
                    <p className="text-gray-300">Connect with us from anywhere in North Carolina - no commute needed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl text-white font-semibold">Transparent Pricing</h3>
                    <p className="text-gray-300">Cash-pay model with clear, upfront pricing and no surprise bills.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl text-white font-semibold">Personalized Care</h3>
                    <p className="text-gray-300">Individualized treatment plans tailored to your specific needs and goals.</p>
                  </div>
                </li>
              </ul>
              
              <div className="pt-4">
                <Link href="/contact" className="btn btn-primary">
                  Schedule Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-dark-800 section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4">What Our Patients Say</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Read about the experiences of our patients and their transformative health journeys.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The weight loss program has been life-changing. I've lost 35 pounds in 4 months with the GLP-1 treatment and the support from Dr. Johnson has been incredible."
              author="Sarah M."
              location="Raleigh, NC"
              rating={5}
            />
            <TestimonialCard 
              quote="After struggling with fatigue for years, the hormone optimization program has given me my energy back. The telemedicine appointments are so convenient."
              author="Michael T."
              location="Charlotte, NC"
              rating={5}
            />
            <TestimonialCard 
              quote="I appreciate the functional medicine approach that looked at my whole health picture instead of just treating symptoms. Finally found answers to my chronic issues."
              author="Jennifer R."
              location="Asheville, NC"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 section">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Take the first step toward optimized health with our physician-led telemedicine services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary bg-white text-primary-900 hover:bg-gray-100">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn btn-outline border-white text-white hover:bg-white/10">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
}