import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 space-y-12">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold">ThriveNC MD</h1>
        <p className="text-lg">Functional Weight Loss, Hormone Optimization & Energy Medicine for Busy Adults in NC</p>
        <a href="https://calendly.com/thrivencmd/15min" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700">Book Free 15-Min Call</button>
        </a>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Personalized Weight Loss</h2>
          <p>Get access to medical weight loss plans, including GLP-1s like compounded semaglutide, tailored to your unique biology.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Hormone Optimization</h2>
          <p>Low energy, poor focus, poor sleep? We treat testosterone imbalance, adrenal fatigue, thyroid issues, and more.</p>
        </div>
        <div className="bg-gray-100 p-6 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">On-Demand Doctor Access</h2>
          <p>After your initial visit, submit updates via voice/text anytime. Get a response within 24 hours — no need to wait weeks.</p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="space-y-3 text-left max-w-xl mx-auto">
          <li><strong>1. Book a Free Call:</strong> We’ll see if we’re a good fit.</li>
          <li><strong>2. First Visit:</strong> Live 45–60 min video consult. We’ll go over labs, goals, and design your care plan.</li>
          <li><strong>3. Ongoing Care:</strong> Flexible monthly follow-ups by message or short video/audio updates.</li>
        </ol>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">Your Plan Includes</h2>
        <ul className="space-y-2">
          <li>✔️ Personalized Medication Plans (GLP-1s, TRT, Supplements)</li>
          <li>✔️ Lab Testing through Quest/LabCorp</li>
          <li>✔️ Secure Portal for Messaging & Audio Check-ins</li>
          <li>✔️ Monthly Doctor Review + Adjustments</li>
        </ul>
      </section>

      <section className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-3">Join Our Early Access List</h2>
        <p className="mb-4">We’re launching soon! Enter your email to be the first to know when booking opens:</p>
        <form className="flex flex-col items-center space-y-3" action="https://formspree.io/f/xyyqldyo" method="POST">
          <input type="email" name="email" required placeholder="Your email address" className="px-4 py-2 border rounded-xl w-full max-w-sm" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700">Join Waitlist</button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>© 2025 ThriveNC MD PLLC. All rights reserved.</p>
        <p>Serving residents of North Carolina. HIPAA-Compliant Care. Cash-Based Practice.</p>
      </footer>
    </div>
  );
}
