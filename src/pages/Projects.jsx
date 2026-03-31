const PROJECTS = [
  {
    title: 'Wellus',
    blurb: 'AI nutrition tracking',
    description:
      'Mobile app for personalized nutrition: OCR food-label scanning (ML Kit + optional cloud OCR), AI meal planning with OpenAI, weight and exercise tracking, progress analytics, water intake, and meal reminders. Backend on Convex with Firebase auth.',
    tags: ['React Native', 'Expo', 'Convex', 'Firebase', 'OpenAI', 'ML Kit'],
    github: 'https://github.com/singhdhairya17/wellus-app',
  },
  {
    title: 'Citizen Post (Advanced News Application)',
    blurb: 'React news reader',
    description:
      'React news reader with Global and India editions, category tabs, keyword search via NewsAPI, light/dark theme, and a responsive grid of article cards with featured story layout.',
    tags: ['React', 'NewsAPI', 'CSS', 'SPA'],
    github: 'https://github.com/singhdhairya17/Advanced_News_Application',
  },
  {
    title: 'Chess GUI',
    blurb: 'Python + Stockfish',
    description:
      'Desktop chess game with Pygame and python-chess: human vs human or human vs AI using Stockfish, drag-and-drop moves, legal-move enforcement, timers with presets, and resign/draw controls.',
    tags: ['Python', 'Pygame', 'python-chess', 'Stockfish'],
    github: 'https://github.com/singhdhairya17/chessgui',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p className="projects-note">All code is on GitHub. Live demos are not deployed yet.</p>
      <div className="projects">
        {PROJECTS.map((p) => (
          <article key={p.github} className="project">
            <div className="project-image">{p.blurb}</div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
