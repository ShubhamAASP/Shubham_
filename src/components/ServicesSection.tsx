'use client'

import { motion } from 'framer-motion'
import { 
  BrainCircuitIcon, 
  BotIcon, 
  TrendingUpIcon, 
  EyeIcon, 
  MessageSquareIcon, 
  GraduationCapIcon 
} from 'lucide-react'

const services = [
  {
    icon: BrainCircuitIcon,
    title: 'Machine Learning Development',
    description: 'Custom ML models for prediction, classification, and recommendation systems using TensorFlow, PyTorch, and scikit-learn.',
    features: [
      'Data preprocessing and feature engineering',
      'Model training and optimization', 
      'Performance monitoring and maintenance',
      'Cloud deployment and scaling'
    ],
    popular: false
  },
  {
    icon: BotIcon,
    title: 'AI Application Development',
    description: 'End-to-end AI applications with user-friendly interfaces, from concept to deployment on cloud platforms.',
    features: [
      'Full-stack AI application development',
      'API integration and deployment',
      'User interface design and optimization',
      'Real-time AI processing'
    ],
    popular: true
  },
  {
    icon: TrendingUpIcon,
    title: 'Data Science Consulting',
    description: 'Strategic insights through data analysis, visualization, and business intelligence solutions for informed decision-making.',
    features: [
      'Data analysis and visualization',
      'Business intelligence dashboards',
      'Strategic recommendations',
      'Predictive analytics'
    ],
    popular: false
  },
  {
    icon: EyeIcon,
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis systems for object detection, recognition, and automated visual inspection.',
    features: [
      'Image classification and detection',
      'Real-time video processing',
      'Custom vision model training',
      'OCR and document processing'
    ],
    popular: false
  },
  {
    icon: MessageSquareIcon,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, chatbots, and language understanding systems for enhanced communication.',
    features: [
      'Text processing and analysis',
      'Chatbot development',
      'Language model fine-tuning',
      'Sentiment analysis systems'
    ],
    popular: false
  },
  {
    icon: GraduationCapIcon,
    title: 'AI Training & Consultation',
    description: 'Team training, technical consultation, and strategic guidance for implementing AI solutions in your organization.',
    features: [
      'Team training and workshops',
      'Technical consultation',
      'AI strategy development',
      'Technology roadmap planning'
    ],
    popular: false
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
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
          <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
            What I offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${
                service.popular 
                  ? 'border-blue-500 bg-blue-500/5 transform scale-105' 
                  : 'border-gray-700/50 hover:border-blue-500/50'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white border border-gray-600'
                }`}
              >
                Get Started
              </motion.button>
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
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a custom solution?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your AI project requirements and create innovative solutions that solve real-world problems.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}