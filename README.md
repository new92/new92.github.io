# new92 — Portfolio website

A responsive, static portfolio with eight project case studies, custom SVG visualisations, and light/dark appearance controls.

## Use

Open `index.html` directly in a modern browser, or serve this directory with any static web server:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000. All navigation and local assets use relative URLs, so the site works in a subdirectory (for example, GitHub Pages project sites) without a build step.

## Structure

- `index.html` — redesigned landing page
- `projects/` — eight individual case-study pages (seven repositories and Thinking Abyss)
- `assets/style.css` — typography, responsive layout, theme styling and animation
- `assets/site.js` — appearance preference, mobile menu and subtle scroll reveals
- `assets/*.svg` — original conceptual visuals, not screenshots of projects

## Notes

- The design uses the system font stack (including San Francisco on Apple platforms); no font download is needed.
- Light/dark automatically follows the system until a visitor chooses a preference. The preference is stored locally when possible.
- Motion respects `prefers-reduced-motion`. Navigation, content and links remain usable without JavaScript.
- GitHub statistics on the home page reproduce the original supplied portfolio snapshot, rather than being live values.
- InstaTools is source-available under a non-commercial license, not an open-source license.
- Project facts are based on the five supplied READMEs, the original portfolio, and the public repository READMEs for pytrail and php.
- For Thinking Abyss, design attribution comes from the portfolio owner; the case study does not assume a specific CMS or tech stack.

## Deployment

Upload the contents of this directory unchanged to GitHub Pages, Netlify, Vercel (static hosting), Cloudflare Pages or any standard static host. Point the host at this directory as the site root.
