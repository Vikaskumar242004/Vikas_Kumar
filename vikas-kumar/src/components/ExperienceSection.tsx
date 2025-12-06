import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Front-End Developer',
    company: 'BrandScalar',
    period: 'Jun 2025 – Aug 2025',
    points: [
      'Built responsive web applications using React.js',
      'Improved UI/UX and collaborated with backend team',
      'Developed reusable components for scalability',
      'Contributed to agile development workflows',
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Experience</h2>
          <p className="section-subheading">
            Professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-[23px] top-16 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 to-transparent hidden md:block" />
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center flex-shrink-0">
                    <Briefcase size={20} className="text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-card-hover p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-accent-cyan font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <ChevronRight size={16} className="text-accent-cyan mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;