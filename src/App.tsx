import React from 'react';
import { PhoneCall, MessageSquare, Headphones } from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="bg-blue-700 text-white py-4 shadow">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SupportPro</h1>
          <a href="tel:18445400827" className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100">
            Call: 1-844-540-0827
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">24/7 Tech Support</h2>
          <p className="text-lg mb-6">Fast, reliable support for all your devices. Call us now!</p>
          <a href="tel:18445400827" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-800">
            Call Now: 1-844-540-0827
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <Headphones className="mx-auto h-10 w-10 text-blue-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Device Setup</h4>
              <p>Expert help for your computers, phones, routers, and more.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <MessageSquare className="mx-auto h-10 w-10 text-blue-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Live Troubleshooting</h4>
              <p>Fix errors, speed up your device, remove viruses instantly.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <PhoneCall className="mx-auto h-10 w-10 text-blue-700 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Call Support</h4>
              <p>Get certified support anytime. We're just a call away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Right Now?</h3>
          <p className="mb-6">Our support team is ready to assist you 24/7.</p>
          <a href="tel:18445400827" className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800">
            Talk to Expert Now
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Why SupportPro?</h3>
          <p className="text-gray-700">
            With years of experience and certified technicians, SupportPro offers fast and friendly solutions for your tech problems.
            Whether it's a laptop, printer, mobile, or smart device — we’ve got your back.
          </p>
        </div>
      </section>

      {/* Floating Call Button */}
      <a href="tel:18445400827" className="fixed bottom-5 right-5 bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-800 z-50 flex items-center">
        <PhoneCall className="h-5 w-5 mr-2" />
        Call Us Now
      </a>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 text-center">
        <p>© 2025 SupportPro. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
