'use client'

import { motion } from 'framer-motion'
import { 
  BrainCircuitIcon, 
  CodeIcon, 
  DatabaseIcon, 
  CloudIcon,
  ServerIcon,
  BarChart3Icon,
  GitBranchIcon,
  ShieldCheckIcon
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    icon: BrainCircuitIcon,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'Keras', level: 90 },
      { name: 'GPT-2', level: 85 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'CNN', level: 85 },
      { name: 'Deep Learning', level: 87 }
    ]
  },
  {
    title: 'Programming Languages',
    icon: CodeIcon,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 78 }
    ]
  },
  {
    title: 'Data Science & Analytics',
    icon: BarChart3Icon,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Data Analysis', level: 88 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Statistical Analysis', level: 82 },
      { name: 'Data Mining', level: 80 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 }
    ]
  },
  {
    title: 'Web Development',
    icon: ServerIcon,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Flask', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'API Integration', level: 80 }
    ]
  },
  {
    title: 'Tools & Frameworks',
    icon: CloudIcon,
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Selenium', level: 85 },
      { name: 'BeautifulSoup', level: 85 },
      { name: 'Git', level: 88 },
      { name: 'Jupyter', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker', level: 75 }
    ]
  },
  {
    title: 'Computer Vision & NLP',
    icon: DatabaseIcon,
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'OpenCV', level: 80 },
      { name: 'Image Processing', level: 85 },
      { name: 'Natural Language Processing', level: 85 },
      { name: 'Text Analysis', level: 80 },
      { name: 'Pattern Recognition', level: 82 },
      { name: 'Feature Extraction', level: 80 }
    ]
  }
]

const tools = [
  { name: 'Jupyter', icon: '📊' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Git', icon: '🔧' },
  { name: 'Tableau', icon: '📈' },
  { name: 'Postman', icon: '🚀' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Jira', icon: '📋' },
  { name: 'Slack', icon: '💬' }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-green-500/5 rounded-full blur-3xl"></div>
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
          <span className="inline-block bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-green-500/20">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in AI, machine learning, and modern web technologies
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Tools & Software</h3>
            <p className="text-gray-300">Development tools and software I use daily</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <span className="text-gray-300 text-sm font-medium text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Continuous Learning</h3>
            <div className="flex space-x-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <ShieldCheckIcon className="h-8 w-8 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-semibold">3+ Years</div>
                  <div className="text-gray-300 text-sm">AI/ML Experience</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <GitBranchIcon className="h-8 w-8 text-green-400" />
                <div className="text-left">
                  <div className="text-white font-semibold">5+ Projects</div>
                  <div className="text-gray-300 text-sm">Successfully Delivered</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <BrainCircuitIcon className="h-8 w-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-white font-semibold">Computer Engineering</div>
                  <div className="text-gray-300 text-sm">Student (2022-2026)</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}