'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WrenchScrewdriverIcon, LightBulbIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'

const values = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Innovation',
    description: 'Constantly exploring new technologies and methodologies to create cutting-edge AI solutions'
  },
  {
    icon: LightBulbIcon,
    title: 'Problem Solving',
    description: 'Transforming complex challenges into elegant, efficient, and scalable AI-powered solutions'
  },
  {
    icon: UserGroupIcon,
    title: 'Collaboration',
    description: 'Working closely with teams and clients to ensure AI solutions meet real-world needs'
  },
  {
    icon: TrophyIcon,
    title: 'Excellence',
    description: 'Committed to delivering high-quality, reliable, and impactful AI systems'
  }
]

const achievements = [
  '🎓 Computer Engineering Student (2022-2026)',
  '🏆 Tech Expression 2025 Hackathon Participant',
  '💼 IT Intern at CodeSprint Technologies',
  '🚀 5+ AI/ML Projects Deployed',
  '🧠 Deep Learning & Computer Vision Expert',
  '📧 Phishing Detection System Developer'
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gradient-to-r from-purple-500 to-blue-500 shadow-2xl shadow-purple-500/20">
                  <Image
                    src="/me3.jpg"
                    alt="Shubham Patil - AI & ML Engineer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg"
                >
                  <div className="text-center">
                    <div className="font-bold text-lg">3+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-500/20"
            >
              Get to know me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Shubham Patil
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              I'm a passionate AI & Machine Learning Engineer currently pursuing Computer Engineering 
              at Shivajirao S. Jondhale College of Engineering, Dombivali (2022-2026). With 3+ years 
              of experience in the field, I specialize in developing intelligent solutions using 
              cutting-edge technologies.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              My expertise spans Deep Learning, Computer Vision, and Natural Language Processing. 
              I've successfully developed and deployed multiple AI systems including lung cancer 
              detection systems, recipe generators, and phishing email detection tools. Currently, 
              I'm working on innovative projects that bridge the gap between AI research and 
              real-world applications.
            </motion.p>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Let's Work Together
              </motion.button>
              <motion.a
                href="https://github.com/ShubhamAASP"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                View GitHub Profile
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What Drives Me</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The core values that guide my approach to AI development and professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}