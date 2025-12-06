import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient orbs - more subtle */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: 'hsl(200 100% 60% / 0.08)' }}
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: 'hsl(260 80% 65% / 0.08)' }}
      />
      
      {/* Subtle floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[20%] w-2 h-2 rounded-full bg-accent-cyan/30"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[15%] w-1.5 h-1.5 rounded-full bg-accent-purple/30"
      />
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[10%] w-1 h-1 rounded-full bg-accent-cyan/40"
      />
    </div>
  );
};

export default ParticlesBackground;