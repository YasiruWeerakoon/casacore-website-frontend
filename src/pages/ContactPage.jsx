import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We'd love to hear from you! Whether you have a question about our products,
            our vision, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Contact Details */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
            <p className="mt-4 text-lg text-gray-600">
              You can reach us directly or find us at our (future!) office in Colombo.
            </p>
            <div className="mt-10 space-y-8">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">Have a quick question? Give us a call.</p>
                  <p className="mt-2 text-lg text-green-700 font-semibold">+94 77 123 4567</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">For support, questions, or partnerships.</p>
                  <p className="mt-2 text-lg text-green-700 font-semibold">hello@casacore.lk</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
                  <p className="text-gray-600">Visit our headquarters (by appointment!).</p>
                  <p className="mt-2 text-lg text-green-700 font-semibold">
                    123 Galle Road, Colombo 03, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault(); 
              // In a real app, you'd send this to your backend
              alert('Form submitted! (This is a demo)'); 
            }}
            className="rounded-lg bg-gray-50 p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Send us a message</h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form and our team will get back to you shortly.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-3.5 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}