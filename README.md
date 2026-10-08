# Portfolio website

Personal developer portfolio for New92. It is a single static HTML page with no build step, no framework and no dependencies to install.

## What's on the page

- **Header:** name, role, short introduction, links to GitHub, LinkedIn and email, and four headline stats.
- **Projects:** instatools, igfi, trackr, iam, netwix, pytrail and php, each with a description, star and fork counts and a link to the repository.
- **Skills:** languages, frameworks and data, tools and platforms.
- **Profiles and recognition:** HackTheBox, HackerOne, HackerRank, LeetCode, PyPI and GitHub achievements.

Experience and Education sections are not included yet. See [Adding sections](#adding-sections).

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole site: markup, styles and content in one file |
| `README.md` | This file |

The page was generated as `portfolio.html`. Rename it to `index.html` before deploying.

## Run locally

Open `index.html` in any browser. There is nothing to install.

To preview it through a local server instead:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a repository named `new92.github.io` (the repository name must match your username).
2. Add `index.html` and `README.md` to the root of the repository and push.
3. In the repository, go to **Settings → Pages** and set the source to the `main` branch, root folder.
4. The site is served at `https://new92.github.io` after a minute or two.

Any other static host works the same way: upload `index.html` and point the host at it.

## Customising

### Colours

All colours are CSS variables at the top of the `<style>` block:

```css
:root {
  --bg: #f7f8fa;      /* page background */
  --ink: #161b22;     /* main text */
  --mute: #5b6572;    /* secondary text */
  --line: #dde1e7;    /* borders and dividers */
  --card: #fff;       /* panels and tags */
  --accent: #27579a;  /* links, badges, primary button */
  --soft: #e9eff8;    /* badge background */
}
```

The page follows the visitor's light or dark setting. The dark palette is defined twice, under `@media (prefers-color-scheme: dark)` and under `:root[data-theme="dark"]`. Change both if you change the dark colours. To force a theme, add `data-theme="light"` or `data-theme="dark"` to the `<html>` tag.

### Fonts

Headings use Source Serif 4 and body text uses Source Sans 3, both loaded from Google Fonts. If the fonts fail to load, the page falls back to Georgia and the system sans-serif font.

### Content

Edit the text directly in the HTML. Each project is one `.proj` block:

```html
<div class="proj">
  <div class="top"><h3>Project name</h3><span class="stat">0 stars · 0 forks</span></div>
  <p>One or two sentences on what it does.</p>
  <a href="https://github.com/new92/project-name">View repository</a>
</div>
```

Star and fork counts are written by hand, so they go out of date. Update them from your GitHub profile when you make changes.

## Adding sections

To add Experience or Education, copy an existing `<section>` and change its `id` and heading:

```html
<section id="experience">
  <h2>Experience</h2>
  <div>
    <div class="proj">
      <div class="top"><h3>Job title, Company</h3><span class="stat">2024 to present</span></div>
      <p>What you did and what came of it.</p>
    </div>
  </div>
</section>
```

Then add a matching link to the `<nav>` at the top of the page.

## Design notes

- Responsive: the layout stacks into a single column below 760 px.
- Accessible: visible keyboard focus, semantic headings and links, and smooth scrolling that is turned off for visitors who prefer reduced motion.
- Print-friendly: the navigation bar and buttons are hidden when printing.

## Contact

[new92github@gmail.com](mailto:new92github@gmail.com) · [GitHub](https://github.com/new92)
