import './Skills.css'

function Skills() {
  // Groupes de compétences issus du CV
  const skillGroups = [
    {
      title: 'Mathématiques et applications',
      icon: '∫',
      description: "Étude et résolution d'équations aux dérivées partielles (EDP) via différentes approches numériques : méthode des différences finies, méthode des éléments finis et méthode des volumes finis. Bonnes compétences en optimisation, développement d'algorithmes d'optimisation et contrôle optimal.",
      items: [],
    },
    {
      title: 'Data Science et Machine Learning',
      icon: '🤖',
      description: "Bonnes compétences dans les techniques de base d'apprentissage automatique incluant la régression et la classification supervisée pour la prédiction, le clustering pour le regroupement de données, ainsi que la réduction de dimension. Compétences en validation de modèles pour garantir leur performance et leur généralisation.",
      items: [],
    },
    {
      title: 'Algorithmes et programmation',
      icon: '💻',
      description: "Programmation scientifique multi-langage avec Python, C/C++, R et SQL. Solides compétences dans l'utilisation de bibliothèques scientifiques (SciPy, NumPy) et d'apprentissage automatique (Scikit-Learn, PyTorch, TensorFlow). Bonne maîtrise des outils de manipulation de données (Pandas) et de visualisation (Matplotlib, Plotly).",
      items: [],
    },
    {
      title: 'Gestion de versions',
      icon: '🔀',
      description: "Maîtrise des systèmes de contrôle de version avec Git et des plateformes collaboratives GitHub et GitLab pour le versionnement de code, la collaboration en équipe et la gestion de projets.",
      items: [],
    },
    {
      title: 'Outils et logiciels',
      icon: '🛠️',
      description: "Utilisation quotidienne d'environnements de développement (VS Code, RStudio) et d'outils de visualisation scientifique (Paraview, Gmsh). Maîtrise du système d'exploitation Linux et de LaTeX pour la rédaction de documents techniques et scientifiques.",
      items: [],
    },
    // {
    //   title: 'Divers',
    //   items: ['Travail en équipe', 'Communication scientifique'],
    // },
  ];

  return (
    <section id="competences" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>
        {skillGroups.map((group, gi) => (
          <div key={gi} className="skills-block">
            <div className="skill-block-header">
              <span className="skill-block-icon">{group.icon}</span>
              <h3>{group.title}</h3>
            </div>
            {group.description ? (
              <p className="skills-description">{group.description}</p>
            ) : (
              <div className="skills-tags">
                {group.items.map((item, idx) => (
                  <span key={idx} className="skill-tag">{item}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <div className="additional-skills">
          { <h3>Compétences Complémentaires</h3>}
          <div className="skills-list">
            <div className="skill-card">
              <span className="skill-icon">💻</span>
              <h4>Système d'exploitation Linux</h4>
              <p>Maîtrise avancée de l'environnement Linux et des commandes shell</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">📄</span>
              <h4>Communication Scientifique</h4>
              <p>Rédaction de rapports techniques avec LaTeX et présentations Beamer</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">👥</span>
              <h4>Travail en Équipe</h4>
              <p>Capacité à collaborer efficacement dans des projets de recherche</p>
            </div>
          </div>
        </div> */}
    </section>
  );
}

export default Skills;
