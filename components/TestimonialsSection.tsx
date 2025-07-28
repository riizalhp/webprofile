'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      testimonial: "Rizal's project management skills are exceptional. He delivered our e-commerce platform ahead of schedule and under budget. His attention to detail and communication skills made the entire process smooth and efficient."
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      company: "InnovateLab",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      testimonial: "Working with Rizal was a game-changer for our team. His ability to coordinate between different departments and manage complex timelines is remarkable. I highly recommend him for any project management needs."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, DigitalFlow",
      company: "DigitalFlow",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      testimonial: "Rizal brought structure and clarity to our chaotic development process. His risk management approach saved us from potential disasters, and his leadership kept the team motivated throughout the project."
    },
    {
      name: "David Kim",
      role: "Founder, StartupX",
      company: "StartupX",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      testimonial: "As a startup founder, I needed someone who could wear multiple hats and adapt quickly. Rizal exceeded all expectations. His project management expertise helped us scale efficiently and meet our ambitious deadlines."
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            What clients and collaborators say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card scroll-animate cursor-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white/20"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-xs">{testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
              
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}