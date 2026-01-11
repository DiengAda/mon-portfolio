import './About.css'

function About() {
  return (
    <section id="a-propos" className="about">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Diplômé d’un Master en Calcul Scientifique et Mathématiques de l’Innovation, spécialisé en modélisation mathématique et simulation numérique,
              je combine une formation approfondie en en méthodes numériques avancées et optimisation appliquées à des systèmes complexes tels que les modèles de transport, d’écoulement et de diffusion.   
              Passionné par la recherche et développement, l'ingénierie et le développement 
              technologique, je me concentre sur l'application de méthodes mathématiques avancées 
              à des problèmes concrets.
            </p>
            <p>
              {/* Mon expérience actuelle à l'IRMA me permet d'approfondir mes compétences en recherche 
              mathématique avancée. Ma formation en équations aux dérivées partielles, calcul 
              scientifique et optimisation, combinée à mon expérience pratique en modélisation 
              numérique, me donne une approche rigoureuse et innovante pour résoudre des problèmes 
              complexes scientifiques et industriels. */}
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>+5</h3>
                <p>Années d'études supérieures</p>
              </div>
              <div className="stat">
                <h3>+5</h3>
                <p>Stages/Projets de recherche</p>
              </div>
              <div className="stat">
                <h3>+8</h3>
                <p>Outils et Technologies maîtrisés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
