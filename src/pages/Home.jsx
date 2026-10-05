const STATS = [
  { value: 'IEEE', label: 'First-author paper' },
  { value: '8.44', label: 'B.Tech CGPA' },
  { value: '250+', label: 'DSA problems' },
  { value: '2011', label: 'Chess.com peak' },
];

export default function Home() {
  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <section className="hero" id="home">
      <div className="content">
        <span className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Open to backend &amp; AI engineering conversations
        </span>
        <h1>
          Hi, I&apos;m <span className="hero-name">Dhairya Singh</span>
        </h1>
        <h2>Associate Software Engineer, backend (Java / Spring Boot)</h2>
        <p>
          I write backend code in Java and Spring Boot, mostly APIs, auth and integrations with other platforms. Outside
          work I build full-stack apps in TypeScript, usually with Cursor or Claude Code open, and I&apos;m first author
          on a paper presented at an IEEE conference.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn btn-primary" onClick={(e) => go(e, 'projects')}>
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => go(e, 'contact')}>
            Get in Touch
          </a>
        </div>
        <ul className="hero-stats">
          {STATS.map(({ value, label }) => (
            <li key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="image">
        <img src="/images/avatar.png" alt="Dhairya Singh" width="320" height="320" />
      </div>
    </section>
  );
}
