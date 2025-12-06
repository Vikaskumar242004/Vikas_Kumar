import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'MedScan AI',
    img: '/medscan.png',
    description:
      'An AI-based web application for analyzing and summarizing medical documents.',
    tech: ['React', 'Node.js', 'Perplexity API', 'Tailwind CSS'],
    liveDemo: 'https://frontend-med-scan-ai.vercel.app',
    github: 'https://github.com/Vikaskumar244004/MedScan-AI',
  },
  {
    title: 'Collaborative Interpreter',
    img: '/collab.png',
    description:
      'A real-time multi-user coding platform with synced editors, live execution, chat, and daily DSA practice.',
    tech: ['React', 'Next.js', 'Node.js', 'Socket.IO', 'Judge0 API'],
    liveDemo: 'https://v0-collaborative-coding-platform-alpha.vercel.app',
    github:
      'https://github.com/Vikaskumar242004/Collaborative---coding---platform',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Featured Projects</h2>
          <p className="section-subheading">
            Showcasing my passion for building innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Rectangle Image */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>

                  <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    <ExternalLink
                      size={18}
                      className="text-white/70 hover:text-white transition"
                    />
                  </a>
                </div>

                <p className="text-white/60 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white/70 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-6 mt-6 border-t border-white/10 pt-4">
                  <a
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>

                  <a
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={15} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
