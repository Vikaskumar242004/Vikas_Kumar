import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, X } from 'lucide-react';
import certificate from '@/assets/certificate.png';

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Certificates</h2>
          <p className="section-subheading">
            Achievements and recognitions from my journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          {/* Flip Card */}
          <div className="flip-card h-[380px] md:h-[420px]" onClick={() => setIsModalOpen(true)}>
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front glass-card p-8 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mb-6">
                  <Award size={32} className="text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-center mb-3 gradient-text">
                  National-Level Hackathon
                </h3>
                
                <p className="text-muted-foreground text-center text-lg mb-2">
                  Hack with Uttar Pradesh 2025
                </p>
                
                <p className="text-sm text-muted-foreground/70 text-center mb-6">
                  Chandigarh University
                </p>
                
                <p className="text-xs text-accent-cyan/70 animate-pulse-soft">
                  Hover to preview • Click to view full
                </p>
              </div>

              {/* Back */}
              <div className="flip-card-back glass-card overflow-hidden p-4 flex items-center justify-center bg-card">
                <img
                  src={certificate}
                  alt="Hack with Uttar Pradesh 2025 Certificate"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center text-muted-foreground mt-8 text-sm"
          >
            National-Level Hackathon Participant – Hack with Uttar Pradesh 2025
          </motion.p>
        </motion.div>
      </div>

      {/* Full Image Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 md:top-0 md:-right-12 w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              <X size={20} />
            </button>
            
            <div className="glass-card p-4 md:p-6 overflow-hidden">
              <img
                src={certificate}
                alt="Hack with Uttar Pradesh 2025 Certificate - Full View"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;