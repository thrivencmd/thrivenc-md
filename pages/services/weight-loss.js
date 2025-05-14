import Head from 'next/head';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import NewsletterSignup from '../../components/NewsletterSignup';

export default function WeightLossService() {
  return (
    <>
      <Head>
        <title>Medical Weight Loss Services | ThriveNC MD PLLC</title>
        <meta name="description" content="GLP-1 based medical weight loss programs in North Carolina. Physician-led telemedicine weight management with ongoing support and personalized care." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary-900/20 to-dark-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Medical Weight Loss
            </h1>
            <p className="text-xl text-gray-300">
              Achieve sustainable weight loss with our physician-led GLP-1 program designed for long-term success.
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
                <h2>GLP-1 Medical Weight Loss Program</h2>
                <p>
                  Our physician-led weight loss program utilizes the latest advances in GLP-1 medications combined with personalized lifestyle recommendations to help you achieve sustainable weight loss.
                </p>
                <p>
                  Unlike traditional weight loss programs that rely solely on calorie restriction, our approach addresses the underlying metabolic and hormonal factors that make losing weight and keeping it off so challenging.
                </p>
                
                <h3>The Science Behind GLP-1 Medications</h3>
                <p>
                  GLP-1 receptor agonists work by mimicking the incretin hormone GLP-1, which regulates appetite and food intake. These medications help:
                </p>
                <ul>
                  <li>Reduce hunger and cravings</li>
                  <li>Increase feelings of fullness</li>
                  <li>Slow gastric emptying</li>
                  <li>Improve glycemic control</li>
                  <li>Support sustainable weight loss</li>
                </ul>
                
                <h3>Our Comprehensive Approach</h3>
                <p>
                  Your weight loss journey with ThriveNC MD includes:
                </p>
                <ol>
                  <li><strong>Initial Evaluation:</strong> A thorough medical assessment to determine if GLP-1 medications are appropriate for you</li>
                  <li><strong>Personalized Treatment Plan:</strong> Custom dosing and medication schedule based on your unique needs</li>
                  <li><strong>Nutrition Guidance:</strong> Specific dietary recommendations to maximize your results</li>
                  <li><strong>Ongoing Support:</strong> Regular follow-up appointments to monitor your progress</li>
                  <li><strong>Lifestyle Coaching:</strong> Guidance on sustainable habits to maintain your results</li>
                </ol>
                
                <h3>Benefits of Our Program</h3>
                <p>
                  Patients in our medical weight loss program typically experience:
                </p>
                <ul>
                  <li>Significant weight reduction (typically 15-20% of body weight)</li>
                  <li>Improved metabolic health markers</li>
                  <li>Reduced joint pain and improved mobility</li>
                  <li>Better sleep quality</li>
                  <li>Increased energy and vitality</li>
                  <li>Enhanced self-confidence</li>
                </ul>
                
                <h3>Is This Program Right For You?</h3>
                <p>
                  Our medical weight loss program is designed for adults with a BMI of 27 or higher who have been unable to achieve or maintain weight loss through diet and exercise alone.
                </p>
                <p>
                  During your initial consultation, we'll review your medical history, current medications, and weight loss goals to determine if our program is the right fit for your needs.
                </p>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">How much weight can I expect to lose?</h4>
                    <p className="text-gray-300">
                      Most patients can expect to lose 15-20% of their body weight within the first year when following our complete program including medication, nutrition guidance, and lifestyle changes.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Are GLP-1 medications covered by insurance?</h4>
                    <p className="text-gray-300">
                      As a cash-pay practice, we don't bill insurance directly. Some patients may be able to submit for reimbursement depending on their insurance plan and medical necessity criteria. We provide detailed receipts for this purpose.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">What are the common side effects?</h4>
                    <p className="text-gray-300">
                      Common side effects of GLP-1 medications may include nausea, vomiting, diarrhea, and constipation. These typically improve over time as your body adjusts to the medication. We use a gradual dose titration to minimize side effects.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">How long will I need to take the medication?</h4>
                    <p className="text-gray-300">
                      GLP-1 medications are typically used as long-term treatments. For optimal results and to maintain weight loss, many patients continue the medication indefinitely. We'll discuss your specific timeline during your consultation.
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
                      'Personalized treatment plan',
                      'GLP-1 prescription management',
                      'Monthly follow-up appointments',
                      'Email access to our medical team',
                      'Custom nutrition guidance',
                      'Progress tracking tools'
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
                  <p className="text-3xl font-bold text-white">$299<span className="text-lg text-gray-400">/month</span></p>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary-900/30 flex items-center justify-center text-xl font-bold text-primary-400 mr-4">
                  S
                </div>
                <div>
                  <p className="text-gray-300 italic mb-4">
                    "After struggling with my weight for over a decade, the GLP-1 program has been life-changing. I've lost 45 pounds in 6 months and finally feel in control of my eating habits. The support from Dr. Johnson has been incredible."
                  </p>
                  <p className="font-semibold text-white">Sarah M.</p>
                  <p className="text-sm text-gray-400">Lost 45 pounds in 6 months</p>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary-900/30 flex items-center justify-center text-xl font-bold text-primary-400 mr-4">
                  J
                </div>
                <div>
                  <p className="text-gray-300 italic mb-4">
                    "The telemedicine format made it so convenient to get started and stick with the program. I've lost 35 pounds, my blood pressure is normal for the first time in years, and I no longer need my diabetes medication."
                  </p>
                  <p className="font-semibold text-white">James T.</p>
                  <p className="text-sm text-gray-400">Lost 35 pounds in 5 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Take the first step toward sustainable weight loss with our physician-led GLP-1 program.
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