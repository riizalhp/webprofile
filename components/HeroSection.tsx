'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="scroll-animate">
            <div className="mb-8">
              <p className="text-white/60 text-lg mb-6 font-normal">Hey there!</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
                I'm <span className="text-white">Fatiha Eros Perdana</span>, a product designer crafting user-centric design with pixel-perfect precision.
              </h1>
            </div>
            
            <div className="flex items-center mb-8 text-base text-white/60">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              Available for Freelancing • Yogyakarta, Indonesia • UTC/GMT +7:00
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary cursor-hover">
                Let's Work Together
              </button>
              <button className="btn-secondary cursor-hover">
                View My Work
              </button>
            </div>
          </div>

          {/* Right side - Profile image with floating skill badges */}
          <div className="relative flex justify-center lg:justify-end scroll-animate">
            <div className="relative w-80 h-80">
              {/* Visual Design Badge - Top Left */}
              <div className="absolute -top-4 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span className="text-white/90">Visual Design</span>
                </div>
              </div>

              {/* Main profile image with name badge */}
              <div className="relative">
                <div className="w-64 h-64 mx-auto">
                  <Image
                    src="https://s14.gifyu.com/images/bKOKe.gif"
                    alt="Fatiha Eros Perdana"
                    width={256}
                    height={256}
                    unoptimized={true}
                    className="rounded-full border-4 border-white/20 w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Name Badge - Bottom Right of Image */}
                <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-2xl px-4 py-2 text-sm font-bold text-white">
                  Fatiha Ers.
                </div>
              </div>

              {/* SEO Specialist Badge - Top Right */}
              <div className="absolute -top-8 -right-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  <span className="text-white/90">SEO Specialist</span>
                </div>
              </div>

              {/* UI/UX Design Badge - Left Middle */}
              <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-white/90">UI/UX Design</span>
                </div>
              </div>

              {/* Web Developer Badge - Bottom Left */}
              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  <span className="text-white/90">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}