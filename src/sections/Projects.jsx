import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Projet Master : CLIMIC - Impact du changement climatique sur les micro-organismes du vin (Projet en cours - Janvier 2026)" ,
      description: "Projet CLIMIC financé par la Région Bourgogne Franche-Comté visant à comprendre l'évolution et l'adaptation des micro-organismes du vin au changement climatique. Objectifs : collecter et traiter statistiquement des données de composition de moûts (azote, sucre, pH, paramètres œnologiques) sur 30-40 ans et différents cépages (Chardonnay, Pinot noir, Gamay) ; créer une base de données ; analyser l'impact des modifications des moûts sur la fermentation alcoolique.",
      technologies: ["Python", "Statistique", "Data Analysis", "Base de données", "R", "Data Science"],
      image: "🍇",
      github: "https://github.com/DiengAda/projet-CLIMIC",
      demo: "#"
    },
    {
      title: "Projet académique: SIMULATION NUMÉRIQUE D’UN MODÈLE  DIPHASIQUE DANS UN MILIEU POREUX",
      description: "Modélisation et simulation numérique d'un écoulement diphasique dans un milieu poreux. Analyse des interactions fluides et évaluation des paramètres influençant l'écoulement dans le milieu poreux. Visualisation 2D/3D avec Paraview et post-processing.",
      technologies: ["EDPs","Python", "Loi de Darcy", "Simulation", "Paraview", "Visualisation"],
      image: "💧",
      github: "#",
      demo: "#"
    },
    {
      title: "Projet académique: SIMULATION NUMÉRIQUE D’UN DISPOSITIF DE REFROIDISSEMENT DE MICROPROCESSEUR EN C++",
      description: "Étude d'un modèle de comportement thermique d'un microprocesseur et simulation numérique en C++. Optimisation des performances des simulations en ajustant les paramètres de maillage et les algorithmes de résolution. Visualisation 2D/3D avec Paraview et gestion efficace des fichiers de sortie (VTK, CSV).",
      technologies: ["C++", "Simulation thermique", "Optimisation numérique", "Paraview", "Visualisation"],
      image: "🔥",
      github: "#",
      demo: "#"
    },
    {
      title: "Projet INRIA : STRUCTURE-PRESERVING INTEGRATION METHODS FOR ORDINARY DIFFERENTIAL EQUATIONS (ODES)",
      description: "Développement de méthodes numériques conservant les structures géométriques des systèmes dynamiques, appliqué aux modèles astrophysiques (problème de Kepler).",
      technologies: ["Python", "ODEs","Méthodes Numériques", "Astrophysique"],
      image: "🌟",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projets" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projets académiques et de recherche</h2>
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
                    <span>Voir en détails sur GitHub</span>
                  </a>
                  {/* <a href={project.demo} className="project-link demo">
                    <span>Démo</span>
                  </a> */}
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
