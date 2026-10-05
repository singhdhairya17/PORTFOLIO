const HIGHLIGHTS = [
  {
    value: 'IEEE',
    title: 'First-author conference paper',
    body: 'Presented and defended WELLUS at EmergIN 2025 (IEEE), Greater Noida, while working full-time.',
    href: 'https://ieeexplore.ieee.org/document/11450916',
    linkLabel: 'IEEE Xplore ↗',
  },
  {
    value: 'Top 5%',
    title: 'NPTEL Elite: Big Data Computing',
    body: 'NPTEL Elite certificate in big data analytics and distributed computing, Oct 2025.',
  },
  {
    value: '250+',
    title: 'DSA problems solved',
    body: 'Across LeetCode and GeeksforGeeks.',
  },
  {
    value: '2011',
    title: 'Peak chess rating',
    body: 'On Chess.com.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <span className="section-eyebrow">Highlights</span>
      <h2>Papers, certificates and chess</h2>
      <div className="highlights">
        {HIGHLIGHTS.map((h) => (
          <div key={h.title} className="highlight">
            <strong className="highlight-value">{h.value}</strong>
            <h3>{h.title}</h3>
            <p>{h.body}</p>
            {h.href && (
              <a href={h.href} target="_blank" rel="noopener noreferrer">
                {h.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="paper-card">
        <span className="project-badge">Publication</span>
        <h3>
          WELLUS: An Intelligent Dietary Management System Using OCR, Adaptive Monitoring, and Explainable AI
        </h3>
        <p className="paper-meta">
          2025 International Conference on Emerging Technologies and Innovation for Sustainability (EmergIN), IEEE ·
          Dhairya Singh, Pawan Kumar Goel, Anamika Verma, Lakshya Saxena, Naman Jain
        </p>
      </div>
    </section>
  );
}
