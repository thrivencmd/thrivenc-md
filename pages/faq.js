import Head from 'next/head';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import NewsletterSignup from '../components/NewsletterSignup';
import { useState } from 'react';

// Custom Accordion component
function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dark-700">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <ChevronDownIcon 
          className={`h-6 w-6 text-primary-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <div className="text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | ThriveNC MD PLLC</title>
        <meta name="description" content="Find answers to common questions about our telehealth services, pricing, medical weight loss, hormone optimization, and functional medicine." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our telemedicine services, treatments, and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-dark-800 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Pricing & Insurance Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center mr-3 text-sm">
                  $
                </span>
                Pricing & Insurance
              </h2>
              
              <div className="space-y-1">
                <Accordion title="How much do your services cost?">
                  <p className="mb-4">
                    Our pricing varies by service:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Initial consultations: $199</li>
                    <li>Medical Weight Loss program: Starting at $299/month</li>
                    <li>Hormone Optimization: Starting at $249/month</li>
                    <li>Functional Medicine: Starting at $349/month</li>
                  </ul>
                  <p>
                    Each program includes regular physician consultations, personalized treatment plans, and ongoing support. Medication costs may vary and are typically not included in the monthly fee.
                  </p>
                </Accordion>
                
                <Accordion title="Do you accept insurance?">
                  <p>
                    We operate as a cash-pay practice and do not bill insurance directly. This model allows us to spend more time with our patients and avoid the constraints imposed by insurance companies. However, we can provide detailed receipts that you may submit to your insurance for potential reimbursement, depending on your plan's out-of-network benefits.
                  </p>
                </Accordion>
                
                <Accordion title="Are there any hidden fees?">
                  <p>
                    No, we believe in complete transparency. All costs will be clearly explained before you begin any treatment. There are no surprise bills or hidden fees. Your monthly subscription includes all virtual visits, medication management, and email support. The only additional costs would be for medications or lab work, which we'll discuss upfront.
                  </p>
                </Accordion>
                
                <Accordion title="Do you offer HSA/FSA payment options?">
                  <p>
                    Yes, our services are typically eligible for payment with Health Savings Account (HSA) or Flexible Spending Account (FSA) cards. These pre-tax dollars can help make your healthcare more affordable.
                  </p>
                </Accordion>
              </div>
            </div>
            
            {/* Appointments & Follow-ups */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center mr-3 text-sm">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                Appointments & Follow-ups
              </h2>
              
              <div className="space-y-1">
                <Accordion title="How do telemedicine appointments work?">
                  <p>
                    Our telemedicine appointments take place through a secure, HIPAA-compliant video platform. You'll receive a link to join your appointment at the scheduled time. During the visit, you'll meet with your physician to discuss your health concerns, review any lab results, and adjust your treatment plan as needed. All you need is a smartphone, tablet, or computer with internet access.
                  </p>
                </Accordion>
                
                <Accordion title="How often will I need follow-up appointments?">
                  <p className="mb-4">
                    The frequency of follow-up appointments varies by program and individual needs:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>For Weight Loss programs: Typically monthly follow-ups</li>
                    <li>For Hormone Optimization: Initially every 6-8 weeks, then quarterly once stable</li>
                    <li>For Functional Medicine: Usually monthly at first, then every 2-3 months as improvements are seen</li>
                  </ul>
                </Accordion>
                
                <Accordion title="What if I need to reach my doctor between appointments?">
                  <p>
                    All of our programs include secure messaging access to our medical team for non-urgent questions between appointments. We typically respond within 1-2 business days. For urgent medical concerns that require immediate attention, you should go to your nearest emergency room or call 911.
                  </p>
                </Accordion>
                
                <Accordion title="Can I cancel or reschedule my appointment?">
                  <p>
                    Yes, you can cancel or reschedule your appointment through our online portal or by contacting our office. We request at least 24 hours' notice for cancellations or rescheduling to avoid a potential cancellation fee.
                  </p>
                </Accordion>
              </div>
            </div>
            
            {/* Medications & Treatments */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center mr-3 text-sm">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </span>
                Medications & Treatments
              </h2>
              
              <div className="space-y-1">
                <Accordion title="How do I get my prescription medications?">
                  <p>
                    After your consultation, if medication is appropriate for your treatment plan, your physician will send your prescription electronically to your preferred pharmacy. For certain medications that aren't available at regular pharmacies, we may refer you to a specialized compounding pharmacy that can ship directly to your home.
                  </p>
                </Accordion>
                
                <Accordion title="What GLP-1 medications do you prescribe for weight loss?">
                  <p>
                    We prescribe various GLP-1 medications based on your specific needs, medical history, and insurance coverage, including semaglutide, tirzepatide, and liraglutide. During your consultation, your physician will discuss which medication is most appropriate for your specific situation.
                  </p>
                </Accordion>
                
                <Accordion title="Are the medications you prescribe FDA-approved?">
                  <p>
                    Yes, we only prescribe FDA-approved medications. However, in some cases, we may use medications for "off-label" purposes, which is a common and legal practice in medicine. This means using an FDA-approved medication for a purpose other than what it was originally approved for, when scientific evidence supports this use. Your physician will explain any off-label use and the evidence supporting it.
                  </p>
                </Accordion>
                
                <Accordion title="What about potential side effects of medications?">
                  <p>
                    All medications have potential side effects, which your physician will discuss with you during your consultation. We prioritize safety by starting with lower doses and gradually increasing as needed, which helps minimize side effects. You'll have regular follow-ups to monitor for any adverse effects, and we can adjust your treatment plan as necessary.
                  </p>
                </Accordion>
              </div>
            </div>
            
            {/* Telehealth & Eligibility */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center mr-3 text-sm">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Telehealth & Eligibility
              </h2>
              
              <div className="space-y-1">
                <Accordion title="Can telehealth really replace in-person doctor visits?">
                  <p>
                    For many conditions, especially those we specialize in, telehealth can effectively replace in-person visits. Our virtual care model allows us to conduct thorough consultations, review lab results, monitor your progress, and adjust treatment plans remotely. However, there are some situations that may require in-person evaluation or procedures. In such cases, we'll refer you to appropriate local providers while continuing to coordinate your care.
                  </p>
                </Accordion>
                
                <Accordion title="Do I need to be a resident of North Carolina?">
                  <p>
                    Yes, due to medical licensing regulations, we can only provide care to patients who are physically located in North Carolina during their telemedicine appointments. You must have a North Carolina address and be physically present in the state during all virtual visits.
                  </p>
                </Accordion>
                
                <Accordion title="What technology do I need for telehealth appointments?">
                  <p>
                    You'll need a device with internet access, a camera, and a microphone. This can be a smartphone, tablet, laptop, or desktop computer. We recommend using a device with a larger screen when possible for the best experience. You'll also need a stable internet connection and a private, quiet space for your appointments.
                  </p>
                </Accordion>
                
                <Accordion title="Is telehealth secure and private?">
                  <p>
                    Yes, we take your privacy seriously. We use a HIPAA-compliant telemedicine platform that encrypts all video sessions. Your health information is stored securely according to federal privacy regulations. We recommend conducting your appointment in a private space where conversations cannot be overheard by others.
                  </p>
                </Accordion>
              </div>
            </div>

            {/* Results & Expectations */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center mr-3 text-sm">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                Results & Expectations
              </h2>
              
              <div className="space-y-1">
                <Accordion title="How quickly will I see results?">
                  <p>
                    Results vary depending on the treatment and individual factors. For weight loss, most patients begin seeing noticeable results within 4-6 weeks of starting GLP-1 medications. For hormone optimization, some effects (like improved energy and mood) may be noticed within 2-4 weeks, while others (like body composition changes) typically take 3-6 months. For functional medicine approaches, timeline varies widely based on the condition being addressed, but most patients report initial improvements within 4-8 weeks of implementing their protocol.
                  </p>
                </Accordion>
                
                <Accordion title="What happens if the treatment isn't working for me?">
                  <p>
                    If you're not seeing the expected results, we'll reassess your treatment plan. This may involve adjusting medication dosages, changing medications, ordering additional lab work to identify other factors, or modifying lifestyle recommendations. Our goal is to find what works best for you, which sometimes requires a process of refinement.
                  </p>
                </Accordion>
                
                <Accordion title="How long will I need to be on treatment?">
                  <p>
                    Treatment duration varies by condition and individual goals. For weight loss, many patients remain on GLP-1 medications long-term to maintain results, while others may eventually transition to a maintenance program. Hormone optimization is typically a long-term treatment as hormone levels naturally decline with age. For functional medicine, some conditions may resolve completely with temporary intervention, while others require ongoing management.
                  </p>
                </Accordion>
                
                <Accordion title="What if I want to stop treatment?">
                  <p>
                    You can discontinue treatment at any time. We recommend discussing your decision with your physician first, as some medications require gradual tapering rather than abrupt discontinuation. We can provide guidance on how to safely stop treatment and what to expect afterward. There are no long-term contracts or cancellation penalties.
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-dark-900 py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-900/30 to-dark-800 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're here to help! Contact us for more information about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}