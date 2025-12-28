import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X } from "lucide-react";

import unstopCert from "@/assets/certificate-unstop.jpeg";
import hackathonCert from "@/assets/certificate-hackathon.png";

const certificates = [
  {
    title: "National-Level Hackathon",
    subtitle: "Hack with Uttar Pradesh 2025",
    organizer: "Chandigarh University",
    image: hackathonCert,
  },
  {
    title: "Participation Certificate",
    subtitle: "Hack with Uttar Pradesh 2025",
    organizer: "Unstop Platform",
    image: unstopCert,
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Certificates</h2>
          <p className="section-subheading">
            Achievements and recognitions from my hackathon journey
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flip-card h-[360px] md:h-[400px]"
                onClick={() => setActiveImage(cert.image)}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front glass-card p-8 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mb-6">
                      <Award size={32} className="text-primary-foreground" />
                    </div>

                    <h3 className="text-xl font-display font-bold text-center mb-2 gradient-text">
                      {cert.title}
                    </h3>

                    <p className="text-muted-foreground text-center">
                      {cert.subtitle}
                    </p>

                    <p className="text-sm text-muted-foreground/70 mt-2 text-center">
                      {cert.organizer}
                    </p>

                    <p className="text-xs text-accent-cyan/70 mt-6 animate-pulse-soft">
                      Hover to preview • Click to view full
                    </p>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back glass-card p-4 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* 🔹 Blank / Future Certificate
          <div className="glass-card h-[360px] md:h-[400px] flex flex-col items-center justify-center text-center border border-dashed border-border/60">
            <p className="text-muted-foreground text-lg">More Coming Soon</p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Upcoming Hackathons & Achievements
            </p>
          </div> */}
        </div>
      </div>

      {/* Full Image Modal */}
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
          onClick={() => setActiveImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center"
            >
              <X size={20} />
            </button>

            <div className="glass-card p-4">
              <img
                src={activeImage}
                alt="Certificate Full View"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
