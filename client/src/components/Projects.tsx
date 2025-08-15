export default function Projects() {
  const projects = [
    {
      title: "Cloud Infrastructure Consulting",
      description: "Provided comprehensive DevOps consulting services to multiple clients, including AWS infrastructure setup, CI/CD pipeline implementation, and cloud migration strategies.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kubernetes & Docker Solutions", 
      description: "Designed and implemented containerized solutions using Docker and Kubernetes, helping clients achieve scalable, reliable, and maintainable infrastructure deployments.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built automated deployment pipelines for various clients, reducing deployment time by 80% and ensuring consistent, reliable software delivery across environments.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title fade-in">Infrastructure Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}