
import { useState } from 'react';
import './portfolio.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon!");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "✉️",
      title: "Email",
      value: "manianuram2312@gmail.com",
      link: "mailto:manianuram2312@gmail.com"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91 79045 44330",
      link: "tel:+917904544330"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Coimbatore, Tamil Nadu, India",
      link: "https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss your next project or explore collaboration opportunities
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <a href={info.link} className="contact-item-link" target={info.link.startsWith('http') ? '_blank' : undefined}>
                  <div className="contact-item-icon">
                    {info.icon}
                  </div>
                  <div className="contact-item-info">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              </div>
            ))}

            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
                Connect With Me
              </h3>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ position: 'static', width: '48px', height: '48px' }}>
                  🐙
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ position: 'static', width: '48px', height: '48px' }}>
                  💼
                </a>
              </div>
            </div>

            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
                Location
              </h3>
              <div style={{ aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125438.27612253775!2d76.93093997248726!3d11.016845390369375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Coimbatore Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3>Send Me a Message</h3>
            <p>
              I'd love to hear about your project. Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or how I can help you..."
                  rows={6}
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "📤 Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
