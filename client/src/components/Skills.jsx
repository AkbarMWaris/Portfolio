import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/html5.svg', color: 'orange' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/css3.svg', color: 'blue' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg', color: 'yellow' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg', color: 'cyan' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tailwindcss.svg', color: 'indigo' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/bootstrap.svg', color: 'indigo' },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nodedotjs.svg', color: 'green' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/express.svg', color: 'gray' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg', color: 'green' },
      { name: 'SupaBase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/supabase.svg', color: 'green' },
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/git.svg', color: 'black' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg', color: 'gray' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/postman.svg', color: 'gray' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/vite.svg', color: 'teal' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/vercel.svg', color: 'black' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/netlify.svg', color: 'black' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/visualstudiocode.svg', color: 'blue' },
    ]
  };

  const categories = [
    { title: 'Frontend', data: skillsData.frontend },
    { title: 'Backend', data: skillsData.backend },
    { title: 'Tools', data: skillsData.tools }
  ];

  return (
    <section id="skills" className="py-32 container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-blue-800/30 backdrop-blur-sm rounded-3xl p-6 border border-blue-700/50 hover:border-blue-500/70 transition-all duration-500 hover:bg-blue-800/50"
          >
            {/* Category Title */}
            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-blue-600/50 pb-3">
              {category.title}
            </h3>

            {/* 3 LOGOS PER ROW - COMPACT GRID */}
            <div className="grid grid-cols-3 gap-4">
              {category.data.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -8, scale: 1.08 }}
                  className="group relative flex flex-col items-center p-3"
                >
                  <div className="bg-gradient-to-br from-white/10 to-blue-500/20 w-full aspect-square rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:bg-white/20 p-3">
                    {/* Smaller Logo */}
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain filter brightness-0 invert group-hover:brightness-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  {/* Compact Name */}
                  <span className="text-xs font-semibold text-blue-100 text-center mt-2 group-hover:text-white px-1">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
