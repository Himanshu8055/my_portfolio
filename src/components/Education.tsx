'use client'

import { Book } from 'lucide-react';
import { motion } from 'framer-motion';

function Education() {
  const educations = [
    {
      year: "2021 - 2024",
      degree: "Bachelor of Computer Applications",
      institution: "Mahatma Gandhi Kashi Vidyapeeth",
      description: "Focused on computer science fundamentals, programming, and web development."
    },
    {
      year: "2020 - 2021",
      degree: "Intermediate (12th)",
      institution: "UP Board",
      description: "Completed higher secondary education with focus on mathematics and computer science."
    },
    {
      year: "2018 - 2019",
      degree: "High School (10th)",
      institution: "CBSE Board",
      description: "Completed secondary education with distinction, laying strong foundation in science and mathematics."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-20">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
          Educational Journey
        </span>
      </h2>

      <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:flex before:items-center">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 z-0" />

        <div className="space-y-16 relative z-10">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} relative`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-5 h-5 rounded-full border-4 border-purple-500 z-20" />

              {/* Card */}
              <div className={`md:w-1/2 px-4 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
                  <div className="relative bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Book className="text-purple-400" />
                      <span className="text-sm text-purple-400">{edu.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white">{edu.degree}</h3>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
