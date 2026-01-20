import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-32 container mx-auto px-4">
    <motion.h2 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
    >
      About Me
    </motion.h2>
    
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image - Fixed height & perfect alignment */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        className="relative"
      >
        <img 
          src="/assets/about-img.jpg" 
          alt="About Akbar" 
          className="w-full h-96 md:h-[500px] rounded-2xl shadow-2xl object-cover border-4 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500"
        />
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none" />
      </motion.div>
      
      {/* Text Content - Perfect alignment */}
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
          <p className="text-xl text-slate-300 leading-relaxed">
            Self-taught developer from <span className="text-cyan-400 font-semibold">Patna, Bihar</span>, passionate about building scalable web apps with <span className="text-purple-400 font-semibold">MERN stack</span>.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-cyan-400 mb-3">Current Projects</h4>
          <p className="text-lg text-slate-300">
            Building portfolio projects like <span className="font-semibold text-white">FindWork</span> (job portal) and <span className="font-semibold text-white">QuickShow</span> (movie app).
          </p>
        </div>
        
        <div className="pt-4 border-t border-slate-700">
          <p className="text-lg text-slate-400">
            Daily coding, GitHub commits, and mastering React, Node.js, MongoDB.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
