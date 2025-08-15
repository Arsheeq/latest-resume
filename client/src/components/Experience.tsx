export default function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Nubinix Technologies Pvt Ltd",
      duration: "Jun 2024 - Present",
      description: "Leading cloud infrastructure initiatives, managing AWS environments, and implementing CI/CD pipelines for efficient software delivery."
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title fade-in">Experience & Journey</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
