const PROJECTS = [
  {
    title: 'Nexus960',
    period: 'Mar 2026 - Present',
    badge: 'In progress · Solo',
    featured: true,
    description:
      'A Chess960-first competitive chess platform: real-time play and matchmaking, Elo rating pools, live tournaments (Swiss, Arena, Knockout) and a Stockfish-based analysis board. The server is the single authority over game state.',
    points: [
      'Monorepo with Next.js, Fastify + Socket.io and shared TypeScript packages',
      'Stockfish 18 WASM analysis, friends and presence, leaderboards, moderation tools',
      'Deployed on Vercel and Railway with Supabase Postgres and Upstash Redis',
    ],
    tags: ['Next.js', 'TypeScript', 'Fastify', 'Socket.io', 'PostgreSQL', 'Redis'],
    links: [{ label: 'Live site', href: 'https://nexus-960.vercel.app' }],
  },
  {
    title: 'querysmith',
    badge: 'Open source',
    description:
      'Build GraphQL queries by clicking instead of typing. Point it at any endpoint and it loads the schema via introspection; pick fields from a lazily expanded tree, fill in typed arguments, and it generates the query or mutation and runs it.',
    points: [
      'Handles cyclic schemas, enum dropdowns, typed $variables and custom auth headers',
      'Reusable standalone Angular components plus a small proxy to work around CORS',
    ],
    tags: ['Angular', 'TypeScript', 'GraphQL', 'Node.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/singhdhairya17/querysmith' }],
  },
  {
    title: 'WELLUS',
    period: 'May 2026',
    badge: 'IEEE published',
    featured: true,
    description:
      'AI-powered nutrition platform: OCR food-label scanning, BMR/TDEE-based personalised guidance, a rule-based adaptive engine and an explainable-AI layer. Presented at an IEEE international conference as first author.',
    tags: ['React Native', 'Expo', 'Convex', 'Firebase', 'OpenAI', 'ML Kit'],
    links: [
      { label: 'GitHub', href: 'https://github.com/singhdhairya17/wellus-app' },
      { label: 'IEEE paper', href: 'https://ieeexplore.ieee.org/document/11450916' },
    ],
  },
  {
    title: 'Spring Next Store',
    description:
      'Full-stack e-commerce demo: Spring Boot 3 REST API with JWT-secured endpoints and Spring Data JPA on MySQL, plus a Next.js 15 storefront and role-based admin area.',
    tags: ['Spring Boot', 'Next.js', 'MySQL', 'JWT', 'JPA'],
    links: [{ label: 'GitHub', href: 'https://github.com/singhdhairya17/spring-next-store' }],
  },
  {
    title: 'Chess GUI',
    description:
      'Desktop chess with Pygame and python-chess: play a friend or Stockfish, drag-and-drop moves, legal-move enforcement, timers and resign/draw controls.',
    tags: ['Python', 'Pygame', 'python-chess', 'Stockfish'],
    links: [{ label: 'GitHub', href: 'https://github.com/singhdhairya17/chessgui' }],
  },
  {
    title: 'Citizen Post',
    description:
      'React news reader with Global and India editions, category tabs, keyword search via NewsAPI, light/dark theme and a responsive card grid.',
    tags: ['React', 'NewsAPI', 'CSS'],
    links: [{ label: 'GitHub', href: 'https://github.com/singhdhairya17/Advanced_News_Application' }],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <span className="section-eyebrow">Projects</span>
      <h2>Things I&apos;ve built</h2>
      <div className="projects">
        {PROJECTS.map((p) => (
          <article key={p.title} className={`project${p.featured ? ' project--featured' : ''}`}>
            <div className="project-head">
              <h3>{p.title}</h3>
              {p.badge && <span className="project-badge">{p.badge}</span>}
            </div>
            {p.period && <span className="project-period">{p.period}</span>}
            <p>{p.description}</p>
            {p.points && (
              <ul className="project-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            {p.links && (
              <div className="project-buttons">
                {p.links.map(({ label, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                    {label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
