import './Languages.css'

function Languages() {
  const languages = [
    {
      name: 'Français',
      level: 'Niveau courant',
      proficiency: 100,
      flag: '🇫🇷'
    },
    {

      name: 'Anglais',
      level: 'Niveau professionnel',
      proficiency: 50,
      flag: '🇬🇧'
    },
    {
      name: 'Wolof',
      level: 'Langue natale',
      proficiency: 100,
      flag: '🇸🇳'
    }
  ];

  return (
    <section id="langues" className="languages">
      <div className="languages-container">
        <h2 className="section-title">Langues</h2>
        <ul className="languages-list">
          {languages.map((language, index) => (
            <li key={index} className="language-line">
              <span className="language-flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
              <span className="language-level">— {language.level}</span>
            </li>
          ))}
        </ul>
        
        {/* <div className="additional-skills">
          <h3>Compétences Complémentaires</h3>
          <div className="skills-list">
            <div className="skill-card">
              <span className="skill-icon">💻</span>
              <h4>Ligne de commande Linux</h4>
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
      </div>
    </section>
  );
}

export default Languages;
