import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';

export default function Contact() {
  const [submitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            You've been redirected to our contact form. We'll get back to you within 2 business days.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full hover:from-emerald-600 hover:to-blue-700 transition-all duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           Have questions about our work? Want to volunteer, sponsor a player, or collaborate on inclusive initiatives?
           We'd love to connect and explore how we can create impact—together.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-4 rounded-full w-fit mx-auto mb-6">
                <Send className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Form</h3>
              <p className="text-gray-600 mb-8">
                Click below to access our contact form and send us your message. 
                We'll respond to all inquiries within 24 hours.
              </p>
              <a
                href="https://forms.gle/YOUR_CONTACT_FORM_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      CADPC Foundation<br />
                      Panchsheel Enclave, New Delhi - 110017<br />
                      (Include full address if applicable)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 5 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@cadpcfoundation.org</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                  <span className="font-medium text-gray-900">General Inquiries</span>
                  <span className="text-emerald-600">info@cadpcfoundation.org</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                  <span className="font-medium text-gray-900">Donations</span>
                  <span className="text-emerald-600">donate@cadpcfoundation.org</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                  <span className="font-medium text-gray-900">Volunteering</span>
                  <span className="text-emerald-600"> volunteers@cadpcfoundation.org</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                  <span className="font-medium text-gray-900">Media & Press</span>
                  <span className="text-emerald-600"> media@cadpcfoundation.org</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-emerald-200 last:border-b-0">
                  <span className="font-medium text-gray-900">Partnerships</span>
                  <span className="text-emerald-600">partners@cadpcfoundation.org</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h4 className="font-semibold text-red-800 mb-2">Emergency Contact</h4>
              <p className="text-red-700 text-sm">
                For urgent matters related to player travel, safety, or tournament support:
              </p>
              <p className="font-bold text-red-800 mt-2">+1 (555) 911-HELP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              We welcome guests and supporters to visit our center. Please schedule your visit in advance by phone or email.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  Panchsheel Enclave, New Delhi<br />
                  (Embed Google Map here)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
