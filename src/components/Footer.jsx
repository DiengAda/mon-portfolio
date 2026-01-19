import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Adama Dieng</h3>
            <p>Ingénierie mathématique | Data Science & IA | Modélisation mathématique</p>
          </div>
          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#a-propos">À propos</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Réseaux sociaux</h4>
            <div className="social-links">
              <a href="https://linkedin.com/in/Dieng-Adama" aria-label="LinkedIn">💼</a>
              <a href="https://github.com/DiengAda" aria-label="GitHub">💻</a>
              <a href="mailto:adamadieng1957@gmail.com" aria-label="Email">✉️</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Adama Dieng. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
