import { useEffect, useState, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollProgress from './ScrollProgress.jsx';
import PageWidgets from './PageWidgets.jsx';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Highlights' },
  { id: 'contact', label: 'Contact' },
];

const HEADER_OFFSET = 88;

export default function Layout() {
  const location = useLocation();
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' ? document.body.classList.contains('dark') : false
  );
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    document.title = 'Dhairya Singh — Portfolio';
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`);
    }
  }, []);

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (!hash || !SECTIONS.some((s) => s.id === hash)) return undefined;
    const tid = window.setTimeout(() => scrollToSection(hash), 0);
    return () => window.clearTimeout(tid);
  }, [location.hash, scrollToSection]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + HEADER_OFFSET;
      let current = 'home';
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const onNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <>
      <ScrollProgress />
      <header>
        <nav className="navbar">
          <a href="#home" className="logo" onClick={(e) => onNavClick(e, 'home')}>
            Dhairya Singh
          </a>
          <ul>
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? 'active' : undefined}
                  onClick={(e) => onNavClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button
              type="button"
              className="toggle"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
            >
              🌓
            </button>
            <a href="/assets/dhairya_resume.pdf" className="resume-btn" download>
              Resume
            </a>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <PageWidgets />
      <footer>© 2026 Dhairya Singh. Designed &amp; Built with passion.</footer>
    </>
  );
}
