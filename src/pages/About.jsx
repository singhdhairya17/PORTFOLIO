const CARDS = [
  {
    title: 'Background',
    body: "I started Java in 9th grade at an ICSE school and it's still my main language. B.Tech in Computer Science from Raj Kumar Goel Institute of Technology (AKTU), CGPA 8.44.",
  },
  {
    title: 'What I do',
    body: 'Backend work in Java and Spring Boot. I design APIs, implement auth with OAuth 2.0 and JWT, and connect our product to external platforms. I usually own a feature from the first research doc to the release.',
  },
  {
    title: 'Currently building',
    body: "Nexus960, a real-time Chess960 site I'm building alone with Next.js, Fastify, Socket.io, PostgreSQL and Redis, with help from Cursor and Claude Code.",
  },
  {
    title: 'Beyond code',
    body: 'I co-wrote an IEEE paper on explainable AI for nutrition, studied distributed deep learning during my CRIS internship, and play a lot of chess (peak 2011 on Chess.com).',
  },
];

export default function About() {
  return (
    <section id="about">
      <span className="section-eyebrow">About</span>
      <h2>About me</h2>
      <p className="section-lead">
        I&apos;m a backend engineer in Noida. I mostly write Java, and lately I spend more of my spare time on AI
        tooling and side projects.
      </p>
      <div className="about-cards">
        {CARDS.map(({ title, body }) => (
          <div key={title} className="card">
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
