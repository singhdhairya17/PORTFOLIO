const SKILLS = [
  'Java',
  'Python',
  'SQL',
  'JavaScript',
  'HTML/CSS',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git & GitHub',
  'Data Structures & Algorithms',
  'Operating Systems',
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <div key={s} className="skill-item">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
