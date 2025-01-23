import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, ChevronDown } from 'lucide-react';
import Education from './components/Education';
import { LoadingScreen } from './components/LoadingScreen';
import Skills from './components/Skills';
import Projects from './components/Projects';

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
          className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeSection === section ? 'bg-blue-500 scale-150' : 'bg-gray-500 hover:bg-blue-400'
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
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold opacity-0 animate-fade-in">
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
                <div className="flex justify-center text-sm md:text-lg lg:text-xl gap-6 text-gray-300 opacity-0 animate-fade-in-delay-2">
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
                <div className="absolute  left-1/2 transform -translate-x-1/2 animate-bounce">
                  <ChevronDown size={32} className="text-gray-400" />
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 relative">
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 relative overflow-hidden">
            <Projects />
          </section>

          {/* Education Timeline */}
          <section id="education" className="py-20 relative">
            <Education />
          </section>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
