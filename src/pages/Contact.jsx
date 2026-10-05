const EMAIL = 'dhairyasingh200417@gmail.com';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <span className="section-eyebrow">Contact</span>
        <h2>Let&apos;s talk</h2>
        <p className="section-lead">
          If you&apos;re hiring for backend or AI engineering, or just want to talk shop, email me.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">
            {EMAIL}
          </a>
          <a
            href="https://www.linkedin.com/in/dhairya-singh-b75361303"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/singhdhairya17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
