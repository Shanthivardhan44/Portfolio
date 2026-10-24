import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const ROLES = [
  'Aspiring Data Scientist',
  'Full-Stack Web Developer',
  'Data Analytics Enthusiast',
  'Algorithmic Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('photo'); // 'photo' or 'code'

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 35);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 40);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <motion.div
          className="hero-text-wrapper"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Cyber Status Pill */}
          <div className="status-pill">
            <span className="status-dot"></span>
            <span className="status-pill-text">3rd Year B.Tech CSE (Data Science)</span>
            <span className="status-pill-sub">Vardhaman College of Engg.</span>
          </div>

          <h1 className="hero-heading">
            <span className="greeting">Hello World, I am</span>
            <span className="hero-name glow-text">Komma Shanthi Vardhan</span>
          </h1>

          <div className="hero-role-container">
            <span className="role-static">I am an&nbsp;</span>
            <span className="typing-role">{displayText}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero-bio">
            Passionate about transforming raw, complex datasets into actionable computational intelligence and engineering scalable, high-performance web applications. Focused on Data Science &amp; Full-Stack Web Development.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Initiate Contact</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              <span className="stat-label">B.Tech CSE (Data Science)</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies &amp; Libraries</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">State Medalist</span>
              <span className="stat-label">Wrestling Sportsman</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Right Column with Profile Photo & Interactive Terminal Switcher */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="avatar-card-glow"></div>

          <div className="hero-visual-card">
            {/* View Switcher Header */}
            <div className="visual-card-tabs">
              <button
                type="button"
                className={`visual-tab-btn ${activeTab === 'photo' ? 'active' : ''}`}
                onClick={() => setActiveTab('photo')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Profile Interface</span>
              </button>

              <button
                type="button"
                className={`visual-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>Data Core Terminal</span>
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
                  <div className="photo-corner-tag tl"></div>
                  <div className="photo-corner-tag tr"></div>
                  <div className="photo-corner-tag bl"></div>
                  <div className="photo-corner-tag br"></div>
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
                    <span className="caption-trait">💻 Full-Stack Web</span>
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
                  <span className="terminal-title">shanthi_system.py</span>
                </div>
                <div className="terminal-body">
                  <pre>
                    <code>
                      <span className="keyword">class</span> <span className="class-name">DeveloperProfile</span>:
                      {'\n'}    <span className="keyword">def</span> <span className="function">__init__</span>(self):
                      {'\n'}        self.name = <span className="string">"Komma Shanthi Vardhan"</span>
                      {'\n'}        self.institution = <span className="string">"Vardhaman College of Engg."</span>
                      {'\n'}        self.specialization = <span className="string">"Data Science"</span>
                      {'\n'}        self.domains = [
                      {'\n'}            <span className="string">"Data Science & Analytics"</span>,
                      {'\n'}            <span className="string">"Full-Stack Web Development"</span>,
                      {'\n'}            <span className="string">"Machine Learning Models"</span>
                      {'\n'}        ]
                      {'\n'}        self.ethos = <span className="string">"Precision • Discipline • Grit"</span>
                      {'\n'}
                      {'\n'}    <span className="keyword">def</span> <span className="function">collaborate</span>(self):
                      {'\n'}        <span className="keyword">return</span> <span className="string">"komma.shanthi.vardhan@gmail.com"</span>
                    </code>
                  </pre>
                </div>
                <div className="terminal-badge">
                  <span className="badge-icon">⚡</span>
                  <span>Available for high-impact internships &amp; placement opportunities</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
