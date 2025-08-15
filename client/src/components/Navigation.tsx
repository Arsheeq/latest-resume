import { useTheme } from './ThemeProvider';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();

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
    <nav>
      <div className="nav-container">
        <div className="logo">
          <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Arsheeq</span>
          </a>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
          <div className="theme-toggle">
            <span className="theme-toggle-label">{theme === 'light' ? '☀️' : '🌙'}</span>
            <input type="checkbox" id="theme-toggle" checked={theme === 'light'} onChange={toggleTheme} />
            <label htmlFor="theme-toggle" className="slider"></label>
          </div>
        </div>
      </div>
    </nav>
  );
}
