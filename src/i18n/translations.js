export const translations = {
  FR: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      education: 'Formation',
      skills: 'Compétences',
      languages: 'Langues',
      projects: 'Projets',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'Ingénierie mathématique | Data Science & IA | Modélisation mathématique',
      buttons: {
        projects: 'Voir mes projets',
        contact: 'Me contacter',
        education: 'Voir mes formations'
      },
      imageAlt: 'Adama DIENG - Photo de profil'
    },
    about: {
      title: 'À propos de moi',
      paragraphs: [
        "Diplômé d'un Master en Calcul Scientifique et Mathématiques de l'Innovation (Université de Strasbourg), avec une spécialisation en modélisation mathématique, simulation numérique, méthodes numériques avancées et optimisation.",
        "En cours de formation en Master Mathématiques pour l'Ingénierie, l'Algorithmique et la Statistique (Université de Bourgogne Europe), une formation d'ingénieur mathématicien axée sur les mathématiques appliquées, la science des données (machine learning, intelligence artificielle) et l'informatique scientifique.",
        "Compétences en modélisation mathématique, méthodes numériques avancées, data science et programmation scientifique (C/C++, Python, R, SQL), avec une solide formation en probabilités, statistiques et optimisation.",
        "Intéressé par des projets de R&D à l'interface entre mathématiques, ingénierie et datas."
      ],
      stats: [
        { value: '+5', label: "Années d'études supérieures" },
        { value: '+5', label: 'Stages/Projets de recherche' },
        { value: '+10', label: 'Outils et Technologies maîtrisés' }
      ]
    },
    education: {
      title: 'Formation',
      linkLabel: 'Voir formation →',
      coursesTitle: 'Cours principaux :',
      items: [
        {
          degree: "Master Mathématique pour l'ingénieurie, Algorithmique et Statistique",
          school: 'Université Bourgogne Europe, France',
          period: "septembre 2025 - Aujourd'hui",
          description: "Formation en mathématiques appliquées, science des données et informatique scientifique. Triple compétence : statistique/optimisation, machine learning et programmation scientifique.",
          url: 'https://formations.ube.fr/fr/offre-de-formation/master-XB/master-mathematiques-et-applications-LMGC26R4/mathematiques-pour-l-ingenierie-algorithmique-et-statistique-LMGEPMC6.html',
          courses: [
            'Modélisation déterministe et aléatoire',
            'Statistique et sciences des données',
            'Calcul scientifique et optimisation',
            'Algorithmique et programmation',
            'Intelligence artificielle et machine learning',
            'Mathématiques pour la santé'
          ]
        },
        {
          degree: "Diplome de Master en Calcul Scientifique et Mathématiques de l'Innovation",
          school: 'Université de Strasbourg, France',
          period: '2023 - 2025',
          description: 'Spécialisation en modélisation mathématique, simulation numérique, méthodes numériques avancées et optimisation',
          url: 'https://mathinfo.unistra.fr/formations/master/master-mathematiques-et-applications/odf-parcours-calcul-scientifique-et-mathematiques-de-linnovation-csmi-PR438-18099/',
          courses: [
            'Équations aux dérivées partielles',
            'Calcul Scientifique',
            'Optimisation et contrôle optimal',
            'Traitement de données',
            'Programmation avancée (Python, C++, C, SQL)',
            'Calcul Haute performance (MPI, OpenCL)',
            'Apprentissage automatique'
          ]
        },
        {
          degree: 'Master 1 Mathématiques Appliquées',
          school: 'Université Cheikh Anta Diop de Dakar, Sénégal',
          period: '2021 - 2022',
          description: 'Formation approfondie en mathématiques appliquées et modélisation numérique',
          url: 'https://fad.fst.ucad.sn/course/index.php?categoryid=225&lang=en',
          courses: [
            'Mathématiques appliquées',
            'Modélisation numérique',
            'Analyse numérique'
          ]
        }
      ]
    },
    skills: {
      title: 'Mes Compétences',
      groups: [
        {
          title: 'Mathématiques et applications',
          icon: '∫',
          description: "Étude et résolution d'équations aux dérivées partielles (EDP) via différentes approches numériques : méthode des différences finies, méthode des éléments finis et méthode des volumes finis. Bonnes compétences en optimisation, développement d'algorithmes d'optimisation et contrôle optimal.",
          items: []
        },
        {
          title: 'Data Science et Machine Learning',
          icon: '🤖',
          description: "Bonnes compétences dans les techniques de base d'apprentissage automatique incluant la régression et la classification supervisée pour la prédiction, le clustering pour le regroupement de données, ainsi que la réduction de dimension. Compétences en validation de modèles pour garantir leur performance et leur généralisation.",
          items: []
        },
        {
          title: 'Algorithmes et programmation',
          icon: '💻',
          description: "Programmation scientifique multi-langage avec Python, C/C++, R et SQL. Solides compétences dans l'utilisation de bibliothèques scientifiques (SciPy, NumPy) et d'apprentissage automatique (Scikit-Learn, PyTorch, TensorFlow). Bonne maîtrise des outils de manipulation de données (Pandas) et de visualisation (Matplotlib, Plotly).",
          items: []
        },
        {
          title: 'Gestion de versions',
          icon: '🔀',
          description: "Maîtrise des systèmes de contrôle de version avec Git et des plateformes collaboratives GitHub et GitLab pour le versionnement de code, la collaboration en équipe et la gestion de projets.",
          items: []
        },
        {
          title: 'Outils et logiciels',
          icon: '🛠️',
          description: "Utilisation quotidienne d'environnements de développement (VS Code, RStudio) et d'outils de visualisation scientifique (Paraview, Gmsh). Maîtrise du système d'exploitation Linux et de LaTeX pour la rédaction de documents techniques et scientifiques.",
          items: []
        }
      ]
    },
    projects: {
      title: 'Projets et Expériences professionnelles',
      detailsLabel: 'Voir en détails',
      items: [
        {
          title: 'Projet Master : CLIMIC - Impact du changement climatique sur les micro-organismes du vin (Projet en cours - Janvier 2026)',
          description: "Projet CLIMIC financé par la Région Bourgogne Franche-Comté visant à comprendre l'évolution et l'adaptation des micro-organismes du vin au changement climatique. Objectifs : collecter et traiter statistiquement des données de composition de moûts (azote, sucre, pH, paramètres œnologiques) sur 30-40 ans et différents cépages (Chardonnay, Pinot noir, Gamay) ; créer une base de données ; analyser l'impact des modifications des moûts sur la fermentation alcoolique.",
          technologies: ['Python', 'Statistique', 'Data Analysis', 'Base de données', 'R', 'Data Science'],
          image: '🍇',
          github: 'https://github.com/DiengAda/projet-CLIMIC',
          demo: '#'
        },
        {
          title: 'Stage Master 2: MATHEMATICAL MODELING AND SIMULATIONS OF ORGAN-ON-CHIP OOC',
          description: "Modélisation de la migration cellulaire induite par des signaux chimiques et des interactions à courte et longue portée entre cellules immunitaires et tumorales. Conception d'un schéma numérique implémenté en C++ pour résoudre ces modèles mathématiques et obtenir des simulations fidèles aux observations expérimentales en labo.",
          technologies: ['C++', 'EDPs', 'Modélisation mathématique', 'Simulation numérique', 'Visualisation', 'ParaView', 'Github'],
          image: '🧬',
          github: 'https://github.com/orgs/master-csmi/discussions/72',
          demo: '#'
        },
        {
          title: 'Projet académique: SIMULATION NUMÉRIQUE D’UN MODÈLE  DIPHASIQUE DANS UN MILIEU POREUX',
          description: "Modélisation et simulation numérique d'un écoulement diphasique dans un milieu poreux. Analyse des interactions fluides et évaluation des paramètres influençant l'écoulement dans le milieu poreux. Visualisation 2D/3D avec Paraview et post-processing.",
          technologies: ['EDPs', 'Python', 'Loi de Darcy', 'Simulation', 'Paraview', 'Visualisation'],
          image: '💧',
          github: '#',
          demo: '#'
        },
        {
          title: 'Stage Master 1 : ETUDE D’UN SCHÉMA DE TYPE GALERKINE  DISCONTINUE (DG)',
          description: "Analyse et implémentation en Python de la méthode de Galerkine Discontinue pour résoudre des systèmes d'EDP linéaires stationnaires. Application à des problèmes de transport linéaire non stationnaires (advection-réaction), avec une analyse approfondie des bornes sur les dérivées des erreurs.",
          technologies: ['Python', 'Analyse numérique', 'EDPs'],
          image: '📊',
          github: 'https://github.com/DiengAda/Mes_Projets_Master/tree/main/Stages/M1-DG/dg-dieng-main',
          demo: '#'
        },
        {
          title: 'Projet académique: SIMULATION NUMÉRIQUE D’UN DISPOSITIF DE REFROIDISSEMENT DE MICROPROCESSEUR EN C++',
          description: "Étude d'un modèle de comportement thermique d'un microprocesseur et simulation numérique en C++. Optimisation des performances des simulations en ajustant les paramètres de maillage et les algorithmes de résolution. Visualisation 2D/3D avec Paraview et gestion efficace des fichiers de sortie (VTK, CSV).",
          technologies: ['C++', 'Simulation thermique', 'Optimisation numérique', 'Paraview', 'Visualisation'],
          image: '🔥',
          github: '#',
          demo: '#'
        },
        {
          title: 'Projet INRIA : STRUCTURE-PRESERVING INTEGRATION METHODS FOR ORDINARY DIFFERENTIAL EQUATIONS (ODES)',
          description: 'Développement de méthodes numériques conservant les structures géométriques des systèmes dynamiques, appliqué aux modèles astrophysiques (problème de Kepler).',
          technologies: ['Python', 'ODEs', 'Méthodes Numériques', 'Astrophysique'],
          image: '🌟',
          github: '#',
          demo: '#'
        }
      ]
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Discutons de votre projet',
      intro: "Passionné par la modélisation mathématique et la science des données, je suis ouvert aux projets de R&D, collaborations et opportunités. N'hésitez pas à me contacter !",
      labels: {
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      },
      address: '4 Rue du Morvan, 21000 Dijon',
      form: {
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'Votre email',
        subjectPlaceholder: 'Sujet',
        messagePlaceholder: 'Votre message',
        submit: 'Envoyer le message'
      }
    },
    footer: {
      tagline: 'Ingénierie mathématique | Data Science & IA | Modélisation mathématique',
      quickLinksTitle: 'Liens rapides',
      quickLinks: ['Accueil', 'À propos', 'Projets', 'Contact'],
      socialTitle: 'Réseaux sociaux',
      rights: '© 2026 Adama Dieng. Tous droits réservés.'
    }
  },
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'Mathematical Engineering | Data Science & AI | Mathematical Modeling',
      buttons: {
        projects: 'View my projects',
        contact: 'Contact me',
        education: 'View my education'
      },
      imageAlt: 'Adama DIENG - Profile photo'
    },
    about: {
      title: 'About me',
      paragraphs: [
        "Graduated with a Master's in Scientific Computing and Mathematics of Innovation (University of Strasbourg), specialized in mathematical modeling, numerical simulation, advanced numerical methods, and optimization.",
        "Currently pursuing a Master's in Mathematics for Engineering, Algorithms and Statistics (University of Bourgogne Europe), an engineering mathematics program focused on applied mathematics, data science (machine learning, artificial intelligence) and scientific computing.",
        'Skills in mathematical modeling, advanced numerical methods, data science and scientific programming (C/C++, Python, R, SQL), with a strong background in probability, statistics and optimization.',
        'Interested in R&D projects at the intersection of mathematics, engineering and data.'
      ],
      stats: [
        { value: '+5', label: 'Years of higher education' },
        { value: '+5', label: 'Internships/Research projects' },
        { value: '+10', label: 'Tools & technologies mastered' }
      ]
    },
    education: {
      title: 'Education',
      linkLabel: 'View program →',
      coursesTitle: 'Main courses:',
      items: [
        {
          degree: "Master's in Mathematics for Engineering, Algorithms and Statistics",
          school: 'University of Bourgogne Europe, France',
          period: 'September 2025 - Present',
          description: 'Training in applied mathematics, data science and scientific computing. Triple skillset: statistics/optimization, machine learning and scientific programming.',
          url: 'https://formations.ube.fr/fr/offre-de-formation/master-XB/master-mathematiques-et-applications-LMGC26R4/mathematiques-pour-l-ingenierie-algorithmique-et-statistique-LMGEPMC6.html',
          courses: [
            'Deterministic and stochastic modeling',
            'Statistics and data science',
            'Scientific computing and optimization',
            'Algorithms and programming',
            'Artificial intelligence and machine learning',
            'Mathematics for health'
          ]
        },
        {
          degree: "Master's in Scientific Computing and Mathematics of Innovation",
          school: 'University of Strasbourg, France',
          period: '2023 - 2025',
          description: 'Specialization in mathematical modeling, numerical simulation, advanced numerical methods and optimization',
          url: 'https://mathinfo.unistra.fr/formations/master/master-mathematiques-et-applications/odf-parcours-calcul-scientifique-et-mathematiques-de-linnovation-csmi-PR438-18099/',
          courses: [
            'Partial differential equations',
            'Scientific computing',
            'Optimization and optimal control',
            'Data processing',
            'Advanced programming (Python, C++, C, SQL)',
            'High performance computing (MPI, OpenCL)',
            'Machine learning'
          ]
        },
        {
          degree: 'Master 1 in Applied Mathematics',
          school: 'Cheikh Anta Diop University of Dakar, Senegal',
          period: '2021 - 2022',
          description: 'Advanced training in applied mathematics and numerical modeling',
          url: 'https://fad.fst.ucad.sn/course/index.php?categoryid=225&lang=en',
          courses: [
            'Applied mathematics',
            'Numerical modeling',
            'Numerical analysis'
          ]
        }
      ]
    },
    skills: {
      title: 'My Skills',
      groups: [
        {
          title: 'Mathematics and applications',
          icon: '∫',
          description: 'Study and solution of partial differential equations (PDEs) using numerical approaches: finite differences, finite elements and finite volumes. Strong skills in optimization, development of optimization algorithms and optimal control.',
          items: []
        },
        {
          title: 'Data Science and Machine Learning',
          icon: '🤖',
          description: 'Strong skills in core machine learning techniques including regression and supervised classification for prediction, clustering for data grouping, and dimensionality reduction. Model validation skills to ensure performance and generalization.',
          items: []
        },
        {
          title: 'Algorithms and programming',
          icon: '💻',
          description: 'Multi-language scientific programming with Python, C/C++, R and SQL. Solid experience with scientific libraries (SciPy, NumPy) and machine learning frameworks (Scikit-Learn, PyTorch, TensorFlow). Strong command of data manipulation tools (Pandas) and visualization (Matplotlib, Plotly).',
          items: []
        },
        {
          title: 'Version control',
          icon: '🔀',
          description: 'Mastery of version control systems with Git and collaborative platforms GitHub and GitLab for code versioning, teamwork and project management.',
          items: []
        },
        {
          title: 'Tools and software',
          icon: '🛠️',
          description: 'Daily use of development environments (VS Code, RStudio) and scientific visualization tools (Paraview, Gmsh). Proficient with Linux and LaTeX for technical and scientific writing.',
          items: []
        }
      ]
    },
    projects: {
      title: 'Projects and Professional Experience',
      detailsLabel: 'See details',
      items: [
        {
          title: 'Master Project: CLIMIC - Impact of climate change on wine microorganisms (Ongoing project - January 2026)',
          description: 'CLIMIC project funded by the Bourgogne Franche-Comté Region to understand the evolution and adaptation of wine microorganisms to climate change. Objectives: collect and statistically analyze must composition data (nitrogen, sugar, pH, oenological parameters) over 30-40 years and different grape varieties (Chardonnay, Pinot noir, Gamay); build a database; analyze the impact of must changes on alcoholic fermentation.',
          technologies: ['Python', 'Statistics', 'Data Analysis', 'Database', 'R', 'Data Science'],
          image: '🍇',
          github: 'https://github.com/DiengAda/projet-CLIMIC',
          demo: '#'
        },
        {
          title: 'Master 2 Internship: MATHEMATICAL MODELING AND SIMULATIONS OF ORGAN-ON-CHIP OOC',
          description: 'Modeling cell migration induced by chemical signals and short- and long-range interactions between immune and tumor cells. Design of a numerical scheme implemented in C++ to solve these mathematical models and obtain simulations consistent with experimental observations.',
          technologies: ['C++', 'PDEs', 'Mathematical modeling', 'Numerical simulation', 'Visualization', 'ParaView', 'GitHub'],
          image: '🧬',
          github: 'https://github.com/orgs/master-csmi/discussions/72',
          demo: '#'
        },
        {
          title: 'Academic project: NUMERICAL SIMULATION OF A TWO-PHASE MODEL IN A POROUS MEDIUM',
          description: 'Modeling and numerical simulation of two-phase flow in a porous medium. Analysis of fluid interactions and evaluation of parameters influencing flow. 2D/3D visualization with Paraview and post-processing.',
          technologies: ['PDEs', 'Python', 'Darcy law', 'Simulation', 'Paraview', 'Visualization'],
          image: '💧',
          github: '#',
          demo: '#'
        },
        {
          title: 'Master 1 Internship: STUDY OF A DISCONTINUOUS GALERKIN (DG) SCHEME',
          description: 'Analysis and Python implementation of the Discontinuous Galerkin method for linear stationary PDE systems. Application to non-stationary linear transport problems (advection-reaction), with an in-depth analysis of error derivative bounds.',
          technologies: ['Python', 'Numerical analysis', 'PDEs'],
          image: '📊',
          github: 'https://github.com/DiengAda/Mes_Projets_Master/tree/main/Stages/M1-DG/dg-dieng-main',
          demo: '#'
        },
        {
          title: 'Academic project: NUMERICAL SIMULATION OF A MICROPROCESSOR COOLING DEVICE IN C++',
          description: 'Study of a microprocessor thermal behavior model and C++ numerical simulation. Optimization of simulation performance by adjusting meshing parameters and solver algorithms. 2D/3D visualization with Paraview and efficient output management (VTK, CSV).',
          technologies: ['C++', 'Thermal simulation', 'Numerical optimization', 'Paraview', 'Visualization'],
          image: '🔥',
          github: '#',
          demo: '#'
        },
        {
          title: 'INRIA project: STRUCTURE-PRESERVING INTEGRATION METHODS FOR ORDINARY DIFFERENTIAL EQUATIONS (ODES)',
          description: 'Development of numerical methods that preserve geometric structures of dynamical systems, applied to astrophysical models (Kepler problem).',
          technologies: ['Python', 'ODEs', 'Numerical methods', 'Astrophysics'],
          image: '🌟',
          github: '#',
          demo: '#'
        }
      ]
    },
    contact: {
      title: 'Get in touch',
      subtitle: "Let's discuss your project",
      intro: 'Passionate about mathematical modeling and data science, I am open to R&D projects, collaborations and opportunities. Feel free to reach out!',
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      },
      address: '4 Rue du Morvan, 21000 Dijon',
      form: {
        namePlaceholder: 'Your name',
        emailPlaceholder: 'Your email',
        subjectPlaceholder: 'Subject',
        messagePlaceholder: 'Your message',
        submit: 'Send message'
      }
    },
    footer: {
      tagline: 'Mathematical Engineering | Data Science & AI | Mathematical Modeling',
      quickLinksTitle: 'Quick links',
      quickLinks: ['Home', 'About', 'Projects', 'Contact'],
      socialTitle: 'Social links',
      rights: '© 2026 Adama Dieng. All rights reserved.'
    }
  }
};
