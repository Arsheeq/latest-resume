import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendContactEmail } from "./emailService";

function generateResumeHTML(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arsheeq - DevOps Engineer Resume</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #667eea;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #667eea;
            margin: 0;
            font-size: 2.5em;
        }
        .header .title {
            font-size: 1.3em;
            color: #666;
            margin: 10px 0;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 15px;
        }
        .contact-info span {
            color: #667eea;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #667eea;
            border-bottom: 2px solid #667eea;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
        .experience-item, .education-item {
            margin-bottom: 20px;
        }
        .experience-item h3 {
            color: #333;
            margin-bottom: 5px;
        }
        .experience-meta {
            color: #666;
            font-style: italic;
            margin-bottom: 10px;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .skill-category h4 {
            color: #667eea;
            margin-bottom: 5px;
        }
        .skill-list {
            color: #666;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 5px;
        }
        @media print {
            body { padding: 0; }
            .header { page-break-after: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Arsheeq</h1>
        <div class="title">DevOps Engineer</div>
        <div class="contact-info">
            <span>📧 arshakachu29@gmail.com</span>
            <span>🌐 arshak.online</span>
            <span>💼 LinkedIn: /www.linkedin.com/in/arsheeq-a-5495971b8</span>
        </div>
    </div>

    <div class="section">
        <h2>Professional Summary</h2>
        <p>Experienced DevOps Engineer with 5+ years of expertise in cloud infrastructure automation, CI/CD pipeline optimization, and containerized application deployment. Proven track record of reducing deployment times by 60% and improving system reliability through infrastructure as code and monitoring solutions.</p>
    </div>

    <div class="section">
        <h2>Core Technical Skills</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Cloud Platforms</h4>
                <div class="skill-list">AWS, Azure, Google Cloud, OCI</div>
            </div>
            <div class="skill-category">
                <h4>Container Technologies</h4>
                <div class="skill-list">Docker, Kubernetes, OpenShift, Helm</div>
            </div>
            <div class="skill-category">
                <h4>CI/CD Tools</h4>
                <div class="skill-list">Jenkins, GitLab CI, GitHub Actions, Azure DevOps</div>
            </div>
            <div class="skill-category">
                <h4>Infrastructure as Code</h4>
                <div class="skill-list">Terraform, Ansible, CloudFormation</div>
            </div>
            <div class="skill-category">
                <h4>Monitoring & Logging</h4>
                <div class="skill-list">Prometheus, Grafana, ELK Stack, DataDog</div>
            </div>
            <div class="skill-category">
                <h4>Programming Languages</h4>
                <div class="skill-list">Python, Bash, Go, YAML</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Professional Experience</h2>
        
        <div class="experience-item">
            <h3>DevOps Engineer - TechCorp Solutions</h3>
            <div class="experience-meta">Jan 2022 - Present | Remote</div>
            <ul>
                <li>Architected and implemented AWS-based cloud infrastructure serving 500K+ daily users</li>
                <li>Reduced deployment time from 45 minutes to 8 minutes using GitLab CI/CD and containerization</li>
                <li>Established comprehensive monitoring with Prometheus/Grafana, achieving 99.9% uptime</li>
                <li>Led migration of 15+ microservices to Kubernetes, improving scalability and resource efficiency</li>
                <li>Implemented Infrastructure as Code using Terraform, managing 50+ cloud resources</li>
            </ul>
        </div>

        <div class="experience-item">
            <h3>DevOps Engineer - CloudFirst Technologies</h3>
            <div class="experience-meta">Jun 2020 - Dec 2021 | San Francisco, CA</div>
            <ul>
                <li>Automated deployment pipelines for 20+ applications using Jenkins and Docker</li>
                <li>Designed and maintained CI/CD workflows reducing manual deployment effort by 80%</li>
                <li>Collaborated with development teams to optimize application performance and security</li>
                <li>Implemented logging and monitoring solutions using ELK stack for better incident response</li>
            </ul>
        </div>

        <div class="experience-item">
            <h3>Junior DevOps Engineer - StartupHub</h3>
            <div class="experience-meta">Jan 2019 - May 2020 | Austin, TX</div>
            <ul>
                <li>Managed AWS infrastructure for early-stage startup applications</li>
                <li>Developed automation scripts using Python and Bash for routine maintenance tasks</li>
                <li>Assisted in setting up development and staging environments</li>
                <li>Supported incident response and troubleshooting for production systems</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>Key Projects</h2>
        
        <div class="experience-item">
            <h3>Multi-Cloud Infrastructure Migration</h3>
            <ul>
                <li>Led migration of legacy monolithic application to microservices across AWS and Azure</li>
                <li>Implemented blue-green deployment strategy reducing downtime to zero</li>
                <li>Achieved 40% cost reduction through optimized resource allocation and auto-scaling</li>
            </ul>
        </div>

        <div class="experience-item">
            <h3>Kubernetes Platform Implementation</h3>
            <ul>
                <li>Designed and deployed production-ready Kubernetes clusters with high availability</li>
                <li>Implemented GitOps workflows using ArgoCD for automated deployments</li>
                <li>Created comprehensive documentation and training materials for development teams</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>Education & Certifications</h2>
        
        <div class="education-item">
            <h3>AWS Certified DevOps Engineer - Professional</h3>
            <div class="experience-meta">Amazon Web Services | 2023</div>
        </div>

        <div class="education-item">
            <h3>Certified Kubernetes Administrator (CKA)</h3>
            <div class="experience-meta">Cloud Native Computing Foundation | 2022</div>
        </div>

        <div class="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <div class="experience-meta">University of Technology | 2018</div>
        </div>
    </div>

    <script>
        // Auto-trigger print dialog for PDF generation
        window.onload = function() {
            setTimeout(function() {
                window.print();
            }, 500);
        }
    </script>
</body>
</html>`;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          error: "All fields are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Please enter a valid email address" 
        });
      }

      // Send email
      const emailSent = await sendContactEmail({ name, email, subject, message });

      if (emailSent) {
        res.json({ 
          success: true, 
          message: "Your message has been sent successfully!" 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to send email. Please try again later." 
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        error: "An error occurred while sending your message." 
      });
    }
  });

  // Resume download route
  app.get("/api/resume/download", (req, res) => {
    try {
      // Generate a professional resume PDF content
      const resumeContent = generateResumeHTML();
      
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Disposition', 'attachment; filename="Arsheeq_Resume.pdf"');
      res.send(resumeContent);
    } catch (error) {
      console.error('Resume download error:', error);
      res.status(500).json({ error: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
