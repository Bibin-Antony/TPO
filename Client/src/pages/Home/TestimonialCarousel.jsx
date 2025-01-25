import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialCard = ({ name, role, company, image, text, rating }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <StarIcon 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} 
        />
      ))}
    </div>
    <p className="text-gray-600 text-lg mb-6">{text}</p>
    <div className="flex items-center">
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role} at {company}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      image: "/testimonials/priya.jpg",
      text: "TalentBridge made my placement journey seamless. The mock interviews and company-specific preparation resources were invaluable.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "TPO",
      company: "IIT Delhi",
      image: "/testimonials/rahul.jpg",
      text: "This platform has revolutionized how we manage placements. The analytics and reporting features help us make data-driven decisions.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "HR Manager",
      company: "Microsoft",
      image: "/testimonials/sarah.jpg",
      text: "The AI-powered matching system helps us find the perfect candidates quickly. It's been a game-changer for our recruitment process.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-blue-600 text-sm font-bold tracking-wider uppercase block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from students, TPOs, and recruiters who have transformed their placement process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow">
            View More Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;