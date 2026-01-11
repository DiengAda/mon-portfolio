import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Modélisation Organ-On-Chip (OOC)",
      description: "Stage Master 2 : Modélisation de la migration cellulaire induite par des signaux chimiques avec méthode HDG pour obtenir des simulations fidèles aux observations expérimentales.",
      technologies: ["Python", "Méthodes HDG", "Modélisation"],
      image: "🧬",
      github: "#",
      demo: "#"
    },
    {
      title: "Structure-Preserving Integration Methods",
      description: "Projet INRIA : Développement de méthodes numériques conservant les structures géométriques des systèmes dynamiques, appliqué aux modèles astrophysiques (problème de Kepler).",
      technologies: ["Python", "Méthodes Numériques", "Astrophysique"],
      image: "🌟",
      github: "#",
      demo: "#"
    },
    {
      title: "Schéma Galerkine Discontinue (DG)",
      description: "Stage Master 1 : Analyse et implémentation de la méthode DG pour résoudre des systèmes d'EDP linéaires stationnaires et problèmes de transport non stationnaires.",
      technologies: ["Python", "EDP", "Méthode DG"],
      image: "📊",
      github: "#",
      demo: "#"
    },
    {
      title: "Simulation Thermique Microprocesseur",
      description: "Modélisation du comportement thermique d'un microprocesseur via simulations numériques C++, avec optimisation des performances et visualisation Paraview.",
      technologies: ["C++", "Simulation", "Paraview"],
      image: "🔥",
      github: "#",
      demo: "#"
    },
    {
      title: "Modèle Diphasique Milieu Poreux",
      description: "Modélisation et simulation numérique d'un écoulement diphasique dans un milieu poreux utilisant la loi de Darcy, avec analyse des interactions fluides.",
      technologies: ["Python", "Loi de Darcy", "Simulation"],
      image: "�",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projets" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <span>GitHub</span>
                  </a>
                  <a href={project.demo} className="project-link demo">
                    <span>Démo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
