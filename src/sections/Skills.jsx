import './Skills.css'

function Skills() {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'C/C++', level: 85 },
    { name: 'Méthodes Numériques', level: 90 },
    { name: 'EDP & Optimisation', level: 88 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Communication Scientifique', level: 85 },
  ];

  return (
    <section id="competences" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="technologies">
          <h3>Technologies et Outils</h3>
          <div className="tech-grid">
            <div className="tech-item">Python</div>
            <div className="tech-item">C/C++</div>
            <div className="tech-item">SQL</div>
            <div className="tech-item">NumPy</div>
            <div className="tech-item">SciPy</div>
            <div className="tech-item">Pandas</div>
            <div className="tech-item">Matplotlib</div>
            <div className="tech-item">TensorFlow</div>
            <div className="tech-item">PyTorch</div>
            <div className="tech-item">Scikit-Learn</div>
            <div className="tech-item">OpenTURNS</div>
            <div className="tech-item">Gekko</div>
          </div>
        </div>
        
        <div className="technologies">
          <h3>Outils de Développement</h3>
          <div className="tech-grid">
            <div className="tech-item">Git</div>
            <div className="tech-item">GitHub</div>
            <div className="tech-item">GitLab</div>
            <div className="tech-item">VS Code</div>
            <div className="tech-item">Linux</div>
            <div className="tech-item">LaTeX</div>
            <div className="tech-item">Beamer</div>
          </div>
        </div>
        
        <div className="technologies">
          <h3>Logiciels Scientifiques</h3>
          <div className="tech-grid">
            <div className="tech-item">Paraview</div>
            <div className="tech-item">Gmsh</div>
            <div className="tech-item">Salome</div>
            <div className="tech-item">MPI</div>
            <div className="tech-item">OpenCL</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
