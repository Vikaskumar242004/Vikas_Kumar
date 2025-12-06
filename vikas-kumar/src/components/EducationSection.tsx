import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Chaudhary Charan Singh University',
    period: '2022 – 2025',
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Education</h2>
          <p className="section-subheading">
            Academic foundation and qualifications
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-8"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-accent-cyan mb-3">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;