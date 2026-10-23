import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const emailAddress = 'komma.shanthi.vardhan@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/komma-shanthi-vardhan-388042371/';
  const githubUrl = 'https://github.com/Shanthivardhan44';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write a brief message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Trigger pre-filled mailto
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Hello Shanthi,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setToastMessage(`✓ Thank you, ${formData.name.trim()}! Your email client has been opened to send this note.`);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setToastMessage('');
    }, 7000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-heading">Let's Connect</h2>
          <div className="heading-line"></div>
          <p className="section-subtitle">
            Interested in discussing data science projects, web development, or internship opportunities? I would love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Channels */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Direct Channels</h3>
            <p className="panel-subtitle">
              Reach out directly via email or connect with me across professional platforms.
            </p>

            <div className="contact-channels">
              {/* Email Card */}
              <div className="channel-card">
                <div className="channel-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email Address</span>
                  <a href={`mailto:${emailAddress}`} className="channel-link">
                    {emailAddress}
                  </a>
                  <div className="channel-action-row">
                    <button
                      type="button"
                      className="btn-copy-chip"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? '✓ Copied to clipboard!' : '📋 Copy Address'}
                    </button>
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="channel-card">
                <div className="channel-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="channel-details">
                  <span className="channel-label">LinkedIn Profile</span>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-link"
                  >
                    komma-shanthi-vardhan-388042371
                  </a>
                  <span className="channel-subtext">Connect professionally</span>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="channel-card">
                <div className="channel-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div className="channel-details">
                  <span className="channel-label">GitHub Repositories</span>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-link"
                  >
                    github.com/Shanthivardhan44
                  </a>
                  <span className="channel-subtext">Explore code repositories</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="channel-card">
                <div className="channel-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="channel-details">
                  <span className="channel-label">Location</span>
                  <span className="channel-static">Hyderabad, Telangana, India</span>
                  <span className="channel-subtext">Vardhaman College of Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="contact-form-panel">
            <h3 className="panel-title">Send a Quick Message</h3>
            <p className="panel-subtitle">Draft a message directly to my inbox.</p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Your Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Discussion / Opportunity"
                  required
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Shanthi, I would like to connect regarding..."
                  required
                ></textarea>
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              {toastMessage && (
                <div className="form-toast success" role="alert">
                  {toastMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
