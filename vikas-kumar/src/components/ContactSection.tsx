import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Code2, Instagram, Send, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

const contactLinks = [
  { icon: Mail, href: 'mailto:vs9917088347@gmail.com', label: 'Email'},
  { icon: Linkedin, href: 'https://linkedin.com/in/vikas-kumar-3273022ab', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Vikaskumar242004', label: 'GitHub' },
  { icon: Code2, href: 'https://leetcode.com/u/Vikas_Kumar_242004', label: 'LeetCode'},
  { icon: Instagram, href: 'https://www.instagram.com/codebyvikas/', label: 'Instagram'  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://getform.io/f/aqoegjda", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <p className="section-subheading">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-display font-semibold mb-6">Connect With Me</h3>

            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="glass-card p-4 flex items-center gap-4 group hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-300">
                  <link.icon size={18} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{link.label}</p>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-accent-cyan transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-premium"
                  placeholder="Vikas Kumar"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-premium"
                  placeholder="vikas@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-premium min-h-[140px] resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn-primary w-full flex items-center justify-center gap-3 text-primary-foreground font-display font-medium"
              >
                <Send size={18} />
                Send Message
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
