# Codebase Migration — cyberpunk → clean dark redesign

Production Next.js files that replace the legacy cyberpunk portfolio with the approved
**clean, minimal, professional dark-mode** redesign (sky-blue / cyan accent). These mirror
your repo layout (`src/app`, `src/components`) so you can drop them in and **commit one
section at a time**.

Stack is unchanged: Next.js 15 (app router) · React 19 · Tailwind CSS v4 · `lucide-react`
· `emailjs-com`. **No new dependencies.**

## How to use
1. Copy a section's files into your repo at the same paths.
2. Run `npm run dev`, review the section.
3. Commit, then move to the next. All six sections are now ready to review.

## Per-section commit plan

### ✅ Commit 0 — Foundation / scaffold  *(ready)*
Replaces the design foundation and wires up the shell.
- `src/app/globals.css` — **replaces the entire legacy file.** New token set (blue/cyan),
  base styles, shared utilities (`.container .reveal .eyebrow .section .btn .badge`), plus
  the **Navigation** and **Hero** style blocks. Component styles are appended per section in
  clearly-commented blocks (`/* === HERO === */`).
- `src/app/layout.tsx` — **replaces** legacy. Adds JetBrains Mono alongside Space Grotesk +
  DM Sans via `next/font`, drops the `bg-black text-white` body classes (now in globals.css).
- `src/components/reveal.tsx` — **new** shared scroll-reveal client component.
- `src/components/navigation.tsx` — **replaces** legacy nav.
- `src/app/page.tsx` — **replaces** legacy. Renders `<Navigation/> + <Hero/>` and has
  commented placeholders for the upcoming sections.

> You can delete the legacy effect components once migration is done: `matrix-rain.tsx`,
> `particle-system.tsx`, and the old `hero/about/skills/projects/contact/social-links`.
> Keep `src/hooks/use-intersection-observer.ts` or remove it (replaced by `reveal.tsx`).

### ✅ Commit 1 — Hero  *(ready)*
- `src/components/hero.tsx` — **replaces** legacy `hero.tsx`. Name, typed `$ role` line
  (respects reduced-motion), value prop, CTAs, status pill, dotted-grid + glow background.
- Styles already in the `/* === HERO === */` block of `globals.css`.
- **CV download** points at `/resume.pdf` — drop your PDF in `public/`. (The legacy
  "choose backend/frontend CV" modal was removed; re-add if you still want it.)

### ✅ Commit 2 — About  *(ready)*
`src/components/about.tsx` + the `/* === ABOUT === */` block in `globals.css`. Portrait
(`public/image-about.jpg` is in place — swap for a professional headshot when ready) + bio +
quick-fact cards.

### ✅ Commit 3 — Experience  *(ready)*
`src/components/experience.tsx` + `/* === EXPERIENCE === */` block. Vertical timeline
(Boostech role + achievements). Edit the `ROLES` array to add jobs.

### ✅ Commit 4 — Skills (Stack)  *(ready)*
`src/components/skills.tsx` + `/* === SKILLS === */` block. Technologies as mono badges
grouped by category (replaces the legacy progress bars). Brand glyphs load from Simple Icons.

### ✅ Commit 5 — Projects (Work)  *(ready)*
`src/components/projects.tsx` + `/* === PROJECTS === */` block. **Selected Work** =
`microservice-books-ecommerce`, `BookingTrainTicket`, `kafka` (confirmed). Edit the
`PROJECTS` array to change.

### ✅ Commit 6 — Contact + Footer  *(ready)*
`src/components/contact.tsx` + `src/components/footer.tsx` + `/* === CONTACT + FOOTER === */`
block. Email/GitHub CTA + footer. Currently a `mailto:` CTA — re-introduce `emailjs-com` here
if you want a working inline form.

`src/app/page.tsx` now renders all six sections + `<Footer/>`.

## Notes
- Visual source of truth: `../ui_kits/portfolio/` (same design, plain JSX) and the Design
  System tab.
- All colors/spacing/type come from the CSS variables in `globals.css` — change the accent
  in one place (`--accent`) to re-skin everything.
