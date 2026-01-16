import './Contact.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Solution temporaire simple avec mailto
    const formData = new FormData(e.target);
    const nom = formData.get('nom');
    const email = formData.get('email');
    const sujet = formData.get('sujet');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:adamadieng1957@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(
      `Nom: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contactez-moi</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Discutons de votre projet</h3>
            <p>
              Passionné par la modélisation mathématique et la science des données, je suis ouvert aux projets de R&D, collaborations et opportunités. N'hésitez pas à me contacter !
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a 
                      href="mailto:adamadieng1957@gmail.com" 
                      className="contact-link"
                    >
                      adamadieng1957@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Téléphone</h4>
                  <p>
                    <a 
                      href="tel:+33745397565" 
                      className="contact-link"
                    >
                      07 45 39 75 65
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Localisation</h4>
                  <p>4 Rue du Morvan, 21000 Dijon</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>
                    <a 
                      href="https://www.linkedin.com/in/adama-dieng-849b62285/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @Dieng-Adama
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <div>
                  <h4>GitHub</h4>
                  <p>
                    <a 
                      href="https://github.com/DiengAda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @DiengAda
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="nom" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Votre email" required />
            </div>
            <div className="form-group">
              <input type="text" name="sujet" placeholder="Sujet" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Votre message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
