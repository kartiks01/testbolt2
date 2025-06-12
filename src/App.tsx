import React from 'react';
import { Phone, Mail, MessageCircle, Clock, Shield, Users, CheckCircle, ArrowRight, HeadphonesIcon } from 'lucide-react';

function App() {
  const phoneNumber = '18445400827';
  const formattedPhone = '1-844-540-0827';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <HeadphonesIcon className="h-8 w-8 text-blue-700 mr-2" />
              <span className="text-xl font-bold text-gray-900">SupportPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors">About</a>
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                {formattedPhone}
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert Customer Support
              <span className="block text-blue-700">24/7</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get immediate help from our certified technical support specialists. 
              We're here to solve your problems quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 flex items-center text-lg font-semibold transform hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call Now: {formattedPhone}
              </a>
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors border border-blue-700 flex items-center text-lg font-semibold">
                <MessageCircle className="h-5 w-5 mr-3" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Support Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical support solutions for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Direct phone support with certified technicians available 24/7 to help resolve your issues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Instant connection
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Expert technicians
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Real-time chat support for quick questions and immediate assistance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Instant responses
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Screen sharing
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Support</h3>
              <p className="text-gray-600 mb-4">
                Specialized security and privacy support to keep your data protected.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Malware removal
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Privacy protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Available Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">&lt;2min</div>
              <div className="text-gray-600">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach our support team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
              <a 
                href={`tel:${phoneNumber}`}
                className="text-blue-700 hover:text-blue-800 font-semibold text-lg transition-colors"
              >
                {formattedPhone}
              </a>
              <p className="text-sm text-gray-600 mt-2">Available 24/7</p>
            </div>

            <div className="text-center p-8 bg-teal-50 rounded-xl">
              <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <a 
                href="mailto:support@supportpro.com"
                className="text-teal-700 hover:text-teal-800 font-semibold transition-colors"
              >
                support@supportpro.com
              </a>
              <p className="text-sm text-gray-600 mt-2">Response within 1 hour</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="bg-orange-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
              <button className="text-orange-700 hover:text-orange-800 font-semibold transition-colors">
                Start Chat Now
              </button>
              <p className="text-sm text-gray-600 mt-2">Instant connection</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SupportPro?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience in technical support, we've helped thousands 
                of customers resolve their technology challenges quickly and efficiently.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Technicians</h4>
                    <p className="text-gray-600">All our support staff are certified professionals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                    <p className="text-gray-600">Round-the-clock support when you need it most</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Money-Back Guarantee</h4>
                    <p className="text-gray-600">100% satisfaction guaranteed or your money back</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <Users className="h-16 w-16 text-blue-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of satisfied customers who trust us with their technical support needs.
                </p>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call {formattedPhone}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <HeadphonesIcon className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">SupportPro</span>
              </div>
              <p className="text-gray-400">
                Professional technical support services available 24/7 to help you solve any technology challenge.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone Support</li>
                <li>Live Chat</li>
                <li>Email Support</li>
                <li>Security Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">
                    {formattedPhone}
                  </a>
                </li>
                <li>
                  <a href="mailto:support@supportpro.com" className="hover:text-white transition-colors">
                    support@supportpro.com
                  </a>
                </li>
                <li>Available 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 SupportPro. All rights reserved.
              </p>
              <div className="bg-yellow-900 text-yellow-200 px-4 py-2 rounded-lg text-sm max-w-2xl">
                <strong>Disclaimer:</strong> SupportPro is an independent third-party technical support service. 
                We are not affiliated with any specific hardware or software manufacturers. All trademarks 
                are the property of their respective owners.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center group transform hover:scale-105"
        >
          <Phone className="h-6 w-6" />
          <span className="ml-3 font-semibold hidden group-hover:inline-block whitespace-nowrap">
            {formattedPhone}
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;