import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const roles = [
    'Aspiring Data Analyst',
    'Data Science Enthusiast',
    'Web Developer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('photo'); // 'photo' or 'code'

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 85);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>3rd Year B.Tech CSE (Data Science)</span>
          </div>

          <h1 className="hero-heading">
            <span className="greeting">Hi, I am</span>
            <span className="hero-name glow-text">Komma Shanthi Vardhan</span>
          </h1>

          <div className="hero-role-container">
            <span className="role-static">I am an&nbsp;</span>
            <span className="typing-role">{displayText}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero-bio">
            Passionate about transforming complex datasets into actionable intelligence and building modern, high-performance web applications. Specialized in Data Science at Vardhaman College of Engineering.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Contact Me</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>

          {/* Social Links Quick Access */}
          <div className="hero-socials">
            <a
              href="https://github.com/Shanthivardhan44"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/komma-shanthi-vardhan-388042371/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:komma.shanthi.vardhan@gmail.com"
              className="social-btn"
              title="Send Direct Email"
              aria-label="Send Direct Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Email</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">3rd Year</span>
              <span className="stat-label">B.Tech Student</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies &amp; Tools</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">State Medalist</span>
              <span className="stat-label">Wrestling Sportsman</span>
            </div>
          </div>
        </div>

        {/* Visual Right Column with Profile Photo & Interactive Terminal Switcher */}
        <div className="hero-visual">
          <div className="avatar-card-glow"></div>
          
          <div className="hero-visual-card">
            {/* View Switcher Header */}
            <div className="visual-card-tabs">
              <button
                type="button"
                className={`visual-tab-btn ${activeTab === 'photo' ? 'active' : ''}`}
                onClick={() => setActiveTab('photo')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Profile Photo</span>
              </button>

              <button
                type="button"
                className={`visual-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>Code Terminal</span>
              </button>
            </div>

            {/* TAB 1: Profile Image Showcase */}
            {activeTab === 'photo' && (
              <div className="photo-card-body">
                <div className="photo-frame-wrapper">
                  <img
                    src={profileImg}
                    alt="Komma Shanthi Vardhan"
                    className="hero-profile-image"
                  />
                  <div className="photo-glass-overlay"></div>
                  <div className="photo-floating-pill">
                    <span className="live-dot"></span>
                    <span>Vardhaman College of Engg.</span>
                  </div>
                </div>

                <div className="photo-caption-box">
                  <div className="caption-name">Komma Shanthi Vardhan</div>
                  <div className="caption-tagline">CSE (Data Science) • 3rd Year</div>
                  <div className="caption-traits">
                    <span className="caption-trait">📊 Data Science</span>
                    <span className="caption-trait">💻 Web Dev</span>
                    <span className="caption-trait">🥇 State Medalist</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Developer Code Terminal */}
            {activeTab === 'code' && (
              <div className="terminal-content-view">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-title">shanthi_profile.py</span>
                </div>
                <div className="terminal-body">
                  <pre>
                    <code>
                      <span className="keyword">class</span> <span className="class-name">DeveloperProfile</span>:
                      {'\n'}    <span className="keyword">def</span> <span className="function">__init__</span>(self):
                      {'\n'}        self.name = <span className="string">"Komma Shanthi Vardhan"</span>
                      {'\n'}        self.college = <span className="string">"Vardhaman College of Engg."</span>
                      {'\n'}        self.specialization = <span className="string">"Data Science"</span>
                      {'\n'}        self.passions = [
                      {'\n'}            <span className="string">"Data Analytics"</span>,
                      {'\n'}            <span className="string">"Machine Learning"</span>,
                      {'\n'}            <span className="string">"Modern Web Apps"</span>
                      {'\n'}        ]
                      {'\n'}        self.ethos = <span className="string">"Discipline + Persistence"</span>
                      {'\n'}
                      {'\n'}    <span className="keyword">def</span> <span className="function">collaborate</span>(self):
                      {'\n'}        <span className="keyword">return</span> <span className="string">"komma.shanthi.vardhan@gmail.com"</span>
                    </code>
                  </pre>
                </div>
                <div className="terminal-badge">
                  <span className="badge-icon">⚡</span>
                  <span>Available for internships &amp; impactful projects</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
