import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layout, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'UI/UX', 'Responsive Design'],
  },
  {
    title: 'Backend / Database',
    icon: Database,
    skills: ['Node.js', 'MongoDB', 'Supabase', 'REST APIs'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'DevOps'],
  },
  {
    title: 'Special Skills',
    icon: Sparkles,
    skills: ['Full-Stack Development', 'AI Integration', 'Real-Time Collaboration'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Skills & Expertise</h2>
          <p className="section-subheading">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card-hover p-6 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-5 group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-500">
                <category.icon size={22} className="text-accent-cyan group-hover:text-primary-foreground transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;