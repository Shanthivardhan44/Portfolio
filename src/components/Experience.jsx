import Reveal from './Reveal';

export default function Experience() {
  const experiences = [
    {
      role: 'Front-End Development Intern',
      company: 'Cognifyz Technologies',
      type: 'Internship',
      period: 'Recent Internship',
      location: 'Remote',
      status: 'Completed',
      summary:
        'Engaged in hands-on front-end web engineering, translating interface design concepts into clean, accessible, and responsive user experiences.',
      highlights: [
        'Built modern, responsive client-facing interfaces with semantic HTML5, CSS3, JavaScript (ES6+), and modern UI frameworks.',
        'Optimized component rendering performance, user interactivity flows, and cross-browser visual fidelity.',
        'Collaborated on feature rollouts, bug resolution, and responsive layout testing across mobile and desktop viewports.',
        'Adhered to modern web development standards, version control workflows with Git/GitHub, and modular code structures.',
      ],
      techStack: [
        'JavaScript (ES6+)',
        'React',
        'HTML5/CSS3',
        'Responsive Design',
        'Git & GitHub',
        'UI/UX Architecture',
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <Reveal>
          <div className="section-title-wrap">
            <span className="section-badge">Career Journey</span>
            <h2 className="section-heading">Professional Experience</h2>
            <div className="heading-line"></div>
            <p className="section-subtitle">
              Practical engineering experience delivering responsive front-end applications and collaborative web solutions.
            </p>
          </div>
        </Reveal>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="exp-timeline-card">
                <div className="exp-timeline-marker">
                  <div className="exp-node-ring">
                    <span className="exp-node-dot"></span>
                  </div>
                  <div className="exp-timeline-track"></div>
                </div>

                <div className="exp-card-content">
                  <div className="exp-card-header">
                    <div className="exp-title-group">
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-row">
                        <span className="exp-company">{exp.company}</span>
                        <span className="exp-separator">•</span>
                        <span className="exp-type">{exp.type}</span>
                        <span className="exp-separator">•</span>
                        <span className="exp-location">{exp.location}</span>
                      </div>
                    </div>

                    <div className="exp-badge-group">
                      <span className="exp-period-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="exp-summary">{exp.summary}</p>

                  <div className="exp-highlights-list">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="exp-highlight-item">
                        <svg className="exp-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="exp-tech-tags">
                    {exp.techStack.map((tech, i) => (
                      <span key={i} className="exp-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
