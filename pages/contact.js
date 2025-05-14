import Head from 'next/head';
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    submitted: false,
    error: null,
    loading: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Replace this URL with your actual Formspree form ID when ready
      const response = await fetch('https://formspree.io/f/your-formspree-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          service: formState.service,
          message: formState.message
        })
      });

      if (response.ok) {
        setFormState(prev => ({ 
          ...prev, 
          submitted: true, 
          loading: false,
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        }));
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        error: 'There was an error submitting your form. Please try again or contact us directly.',
        loading: false
      }));
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | ThriveNC MD PLLC</title>
        <meta name="description" content="Contact ThriveNC MD PLLC for telemedicine appointments, consultations, and questions about our weight loss, hormone optimization, and functional medicine services." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to schedule a consultation or ask any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-dark-800 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-dark-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {formState.submitted ? (
                <div className="bg-primary-900/20 border border-primary-500 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formState.error && (
                    <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                      <p className="text-red-200">{formState.error}</p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                      Interested Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Medical Weight Loss">Medical Weight Loss</option>
                      <option value="Hormone Optimization">Hormone Optimization</option>
                      <option value="Functional Medicine">Functional Medicine</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                      placeholder="Tell us about your health goals or any questions you have..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formState.loading}
                      className={`w-full btn btn-primary ${formState.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {formState.loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-400 mt-4">
                    By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-primary-400 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@thrivencmd.com</p>
                      <p className="text-sm text-gray-400 mt-1">For general inquiries and support</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-primary-400 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">(555) 123-4567</p>
                      <p className="text-sm text-gray-400 mt-1">Monday to Friday, 9am to 5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-primary-400 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Location</h3>
                      <p className="text-gray-300">North Carolina, USA</p>
                      <p className="text-sm text-gray-400 mt-1">Serving patients throughout North Carolina via telehealth</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ClockIcon className="h-6 w-6 text-primary-400 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Hours of Operation</h3>
                      <p className="text-gray-300">Monday to Friday: 9am - 5pm EST</p>
                      <p className="text-gray-300">Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">How quickly will you respond to my inquiry?</h3>
                    <p className="text-gray-300">
                      We typically respond to all inquiries within 1-2 business days. For urgent matters, please call our office directly.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white">How do I schedule a consultation?</h3>
                    <p className="text-gray-300">
                      You can schedule a consultation by filling out the contact form, calling our office, or using our online booking system when you're ready.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white">Do you offer same-day appointments?</h3>
                    <p className="text-gray-300">
                      While we try to accommodate urgent needs, most appointments are scheduled at least 1-2 days in advance to ensure proper preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="bg-dark-900 py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-900 to-secondary-900 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Take the First Step?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule your initial consultation and start your journey to optimal health today.
              </p>
              <button className="btn btn-primary bg-white text-primary-900 hover:bg-gray-100">
                Book Your Consultation
              </button>
              <p className="text-sm text-white/60 mt-4">
                Initial consultations are $199 and can be conducted via secure video call from the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}