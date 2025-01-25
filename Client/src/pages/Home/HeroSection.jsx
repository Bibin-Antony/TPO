import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import student1Image from '../../assets/Images/StudentIMG.jpg';
import student2Image from '../../assets/images/StudentIMG2.jpg';
import student3Image from '../../assets/images/StudentIMG3.jpg';

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Main Container with Background */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-20 mt-3 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Connect. Grow.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Get Placed.
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-xl mb-8">
                Your comprehensive platform for seamless placement experiences, 
                bridging talents with opportunities through intelligent solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold 
                    hover:shadow-xl transition-shadow"
                >
                  Get Started Free
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl 
                    font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-blue-400/20 backdrop-blur-sm rounded-2xl p-4 ml-auto relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={student1Image} alt="Student" className="w-full h-auto rounded-xl relative z-10" />
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-purple-400/20 backdrop-blur-sm rounded-2xl p-4 mt-12 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={student2Image} alt="TPO" className="w-full h-auto rounded-xl relative z-10" />
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-indigo-400/20 backdrop-blur-sm rounded-2xl p-4 col-span-2 -mt-12 max-w-md mx-auto relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={student3Image} alt="Recruiter" className="w-full h-auto rounded-xl relative z-10" />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/40 rounded-full blur-sm animate-pulse" />
              <div className="absolute top-1/2 -left-4 w-6 h-6 bg-purple-400/40 rounded-full blur-sm animate-pulse delay-300" />
              <div className="absolute -bottom-4 right-1/2 w-10 h-10 bg-indigo-400/40 rounded-full blur-sm animate-pulse delay-500" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 via-black/20 to-transparent backdrop-blur-[2px]" />
        
        {/* Additional Blur Layer */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-sm" />
      </div>
    </section>
  );
};

export default HeroSection;