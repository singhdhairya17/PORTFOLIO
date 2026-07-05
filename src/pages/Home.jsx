export default function Home() {
  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <section className="hero" id="home">
      <div className="content">
        <h1>Hi, I&apos;m Dhairya Singh</h1>
        <h2>Associate Software Engineer</h2>
        <p>
          I&apos;m an aspiring software developer with a passion for building innovative web applications and exploring
          AI, developer tools, and agentic workflows, alongside machine learning. Completed B.Tech in Computer Science (CGPA 8.44).
        </p>
        <div className="buttons">
          <a href="#projects" className="btn btn-primary" onClick={(e) => go(e, 'projects')}>
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => go(e, 'contact')}>
            Contact Me
          </a>
        </div>
      </div>
      <div className="image">
        <img src="/images/avatar.png" alt="Dhairya Singh" width="320" height="320" />
      </div>
    </section>
  );
}
