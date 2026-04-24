# David Norato — Portfolio

Portfolio personal construido con React. Estética terminal dark, modular y listo para producción.

## Estructura del proyecto

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.module.css
│   │   └── Footer.jsx / Footer.module.css
│   ├── sections/
│   │   ├── Hero.jsx / Hero.module.css
│   │   ├── Stats.jsx / Stats.module.css
│   │   ├── Experience.jsx / Experience.module.css
│   │   ├── Skills.jsx / Skills.module.css
│   │   ├── Projects.jsx / Projects.module.css
│   │   └── Contact.jsx / Contact.module.css
│   ├── styles/
│   │   └── global.css
│   ├── data.js          ← Edita aquí tu info personal
│   ├── App.jsx
│   └── index.js
└── package.json
```

## Setup rápido

```bash
# Instalar dependencias
npm install

# Correr en desarrollo
npm start

# Build para producción
npm run build
```

## Personalización

Todo el contenido está centralizado en `src/data.js`. Solo edita ese archivo para:

- Cambiar tu nombre, rol, email, teléfono
- Actualizar tus links de LinkedIn y GitHub
- Agregar o modificar experiencias laborales
- Actualizar skills o proyectos

## Deploy

Puedes deployar fácilmente a:

- **Vercel**: `vercel --prod` (recomendado)
- **Netlify**: arrastra el build folder
- **GitHub Pages**: usa `gh-pages`

## Fuentes utilizadas

- [Syne](https://fonts.google.com/specimen/Syne) — display / headings
- [Space Mono](https://fonts.google.com/specimen/Space+Mono) — monospace / code
