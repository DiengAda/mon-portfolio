# Portfolio – Adama DIENG

Site portfolio personnel développé avec React et Vite, déployé sur GitHub Pages. Il présente mon parcours (ingénierie mathématique, data science & IA), mes projets, mes compétences et permet de me contacter.

- URL de production : https://DiengAda.github.io/mon-portfolio/
- Stack : React 19, Vite, CSS

## Fonctionnalités

- Thème clair/sombre avec persistance (`localStorage`)
- Navigation fixe avec défilement fluide vers les sections
- Sélecteur de langue (FR/EN)
- Sections structurées : Accueil, À propos, Projets & expériences, Formation, Compétences, Langues, Contact
- Design responsive (mobile, tablette, desktop)

## Prérequis

- Node.js 18+ recommandé
- npm (ou pnpm/yarn)

## Démarrage

```bash
git clone <ton-repo>
cd mon-portfolio
npm install
npm run dev
```

Le serveur Vite démarre et le site est accessible en local (généralement sur http://localhost:5173).

## Déploiement (GitHub Pages)

```bash
npm run build
npm run deploy
```

- Le déploiement utilise `gh-pages` et la configuration Vite (voir [vite.config.js](vite.config.js)).
- La branche `gh-pages` est publiée sur GitHub Pages.

## Scripts

- `npm run dev` : démarre le serveur de développement
- `npm run build` : build de production
- `npm run preview` : prévisualisation du build
- `npm run deploy` : déploie sur GitHub Pages

## Organisation du projet

```
mon-portfolio/
├─ index.html
├─ package.json
├─ vite.config.js
├─ eslint.config.js
├─ public/
└─ src/
	├─ main.jsx
	├─ App.jsx
	├─ App.css
	├─ index.css
	├─ assets/
	│  └─ me.jpg            # Photo de profil
	├─ components/
	│  ├─ Navigation.jsx
	│  ├─ Navigation.css
	│  ├─ LanguageToggle.jsx
	│  ├─ LanguageToggle.css
	│  ├─ ThemeToggle.jsx   # Bouton thème clair/sombre
	│  └─ ThemeToggle.css
	└─ sections/
		├─ Hero.jsx          # Accueil (photo + titres)
		├─ Hero.css
		├─ About.jsx         # À propos
		├─ About.css
		├─ Projects.jsx      # Projets & expériences
		├─ Projects.css
		├─ Education.jsx     # Formations
		├─ Education.css
		├─ Skills.jsx        # Compétences (description + techno)
		├─ Skills.css
		├─ Languages.jsx     # Langues
		├─ Languages.css
		├─ Contact.jsx       # Contact
		└─ Contact.css
```

## Personnalisation rapide

- Photo de profil : remplace [src/assets/me.jpg](src/assets/me.jpg) ou modifie l’import dans [src/sections/Hero.jsx](src/sections/Hero.jsx#L2)
- Couleurs & thèmes : variables dans [src/index.css](src/index.css) (`--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--accent-color`, etc.)
- Projets : contenu dans [src/sections/Projects.jsx](src/sections/Projects.jsx)
- Compétences : contenu dans [src/sections/Skills.jsx](src/sections/Skills.jsx)
- Formations : contenu dans [src/sections/Education.jsx](src/sections/Education.jsx)
- Contact : contenu dans [src/sections/Contact.jsx](src/sections/Contact.jsx)

## Notes techniques

- Le thème clair/sombre est appliqué via l’attribut `data-theme` sur `document.documentElement` et des variables CSS définies dans [src/index.css](src/index.css).
- La préférence est sauvegardée dans `localStorage` par le composant [src/components/ThemeToggle.jsx](src/components/ThemeToggle.jsx).
- Le sélecteur de langue est géré par [src/components/LanguageToggle.jsx](src/components/LanguageToggle.jsx).

## Licence

Projet personnel. Merci de ne pas réutiliser le contenu (textes, images) sans autorisation.
