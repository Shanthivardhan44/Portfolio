import profileImg from '../assets/profile.jpg';

export default function About() {
  const focusTags = [
    '📊 Exploratory Data Analysis',
    '🤖 Machine Learning Concepts',
    '🌐 Responsive Web Architecture',
    '🗄️ Relational & NoSQL Databases',
    '📈 Data Visualization & BI',
    '⚡ Algorithmic Problem Solving',
  ];

  const pillars = [
    {
      icon: '📈',
      title: 'Data Analytics & Modeling',
      desc: 'Harnessing NumPy, Pandas, and structured SQL to clean, explore, and extract quantifiable intelligence from raw datasets.',
    },
    {
      icon: '💻',
      title: 'Full-Stack Web Development',
      desc: 'Crafting responsive user experiences using React, modern JavaScript, HTML/CSS, alongside scalable backends with Django and Node.js.',
    },
    {
      icon: '🎯',
      title: 'Real-World Problem Solving',
      desc: 'Bridging engineering and real life through solutions like automated attendance tracking systems and emergency safety concepts.',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Get To Know Me</span>
          <h2 className="section-heading">About Me</h2>
          <div className="heading-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-card main-about">
            <div className="about-icon-header">
              <img
                src={profileImg}
                alt="Komma Shanthi Vardhan"
                className="about-avatar-img"
              />
              <div>
                <h3>Curiosity-Driven Developer</h3>
                <span className="about-subtitle">Student &amp; Technologist</span>
              </div>
            </div>

            <p>
              I am a passionate Computer Science and Engineering undergraduate student specializing in{' '}
              <strong>Data Science</strong> at <strong>Vardhaman College of Engineering</strong>, currently progressing through my third year.
            </p>
            <p>
              My academic and technical journey centers on analyzing complex data, discovering meaningful patterns with machine learning, and designing fluid, accessible web interfaces. I am motivated by applying computational thinking to eliminate real-world friction.
            </p>
            <p>
              Outside the IDE and terminal, I combine technical discipline with the intense mental grit of competitive wrestling and the creative rhythm of keyboard and percussion music.
            </p>

            <div className="focus-tags">
              {focusTags.map((tag, i) => (
                <span key={i} className="focus-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="about-pillars">
            {pillars.map((pillar, i) => (
              <div key={i} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
