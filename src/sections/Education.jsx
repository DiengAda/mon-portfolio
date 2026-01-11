import './Education.css'

function Education() {
  const education = [
    {
      degree: "Master 2 CSMI",
      school: "Université de Strasbourg",
      period: "2022 - 2025",
      description: "Calcul Scientifique et Mathématiques de l'Innovation",
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
      school: "Université au Sénégal",
      period: "2021 - 2022",
      description: "Formation approfondie en mathématiques appliquées et modélisation numérique",
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
