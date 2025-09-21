'use client'

import { motion } from 'framer-motion'
import { ExternalLinkIcon, GithubIcon, PlayIcon } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Lung Cancer Detection System',
    description: 'AI-powered system using CNN with TensorFlow and Keras for real-time lung cancer detection. Features confidence scores and downloadable health reports.',
    image: '/api/placeholder/600/400',
    category: 'Computer Vision',
    tech: ['TensorFlow', 'Keras', 'CNN', 'Flask', 'Bootstrap'],
    features: [
      'Real-time lung cancer detection using CNN',
      'Confidence scores for predictions',
      'Downloadable health reports',
      'Flask web interface with Bootstrap UI'
    ],
    github: 'https://github.com/ShubhamAASP/AI_Lungs_Cancer_Detection',
    demo: 'https://shubhamaasp.github.io/AI_Lungs_Cancer_Detection/',
    status: 'Completed'
  },
  {
    title: 'Recipe Generator',
    description: 'GPT-2 powered system that generates creative recipes based on user-input ingredients, improving upon LSTM limitations with better contextual understanding.',
    image: '/api/placeholder/600/400',
    category: 'NLP',
    tech: ['GPT-2', 'Python', 'NLP', 'Transformers'],
    features: [
      'GPT-2 based recipe generation',
      'Ingredient-based recipe creation',
      'Better contextual understanding than LSTM',
      'Creative and diverse recipe suggestions'
    ],
    github: 'https://github.com/ShubhamAASP/Ingredients_Based_Recipe_Generator',
    demo: 'https://shubhamaasp.github.io/Ingredients_Based_Recipe_Generator/',
    status: 'Completed'
  },
  {
    title: 'Phishing Email Detection',
    description: 'Machine learning-based Flask web app that classifies emails as phishing or safe using content and metadata analysis. Features clean UI and animations.',
    image: '/api/placeholder/600/400',
    category: 'Machine Learning',
    tech: ['Python', 'Flask', 'Scikit-learn', 'HTML/CSS', 'JavaScript'],
    features: [
      'Email content and metadata analysis',
      'Machine learning classification',
      'Clean and animated web interface',
      'Real-time phishing detection'
    ],
    github: 'https://github.com/ShubhamAASP/Phishing_mail_detection',
    demo: 'https://shubhamaasp.github.io/Phishing_mail_detection/',
    status: 'Completed'
  },
  {
    title: 'Web Scraping Projects',
    description: 'Collection of web scraping tools and automation scripts using Selenium and BeautifulSoup for data extraction and analysis.',
    image: '/api/placeholder/600/400',
    category: 'Data Science',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Data Analysis'],
    features: [
      'Automated data extraction',
      'Web scraping with Selenium',
      'Data processing and analysis',
      'Clean and structured output'
    ],
    github: 'https://github.com/ShubhamAASP',
    demo: '#',
    status: 'Ongoing'
  },
  {
    title: 'JavaScript Interactive Projects',
    description: 'Collection of interactive web applications and tools built during IT internship at CodeSprint Technologies, focusing on API integration.',
    image: '/api/placeholder/600/400',
    category: 'Web Development',
    tech: ['JavaScript', 'HTML', 'CSS', 'API Integration', 'DOM Manipulation'],
    features: [
      'Interactive web applications',
      'API integration and handling',
      'Responsive design implementation',
      'Modern JavaScript features'
    ],
    github: 'https://github.com/ShubhamAASP',
    demo: '#',
    status: 'Completed'
  },
  {
    title: 'AI Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js 15, showcasing AI/ML projects and professional experience.',
    image: '/api/placeholder/600/400',
    category: 'Web Development',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Modern responsive design',
      'Smooth animations with Framer Motion',
      'TypeScript for type safety',
      'Optimized for mobile viewing'
    ],
    github: 'https://github.com/ShubhamAASP',
    demo: '#',
    status: 'Completed'
  }
]

const categories = ['All', 'AI Application', 'Computer Vision', 'NLP', 'Data Science', 'Generative AI', 'Machine Learning']

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
          <span className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-purple-500/20">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative AI solutions that drive real business impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-600">🚀</div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold border border-purple-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Overlay with action buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800/90 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-purple-600/90 text-white p-3 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    <PlayIcon className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-600/90 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLinkIcon className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <svg className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-800/50 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 border border-gray-700/50"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <GithubIcon className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}