export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              Hi, I'm <strong>Arsheeq</strong> — a <strong>Freelance DevOps Engineer</strong> based in Kerala, India. I specialize in cloud automation, infrastructure management, and CI/CD, with hands-on experience in Linux, AWS, Docker, and Kubernetes. I help businesses build efficient systems that scale and perform.
            </p>
            <p>
              As a freelance DevOps consultant, I work with startups and enterprises to optimize their infrastructure, implement CI/CD pipelines, and ensure their systems are secure, scalable, and cost-effective. I bring expertise in cloud migration, automation, and best practices to every project.
            </p>
            <p>
              Whether you need help with AWS infrastructure, Docker containerization, Kubernetes orchestration, or building robust CI/CD pipelines, I'm here to help. Let's discuss how I can contribute to your project's success!
            </p>
          </div>
          <div className="about-image fade-in">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
              alt="Arsheeq" 
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
