export default function StrengthsInterests() {
  const strengths = [
    {
      icon: '🧩',
      title: 'Structured Problem-Solving',
      desc: 'Deconstructing complex computational problems into modular, testable components and scalable algorithms.',
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      desc: 'Proactively exploring novel data science models, modern web libraries, and software engineering best practices.',
    },
    {
      icon: '🤝',
      title: 'Collaborative Teamwork',
      desc: 'Communicating clearly across cross-functional student teams, managing project milestones, and delivering peer feedback.',
    },
  ];

  return (
    <section id="strengths" className="section strengths-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Core Pillars</span>
          <h2 className="section-heading">Strengths &amp; Interests</h2>
          <div className="heading-line"></div>
          <p className="section-subtitle">
            Beyond the keyboard: discipline, mental resilience, athletic accomplishment, and artistic balance.
          </p>
        </div>

        <div className="strengths-interests-layout">
          {/* Key Strengths */}
          <div className="strengths-col">
            <h3 className="sub-col-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Key Strengths
            </h3>

            <div className="strength-cards-stack">
              {strengths.map((s, idx) => (
                <div key={idx} className="strength-item">
                  <div className="strength-icon">{s.icon}</div>
                  <div className="strength-content">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Passions */}
          <div className="interests-col">
            <h3 className="sub-col-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Achievements &amp; Passions
            </h3>

            {/* Wrestling Medalist Distinction */}
            <div className="achievement-featured-card">
              <div className="achievement-medal-icon">🥇</div>
              <div className="achievement-badge">Athletic Distinction</div>
              <h4>State-Level Wrestling Medalist</h4>
              <p>
                Earned a state-level wrestling championship medal. The rigorous physical conditioning and mat strategy forged an extraordinary sense of mental toughness, calmness under pressure, and relentless perseverance that directly empowers my software development work ethic.
              </p>
              <div className="medal-traits">
                <span className="trait-tag">High Resilience</span>
                <span className="trait-tag">Composure Under Pressure</span>
                <span className="trait-tag">Relentless Grit</span>
              </div>
            </div>

            {/* Music Interest Card */}
            <div className="interest-card">
              <div className="interest-icon-wrap">
                <span className="interest-emoji">🎹</span>
                <span className="interest-emoji">🥁</span>
              </div>
              <div className="interest-text">
                <h4>Keyboard &amp; Percussion Music</h4>
                <p>
                  Passionate about playing keyboard melodies and rhythmic percussion beats. Balancing musical composition develops pattern recognition, creative focus, and structural harmony that mirror clean code architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
