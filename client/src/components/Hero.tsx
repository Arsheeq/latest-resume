import { useEffect, useState } from 'react';

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  
  const texts = [
    'DevOps Engineer',
    'Cloud Consultant', 
    'Infrastructure Specialist',
    'CI/CD Expert'
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isTyping = false;

    function typeWriter() {
      if (isTyping) return;
      isTyping = true;

      const currentText = texts[textIndex];

      if (isDeleting) {
        setTypewriterText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypewriterText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = 120;
      if (isDeleting) {
        typeSpeed = 60;
      }

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 800; // Pause before next word
      }

      setTimeout(() => {
        isTyping = false;
        typeWriter();
      }, typeSpeed);
    }

    // Start typewriter animation after delay
    const timer = setTimeout(typeWriter, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Arsheeq</span></h1>
          <p className="subtitle typing-animation">{typewriterText}</p>
          <p className="description">
            Based in Kerala, India, I'm a freelance DevOps Engineer specializing in cloud automation, infrastructure management, and CI/CD pipelines.
            With hands-on experience in Linux, AWS, Docker, and Kubernetes, I help businesses build efficient systems
            that scale and perform. Available for remote projects and consulting. 🚀
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>View My Work</a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
