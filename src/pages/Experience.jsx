export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>System Trainee – Credex Technology</h3>
          <span>Nov 2025 – Present | Noida, Uttar Pradesh, IN</span>
          <ul className="experience-bullets">
            <li>Backend development with Core Java in modular, integration-style architectures to improve maintainability.</li>
            <li>Analyzed logs and helped debug issues across integrated services for faster resolution.</li>
            <li>Worked with OAuth 2.0 (JWT, client credentials), REST/SOAP APIs, and structured queries in production-style flows.</li>
            <li>Supported API integration and data flow across distributed systems.</li>
            <li>Used PostgreSQL, Git, Spring Boot, and Docker in a team environment for build and deployment.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Intern – Centre for Railway Information Systems (CRIS)</h3>
          <span>June 2025 – Aug 2025 | New Delhi, IN</span>
          <p>
            Explored cloud computing and scalable AI/ML environments. Studied distributed deep learning and straggler nodes
            in multi-GPU training. Reviewed Median Absolute Deviation (MAD) detection, Automatic Mixed Precision (AMP), and
            Gradient Scale Consistency (GSCM). Authored a technical synopsis on ResNet models with CIFAR datasets.
          </p>
        </div>
      </div>
    </section>
  );
}
