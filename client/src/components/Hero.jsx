import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer", 
    "Frontend Developer",
    "Gamer"
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (isDeleting) {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => {
            if (prev.length > 0) {
              return prev.slice(0, -1);
            } else {
              setIsDeleting(false);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
              return '';
            }
          });
        }, 50);
      } else {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => {
            if (prev.length < fullText.length) {
              return fullText.slice(0, prev.length + 1);
            } else {
              setTimeout(() => setIsDeleting(true), 1000);
              return prev;
            }
          });
        }, 80);
      }
    };

    timeoutId = setTimeout(handleTyping, 10);
    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, My name is <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Akbar Mahmood Waris
            </span>
          </h2>
          
          {/* Typewriter: "I am [role]|" */}
          <div className="text-xl md:text-2xl mb-8 font-semibold relative">
            <span className="text-slate-300">I am a </span>
            <span className="text-cyan-400">{displayText}</span>
            <span className="inline-block w-px h-8 ml-1 bg-gradient-to-b from-cyan-400 to-purple-500 animate-pulse">
              |
            </span>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all cursor-pointer"
          >
            View Projects →
          </motion.button>
        </motion.div>

        {/* Right - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <img 
            src="/assets/hero-img.png" 
            alt="Akbar - Developer" 
            className="rounded-2xl shadow-2xl w-full h-96 md:h-[500px] object-cover border-4 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500"
          />
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
