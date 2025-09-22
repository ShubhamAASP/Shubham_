'use client'

import { motion } from 'framer-motion'
import { StarIcon, QuoteIcon } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Tech Expression 2025 Team',
    role: 'Hackathon Organizers',
    company: 'Tech Expression 2025',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Shubham\'s AI-powered Lung Cancer Detection System showcased exceptional technical skills in deep learning and practical implementation. The CNN model with TensorFlow and Keras demonstrated real-world applicability with impressive accuracy.',
    project: 'Lung Cancer Detection System'
  },
  {
    name: 'CodeSprint Technologies',
    role: 'Internship Supervisor',
    company: 'CodeSprint Technologies',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'During the virtual internship, Shubham demonstrated strong proficiency in JavaScript and API integration. His ability to build interactive web applications and handle complex front-end development tasks was impressive.',
    project: 'JavaScript & API Integration Projects'
  },
  {
    name: 'Academic Supervisor',
    role: 'Project Guide',
    company: 'College Projects',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Shubham\'s work on the GPT-2 powered recipe generator shows deep understanding of NLP concepts. The improvement over LSTM models and contextual understanding implementation demonstrates advanced AI knowledge.',
    project: 'Recipe Generator using GPT-2'
  },
  {
    name: 'Open Source Community',
    role: 'GitHub Contributors',
    company: 'Developer Community',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'The phishing email detection system built with machine learning showcases practical problem-solving skills. The clean UI with animations and effective classification model makes it a valuable security tool.',
    project: 'Phishing Email Detection'
  },
  {
    name: 'Peer Developers',
    role: 'Fellow Students',
    company: 'Academic Network',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Shubham\'s expertise in web scraping with Selenium and BeautifulSoup is remarkable. His data extraction and automation scripts are well-structured and efficient for various data analysis projects.',
    project: 'Web Scraping & Data Analysis'
  },
  {
    name: 'Future Collaborators',
    role: 'Potential Clients',
    company: 'Industry Contacts',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Looking at Shubham\'s portfolio of AI projects, his combination of academic knowledge and practical implementation skills makes him an ideal candidate for innovative AI and machine learning projects.',
    project: 'Multiple AI/ML Projects'
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
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
          <span className="inline-block bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-yellow-500/20">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by leading companies and organizations worldwide
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-yellow-400/20">
              <QuoteIcon className="h-16 w-16" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center mb-8 relative z-10">
              &ldquo;{testimonials[currentTestimonial].text}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </span>
              </div>
              <div className="text-center md:text-left">
                <div className="text-white font-bold text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-300">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-yellow-400 font-semibold">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Project Badge */}
            <div className="flex justify-center mt-6">
              <span className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/30">
                Project: {testimonials[currentTestimonial].project}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-6 mb-16">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-yellow-500/50 transition-all duration-300"
          >
            ←
          </motion.button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-yellow-400 w-8'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-yellow-500/50 transition-all duration-300"
          >
            →
          </motion.button>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setCurrentTestimonial(index)}
              className={`bg-gray-800/30 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-yellow-500/50 ${
                index === currentTestimonial ? 'border-yellow-500/50 bg-yellow-500/5' : 'border-gray-700/50'
              }`}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s work together to create innovative AI solutions that drive your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}