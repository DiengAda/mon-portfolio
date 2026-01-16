import './Education.css'

function Education() {
  const education = [
    {
      degree: "Master Mathématique pour l'ingénieurie, Algorithmique et Statistique",
      school: "Université Bourgogne Europe, France",
      period: "septembre 2025 - Aujourd'hui",
      description: "Formation en mathématiques appliquées, science des données et informatique scientifique. Triple compétence : statistique/optimisation, machine learning et programmation scientifique.",
      url: "https://formations.ube.fr/fr/offre-de-formation/master-XB/master-mathematiques-et-applications-LMGC26R4/mathematiques-pour-l-ingenierie-algorithmique-et-statistique-LMGEPMC6.html",
      courses: [
        "Modélisation déterministe et aléatoire",
        "Statistique et sciences des données",
        "Calcul scientifique et optimisation",
        "Algorithmique et programmation",
        "Intelligence artificielle et machine learning",
        "Mathématiques pour la santé"
      ]
    },
    {
      degree: "Diplomé de Master en Calcul Scientifique et Mathématiques de l'Innovation",
      school: "Université de Strasbourg, France",
      period: "2023 - 2025",
      description: "Spécialisation en modélisation mathématique, simulation numérique, méthodes numériques avancées et optimisation",
      url: "https://mathinfo.unistra.fr/formations/master/master-mathematiques-et-applications/odf-parcours-calcul-scientifique-et-mathematiques-de-linnovation-csmi-PR438-18099/",
      courses: [
        "Équations aux dérivées partielles",
        "Calcul Scientifique",
        "Optimisation et contrôle optimal",
        "Traitement de données",
        "Programmation avancée (Python, C++, C, SQL)",
        "Calcul Haute performance (MPI, OpenCL)",
        "Apprentissage automatique"
      ]
    },
    {
      degree: "Master 1 Mathématiques Appliquées",
      school: "Université Cheikh Anta Diop de Dakar, Sénégal",
      period: "2021 - 2022",
      description: "Formation approfondie en mathématiques appliquées et modélisation numérique",
      url: "https://fad.fst.ucad.sn/course/index.php?categoryid=225&lang=en",
      courses: [
        "Mathématiques appliquées",
        "Modélisation numérique",
        "Analyse numérique"
      ]
    }
  ];

  return (
    <section id="formation" className="education">
      <div className="education-container">
        <h2 className="section-title">Formation</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-date">
                <span>{edu.period}</span>
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p className="education-description">{edu.description}</p>
                {edu.url && (
                  <a 
                    href={edu.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    Voir formation →
                  </a>
                )}
                <div className="education-courses">
                  <h5>Cours principaux :</h5>
                  <ul>
                    {edu.courses.map((course, courseIndex) => (
                      <li key={courseIndex}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
