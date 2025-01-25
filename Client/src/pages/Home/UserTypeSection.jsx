import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const UserTypeCard = ({ title, description, Icon, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 }
    }
  };

  const iconColors = {
    Students: "from-blue-500 to-cyan-500",
    TPOs: "from-green-500 to-emerald-500",
    Recruiters: "from-purple-500 to-indigo-500"
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <motion.div 
        className="relative h-full p-8 rounded-2xl bg-white transition-shadow duration-300 hover:shadow-2xl"
        whileHover={{ y: -10 }}
      >
        {/* Icon Container */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${iconColors[title]} p-4 mb-6`}>
          <Icon className="w-full h-full text-white" />
        </div>

        {/* Content */}
        <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${iconColors[title]} bg-clip-text text-transparent`}>
          {title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {description}
        </p>

        {/* Button always at bottom */}
        <div className="mt-auto">
          <Link 
            to={`/${title.toLowerCase()}`}
            className={`inline-block px-6 py-2 text-sm font-semibold rounded-lg 
              bg-gradient-to-r ${iconColors[title]} text-white transition-shadow
              hover:shadow-lg`}
          >
            Learn More →
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className={`absolute top-0 right-0 w-32 h-32 
          bg-gradient-to-br ${iconColors[title]} opacity-5 
          blur-3xl rounded-full -mr-16 -mt-16`} 
        />
        <div className={`absolute bottom-0 left-0 w-24 h-24 
          bg-gradient-to-br ${iconColors[title]} opacity-5 
          blur-2xl rounded-full -ml-12 -mb-12`} 
        />
      </motion.div>
    </motion.div>
  );
};

const UserTypeSection = () => {
  const userTypes = [
    {
      title: "Students",
      description: "Build your career path with a powerful profile, track applications in real-time, and discover tailored opportunities that match your skills and aspirations.",
      Icon: UserIcon
    },
    {
      title: "TPOs",
      description: "Streamline placement processes, gain insights through analytics, and elevate your institution's success with comprehensive placement management tools.",
      Icon: AcademicCapIcon
    },
    {
      title: "Recruiters",
      description: "Access a curated pool of talented candidates, utilize AI-powered matching, and transform your recruitment process with efficient hiring solutions.",
      Icon: BriefcaseIcon
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r 
            from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Who Can Benefit?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <UserTypeCard key={index} {...type} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypeSection;