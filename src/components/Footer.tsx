'use client'

import { motion } from 'framer-motion'
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  ArrowUpIcon,
  HeartIcon
} from 'lucide-react'

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

const services = [
  'Machine Learning Development',
  'AI Application Development', 
  'Data Science Consulting',
  'Computer Vision Solutions',
  'Natural Language Processing',
  'AI Training & Consultation'
]

const socialLinks = [
  {
    icon: LinkedinIcon,
    href: 'https://linkedin.com/in/shubham-patil',
    label: 'LinkedIn'
  },
  {
    icon: GithubIcon,
    href: 'https://github.com/ShubhamAASP',
    label: 'GitHub'
  },
  {
    icon: TwitterIcon,
    href: 'https://twitter.com/shubham_patil',
    label: 'Twitter'
  }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Shubham Patil
              </h3>
              <p className="text-gray-300 mt-3 leading-relaxed">
                AI & Machine Learning Engineer specializing in Deep Learning, Computer Vision, and NLP solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MailIcon className="h-4 w-4 text-blue-400" />
                <span className="text-sm">shubhamp1341@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="h-4 w-4 text-blue-400" />
                <span className="text-sm">(+91) 9321664619</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPinIcon className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Dombivali, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm block"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-6">
              Follow me on social media for the latest updates on AI trends and project insights.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">Available for Projects</span>
              </div>
              <p className="text-gray-300 text-xs">
                Ready to take on new AI challenges
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center"
          >
            <span>© {currentYear} Shubham Patil. Made with</span>
            <HeartIcon className="h-4 w-4 text-red-400 mx-1" />
            <span>using Next.js & AI</span>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            <span>Back to Top</span>
            <ArrowUpIcon className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 py-4"
        >
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </motion.div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowUpIcon className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}