import './Hero.css'
import profilPhoto from '../assets/me.jpg'

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bonjour, je suis <span className="highlight">Adama Dieng</span>
          </h1>
          <p className="hero-subtitle">
            Étudiant Master 2 CSMI - Stagiaire à l'IRMA | Modélisation et Simulation Numérique
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projets').scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes projets
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={profilPhoto} 
            alt="Adama Dieng - Photo de profil" 
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
