import './Experiences.css'

function Experiences() {
  const experiences = [
    {
      title: "Stage Master 2: MATHEMATICAL MODELING AND SIMULATIONS OF ORGAN-ON-CHIP OOC",
      description: "Modélisation de la migration cellulaire induite par des signaux chimiques et des interactions à courte et longue portée entre cellules immunitaires et tumorales. Conception d'un schéma numérique implémenté en C++ pour résoudre ces modèles mathématiques et obtenir des simulations fidèles aux observations expérimentales en labo.",
      technologies: ["C++", "EDPs", "Modélisation mathématique", "Simulation numérique", "Visualisation", "ParaView", "Github"],
      image: "🧬",
      github: "https://github.com/orgs/master-csmi/discussions/72"
    },
    {
      title: "Stage Master 1 : ETUDE D’UN SCHÉMA DE TYPE GALERKINE DISCONTINUE (DG)",
      description: "Analyse et implémentation en Python de la méthode de Galerkine Discontinue pour résoudre des systèmes d'EDP linéaires stationnaires. Application à des problèmes de transport linéaire non stationnaires (advection-réaction), avec une analyse approfondie des bornes sur les dérivées des erreurs.",
      technologies: ["Python", "Analyse numérique", "EDPs"],
      image: "📊",
      github: "https://github.com/DiengAda/Mes_Projets_Master/tree/main/Stages/M1-DG/dg-dieng-main"
    }
  ];

  return (
    <section id="experiences" className="experiences">
      <div className="experiences-container">
        <h2 className="section-title">Stages et expériences professionnelles</h2>
        <div className="experiences-grid">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <div className="experience-image">
                <span className="experience-icon">{experience.image}</span>
              </div>
              <div className="experience-content">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <div className="experience-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="experience-tag">{tech}</span>
                  ))}
                </div>
                <div className="experience-links">
                  <a href={experience.github} className="experience-link" target="_blank" rel="noreferrer">
                    <span>Voir en détails sur GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences