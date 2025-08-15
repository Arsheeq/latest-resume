import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to send message');
      }

      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact">
        <div className="container">
          <h2 className="section-title fade-in">Let's Work Together</h2>
          <div className="contact-content fade-in">
            <div style={{ 
              background: 'rgba(0, 255, 0, 0.1)', 
              border: '1px solid rgba(0, 255, 0, 0.3)',
              borderRadius: '15px',
              padding: '2rem',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#00ff00', marginBottom: '1rem' }}>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you soon!</p>
              <button
                onClick={() => setIsSubmitted(false)}
                style={{
                  background: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  marginTop: '1rem',
                  cursor: 'pointer'
                }}
              >
                Send Another Message
              </button>
            </div>
            <div className="contact-actions">
              <button 
                onClick={() => window.open('/api/resume/download', '_blank')}
                className="btn btn-secondary resume-btn"
              >
                📄 Download Resume
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/farzanfa" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/arsheeq-a-5495971b8/" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title fade-in">Let's Work Together</h2>
        <div className="contact-content fade-in">
          <p>
            I'm available for freelance DevOps projects and consulting opportunities. Whether you need help with cloud infrastructure, CI/CD pipelines, automation, or DevOps transformation, I'm here to help your business succeed. Let's discuss your project requirements!
          </p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            {contactMutation.error && (
              <div className="error-message">
                {contactMutation.error.message}
              </div>
            )}
            
            <button
              type="submit"
              disabled={contactMutation.isPending}
              className="btn btn-primary contact-btn"
            >
              {contactMutation.isPending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="contact-actions">
            <button 
              onClick={() => window.open('/api/resume/download', '_blank')}
              className="btn btn-secondary resume-btn"
            >
              📄 Download Resume
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com/farzanfa" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/arsheeq-a-5495971b8/" className="social-link">LinkedIn</a>
            <a href="https://twitter.com/farzanfa_com" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
