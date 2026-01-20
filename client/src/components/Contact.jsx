import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,    // ← From .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   // ← From .env
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY     // ← From .env
      );
      
      toast.success('Message sent to your Gmail! 🎉');
      reset();
    } catch (error) {
      toast.error('Failed to send. Try again!');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-4">
      <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Contact Me
      </motion.h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
        <input 
          {...register('name', { required: true })} 
          placeholder="Your Name" 
          className="w-full p-4 bg-slate-800/50 border border-purple-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
        />
        <input 
          {...register('email', { required: true })} 
          type="email" 
          placeholder="your@email.com" 
          className="w-full p-4 bg-slate-800/50 border border-purple-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
        />
        <textarea 
          {...register('message', { required: true })} 
          placeholder="Your Message" 
          rows={5} 
          className="w-full p-4 bg-slate-800/50 border border-purple-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
        />
        <motion.button 
          whileHover={{ scale: 1.02 }} 
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-4 rounded-xl font-bold shadow-xl hover:shadow-purple-500/25"
        >
          <Send size={20} />
          Send Message
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
