import Reveal from './Reveal';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const focusTags = [
    '📊 Exploratory Data Analysis',
    '🤖 Machine Learning Foundations',
    '🌐 Responsive Web Architecture',
    '🗄️ Relational & NoSQL Databases',
    '📈 Data Visualization & Dashboards',
    '⚡ Algorithmic Problem Solving',
  ];

  const pillars = [
    {
      icon: '📈',
      title: 'Data Science & Analytical Modeling',
      desc: 'Harnessing NumPy, Pandas, and structured Oracle SQL to clean, explore, and extract quantifiable intelligence from raw datasets.',
    },
    {
      icon: '💻',
      title: 'Full-Stack Web Engineering',
      desc: 'Building responsive user experiences using React, modern JavaScript, and HTML/CSS, alongside scalable server backends with Node.js and Django.',
    },
    {
      icon: '🎯',
      title: 'Applied Problem Solving',
      desc: 'Bridging computational engineering and real life through solutions like automated attendance tracking systems and emergency response concepts.',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal>
          <div className="section-title-wrap">
            <span className="section-badge">Core Identity</span>
            <h2 className="section-heading">About Me</h2>
            <div className="heading-line"></div>
            <p className="section-subtitle">
              Undergraduate engineer driven by analytical curiosity, clean code, and relentless discipline.
            </p>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.1}>
            <div className="about-card main-about">
              <div className="about-icon-header">
                <div className="about-avatar-ring">
                  <img
                    src={profileImg}
                    alt="Komma Shanthi Vardhan"
                    className="about-avatar-img"
                  />
                  <div className="avatar-pulse-ring"></div>
                </div>
                <div>
                  <h3 className="about-title-text">Curiosity-Driven Technologist</h3>
                  <span className="about-subtitle-text">Student, Builder &amp; Data Practitioner</span>
                </div>
              </div>

              <p>
                I am a passionate Computer Science and Engineering undergraduate student specializing in{' '}
                <strong>Data Science</strong> at <strong>Vardhaman College of Engineering</strong>, currently progressing through my third year.
              </p>
              <p>
                My academic and technical journey centers on analyzing complex data, discovering meaningful patterns, and engineering fluid, accessible web interfaces. I am motivated by applying computational thinking to eliminate real-world friction.
              </p>
              <p>
                Outside the IDE and terminal, I combine technical discipline with the intense mental grit of competitive wrestling and the creative rhythm of keyboard and percussion music.
              </p>

              <div className="focus-tags">
                {focusTags.map((tag, i) => (
                  <span key={i} className="focus-tag">
                    <span className="tag-dot"></span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="about-pillars">
            {pillars.map((pillar, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1}>
                <div className="pillar-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <div>
                    <h4>{pillar.title}</h4>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
