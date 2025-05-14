import Head from 'next/head';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import NewsletterSignup from '../../components/NewsletterSignup';

export default function HormoneOptimizationService() {
  return (
    <>
      <Head>
        <title>Hormone Optimization Services | ThriveNC MD PLLC</title>
        <meta name="description" content="Personalized hormone optimization including TRT, thyroid, and adrenal support. Physician-led telemedicine hormone therapy in North Carolina with ongoing support." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-secondary-900/20 to-dark-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hormone Optimization
            </h1>
            <p className="text-xl text-gray-300">
              Restore balance, vitality, and wellness with our comprehensive hormone optimization programs.
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
                <h2>Comprehensive Hormone Optimization</h2>
                <p>
                  Our physician-led hormone optimization programs are designed to address the imbalances that can lead to fatigue, weight gain, mood changes, and decreased quality of life. We take a data-driven approach to identify and correct your specific hormonal deficiencies.
                </p>
                <p>
                  Unlike conventional medicine that often treats hormonal symptoms in isolation, our comprehensive approach looks at the interrelated nature of your endocrine system to restore optimal function and balance.
                </p>
                
                <h3>Our Hormone Optimization Services</h3>
                <p>
                  We offer specialized programs for various hormone-related concerns:
                </p>
                
                <h4>Testosterone Replacement Therapy (TRT)</h4>
                <p>
                  Low testosterone can significantly impact your energy, strength, body composition, and overall sense of well-being. Our TRT program includes:
                </p>
                <ul>
                  <li>Comprehensive hormone panel testing</li>
                  <li>Personalized dosing protocols</li>
                  <li>Regular monitoring of testosterone and related biomarkers</li>
                  <li>Management of potential side effects</li>
                  <li>Optimization of related health factors</li>
                </ul>
                
                <h4>Thyroid Optimization</h4>
                <p>
                  Thyroid dysfunction can cause profound effects on metabolism, energy, and mental clarity. Our approach includes:
                </p>
                <ul>
                  <li>Comprehensive thyroid panel (beyond basic TSH testing)</li>
                  <li>Assessment of T3, T4, reverse T3, and thyroid antibodies</li>
                  <li>Optimization of T4/T3 conversion</li>
                  <li>Nutritional support for thyroid function</li>
                  <li>Management of Hashimoto's and other thyroid conditions</li>
                </ul>
                
                <h4>Adrenal Support</h4>
                <p>
                  Chronic stress can lead to adrenal dysfunction, affecting energy, sleep, and stress resilience. Our program includes:
                </p>
                <ul>
                  <li>Assessment of cortisol patterns</li>
                  <li>Personalized stress management strategies</li>
                  <li>Nutritional support for adrenal function</li>
                  <li>Sleep optimization protocols</li>
                  <li>Lifestyle interventions for stress reduction</li>
                </ul>
                
                <h3>Our Comprehensive Approach</h3>
                <p>
                  Your hormone optimization journey with ThriveNC MD includes:
                </p>
                <ol>
                  <li><strong>Initial Consultation:</strong> A thorough review of your symptoms, medical history, and goals</li>
                  <li><strong>Advanced Testing:</strong> Comprehensive lab work to assess your current hormone levels</li>
                  <li><strong>Personalized Protocol:</strong> A custom treatment plan based on your test results and specific needs</li>
                  <li><strong>Regular Monitoring:</strong> Ongoing lab testing to ensure optimal results and safety</li>
                  <li><strong>Lifestyle Integration:</strong> Nutrition, exercise, and lifestyle recommendations to support hormonal health</li>
                </ol>
                
                <h3>Benefits of Hormone Optimization</h3>
                <p>
                  Patients in our hormone optimization programs typically experience:
                </p>
                <ul>
                  <li>Increased energy and vitality</li>
                  <li>Improved body composition (increased muscle, decreased fat)</li>
                  <li>Enhanced mood and mental clarity</li>
                  <li>Better sleep quality</li>
                  <li>Increased motivation and drive</li>
                  <li>Improved sexual function and libido</li>
                  <li>Greater resilience to stress</li>
                </ul>
                
                <h3>Is This Program Right For You?</h3>
                <p>
                  Our hormone optimization programs are designed for adults experiencing symptoms of hormonal imbalance such as fatigue, weight gain, mood changes, decreased libido, brain fog, or sleep disturbances.
                </p>
                <p>
                  During your initial consultation, we'll review your symptoms, medical history, and goals to determine if our program is the right fit for your needs.
                </p>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">How long does it take to see results?</h4>
                    <p className="text-gray-300">
                      Most patients begin to notice improvements in energy and mood within 2-4 weeks of starting treatment. Full benefits typically develop over 3-6 months as hormones reach optimal levels and your body responds to the treatment.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Is hormone optimization safe?</h4>
                    <p className="text-gray-300">
                      When properly managed by a qualified physician with regular monitoring, hormone optimization is safe and effective. We focus on restoring hormones to optimal physiological levels, not artificially high levels, and closely monitor your response to treatment.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Will I need to be on hormone therapy forever?</h4>
                    <p className="text-gray-300">
                      The duration of treatment depends on your specific condition. Some hormonal imbalances can be corrected through temporary intervention, while others (like age-related testosterone decline) may require ongoing management for continued benefits.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">How often will I need follow-up appointments?</h4>
                    <p className="text-gray-300">
                      Initially, we typically schedule follow-ups every 6-8 weeks to monitor your response and adjust your protocol as needed. Once stable, most patients transition to quarterly or biannual check-ins with periodic lab work.
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
                      'Initial physician consultation',
                      'Comprehensive hormone panel',
                      'Personalized treatment protocol',
                      'Regular follow-up appointments',
                      'Ongoing lab monitoring',
                      'Prescription management',
                      'Email access to our medical team',
                      'Nutritional guidance'
                    ].map((item, i) => (
                      <li key={i} className="flex">
                        <CheckIcon className="h-6 w-6 text-secondary-400 flex-shrink-0 mr-2" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Starting from</p>
                  <p className="text-3xl font-bold text-white">$249<span className="text-lg text-gray-400">/month</span></p>
                  <p className="text-sm text-gray-400 mt-1">Medication costs may vary</p>
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
                <div className="h-12 w-12 rounded-full bg-secondary-900/30 flex items-center justify-center text-xl font-bold text-secondary-400 mr-4">
                  M
                </div>
                <div>
                  <p className="text-gray-300 italic mb-4">
                    "After struggling with fatigue and brain fog for years, the hormone optimization program has been transformative. My energy levels are consistently high, I'm sleeping better, and I've regained my mental clarity and focus."
                  </p>
                  <p className="font-semibold text-white">Michael R.</p>
                  <p className="text-sm text-gray-400">TRT patient, 45</p>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-secondary-900/30 flex items-center justify-center text-xl font-bold text-secondary-400 mr-4">
                  L
                </div>
                <div>
                  <p className="text-gray-300 italic mb-4">
                    "I had been diagnosed with hypothyroidism years ago but never felt right on standard treatment. The thyroid optimization program finally addressed all my symptoms. I've lost weight, have more energy, and my hair is growing back!"
                  </p>
                  <p className="font-semibold text-white">Lisa K.</p>
                  <p className="text-sm text-gray-400">Thyroid patient, 38</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-900 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Feel Your Best Again?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Take the first step toward hormone balance and optimal wellness with our physician-led program.
          </p>
          <Link href="/contact" className="btn btn-primary bg-white text-secondary-900 hover:bg-gray-100">
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}