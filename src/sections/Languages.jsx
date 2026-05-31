import './Languages.css'

function Languages() {
  const languages = [
    {
      flag: '🇫🇷',
      name: 'Français',
      level: 'Niveau courant',
      proficiency: 100,
    },
    {
      flag: '🇬🇧',
      name: 'Anglais',
      level: 'Niveau professionnel',
      proficiency: 100,
    },
    {
      flag: '🇸🇳',
      name: 'Wolof',
      level: 'Langue natale',
      proficiency: 100,
    }
  ]

  return (
    <section id="langues" className="languages">
      <div className="languages-container">
        <h2 className="section-title">Langues</h2>
        <div className="languages-grid">
          {languages.map((language, index) => (
            <article key={index} className="language-card">
              <div className="language-badge" aria-hidden="true">
                <span className="language-flag">{language.flag}</span>
              </div>
              <div className="language-content">
                <div className="language-header">
                  <h3 className="language-name">{language.name}</h3>
                  <span className="language-level">{language.level}</span>
                </div>
                <div className="language-meter" aria-hidden="true">
                  <span
                    className="language-meter-fill"
                    style={{ width: `${language.proficiency}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
