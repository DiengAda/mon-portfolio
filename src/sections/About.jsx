import './About.css'

function About() {
  return (
    <section id="a-propos" className="about">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Diplômé d'un Master en Calcul Scientifique et Mathématiques de l'Innovation (Université de Strasbourg), avec une spécialisation en modélisation mathématique, simulation numérique, méthodes numériques avancées et optimisation.
            </p>
            <p>
              En cours de formation en Master Mathématiques pour l'Ingénierie, l'Algorithmique et la Statistique (Université de Bourgogne Europe), une formation d'ingénieur mathématicien axée sur les mathématiques appliquées, la science des données (machine learning, intelligence artificielle) et l'informatique scientifique.
            </p>
            <p>
              Compétences en modélisation mathématique, méthodes numériques avancées, data science et programmation scientifique (C/C++, Python, R, SQL), avec une solide formation en probabilités, statistiques et optimisation.
            </p>
            <p>
              Intéressé par des projets de R&D à l'interface entre mathématiques, ingénierie et données.
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
