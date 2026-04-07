const CERTIFICATIONS = [
  {
    title: 'NPTEL – Programming in Java',
    description:
      'Comprehensive course on Java programming covering object-oriented concepts and core libraries.',
    href: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S105590059530357531.pdf',
  },
  {
    title: 'NPTEL – The Joy of Computing using Python',
    description:
      'Gained foundational knowledge of Python through practical programming tasks and problem-solving techniques.',
    href: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs57/Course/NPTEL24CS57S65590056730357531.pdf',
  },
  {
    title: 'NPTEL – Big Data Computing (Elite · Top 5%)',
    description:
      'Big data analytics and distributed computing; NPTEL Elite certification (top 5%). Issued Oct 2025.',
    href: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs131/Course/NPTEL25CS131S115660002910299883.pdf',
  },
  {
    title: 'NPTEL – Programming with Generative AI',
    description:
      'Fundamentals of generative AI, LLMs, and prompt-based programming with Python. Issued Oct 2025.',
    href: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs137/Course/NPTEL25CS137S105660008610299883.pdf',
  },
];

export default function Education() {
  return (
    <section id="education">
      <h2>Education &amp; Certifications</h2>
      <div className="education-section">
        <div className="education-item">
          <h3>Raj Kumar Goel Institute of Technology (AKTU)</h3>
          <span>Ghaziabad, IN | Aug 2022 – May 2026</span>
          <span>Bachelor of Technology in Computer Science</span>
          <p>CGPA: 8.37</p>
        </div>
        <div className="education-item">
          <h3>Ingraham Institute English School (CISCE)</h3>
          <span>Ghaziabad, IN | Apr 2021 – Apr 2022</span>
          <p>Senior Secondary: 85.20%</p>
          <span>Apr 2019 – Apr 2020</span>
          <p>High School: 94.16%</p>
        </div>
      </div>
      <div className="certifications">
        {CERTIFICATIONS.map(({ title, description, href }) => (
          <div key={href} className="cert-item">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="project-buttons cert-pdf-link">
              <a href={href} target="_blank" rel="noopener noreferrer">
                Certificate (PDF)
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
