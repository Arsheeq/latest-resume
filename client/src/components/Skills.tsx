export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Infrastructure",
      description: "Designing and implementing enterprise-grade cloud solutions with focus on scalability, security, and cost optimization.",
      tags: ["AWS", "Azure", "GCP","OCI", "Terraform", "CloudFormation"]
    },
    {
      title: "Containerization & Orchestration", 
      description: "Building and managing containerized applications with Kubernetes, ensuring high availability and seamless scaling.",
      tags: ["Docker", "Kubernetes", "Helm", "EKS", "AKS"]
    },
    {
      title: "CI/CD & Automation",
      description: "Creating robust deployment pipelines and automation workflows that enable fast, reliable software delivery.",
      tags: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "Azure DevOps", "Ansible"]
    },
    {
      title: "Monitoring & Observability",
      description: "Implementing comprehensive monitoring solutions that provide deep insights into system performance and health.",
      tags: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
    },
    {
      title: "Security & Compliance",
      description: "Implementing security best practices and compliance frameworks to protect infrastructure and applications.",
      tags: ["HashiCorp Vault", "SIEM", "SOC 2", "CIS Controls", "OWASP"]
    },
    {
      title: "Scripting & Programming",
      description: "Automating complex workflows and building custom tools to enhance operational efficiency and reliability.",
      tags: ["Python", "Bash", "Go", "PowerShell", "YAML", "JSON"]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title fade-in">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card fade-in">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="skill-tags">
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
