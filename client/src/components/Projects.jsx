import { motion } from 'framer-motion';
import {  Code2Icon, Link } from 'lucide-react';

const projects = [
     { 
    id: 1, 
    title: 'Boardify Dashboard', 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400', 
    desc: 'Admin dashboard with analytics and user management.',
    tech: 'React, Tailwind, Chart.js',
    live: 'https://boardify.vercel.app',
    source: 'https://github.com/yourusername/boardify'
  },
  
  { 
    id: 2, 
    title: 'QuickShow Movie App', 
    img: '/assets/p1-img.png', 
    desc: 'Movie booking app along clerk authentication ease in login.',
    tech: 'React, MongoDB, Tailwind',
    live: 'https://quickshow-bookticket.vercel.app/',
    source: 'https://github.com/akbarmwaris/quickshow'
  },

  { 
    id: 3, 
    title: 'FindWork Job Portal', 
    img: '/assets/p2-img.png', 
    desc: 'Full MERN job search platform with auth and postings.',
    tech: 'React, Node, SupaBase, Tailwind',
    live: 'https://findwork-new.netlify.app/',
    source: 'https://github.com/akbarmwaris/findwork'
  },
 
];

const Projects = () => (
  <section id="projects" className="py-32 max-w-7xl mx-auto px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
    >
      Projects
    </motion.h2>
    
    {/* 3 Projects Per Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group bg-gradient-to-br from-slate-800/50 to-purple-900/50 rounded-2xl overflow-hidden shadow-2xl border border-purple-800/50 hover:border-purple-500/70 hover:shadow-purple-500/25 transition-all duration-500 max-w-sm mx-auto"
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.img} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
              {project.title}
            </h3>
            <p className="text-purple-200 text-sm mb-4 line-clamp-2">
              {project.desc}
            </p>
            <p className="text-xs text-purple-400 font-semibold mb-6 uppercase tracking-wider">
              {project.tech}
            </p>
            
            {/* Live & Source Buttons */}
            <div className="flex gap-3">
               <motion.a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white text-sm font-semibold py-2.5 px-4 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
  >
    Live Link
    <Link size={16} />
  </motion.a>
  
  {/* Source Code Button + Code Icon */}
  <motion.a
    href={project.source}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white text-sm font-semibold py-2.5 px-4 rounded-lg shadow-lg hover:shadow-slate-500/25 transition-all duration-300"
  >
    Source Code
    <Code2Icon size={16} />
  </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Projects;
