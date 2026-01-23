import { motion } from 'framer-motion';
import { File, Github, Linkedin } from 'lucide-react';  // Add icons import

const About = () => (
  <section id="about" className="py-32 max-w-7xl mx-auto px-4">
    <motion.h2 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
    >
      About Me
    </motion.h2>
    
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        className="relative"
      >
        <img 
          src="/assets/about-img.jpg" 
          alt="About Akbar" 
          className="w-full h-96 md:h-[500px] rounded-2xl shadow-2xl object-cover border-4 border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none" />
      </motion.div>
      
      {/* Text + Buttons */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Passionate Full-Stack Developer
          </h3>
          <p className="text-xl text-purple-200 leading-relaxed">
            Self-taught developer from <span className="text-purple-400 font-semibold">Darbhanga, Bihar</span>, passionate about building scalable web apps with <span className="text-pink-400 font-semibold">MERN stack</span>.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-purple-400 mb-3">Current Projects</h4>
          <p className="text-lg text-purple-200">
            Building portfolio projects like <span className="font-semibold text-white">FindWork</span> (job portal) and <span className="font-semibold text-white">QuickShow</span> (movie app).
          </p>
        </div>
        

<div className="flex gap-4 pt-4">
  <motion.a
    href="https://github.com/akbarmwaris"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800/70 to-purple-900/70 hover:from-slate-700/80 hover:to-purple-800/80 backdrop-blur-sm border border-purple-700/50 hover:border-purple-500/70 text-white p-4 rounded-xl font-semibold shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
  >
    <Github size={20} />
    GitHub
  </motion.a>
  
  <motion.a
    href="https://linkedin.com/in/akbarmwaris"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800/70 to-purple-900/70 hover:from-slate-700/80 hover:to-purple-800/80 backdrop-blur-sm border border-purple-700/50 hover:border-purple-500/70 text-white p-4 rounded-xl font-semibold shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
  >
    <Linkedin size={20} />
    LinkedIn
  </motion.a>

  <motion.a
    href="https://drive.google.com/file/d/1OEcuuwYyqkaHOOXl4tbKGj7GxqVPPx3U/view"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800/70 to-purple-900/70 hover:from-slate-700/80 hover:to-purple-800/80 backdrop-blur-sm border border-purple-700/50 hover:border-purple-500/70 text-white p-4 rounded-xl font-semibold shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
  >
    <File size={20} />
    Resume
  </motion.a>
</div>

        <div className="pt-4 border-t border-purple-700/50">
          <p className="text-lg text-purple-300">
            Daily coding, GitHub commits, and mastering React, Node.js, MongoDB.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
