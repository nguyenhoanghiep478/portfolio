# Portfolio UI Kit — Nguyen Hoang Hiep

A high-fidelity, interactive recreation of the **redesigned** developer portfolio: a
single-page, clean dark-mode site for a Java backend engineer. Built with React (via
in-browser Babel) and the system tokens in `../../colors_and_type.css`.

> This is the *modernized* direction (clean / minimal / professional), **not** the legacy
> cyberpunk source. See the root `README.md` for the full rationale.

## Run it
Open `index.html`. It loads React 18 + Babel, the design tokens, `kit.css`, then each
component. No build step.

## Surfaces / screens
It's a one-page scroll site with these sections (each an anchor for the sticky nav):
- **Hero** (`#top`) — name, typed role, value prop, CTAs, status pill, dotted-grid + glow bg.
- **About** (`#about`) — portrait with dark treatment, bio, quick-fact cards.
- **Experience** (`#experience`) — vertical timeline (Boostech role + achievements).
- **Stack** (`#stack`) — technologies as mono badges grouped into category cards.
- **Work** (`#work`) — selected real GitHub repos as project cards.
- **Contact** (`#contact`) — email/GitHub CTA + footer.

## Components (JSX)
| File | Exports | Notes |
|---|---|---|
| `Icons.jsx` | `Icon.*` | Inline Lucide-accurate SVGs (2px stroke, currentColor). Robust across re-renders. |
| `primitives.jsx` | `Reveal`, `Eyebrow`, `SectionHead`, `Button`, `Badge` | `Reveal` is scroll-based (not IntersectionObserver) for sandbox reliability. `Badge` pulls optional brand glyphs from Simple Icons CDN. |
| `Nav.jsx` | `Nav` | Sticky, gains blur+border on scroll; mobile burger menu. |
| `Hero.jsx` | `Hero` | Includes `useTypewriter` for the rotating `$ role` line (respects reduced-motion). |
| `About.jsx` | `About` | Portrait + bio + 2×2 fact grid. |
| `Experience.jsx` | `Experience` | Timeline; edit the `roles` array to add jobs. |
| `Skills.jsx` | `Skills` | Edit `SKILL_GROUPS` (category → items, optional `logo` slug). |
| `Projects.jsx` | `Projects` | Edit `PROJECTS` (real repo links). |
| `Contact.jsx` | `Contact`, `Footer` | Email + GitHub CTA, footer social icons. |
| `App.jsx` | — | Assembles everything and mounts to `#root`. |

## Conventions
- Each component file attaches its exports to `window` (Babel scripts don't share scope).
- All styling lives in `kit.css` + the token file — no inline style objects named `styles`.
- Icons: use `Icon.<name>` from `Icons.jsx`; add new ones by pasting a Lucide path.
- Copy is first-person, understated, action-verb led (see root `README.md` →
  CONTENT FUNDAMENTALS).

## Fidelity notes
- This recreates the agreed redesign direction. The legacy source was a different
  (cyberpunk) aesthetic — components here intentionally diverge from that code.
- The portrait is the owner's real photo (a casual selfie). Swap `../../assets/portrait.jpg`
  for a professional headshot when available.
