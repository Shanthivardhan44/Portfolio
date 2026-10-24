import Reveal from './Reveal';

export default function Projects() {
  const projects = [
    {
      id: 'quickshop',
      title: 'QuickShop',
      tagline: 'Smart Shopping Web App',
      category: 'E-Commerce & Full-Stack',
      status: 'Active Project',
      statusType: 'in-dev',
      isFeatured: true,
      description:
        'A high-performance modern web application designed for frictionless digital commerce. Features dynamic catalog filtering, responsive cart state management, and an intuitive checkout flow built for streamlined customer interactions.',
      features: [
        'Dynamic product catalog with multi-category filters',
        'Stateful shopping cart and real-time total calculations',
        'Mobile-first responsive interface with fast load metrics',
      ],
      technologies: ['React', 'JavaScript (ES6+)', 'HTML5/CSS3', 'REST APIs', 'State Management'],
      repoNotice: 'Source code & repositories on GitHub',
    },
    {
      id: 'matcho',
      title: 'Matcho (metcho)',
      tagline: 'Sports Match and Tournament Platform',
      category: 'Sports & Live Web Platform',
      status: 'Active Development',
      statusType: 'in-dev',
      isFeatured: true,
      description:
        'A dedicated sports web platform engineered to deliver real-time match scores, tournament schedules, and live updates. Designed with a clean, dynamic scoreboard interface to give fans frictionless access to game numbers.',
      features: [
        'Live match score & tournament outcome viewer',
        'Intuitive match schedules & fixture tables',
        'Optimized for mobile-first sports viewers & rapid refresh',
      ],
      technologies: ['Web Development', 'JavaScript', 'HTML5/CSS3', 'UI/UX Design'],
      repoNotice: 'Repository release in progress',
    },
    {
      id: 'attendance-system',
      title: 'Attendance Management System',
      tagline: 'Comprehensive Student & Faculty Administration',
      category: 'Academic Enterprise Solution',
      status: 'Academic Project',
      statusType: 'academic',
      isFeatured: false,
      description:
        'A full-fledged academic attendance management system developed to replace manual registers. Enables faculty to log daily course attendance, records student profiles, and automatically generates attendance percentage metrics and shortage reports.',
      features: [
        'Student & faculty roster database management',
        'Daily lecture attendance calculation & tracking',
        'Automated attendance analytics & shortfall alerts',
      ],
      technologies: ['Database Management', 'Python / Web', 'SQL', 'Analytics'],
      repoNotice: 'Documentation & code available on request',
    },
    {
      id: 'safelens',
      title: 'SafeLens',
      tagline: 'Personal Safety Application Concept',
      category: 'Security & Mobile Concept',
      status: 'Concept & Prototype',
      statusType: 'concept',
      isFeatured: false,
      description:
        'An innovative personal security application concept crafted to provide instant emergency response. Explores quick SOS triggers, automatic emergency contact notification protocols, and secure alerting mechanisms.',
      features: [
        'Rapid SOS trigger and instant alert dispatch',
        'Emergency contact notification routing',
        'Privacy-first security & location architecture',
      ],
      technologies: ['System Design', 'Personal Safety', 'Architecture Blueprint'],
      repoNotice: 'Design specifications & concept stage',
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <div className="section-title-wrap">
            <span className="section-badge">Applied Engineering</span>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="heading-line"></div>
            <p className="section-subtitle">
              Interactive web applications, sport score tracking platforms, and analytical system concepts developed and deployed.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 0.1}>
              <article
                className={`project-card ${proj.isFeatured ? 'featured-card' : ''}`}
              >
                <div className="project-card-glow"></div>
                <div className="project-card-header">
                  <div className="project-meta">
                    <span className="project-tag">{proj.category}</span>
                    <span className={`project-status ${proj.statusType}`}>
                      <span className="status-indicator"></span>
                      {proj.status}
                    </span>
                  </div>
                  <div className="project-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <p className="project-headline">{proj.tagline}</p>
                <p className="project-description">{proj.description}</p>

                <div className="project-features">
                  {proj.features.map((f, i) => (
                    <span key={i} className="feature-bullet">
                      • {f}
                    </span>
                  ))}
                </div>

                <div className="project-tags">
                  {proj.technologies.map((t, i) => (
                    <span key={i} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="repo-status-notice">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{proj.repoNotice}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* GitHub Profile Banner */}
        <Reveal delay={0.2}>
          <div className="projects-github-cta">
            <div className="github-cta-content">
              <div className="github-icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <h4>Explore Repositories &amp; Code Commits</h4>
                <p>Follow my public repositories, project development, and experiments on GitHub at <strong>Shanthivardhan44</strong>.</p>
              </div>
            </div>
            <a
              href="https://github.com/Shanthivardhan44"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>Visit GitHub Profile</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
