import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentCheckIcon, 
  SparklesIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

const FeatureCard = ({ title, description, Icon, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        whileHover={{ y: -8, scale: 1.02 }}
        className="h-full p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20
          hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
      >
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="inline-block p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6"
        >
          <Icon className="w-8 h-8 text-blue-400" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-lg text-gray-300 leading-relaxed">{description}</p>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 
          group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Comprehensive Profiles",
      description: "Create detailed student portfolios showcasing academic achievements, skills, and professional aspirations with dynamic visualization.",
      Icon: DocumentCheckIcon
    },
    {
      title: "Smart Matching",
      description: "Experience AI-driven job recommendations that precisely match your skills and preferences with relevant opportunities.",
      Icon: SparklesIcon
    },
    {
      title: "Seamless Communication",
      description: "Connect effortlessly through our integrated messaging platform that brings together students, TPOs, and recruiters.",
      Icon: ChatBubbleLeftRightIcon
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Platform Features
          </h2>
          <p className="text-xl text-gray-300">
            Discover the tools and features that make our platform unique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;