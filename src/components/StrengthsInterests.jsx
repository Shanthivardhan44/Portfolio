import Reveal from './Reveal';

export default function StrengthsInterests() {
  const strengths = [
    {
      icon: '🧩',
      title: 'Structured Algorithmic Problem-Solving',
      desc: 'Deconstructing complex computational requirements into modular, testable components, optimal time complexities, and scalable algorithms.',
    },
    {
      icon: '📚',
      title: 'Continuous Technical Agility',
      desc: 'Proactively exploring modern data science architectures, advanced web frameworks, and production software engineering best practices.',
    },
    {
      icon: '🤝',
      title: 'Disciplined Collaborative Teamwork',
      desc: 'Communicating clearly across cross-functional engineering teams, managing milestone deadlines, and giving high-signal code reviews.',
    },
  ];

  return (
    <section id="strengths" className="section strengths-section">
      <div className="container">
        <Reveal>
          <div className="section-title-wrap">
            <span className="section-badge">Core Pillars</span>
            <h2 className="section-heading">Strengths &amp; Passions</h2>
            <div className="heading-line"></div>
            <p className="section-subtitle">
              Beyond the terminal: athletic championship mental resilience, musical creativity, and disciplined execution.
            </p>
          </div>
        </Reveal>

        <div className="strengths-interests-layout">
          {/* Key Strengths */}
          <div className="strengths-col">
            <Reveal delay={0.1}>
              <h3 className="sub-col-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Core Engineering Strengths
              </h3>
            </Reveal>

            <div className="strength-cards-stack">
              {strengths.map((s, idx) => (
                <Reveal key={idx} delay={0.15 + idx * 0.1}>
                  <div className="strength-item">
                    <div className="strength-icon">{s.icon}</div>
                    <div className="strength-content">
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Achievements & Passions */}
          <div className="interests-col">
            <Reveal delay={0.1}>
              <h3 className="sub-col-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Distinctions &amp; Creative Pursuits
              </h3>
            </Reveal>

            {/* Wrestling Medalist Distinction */}
            <Reveal delay={0.2}>
              <div className="achievement-featured-card">
                <div className="achievement-ambient-glow"></div>
                <div className="achievement-top-row">
                  <div className="achievement-medal-icon">🥇</div>
                  <div className="achievement-badge">Athletic Distinction</div>
                </div>
                <h4>State-Level Wrestling Medalist</h4>
                <p>
                  Earned a state-level wrestling championship medal. The rigorous physical conditioning and mat strategy forged an extraordinary mental toughness, composure under pressure, and relentless perseverance that directly empowers my software engineering work ethic.
                </p>
                <div className="medal-traits">
                  <span className="trait-tag">High Mental Resilience</span>
                  <span className="trait-tag">Composure Under Pressure</span>
                  <span className="trait-tag">Relentless Grit</span>
                </div>
              </div>
            </Reveal>

            {/* Music Interest Card */}
            <Reveal delay={0.3}>
              <div className="interest-card">
                <div className="interest-icon-wrap">
                  <span className="interest-emoji">🎹</span>
                  <span className="interest-emoji">🥁</span>
                </div>
                <div className="interest-text">
                  <h4>Keyboard &amp; Percussion Music</h4>
                  <p>
                    Passionate about playing keyboard harmonies and rhythmic percussion beats. Musical composition refines pattern recognition, creative focus, and structural balance that mirror clean system architecture.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
