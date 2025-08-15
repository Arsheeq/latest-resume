import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Active navigation highlight
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || '';
        }
      });

      setActiveSection(currentSection);

      // Navbar background on scroll
      const nav = document.querySelector('nav') as HTMLElement;
      const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
      if (nav) {
        if (window.scrollY > 100) {
          nav.style.background = isLightTheme ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 10, 10, 0.95)';
        } else {
          nav.style.background = isLightTheme ? 'rgba(255, 255, 255, 0.9)' : 'rgba(10, 10, 10, 0.9)';
        }
      }

      // Scroll indicator functionality
      const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (scrollIndicator) {
        scrollIndicator.style.width = scrollPercent + '%';
      }

      // Parallax effect for hero background
      const heroBackground = document.querySelector('.hero-background') as HTMLElement;
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <ScrollIndicator />
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
