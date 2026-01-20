import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg',
      href: 'https://github.com/AkbarMWaris',
    },
    {
      name: 'LinkedIn', 
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg',
      href: 'https://linkedin.com/in/akbarmwaris',
    },
    {
      name: 'Email',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/gmail.svg',
      href: 'mailto:akbarmahmoodwaris@gmail.com?subject=Portfolio%20Contact&body=Hi%20Akbar,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss...',
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-6 px-16 bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-md border-t border-purple-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center">
          {/* Left - Made with ❤️ + Copyright */}
          <div className="flex items-center gap-2 text-purple-200 text-sm">
            <span>Made with</span>
            <motion.span 
              className="text-red-400 text-lg font-bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ❤️
            </motion.span>
            <span className="font-semibold text-white">AM Waris</span>
            <span className="text-purple-300 ml-2">© {currentYear}</span>
          </div>

          {/* Right - Icon Cards ONLY (No Names) */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.1 }}
                className="group relative p-2.5 bg-gradient-to-br from-white/10 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 w-12 h-12 flex items-center justify-center"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 object-contain filter brightness-0 invert group-hover:brightness-100 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
