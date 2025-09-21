'use client'

import { motion } from 'framer-motion'
import { CalendarDaysIcon, MapPinIcon, BriefcaseIcon } from 'lucide-react'

const experiences = [
  {
    title: 'AI Developer',
    company: 'Tech Expression 2025 Hackathon',
    location: 'Remote/Online',
    duration: 'Feb 2025',
    type: 'Hackathon',
    description: 'Developed an AI-powered Lung Cancer Detection System using CNN with TensorFlow and Keras.',
    achievements: [
      'Built CNN model using TensorFlow and Keras for lung cancer detection',
      'Integrated AI model with Flask web framework',
      'Implemented Bootstrap for responsive UI design',
      'Created system with real-time predictions and confidence scores',
      'Developed downloadable health report feature'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Flask', 'Bootstrap'],
    current: false
  },
  {
    title: 'Information Technology Intern',
    company: 'CodeSprint Technologies',
    location: 'Remote',
    duration: 'Jul 2024 – Aug 2024',
    type: 'Virtual Internship',
    description: 'Completed a virtual internship focused on JavaScript and API integration with hands-on project development.',
    achievements: [
      'Built multiple interactive web projects using JavaScript',
      'Gained hands-on experience in front-end development',
      'Worked extensively with API integration and handling',
      'Developed modern web applications with responsive design',
      'Enhanced skills in DOM manipulation and event handling'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration', 'DOM Manipulation'],
    current: false
  },
  {
    title: 'AI & ML Project Developer',
    company: 'Personal Projects',
    location: 'Independent',
    duration: '2022 - Present',
    type: 'Self-Directed',
    description: 'Developing various AI and machine learning projects focusing on real-world problem solving.',
    achievements: [
      'Created GPT-2 powered recipe generator with improved contextual understanding',
      'Developed phishing email detection system using machine learning',
      'Built web scraping tools using Selenium and BeautifulSoup',
      'Implemented computer vision solutions for health applications',
      'Deployed multiple AI models with Flask web interfaces'
    ],
    technologies: ['Python', 'GPT-2', 'Scikit-learn', 'Selenium', 'BeautifulSoup', 'Flask'],
    current: true
  }
]

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    school: 'Shivajirao S. Jondhale College of Engineering, Dombivali',
    location: 'Dombivali, Maharashtra',
    duration: '2022 - 2026',
    specialization: 'Computer Engineering with focus on AI & ML',
    gpa: 'Currently Pursuing',
    achievements: [
      'Specialized coursework in AI and Machine Learning',
      'Active participation in tech hackathons and competitions',
      'Developed multiple AI/ML projects during academic tenure'
    ]
  },
  {
    degree: 'XII (State Board)',
    school: 'B. K. Birla College of Arts, Science & Commerce, Kalyan',
    location: 'Kalyan, Maharashtra',
    duration: '2022',
    specialization: 'Science Stream',
    gpa: '73.33%',
    achievements: [
      'Strong foundation in Mathematics and Science',
      'Excellent academic performance in final year',
      'Developed interest in programming and technology'
    ]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-indigo-500/20">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional journey through the evolving landscape of AI and data science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <BriefcaseIcon className="h-6 w-6 mr-3 text-indigo-400" />
              Professional Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/50 ${
                    exp.current ? 'border-indigo-500/50 bg-indigo-500/5' : 'border-gray-700/50'
                  }`}
                >
                  {/* Current Position Badge */}
                  {exp.current && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Current Position
                      </span>
                    </div>
                  )}

                  {/* Job Header */}
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <span className="font-semibold text-indigo-400">{exp.company}</span>
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{exp.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <svg className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <svg className="h-6 w-6 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300"
                >
                  {/* Degree Header */}
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <span className="font-semibold text-indigo-400">{edu.school}</span>
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>

                  {/* Specialization & GPA */}
                  <div className="mb-4">
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold">Specialization:</span> {edu.specialization}
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">GPA:</span> {edu.gpa}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      Notable Achievements
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <svg className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-white mb-4">Technical Skills & Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Deep Learning & Computer Vision Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">TensorFlow & Keras Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Full Stack Web Development</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}