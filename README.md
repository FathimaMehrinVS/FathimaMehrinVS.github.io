# Fathima Mehrin V S — Personal Portfolio

A minimal, monochrome, editorial-style portfolio built with plain HTML, CSS and vanilla JavaScript. No frameworks, no build tools and no external dependencies.

## Live Preview

- [GitHub Pages](https://fathimamehrinvs.github.io/)
- [Vercel](https://my-portfolio-sigma-one-68.vercel.app/)

---

## Project Structure

```
FathimaMehrinVS.github.io/
├── index.html                      # All sections and content
├── style.css                       # Design tokens, layout, responsive rules
├── script.js                       # Menu, scroll progress, active nav, reveal
├── Fathima_Mehrin_VS_Resume.pdf    # Résumé linked from the hero button
└── README.md
```

---

## Design

Minimal Monochrome Editorial, with a Swiss-inspired layout.

| Token       | Value     |
|-------------|-----------|
| Background  | `#FFFFFF` |
| Text        | `#111111` |
| Secondary   | `#777777` |
| Borders     | `#D9D9D9` |

- Oversized hero typography with a subtle dotted-grid background
- Small uppercase monospace labels for section names and project categories
- Square corners, no gradients, restrained hover effects and scroll-reveal animations
- Fully responsive (desktop, tablet, mobile) with a collapsible mobile menu
- Accessibility: skip link, semantic landmarks, visible focus states, `aria-current` on the active nav link, keyboard-closable menu, and `prefers-reduced-motion` support

## Sections

1. **About**
2. **Experience** — Frontend Developer Intern, DataPMI Inc.
3. **Projects** — NAVIKA, RENEWQUE, FixTheGap, ProjectHub Backend, LIFELINE, FairAI Studio (each with a GitHub repository button)
4. **Skills**
5. **Education**
6. **Achievements & Certifications**
7. **Contact** — email, LinkedIn, GitHub, LeetCode, Kaggle

---

## Run Locally

```bash
git clone https://github.com/FathimaMehrinVS/FathimaMehrinVS.github.io.git
cd FathimaMehrinVS.github.io
# Open index.html in a browser, or serve it locally:
npx live-server
```

## Deployment

The site is deployed with GitHub Pages from the `main` branch (root). Push to `main` and the live site updates within a minute or two.

---

## Updating Content

| What to change            | Where                                              |
|---------------------------|----------------------------------------------------|
| Hero text, stats          | `index.html` → `#hero`                             |
| Add or edit a project     | `index.html` → `#projects` → `<ol class="cases">`  |
| Skills                    | `index.html` → `#skills`                           |
| Education, achievements   | `index.html` → `#education`, `#achievements`       |
| Contact links             | `index.html` → `#contact`                          |
| Colours, fonts, spacing   | `style.css` → `:root` variables                    |
| Résumé                    | Replace `Fathima_Mehrin_VS_Resume.pdf` (keep the filename) |

---

## Contact

| Platform | Link |
|----------|------|
| Email    | [fathimamehrinvs57@gmail.com](mailto:fathimamehrinvs57@gmail.com) |
| LinkedIn | [fathima-mehrin-v-s](https://www.linkedin.com/in/fathima-mehrin-v-s) |
| GitHub   | [FathimaMehrinVS](https://github.com/FathimaMehrinVS) |
