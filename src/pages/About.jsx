export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am currently in my fourth year at Raj Kumar Goel Institute of Technology (AKTU), Ghaziabad. Java is a key
        strength—I use it daily for backend work with Spring-style stacks and solid OOP design. Throughout my studies and
        internships, I&apos;ve also gained exposure to cloud computing, distributed deep learning, and straggler
        mitigation techniques. I enjoy solving complex problems and continuously learning new technologies.
      </p>
      <div className="about-cards">
        <div className="card">
          <h3>Background</h3>
          <p>
            Enthusiastic learner exploring cloud computing, distributed systems and AI/ML techniques. Actively improving
            my skills through coursework and online resources.
          </p>
        </div>
        <div className="card">
          <h3>Current Focus</h3>
          <p>
            Doubling down on Java as my core language—Spring Boot, REST APIs, and production-style patterns—while
            growing in Python, algorithms, data structures, and system design.
          </p>
        </div>
        <div className="card">
          <h3>Goals</h3>
          <p>
            Seeking opportunities to apply my skills in real-world projects, contribute to collaborative teams, and
            build scalable applications that solve real problems.
          </p>
        </div>
        <div className="card">
          <h3>Interests</h3>
          <ul className="card-bullets">
            <li>Exploring agentic workflows (models + tools) through small experiments and reading—learning, not claiming expertise.</li>
            <li>Trying new AI tools and following ecosystem updates out of curiosity.</li>
            <li>Reading about ML training and fine-tuning; occasional toy runs to build intuition.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
