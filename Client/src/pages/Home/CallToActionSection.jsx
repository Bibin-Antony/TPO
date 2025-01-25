import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CallToActionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-2">
          <div className="bg-white rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold mb-6"
                >
                  Ready to Transform Your{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Placement Process?
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  Join thousands of colleges and companies already using our platform to streamline their recruitment process.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl flex items-center"
                  >
                    Get Started Free
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Schedule Demo
                  </motion.button>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-bold text-2xl text-blue-600">95%</h3>
                    <p className="text-gray-600">Placement Rate</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="font-bold text-2xl text-purple-600">500+</h3>
                    <p className="text-gray-600">Partner Companies</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-2xl text-green-600">10K+</h3>
                    <p className="text-gray-600">Students Placed</p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h3 className="font-bold text-2xl text-indigo-600">100+</h3>
                    <p className="text-gray-600">Institutions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;