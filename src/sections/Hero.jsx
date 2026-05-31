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
              className="btn btn-download"
              onClick={() => document.getElementById('projets').scrollIntoView({ behavior: 'smooth' })}
            >
              Projets et Expériences
            </button>

            <button 
              className="btn btn-download"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </button>

            <button 
              className="btn btn-download"
              onClick={() => document.getElementById('formation').scrollIntoView({ behavior: 'smooth' })}
            >
              Formations
            </button>

            <a
              className="btn btn-download"
              href={cvUrl}
              download="CV_Adama_Dieng.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Télécharger le CV au format PDF"
            >
              <svg className="pdf-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" opacity="0.95"/>
                <path fill="#fff" d="M13 3.5V8h4.5L13 3.5z"/>
                <text x="6" y="17" fill="currentColor" fontWeight="700" fontSize="6">PDF</text>
              </svg>
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
