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

const HEADER_OFFSET = 120;

export default function Layout() {
  const location = useLocation();
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    } catch {
      /* storage unavailable */
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      /* storage unavailable */
    }
  }, [dark]);

  useEffect(() => {
    document.title = 'Dhairya Singh | Portfolio';
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
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = SECTIONS[SECTIONS.length - 1].id;
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

  useEffect(() => {
    const link = document.querySelector(`.navbar ul a[href="#${activeId}"]`);
    const list = link?.closest('ul');
    if (!link || !list || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2, behavior: 'smooth' });
  }, [activeId]);

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
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
              title={dark ? 'Light theme' : 'Dark theme'}
            >
              {dark ? (
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              )}
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
      <footer>© 2026 Dhairya Singh · Built with React and Vite</footer>
    </>
  );
}
