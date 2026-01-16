import './Skills.css'

function Skills() {
  // Groupes de compétences issus du CV
  const skillGroups = [
    {
      title: 'Mathématiques et applications',
      items: [
        "Étude d'EDP",
        'Méthode des différences finies',
        'Méthode des éléments finis',
        'Méthode des volumes finis',
        'Optimisation',
        "Algorithmes d'optimisation",
        'Contrôle optimal',
      ],
    },
    {
      title: 'Techniques et méthodes ML',
      items: [
        'Régression',
        'Classification supervisée',
        'Clustering',
        'Réduction de dimension',
        'Validation de modèles',
      ],
    },
    {
      title: 'Algorithmes et programmation',
      items: [
        'Python',
        'C/C++',
        'R',
        'SQL',
        'SciPy',
        'Scikit-Learn',
        'PyTorch',
        'TensorFlow',
        'Pandas',
        'Matplotlib',
        'Plotly',
      ],
    },
    {
      title: 'Gestion de versions',
      items: ['Git', 'GitHub', 'GitLab'],
    },
    {
      title: 'Outils et logiciels',
      items: ['VS Code', 'RStudio', 'Paraview', 'Gmsh', 'Système Linux', 'LaTeX'],
    },
    {
      title: 'Divers',
      items: ['Travail en équipe', 'Communication scientifique'],
    },
  ];

  return (
    <section id="competences" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>
        {skillGroups.map((group, gi) => (
          <div key={gi} className="skills-block">
            <h3>{group.title}</h3>
            <div className="skills-tags">
              {group.items.map((item, idx) => (
                <span key={idx} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
