import React from 'react';
import { Leaf, Home, Rocket, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-800 py-32 sm:py-48">
        <img
          src="https://placehold.co/1600x800/22C55E/FFFFFF?text=Our+Vision"
          alt="Green plant close-up"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story & Our Vision
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            From a tiny cactus to a complete Sri Lankan home.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-24">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We believe your home is a part of you.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to CasaCore. We're a new Sri Lankan brand with a very big dream.
            We believe that a beautiful, well-designed home shouldn't be a luxury—it should be a possibility for everyone.
            Your space is where you build your life, and we want to help you build it.
          </p>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            
            {/* 1. Our Humble Start */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                <Leaf size={32} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Humble Start</h3>
              <p className="mt-4 text-gray-600">
                Every great journey begins with a single step. Ours begins with a tiny, adorable cactus.
                Why a cactus? Because it's a symbol of growth, resilience, and beauty.
                It's the perfect reminder that even the biggest dreams start small.
              </p>
            </div>

            {/* 2. Our Grand Vision */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                <Rocket size={32} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Grand Vision</h3>
              <p className="mt-4 text-gray-600">
                Our goal is to become the **IKEA of Sri Lanka**. We're building a place
                where you can find everything you need to design your space, from furniture to decor,
                all under one roof. Beautiful, functional, and affordable.
              </p>
            </div>

            {/* 3. Our Promise */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                <Home size={32} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Promise to You</h3>
              <p className="mt-4 text-gray-600">
                We are a Sri Lankan company, for Sri Lankan homes. We promise to bring you
                modern design, great quality, and honest prices. We are just starting, and
                we're so glad you're here with us from day one.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Founder Section (Placeholder) */}
      <div className="py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A word from our founder
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                "My name is Yasiru Weerakoon, and I started CasaCore with one simple belief:
                we all deserve to live in a space that inspires us. This is more than a business;
                it's a mission to help build a more beautiful Sri Lanka, one home at a time.
                Thank you for being part of our story."
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://placehold.co/600x400/333333/FFFFFF?text=Yasiru+Weerakoon" 
                alt="Yasiru Weerakoon, Founder of CasaCore"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}