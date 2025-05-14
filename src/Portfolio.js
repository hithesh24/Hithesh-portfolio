

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Hithesh | Front-End Developer</h1>
        <p className="portfolio-subtitle">HTML • CSS • JavaScript • React</p>
      </header>

      <section className="portfolio-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Portfolio Website</h3>
            <p className="project-desc">A fully responsive personal portfolio built using React and  CSS.</p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Landing Page UI</h3>
            <p className="project-desc">Designed a modern landing page using HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-card">
          <p>📧 Email: <a href="mailto:hithesh2425@gmail.com">hithesh2425@gmail.com</a></p>
          <p>💻 GitHub: <a href="https://github.com/hithesh">github.com/hithesh</a></p>
        </div>
      </section>

      <footer className="portfolio-footer">
        © 2025 Hithesh | Built with  in React + CSS
      </footer>
    </div>
  );
}