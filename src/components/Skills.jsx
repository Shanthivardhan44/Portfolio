import Reveal from './Reveal';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      badge: 'Core Syntax & Logic',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      type: 'bars',
      skills: [
        { name: 'Python', detail: 'Primary Language • Data Science, Scripting & Analytics', percent: 88 },
        { name: 'Java', detail: 'Object-Oriented Programming & Core Software Architecture', percent: 82 },
        { name: 'C / C++', detail: 'Data Structures & Algorithmic Problem Solving', percent: 78 },
      ],
    },
    {
      title: 'Full-Stack Web Development',
      badge: 'Frontend & Backend',
      isWide: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      type: 'chips',
      chips: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React',
        'Django',
        'Node.js',
        'Express.js',
      ],
      note: 'Experience building reactive component architectures, RESTful server APIs, asynchronous data flows, and stateful web applications.',
    },
    {
      title: 'Data Science & Analytics',
      badge: 'Analytical Computing',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
      type: 'chips_highlight',
      chips: ['NumPy', 'SciPy', 'Pandas', 'Excel Analytics', 'Data Visualization'],
      bullets: [
        'Numerical array processing, vectorized matrix operations & feature engineering',
        'Dataframe manipulation, data cleaning, wrangling & restructuring',
        'Statistical modeling, distribution exploration & metric dashboards',
      ],
    },
    {
      title: 'Database Systems',
      badge: 'Relational & NoSQL',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      type: 'dbs',
      dbs: [
        {
          name: 'Oracle SQL',
          desc: 'Relational schema design, primary/foreign key relations, subqueries, complex multi-table joins, and schema normalization.',
        },
        {
          name: 'MongoDB',
          desc: 'NoSQL document models, BSON collections, compound indexing, aggregation pipelines, and CRUD server integrations.',
        },
      ],
    },
    {
      title: 'Tools & Engineering Practices',
      badge: 'Workflow & Version Control',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      type: 'chips',
      chips: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'DSA (Algorithms)'],
      note: 'Proficient with branch workflows, pull requests, collaborative versioning, algorithmic problem solving, and reproducible Jupyter analytical workflows.',
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <Reveal>
          <div className="section-title-wrap">
            <span className="section-badge">Technical Arsenal</span>
            <h2 className="section-heading">Skills &amp; Technologies</h2>
            <div className="heading-line"></div>
            <p className="section-subtitle">
              Comprehensive technical capabilities cultivated through computer science coursework, laboratory research, and hands-on building.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 0.08} className={cat.isWide ? 'wide-card-wrapper' : ''}>
              <div className={`skill-category-card ${cat.isWide ? 'wide-card' : ''}`}>
                <div className="card-ambient-highlight"></div>
                <div className="category-header">
                  <div className="cat-icon">{cat.icon}</div>
                  <div>
                    <h3 className="category-title">{cat.title}</h3>
                    <span className="cat-badge">{cat.badge}</span>
                  </div>
                </div>

                {cat.type === 'bars' && (
                  <div className="skills-list">
                    {cat.skills.map((s, idx) => (
                      <div key={idx} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{s.name}</span>
                          <span className="skill-type">{s.percent}%</span>
                        </div>
                        <div className="skill-progress-bar">
                          <div
                            className="skill-progress-fill"
                            style={{ width: `${s.percent}%` }}
                          ></div>
                        </div>
                        <span className="skill-detail">{s.detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {cat.type === 'chips' && (
                  <div className="chips-content-wrap">
                    <div className="skills-chips-wrap">
                      {cat.chips.map((chip, idx) => (
                        <span key={idx} className="skill-chip">
                          <span className="chip-dot"></span>
                          {chip}
                        </span>
                      ))}
                    </div>
                    {cat.note && <p className="cat-note">{cat.note}</p>}
                  </div>
                )}

                {cat.type === 'chips_highlight' && (
                  <div className="ds-content-wrap">
                    <div className="skills-chips-wrap">
                      {cat.chips.map((chip, idx) => (
                        <span key={idx} className="skill-chip highlight">
                          <span className="chip-dot"></span>
                          {chip}
                        </span>
                      ))}
                    </div>
                    <div className="skill-feature-box">
                      {cat.bullets.map((b, idx) => (
                        <div key={idx} className="feature-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {cat.type === 'dbs' && (
                  <div className="db-grid">
                    {cat.dbs.map((db, idx) => (
                      <div key={idx} className="db-item">
                        <div className="db-name">{db.name}</div>
                        <div className="db-desc">{db.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
