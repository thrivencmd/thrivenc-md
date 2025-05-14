import Head from 'next/head';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import NewsletterSignup from '../../components/NewsletterSignup';

export default function FunctionalMedicineService() {
  return (
    <>
      <Head>
        <title>Functional Medicine Services | ThriveNC MD PLLC</title>
        <meta name="description" content="Root-cause functional medicine approach to chronic fatigue, autoimmunity, gut health, and more. Physician-led telemedicine functional medicine in North Carolina." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Functional Medicine
            </h1>
            <p className="text-xl text-gray-300">
              Address the root causes of your health concerns with our comprehensive functional medicine approach.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-dark-800 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <h2>Root-Cause Medicine Approach</h2>
                <p>
                  Our functional medicine program focuses on identifying and addressing the underlying causes of your health concerns rather than simply treating symptoms. We take a systems-based approach that recognizes the interconnected nature of your body's systems.
                </p>
                <p>
                  Unlike conventional medicine that often compartmentalizes the body into separate systems, functional medicine recognizes that a symptom in one area might originate from an imbalance elsewhere in the body.
                </p>
                
                <h3>Our Functional Medicine Services</h3>
                <p>
                  We offer comprehensive approaches to various complex health issues:
                </p>
                
                <h4>Chronic Fatigue Resolution</h4>
                <p>
                  For patients struggling with persistent fatigue, we investigate multiple potential causes:
                </p>
                <ul>
                  <li>Mitochondrial dysfunction</li>
                  <li>Hormonal imbalances</li>
                  <li>Nutrient deficiencies</li>
                  <li>Hidden infections</li>
                  <li>Gut dysbiosis</li>
                  <li>Sleep disorders</li>
                  <li>Environmental toxin exposure</li>
                </ul>
                
                <h4>Digestive Health Optimization</h4>
                <p>
                  Gut health impacts everything from energy to immunity to mental health. Our approach includes:
                </p>
                <ul>
                  <li>Comprehensive stool analysis</li>
                  <li>Food sensitivity testing</li>
                  <li>SIBO assessment</li>
                  <li>Intestinal permeability evaluation</li>
                  <li>Personalized gut healing protocols</li>
                  <li>Microbiome restoration strategies</li>
                </ul>
                
                <h4>Autoimmunity Management</h4>
                <p>
                  We help identify and address the triggers of autoimmune conditions through:
                </p>
                <ul>
                  <li>Environmental trigger identification</li>
                  <li>Dietary strategy development</li>
                  <li>Gut-immune axis optimization</li>
                  <li>Inflammatory marker monitoring</li>
                  <li>Personalized autoimmune protocols</li>
                </ul>
                
                <h3>Our Comprehensive Approach</h3>
                <p>
                  Your functional medicine journey with ThriveNC MD includes:
                </p>
                <ol>
                  <li><strong>Comprehensive Assessment:</strong> A detailed review of your health history, symptoms, and previous treatments</li>
                  <li><strong>Advanced Testing:</strong> Specialized functional lab testing to identify underlying imbalances</li>
                  <li><strong>Root Cause Analysis:</strong> Identification of the core factors contributing to your health concerns</li>
                  <li><strong>Personalized Treatment Plan:</strong> A multi-faceted approach addressing diet, lifestyle, supplementation, and targeted therapies</li>
                  <li><strong>Ongoing Support:</strong> Regular follow-up appointments to monitor progress and refine your treatment plan</li>
                </ol>
                
                <h3>Benefits of Functional Medicine</h3>
                <p>
                  Patients in our functional medicine program typically experience:
                </p>
                <ul>
                  <li>Resolution of chronic symptoms that haven't responded to conventional treatments</li>
                  <li>Increased energy and vitality</li>
                  <li>Improved sleep quality</li>
                  <li>Enhanced cognitive function</li>
                  <li>Reduced inflammation</li>
                  <li>Better digestive health</li>
                  <li>Greater resilience to stress</li>
                  <li>Improved overall quality of life</li>
                </ul>
                
                <h3>Is This Program Right For You?</h3>
                <p>
                  Our functional medicine approach is ideal for patients who:
                </p>
                <ul>
                  <li>Have chronic health issues that haven't been adequately addressed by conventional medicine</li>
                  <li>Are taking multiple medications but still don't feel well</li>
                  <li>Want to understand the root causes of their health problems</li>
                  <li>Are seeking a more comprehensive approach to their health concerns</li>
                  <li>Prefer to minimize medication use when possible</li>
                  <li>Are willing to make diet and lifestyle changes to support their health</li>
                </ul>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">How is functional medicine different from conventional medicine?</h4>
                    <p className="text-gray-300">
                      Functional medicine focuses on identifying and addressing the root causes of disease rather than simply treating symptoms. We look at the complex web of interactions among genetic, environmental, and lifestyle factors that influence health and disease.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">What kinds of lab tests do you use?</h4>
                    <p className="text-gray-300">
                      We utilize both conventional and specialized functional medicine labs. These may include comprehensive stool analyses, advanced hormone testing, nutrient evaluations, food sensitivity testing, toxin assessments, genetic testing, and more - all tailored to your specific health concerns.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">How long does it take to see results?</h4>
                    <p className="text-gray-300">
                      The timeline varies based on the complexity of your condition, how long you've been experiencing symptoms, and your adherence to the treatment plan. Some patients notice improvements within weeks, while others with more complex conditions may take several months to see significant changes.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Will I need to make diet and lifestyle changes?</h4>
                    <p className="text-gray-300">
                      Most functional medicine protocols include some degree of dietary and lifestyle modifications, as these are powerful tools for addressing the root causes of illness. We'll work with you to implement changes at a pace that's manageable for your lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Program Details</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Includes</h4>
                  <ul className="space-y-3">
                    {[
                      'Initial 60-minute consultation',
                      'Comprehensive health assessment',
                      'Personalized functional lab recommendations',
                      'Root cause analysis',
                      'Customized treatment protocol',
                      'Regular follow-up appointments',
                      'Email access to our medical team',
                      'Dietary guidance',
                      'Supplement recommendations'
                    ].map((item, i) => (
                      <li key={i} className="flex">
                        <CheckIcon className="h-6 w-6 text-primary-400 flex-shrink-0 mr-2" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Starting from</p>
                  <p className="text-3xl font-bold text-white">$349<span className="text-lg text-gray-400">/month</span></p>
                  <p className="text-sm text-gray-400 mt-1">Lab costs may vary</p>
                </div>
                
                <Link 
                  href="/contact" 
                  className="btn btn-primary w-full text-center"
                >
                  Schedule Consultation
                </Link>
                
                <p className="text-center text-sm text-gray-400 mt-4">
                  No long-term contracts required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark-900 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Patient Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary-900/30 flex items-center justify-center text-xl font-bold text-primary-400 mr-4">
                  R
                </div>
                <div>
                  <p className="text-gray-300 italic mb-4">
                    "After seeing multiple specialists for my fatigue and digestive issues with no answers, the functional medicine approach finally identified the root causes. Six months into my protocol, I have my life back. My energy has returned and my gut symptoms are 90% resolved."
                  </p>
                  <p className="font-semibold text-white">Rebecca T.</p>
                  <p className="text-sm text-gray-400">Chronic fatigue patient</p>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary-900/30 flex items-center justify-center text-xl font-bold text-primary-400 mr-4">
                  D
                </div>
                <div>
                  <p className="text-gray-300 italic mb-4">
                    "The comprehensive approach to my autoimmune condition has been life-changing. Instead of just prescribing medications to suppress symptoms, we identified my triggers and developed a personalized plan. My inflammatory markers are the lowest they've been in years."
                  </p>
                  <p className="font-semibold text-white">David L.</p>
                  <p className="text-sm text-gray-400">Autoimmune patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-dark-800 to-primary-900 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Address the Root Causes?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Take the first step toward resolving your chronic health concerns with our functional medicine approach.
          </p>
          <Link href="/contact" className="btn btn-primary bg-white text-dark-900 hover:bg-gray-100">
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}