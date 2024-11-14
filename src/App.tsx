import { useState, useEffect, useRef } from 'react';
import { 
  Github, Mail, MapPin, Terminal, Code, Database, 
  Book, ChevronDown, ExternalLink, Brain, Puzzle,
  Cpu, Radio, Waves, Laptop, Share2, Code2, MessageSquare
} from 'lucide-react';
import { LoadingScreen } from './components/LoadingScreen';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const cursor = cursorRef.current as HTMLDivElement | null;
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);

      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Technical Skills
  const skills = {
    languages: [
      { name: "HTML5", icon: <Code2 />, proficiency: 90 },
      { name: "CSS3", icon: <Laptop />, proficiency: 85 },
      { name: "JavaScript", icon: <Terminal />, proficiency: 88 },
      { name: "TypeScript", icon: <Code />, proficiency: 82 }
    ],
    frameworks: [
      { name: "React.js", icon: <Radio />, proficiency: 90 },
      { name: "Next.js", icon: <Share2 />, proficiency: 85 },
      { name: "Tailwind CSS", icon: <Waves />, proficiency: 88 }
    ],
    tools: [
      { name: "Git", icon: <Database />, proficiency: 85 },
      { name: "GitHub", icon: <Github />, proficiency: 88 },
      { name: "npm", icon: <Terminal />, proficiency: 80 },
      { name: "Yarn", icon: <Cpu />, proficiency: 80 }
    ],
    // Soft Skills
    softSkills: [
      { name: "Logical Reasoning", icon: <Brain />, proficiency: 90 },
      { name: "Problem Solving", icon: <Puzzle />, proficiency: 88 },
      { name: "Coding", icon: <Code2 />, proficiency: 85 }
    ],
    // Spoken Languages
    spokenLanguages: [
      { name: "Hindi", icon: <MessageSquare />, proficiency: 95 },
      { name: "English", icon: <MessageSquare />, proficiency: 85 }
    ]
  };

  const CustomCursor = () => (
    <div 
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavigationDots = () => (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      {['hero', 'skills', 'projects', 'education'].map((section) => (
        <div
          key={section}
          onClick={() => scrollToSection(section)}
          className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
            activeSection === section ? 'bg-blue-500 scale-150' : 'bg-gray-500 hover:bg-blue-400'
          }`}
        />
      ))}
    </div>
  );

  const ProgressBar = () => (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="h-full bg-white/20 backdrop-blur-sm" />
      </div>
    </div>
  );

  return (
    <>
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <NavigationDots />
      <ProgressBar />

      <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
        {/* Dynamic Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,50,50,0.1),transparent_50%)]" />
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3}px`,
                  height: `${Math.random() * 3}px`,
                  backgroundColor: `hsla(${Math.random() * 360}, 70%, 70%, 0.3)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
            <div className="container mx-auto px-4 relative">
              <div className="text-center space-y-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold opacity-0 animate-fade-in">
                  <span className="inline-block hover:animate-bounce-slow bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    HIMANSHU
                  </span>
                  <br />
                  <span className="inline-block hover:animate-bounce-slow bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    VISHWAKARMA
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-fade-in-delay-1">
                  Frontend Developer  
                </p>
                <div className="flex justify-center gap-6 text-gray-300 opacity-0 animate-fade-in-delay-2">
                  <a 
                    href="mailto:khv8055@gmail.com"
                    className="group flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Mail className="group-hover:animate-bounce" />
                    <span className="group-hover:underline">khv8055@gmail.com</span>
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin className="animate-pulse" />
                    <span className="hover:text-blue-400 transition-colors duration-300">
                      Jaunpur, Uttar Pradesh
                    </span>
                  </span>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <ChevronDown size={32} className="text-gray-400" />
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Technical Expertise
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="perspective-1000">
                    <div className="group relative transform transition-all duration-500 hover:rotate-y-10">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                      <div className="relative bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                          {category}
                        </h3>
                        <div className="space-y-4">
                          {items.map((skill, idx) => (
                            <div key={idx} className="group/skill">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-purple-400 group-hover/skill:rotate-12 transition-transform">
                                  {skill.icon}
                                </span>
                                <span className="font-medium">{skill.name}</span>
                              </div>
                              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 group-hover/skill:animate-pulse"
                                  style={{ width: `${skill.proficiency}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Featured Projects
                </span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 ring-1 ring-gray-700/50 hover:ring-purple-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                          Movie Website
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl">
                          A Next.js-powered web app for downloading movies and series, featuring a clean UI and hosted on Vercel.
                          Built with modern web technologies and optimized for performance.
                        </p>
                      </div>
                      <div className="flex space-x-4">
                        {['Next.js', 'React', 'Tailwind'].map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-sm bg-gray-700/50 rounded-full hover:bg-blue-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://moviflixx.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <span className="group-hover/link:underline">View Project</span>
                        <ExternalLink className="group-hover/link:rotate-45 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Timeline */}
          <section id="education" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
                  Educational Journey
                </span>
              </h2>
              <div className="max-w-4xl mx-auto relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                {[
                  {
                    year: "2020 - 2023",
                    degree: "Bachelor of Computer Applications",
                    institution: "Veer Bahadur Singh Purvanchal University",
                    description: "Focused on computer science fundamentals, programming, and web development."
                  },
                  {
                    year: "2019 - 2020",
                    degree: "Intermediate (12th)",
                    institution: "UP Board",
                    description: "Completed higher secondary education with focus on mathematics and computer science."
                  },
                  {
                    year: "2017 - 2019",
                    degree: "High School (10th)",
                    institution: "CBSE Board",
                    description: "Completed secondary education with distinction, laying strong foundation in science and mathematics."
                  }
                ].map((edu, index) => (
                  <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                    <div className="w-1/2 relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                      <div className="relative bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700">
                        <div className="flex items-center gap-2 mb-2">
                          <Book className="text-purple-400" />
                          <span className="text-sm text-purple-400">{edu.year}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-gray-400 mb-2">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Portfolio;