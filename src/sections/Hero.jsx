import './Hero.css'
import profilPhoto from '../assets/profil.png'

function Hero() {
  const cvUrl = `${import.meta.env.BASE_URL}Adama_DIENG_CV_Alterance.pdf`

  return (
    <section id="accueil" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-kicker">Portfolio / Data Science / IA</p>
          <h1 className="hero-title">
            <span className="highlight">Adama DIENG</span>
          </h1>
          <p className="hero-subtitle">
            Ingénierie mathématique | Data Science & IA | Modélisation mathématique
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

            <button 
              className="btn btn-ghost"
              onClick={() => document.getElementById('formation').scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes formations
            </button>

            <a
              className="btn btn-download"
              href={cvUrl}
              download="CV_Adama_Dieng.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={profilPhoto} 
            alt="Adama DIENG - Photo de profil" 
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
