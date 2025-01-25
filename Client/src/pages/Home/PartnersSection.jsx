import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const companies = [
    {
      name: "Google",
      logo: "/logos/google.svg",
      placements: 150,
      category: "Tech Giant"
    },
    {
      name: "Microsoft",
      logo: "/logos/microsoft.svg",
      placements: 120,
      category: "Tech Giant"
    },
    {
      name: "Amazon",
      logo: "/logos/amazon.svg",
      placements: 200,
      category: "Tech Giant"
    },
    {
      name: "Meta",
      logo: "/logos/meta.svg",
      placements: 80,
      category: "Tech Giant"
    },
    {
      name: "Adobe",
      logo: "/logos/adobe.svg",
      placements: 60,
      category: "Software"
    },
    {
      name: "Salesforce",
      logo: "/logos/salesforce.svg",
      placements: 90,
      category: "Software"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <motion.div
          animate={{
            opacity: [0.5, 0.2, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-400 text-sm font-bold tracking-wider uppercase block mb-4">
            Our Network
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-100">
            Join the network of top companies actively recruiting through our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 
                  hover:bg-white/20 transition-all duration-300 group"
              >
                {/* Replace with actual logo */}
                <div className="h-12 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{company.name}</span>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400 mb-2">
                    {company.placements}+
                  </p>
                  <p className="text-sm text-blue-200">Students Placed</p>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full mt-4">
                    {company.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-200 mb-8">
            And many more leading companies actively recruiting through our platform
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold 
              shadow-lg hover:shadow-xl transition-shadow"
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;