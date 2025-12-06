import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowDown, Code2 } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Vikaskumar242004', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vikas-kumar-3273022ab', label: 'LinkedIn' },
  { icon: Code2, href: 'https://leetcode.com/u/Vikas_Kumar_242004', label: 'LeetCode' },
  { icon: Instagram, href: 'https://www.instagram.com/codebyvikas/', label: 'Instagram' },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">

              {/* Gradient ring */}
              <div 
                className="absolute inset-0 rounded-full p-[3px]"
                style={{
                  background: 'linear-gradient(135deg, hsl(200 100% 60%) 0%, hsl(260 80% 65%) 100%)',
                }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Profile Image */}
              <img
                src="vikasimage.jpg"   // <-- change to your filename
                alt="Vikas Kumar"
                className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover"
              />

              {/* Floating accents */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent-cyan"
                style={{ boxShadow: '0 0 20px hsl(200 100% 60% / 0.5)' }}
              />
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-accent-purple"
                style={{ boxShadow: '0 0 16px hsl(260 80% 65% / 0.5)' }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse-soft" />
              <span className="text-sm text-accent-cyan font-medium">Available for opportunities</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight"
            >
              Hi, I'm <span className="gradient-text">Vikas Kumar</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-6 font-medium"
            >
              Full-Stack Developer • React.js • Next.js • AI Integrations
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Self-taught full-stack developer passionate about AI-powered applications, 
              real-time systems, and modern web development.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="w-11 h-11 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent-cyan/30 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="/resume.pdf"
              download="Vikas_Kumar_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-3 text-primary-foreground font-display font-medium"
            >
              Download Resume
              <ArrowDown size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-accent-cyan"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
