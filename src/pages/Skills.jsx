const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SIMPLE = 'https://cdn.simpleicons.org';

const GROUPS = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', src: `${DEVICON}/java/java-original.svg` },
      { name: 'Python', src: `${DEVICON}/python/python-original.svg` },
      { name: 'TypeScript', src: `${DEVICON}/typescript/typescript-original.svg` },
      { name: 'JavaScript', src: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'SQL', src: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg` },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Spring Boot', src: `${DEVICON}/spring/spring-original.svg` },
      { name: 'GraphQL', src: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: 'REST / SOAP', src: `${SIMPLE}/openapiinitiative/6BA539` },
      { name: 'OAuth 2.0 / JWT', src: `${SIMPLE}/jsonwebtokens/D63AFF` },
      { name: 'Node.js', src: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'Fastify', src: `${SIMPLE}/fastify/888888` },
      { name: 'Socket.io', src: `${SIMPLE}/socketdotio/888888` },
    ],
  },
  {
    title: 'Data',
    items: [
      { name: 'PostgreSQL', src: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: 'Redis', src: `${DEVICON}/redis/redis-original.svg` },
      { name: 'Firebase', src: `${DEVICON}/firebase/firebase-original.svg` },
      { name: 'MySQL', src: `${DEVICON}/mysql/mysql-original.svg` },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', src: `${DEVICON}/react/react-original.svg` },
      { name: 'Next.js', src: `${DEVICON}/nextjs/nextjs-original.svg`, invert: true },
      { name: 'React Native', src: `${DEVICON}/react/react-original.svg` },
      { name: 'HTML / CSS', src: `${DEVICON}/html5/html5-original.svg` },
    ],
  },
  {
    title: 'Tools & AI',
    items: [
      { name: 'Git', src: `${DEVICON}/git/git-original.svg` },
      { name: 'Docker', src: `${DEVICON}/docker/docker-original.svg` },
      { name: 'Postman', src: `${DEVICON}/postman/postman-original.svg` },
      { name: 'IntelliJ IDEA', src: `${DEVICON}/intellij/intellij-original.svg` },
      { name: 'Cursor', src: `${SIMPLE}/cursor/888888` },
      { name: 'Claude Code', src: `${SIMPLE}/claude/D97757` },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <span className="section-eyebrow">Stack</span>
      <h2>Tools I work with</h2>
      <p className="section-lead">Java and Spring Boot at work, TypeScript for side projects.</p>
      <div className="skill-groups">
        {GROUPS.map(({ title, items }) => (
          <div key={title} className="skill-group">
            <h3>{title}</h3>
            <ul>
              {items.map(({ name, src, invert }) => (
                <li key={name} className="skill-chip">
                  <img
                    src={src}
                    alt=""
                    width="20"
                    height="20"
                    loading="lazy"
                    decoding="async"
                    className={invert ? 'icon-invert' : undefined}
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
