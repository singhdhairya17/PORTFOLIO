const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/** Tech stack with official-style icons (Devicon + Simple Icons where needed). */
const TECH_STACK = [
  { name: 'Java', src: `${DEVICON}/java/java-original.svg` },
  { name: 'Python', src: `${DEVICON}/python/python-original.svg` },
  { name: 'JavaScript', src: `${DEVICON}/javascript/javascript-original.svg` },
  { name: 'SQL', src: `${DEVICON}/postgresql/postgresql-original.svg`, title: 'SQL (PostgreSQL)' },
  { name: 'HTML5', src: `${DEVICON}/html5/html5-original.svg` },
  { name: 'CSS3', src: `${DEVICON}/css3/css3-original.svg` },
  { name: 'React', src: `${DEVICON}/react/react-original.svg` },
  { name: 'Node.js', src: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: 'Express', src: `${DEVICON}/express/express-original.svg` },
  { name: 'Spring', src: `${DEVICON}/spring/spring-original.svg`, title: 'Spring Framework / Spring Boot' },
  { name: 'MongoDB', src: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: 'Git', src: `${DEVICON}/git/git-original.svg` },
  { name: 'GitHub', src: `${DEVICON}/github/github-original.svg` },
  {
    name: 'Cursor',
    src: 'https://cdn.simpleicons.org/cursor/EBBC4E',
    title: 'Cursor editor',
  },
  {
    name: 'DSA',
    src: 'https://cdn.simpleicons.org/leetcode/FFA116',
    title: 'Data structures & algorithms (LeetCode, etc.)',
  },
  { name: 'Linux', src: `${DEVICON}/linux/linux-original.svg`, title: 'Operating systems (Linux)' },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Tech stack</h2>
      <p className="skills-lead">Languages, frameworks, and tools I use regularly.</p>
      <div className="tech-stack-bar">
        <ul className="tech-stack-track">
          {TECH_STACK.map(({ name, src, title }) => (
            <li key={name} className="tech-stack-item" title={title ?? name}>
              <div className="tech-stack-icon-wrap">
                <img className="tech-stack-icon" src={src} alt="" width="44" height="44" loading="lazy" decoding="async" />
              </div>
              <span className="tech-stack-label">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
