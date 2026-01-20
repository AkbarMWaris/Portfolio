import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Projects',  'Contact'];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Akbar Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition">{link}</a>)}
        </div>
        <motion.div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </motion.div>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden absolute top-full left-0 w-full bg-black/80 py-4 space-y-2">
            {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} className="block px-4 hover:text-cyan-400">{link}</a>)}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
export default Navbar;
