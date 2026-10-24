import Reveal from './Reveal';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Data Mining & Warehousing',
    'Object-Oriented Programming (Java/C++)',
    'Python for Data Science',
    'Operating Systems & Systems Programming',
    'Web Technologies & Full-Stack Architecture',
    'Probability & Applied Statistics',
    'Software Engineering Principles',
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <Reveal>
          <div className="section-title-wrap">
            <span className="section-badge">Academic Foundation</span>
            <h2 className="section-heading">Education</h2>
            <div className="heading-line"></div>
            <p className="section-subtitle">
              Rigorous undergraduate computer science engineering curriculum focused on data science and applied software development.
            </p>
          </div>
        </Reveal>

        <div className="education-timeline">
          <Reveal delay={0.15}>
            <div className="timeline-card">
              <div className="timeline-indicator">
                <div className="timeline-node">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="timeline-line"></div>
              </div>

              <div className="timeline-body">
                <div className="edu-header">
                  <div>
                    <h3 className="degree-title">B.Tech in Computer Science and Engineering</h3>
                    <div className="degree-spec">Specialization in Data Science</div>
                    <h4 className="college-name">Vardhaman College of Engineering</h4>
                  </div>
                  <div className="edu-badge-box">
                    <span className="edu-badge current">Current: 3rd Year Undergraduate</span>
                  </div>
                </div>

                <p className="edu-description">
                  Immersed in comprehensive computer science fundamentals and advanced data science paradigms. Developing strong core foundations in algorithm design, predictive modeling, statistical inference, and full-stack software development.
                </p>

                <div className="coursework-section">
                  <span className="coursework-label">Key Coursework &amp; Topics:</span>
                  <div className="coursework-pills">
                    {coursework.map((course, idx) => (
                      <span key={idx} className="cw-pill">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
