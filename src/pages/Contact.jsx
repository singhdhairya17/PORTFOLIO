export default function Contact() {
  const top = (e) => {
    e.preventDefault();
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <section id="contact">
      <div className="contact">
        <h3>Get in Touch</h3>
        <p>
          Email:{' '}
          <a href="mailto:dhairyasingh200417@gmail.com">dhairyasingh200417@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+918178640201">+91 8178640201</a>
        </p>
        <p>
          Website:{' '}
          <a href="#home" onClick={top}>
            Portfolio (top)
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/dhairya-singh-b75361303" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/dhairya-singh-b75361303
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/singhdhairya17" target="_blank" rel="noopener noreferrer">
            github.com/singhdhairya17
          </a>
        </p>
      </div>
    </section>
  );
}
