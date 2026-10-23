export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Komma Shanthi Vardhan</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Aspiring Data Analyst | Data Science Enthusiast | Web Developer
            </p>
            <p className="footer-college">
              Vardhaman College of Engineering • B.Tech CSE (Data Science)
            </p>
          </div>

          <div className="footer-links-group">
            <span className="footer-heading">Navigation</span>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#strengths">Strengths &amp; Interests</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials-group">
            <span className="footer-heading">Connect</span>
            <div className="footer-social-links">
              <a
                href="https://github.com/Shanthivardhan44"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
              >
                GitHub (Shanthivardhan44)
              </a>
              <a
                href="https://www.linkedin.com/in/komma-shanthi-vardhan-388042371/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
              >
                LinkedIn Profile
              </a>
              <a
                href="mailto:komma.shanthi.vardhan@gmail.com"
                className="footer-social-pill"
              >
                komma.shanthi.vardhan@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Komma Shanthi Vardhan. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
