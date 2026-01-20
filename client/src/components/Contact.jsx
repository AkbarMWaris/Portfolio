import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    alert('Message sent!');
  };

  return (
    <section id="contact" className="py-32 container mx-auto px-4">
      <motion.h2 whileInView={{ opacity: 1 }} className="text-4xl font-bold text-center mb-20">Contact Me</motion.h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
        <input {...register('name')} placeholder="Name" className="w-full p-4 bg-slate-800 rounded-xl" required />
        <input {...register('email')} type="email" placeholder="Email" className="w-full p-4 bg-slate-800 rounded-xl" required />
        <textarea {...register('message')} placeholder="Message" rows={5} className="w-full p-4 bg-slate-800 rounded-xl" required />
        <motion.button whileHover={{ scale: 1.02 }} type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl font-bold">
          <Send size={20} /> Send Message
        </motion.button>
      </form>
    </section>
  );
};
export default Contact;
