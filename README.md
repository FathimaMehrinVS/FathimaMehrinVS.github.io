# 🌐 Fathima Mehrin V S — Personal Portfolio

A modern, responsive personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. Designed to be visually impressive, lightweight, and recruiter-ready.

---

## ✨ Live Preview

> Github pages🚀: https://fathimamehrinvs.github.io/
> Vercel 🚀: https://my-portfolio-sigma-one-68.vercel.app/
---

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML — all sections & content
├── style.css       # All styles — variables, layout, animations
├── script.js       # Vanilla JS — interactions & scroll effects
└── README.md       # You're reading it!
```

---

## 🎨 Features

- **Hero Section** — Animated gradient headline, floating orbs, and an interactive 3D tilt card
- **Skills Section** — Color-coded badges by category (Languages, Web, Tools, Soft Skills)
- **Projects Section** — Cards with type badges, tech stack chips, and placeholder "View Work" buttons ready to activate
- **Achievements Section** — Icon-badged certification cards, visually grouped by issuer
- **Contact Section** — Direct links to Email, LinkedIn, and GitHub
- **Sticky Navigation** — Glassmorphism navbar with active link highlighting on scroll
- **Scroll Progress Bar** — Thin gradient bar at the top of the page
- **Scroll Reveal Animations** — Staggered fade-up animations using IntersectionObserver
- **Responsive Design** — Mobile, tablet, and desktop layouts with a hamburger menu
- **Dynamic Footer Year** — Auto-updated with JavaScript

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Markup     | HTML5 (semantic)                     |
| Styling    | CSS3 (custom properties, animations) |
| Scripts    | Vanilla JavaScript (ES6+)            |
| Icons      | Font Awesome 6.4 (CDN)               |
| Fonts      | Segoe UI / System UI (no extra load) |

No frameworks. No build tools. No dependencies to install. Just open `index.html`.

---

## 🚀 Getting Started

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/FathimaMehrinVS/portfolio.git

# 2. Navigate into the folder
cd portfolio

# 3. Open in browser
# Simply double-click index.html  OR use a live server:
npx live-server
```

> **Tip:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for the best development experience.

---

## 🔗 Activating Project Links

Each project card has a "View Work" button that is currently commented out. When your project is ready to share:

1. Open `index.html`
2. Find the `.project-links` div inside the relevant project card
3. Uncomment the `<a>` tag and replace `#` with your real URL:

```html
<!-- Before (commented out) -->
<!-- <a href="#" class="btn btn-outline btn-sm" target="_blank">
       <i class="fab fa-github"></i> View Work
     </a> -->

<!-- After (active) -->
<a href="https://github.com/FathimaMehrinVS/FixTheGap" class="btn btn-outline btn-sm" target="_blank">
  <i class="fab fa-github"></i> View Work
</a>
```

---

## 🌍 Deployment

### GitHub Pages (Free & Easy)

```bash
# 1. Push your code to a GitHub repository named:
#    FathimaMehrinVS.github.io  (for root portfolio)
#    OR any repo name (for project page)

# 2. Go to repo → Settings → Pages
# 3. Set Source: Deploy from branch → main → / (root)
# 4. Your site will be live at:
#    https://FathimaMehrinVS.github.io
```

### Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) → Log in
2. Drag and drop your `portfolio/` folder onto the dashboard
3. Your site is live instantly with a free URL

### Vercel

```bash
npm i -g vercel
vercel
# Follow the prompts — done in under a minute
```

---

## 🎨 Customization Guide

| What to change         | Where to find it                        |
|------------------------|-----------------------------------------|
| Name / tagline         | `index.html` → `#hero` section          |
| Email / social links   | `index.html` → `#contact` & `<footer>` |
| Color palette          | `style.css` → `:root` CSS variables     |
| Add a new project      | `index.html` → `.projects-grid`         |
| Add a certification    | `index.html` → `.achievements-grid`     |
| Profile photo          | Replace `.avatar` div with an `<img>`   |

---

## 📌 Featured Projects

| Project | Type | Tech |
|---------|------|------|
| **MindBliss** | Hobby | HTML/CSS, JavaScript, LocalStorage |
| **CampusCare** | Academic | HTML/CSS, JavaScript, Python |
| **FixTheGap** | ML Project | Python, scikit-learn, FastAPI, Tavily API, JavaScript |

---

## 📬 Contact

| Platform | Link |
|----------|------|
| 📧 Email | [mehrinfiza57@gmail.com](mailto:mehrinfiza57@gmail.com) |
| 💼 LinkedIn | [fathima-mehrin-v-s](https://www.linkedin.com/in/fathima-mehrin-v-s) |
| 🐙 GitHub | [FathimaMehrinVS](https://github.com/FathimaMehrinVS) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & built with 💜 by <strong>Fathima Mehrin V S</strong></p>
