const ROLES = [
  {
    title: 'Associate Software Engineer',
    org: 'Credex Technology',
    period: 'Jul 2026 - Present',
    place: 'Noida, IN',
    bullets: [
      'Backend engineering in Java and Spring Boot on an enterprise software product.',
      'Take features from research and technical design through implementation and testing.',
      'Ship enhancements and resolve production issues with senior engineers and customer-facing teams.',
    ],
  },
  {
    title: 'System Trainee',
    org: 'Credex Technology',
    period: 'Nov 2025 - Jun 2026',
    place: 'Noida, IN',
    bullets: [
      'Implemented authentication flows with OAuth 2.0, JWT and client credentials.',
      'Wrote technical design documents and built proofs of concept, including AI-related features.',
      'Worked with REST/SOAP APIs, PostgreSQL, Git and Docker in a team environment.',
    ],
  },
  {
    title: 'Research Intern',
    org: 'Centre for Railway Information Systems (CRIS)',
    period: 'Jun 2025 - Aug 2025',
    place: 'New Delhi, IN',
    bullets: [
      'Studied distributed deep learning and straggler nodes in multi-GPU training.',
      'Reviewed MAD-based straggler detection and Automatic Mixed Precision.',
      'Authored a technical synopsis on ResNet models trained on CIFAR datasets.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <span className="section-eyebrow">Experience</span>
      <h2>Where I&apos;ve worked</h2>
      <ol className="timeline">
        {ROLES.map((r) => (
          <li key={r.title + r.period} className="timeline-item">
            <div className="timeline-head">
              <h3>
                {r.title} <span className="timeline-org">· {r.org}</span>
              </h3>
              <span className="timeline-meta">
                {r.period} · {r.place}
              </span>
            </div>
            <ul className="experience-bullets">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
