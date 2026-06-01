import { useState, useEffect } from 'react';
import { Mail, MapPin, ChevronDown, Github, Linkedin, FileText, Sparkles } from 'lucide-react';
import Education from './components/Education';
import { LoadingScreen } from './components/LoadingScreen';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);

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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {isLoading && <LoadingScreen />}

      {/* Gradient Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Container */}
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Dynamic Gradient Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div
          className="fixed inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.15) 0%, transparent 50%)`
          }}
        />

        {/* Grid Pattern Overlay */}
        <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        {/* Navigation */}
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
          <div className="glass-card px-6 py-3 rounded-full flex gap-6 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
            {['home', 'experience', 'skills', 'projects', 'education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
                className={`capitalize text-sm font-medium transition-all duration-300 ${activeSection === (item === 'home' ? 'hero' : item)
                    ? 'text-white bg-white/10 px-3 py-1 rounded-full'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        <main className="relative z-10">
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                      <Sparkles size={14} className="text-purple-400" />
                      <span className="text-xs text-gray-300 tracking-wide">FULL STACK DEVELOPER</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      <span className="text-white">Himanshu</span>
                      <br />
                      <span className="gradient-text">Vishwakarma</span>
                    </h1>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                    Crafting scalable web applications with modern technologies.
                    3+ years of experience in full-stack development.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      View Projects
                    </button>
                    <a
                      href="/Himanshu_Resume.pdf"
                      download="Himanshu_Resume.pdf"
                      className="px-6 py-3 rounded-xl glass-card border border-white/10 text-white font-medium hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 inline-flex items-center gap-2"
                    >
                      <FileText size={18} />
                      Download Resume
                    </a>
                  </div>

                  <div className="flex gap-6 pt-4">
                    {[
                      { icon: Github, label: 'GitHub', href: 'https://github.com/Himanshu8055' },
                      { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/himanshu-vish' },
                      { icon: Mail, label: 'Mail', href: 'mailto:khv8055@gmail.com' },
                      { icon: FileText, label: 'Resume', href: '/Himanshu_Resume.pdf' }
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target='_blank'
                        className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300"
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Content - Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '10+', label: 'Projects Completed', icon: '🚀' },
                    { value: '3+', label: 'Years Experience', icon: '💼' },
                    { value: '15+', label: 'Happy Clients', icon: '⭐' },
                    { value: '24/7', label: 'Support', icon: '🔧' }
                  ].map((stat, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-2xl text-center hover-glow">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-gray-400" size={24} />
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <span className="text-sm uppercase tracking-wider text-purple-400 font-semibold">Career Timeline</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  <span className="gradient-text">Work Experience</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
              </div>
              <Experience />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24 px-4 bg-white/5">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <span className="text-sm uppercase tracking-wider text-purple-400 font-semibold">Technical Proficiency</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  <span className="gradient-text">Skills & Expertise</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
              </div>
              <Skills />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <span className="text-sm uppercase tracking-wider text-purple-400 font-semibold">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  <span className="gradient-text">Featured Projects</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
              </div>
              <Projects />
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-24 px-4 bg-white/5">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <span className="text-sm uppercase tracking-wider text-purple-400 font-semibold">Academic Background</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  <span className="gradient-text">Education</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
              </div>
              <Education />
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                  Have a project in mind? I'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-3 glass-card px-5 py-3 rounded-xl">
                    <Mail size={18} className="text-purple-400" />
                    <a href="mailto:khv8055@gmail.com" className="text-gray-300 hover:text-white transition">khv8055@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 glass-card px-5 py-3 rounded-xl">
                    <MapPin size={18} className="text-purple-400" />
                    <span className="text-gray-300">Goregaon (East), Mumbai</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© 2024 Himanshu Vishwakarma. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Portfolio;