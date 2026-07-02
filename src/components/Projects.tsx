import { ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech_used: string[];
  link: string;
  featured?: boolean;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "Modern portfolio showcasing technical skills and projects with glassmorphism design and smooth animations.",
      tech_used: ["React", "Tailwind", "Framer Motion"],
      link: "https://himanshu-vishwakarma.vercel.app"
    },
    {
      title: "Iplanetbpo - Company Website",
      description: "Enterprise-grade company website with integrated admin dashboard for managing job applicants. Features include real-time analytics, SEO optimization, and responsive design.",
      tech_used: ["React.js", "Node.js", "MySQL", "Tailwind"],
      link: "https://iplanetbpo.net/",
      featured: true
    },
    {
      title: "IplanetAgentsDesk",
      description: "Comprehensive agent management platform with role-based access, CRUD operations, energy form management, and customer data handling.",
      tech_used: ["Angular", "Express.js", "MongoDB", "Tailwind"],
      link: "https://iplanetagentsdesk.com/",
      featured: true
    },
    {
      title: "Procall Hub",
      description: "Professional communication hub for centralized call management and team collaboration. Streamlines voice interactions with advanced routing and analytics.",
      tech_used: ["Next.js", "WebRTC", "Socket.io", "PostgreSQL", "Tailwind"],
      link: "https://www.procallhub.com/",
      featured: true
    },
    {
      title: "Precision Career Connect",
      description: "AI-powered job portal with resume builder, recruiter workflows, and advanced candidate matching system.",
      tech_used: ["Next.js", "PostgreSQL", "Tailwind", "AI"],
      link: "https://precisioncareerconnect.com",
      featured: true
    },
    {
      title: "Swift Response Alert",
      description: "Enterprise Personal Emergency Response System (PERS) with medical alert devices and caregiver app. Features real-time GPS tracking, fall detection, two-way voice, and 24/7 emergency monitoring.",
      tech_used: ["Next.js", "Stripe", "MongoDB", "WebSockets"],
      link: "https://swiftresponsealert.com/",
      featured: true
    },
    // {
    //   title: "Movie Website",
    //   description: "Next.js-powered streaming platform with optimized performance and clean UI.",
    //   tech_used: ["Next.js", "Tailwind"],
    //   link: "https://moviflixx.vercel.app/"
    // },
    {
      title: "Todo App",
      description: "Feature-rich task manager with search, sort, and persistent local storage.",
      tech_used: ["Angular", "Tailwind"],
      link: "https://todo-on-angular.vercel.app/"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="glass-card p-6 h-full flex flex-col hover-glow transition-all duration-500 hover:-translate-y-1">
            {/* Featured Badge */}
            {project.featured && (
              <div className="flex justify-end mb-2">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-xs text-purple-300 border border-purple-500/30">
                  <Star size={10} fill="currentColor" />
                  Featured
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech_used.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-purple-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group/link mt-2"
            >
              <span>View Project</span>
              <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;