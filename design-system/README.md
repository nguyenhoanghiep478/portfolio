# Hiep Nguyen — Portfolio Design System

A design system for the personal developer portfolio of **Nguyen Hoang Hiep**, a Java
Backend Developer based in Ho Chi Minh City, Vietnam. It captures the visual language,
tokens, fonts, assets and reusable UI used to build and evolve his portfolio site.

> **Direction note.** The current live source is a *cyberpunk / Matrix-rain* theme
> (neon green `#00ff41`, magenta, glitch text, particle systems, holographic gradients).
> This system deliberately **modernizes** it into a **clean, minimal, professional
> dark-mode** language per the owner's brief — built around a single, restrained
> **sky-blue / cyan accent** that reads dependable and technical, and dropping the
> neon noise, glitch animation and nebula effects. When you build, follow *this* system,
> not the legacy cyberpunk CSS.

---

## Sources

This system was derived from the owner's GitHub repository. The reader is encouraged to
explore it to build more faithful or deeper work:

- **Portfolio (Next.js):** https://github.com/nguyenhoanghiep478/portfolio
  - Stack: Next.js 15, React 19, Tailwind CSS v4, `lucide-react` icons, `emailjs-com`.
  - Fonts loaded via `next/font`: **Space Grotesk** + **DM Sans**.
  - `src/app/globals.css` — the legacy cyberpunk token set + effect library.
  - `src/components/*` — `hero`, `about`, `skills`, `projects`, `contact`,
    `navigation`, `social-links`, plus decorative `matrix-rain` & `particle-system`.
  - `public/image-about.jpg` — the owner's portrait (imported to `assets/portrait.jpg`).
- **Owner's other repos** (context on what he builds — backend/distributed systems,
  microservices, Kafka, Spring Boot): `microservice-books-ecommerce`, `BankAPI`,
  `kafka`, `BookingTrainTicket`, and more under
  https://github.com/nguyenhoanghiep478

> The portrait we have is a casual phone selfie, not a professional headshot. It's used
> where a photo is needed, but a proper headshot would serve a recruiter portfolio far
> better — see CAVEATS.

---

## Who this is for

The portfolio's primary audience is **recruiters and engineering hiring managers**. Every
choice favors fast scanning, credibility, and accessibility over spectacle:

- Lead with role + location + one-line value, then proof (experience, stack, projects).
- **Experience is a vertical timeline.** **Technologies are skill badges grouped by
  category.** These are load-bearing, not decorative.
- Fast, accessible, responsive. Smooth but subtle motion — never blocking content.

### The person (content source of truth)

- **Name:** Nguyen Hoang Hiep
- **Role:** Java Backend Developer
- **Location:** Ho Chi Minh City, Vietnam
- **Email:** nguyenhoanghiep478@gmail.com · **GitHub:** github.com/nguyenhoanghiep478
- **Now:** Java Backend Developer — **Boostech** (startup), 2025–Present
- **Focus:** backend architecture, scalable & distributed systems, microservices,
  concurrency. TOEIC R/L 750. Practices DSA on LeetCode. Fast learner, startup-comfortable.

---

## CONTENT FUNDAMENTALS

How copy is written across the portfolio.

- **Voice — first person, understated, evidence-led.** "I design RESTful APIs…",
  "I build role-based access control…". Lets the work speak; avoids hype adjectives like
  *rockstar*, *ninja*, *guru*.
- **Tense & framing.** Experience bullets are **action-verb led, past/continuous**:
  *Designed, Built, Optimized, Applied, Structured, Integrated, Deployed*. Each bullet is
  a concrete capability tied to a technology, not a vague claim.
- **Casing.**
  - Headings / section names: **Title Case** or short single words ("About", "Experience",
    "Stack", "Contact").
  - Eyebrow labels: **UPPERCASE**, tracked-out, monospace (`// EXPERIENCE`, `01 — ABOUT`).
    This is the one place we lean on the "engineer / terminal" texture.
  - Tech names keep their **canonical casing**: `Spring Boot`, `PostgreSQL`, `Next.js`,
    `JWT`, `Kafka`, `SLF4J`, `JUnit`.
- **Tone.** Calm, precise, technical-but-readable. Confident without bragging.
  Recruiter-friendly: a non-engineer should grasp the *what*, an engineer the *how*.
- **Person.** "I" for the owner; address the reader as "you" only in the contact CTA
  ("Let's build something" / "Get in touch").
- **Numbers & proof.** Use real, specific facts (TOEIC 750; tech names; concrete modules
  like "role-based access control", "bulk operations"). **No invented metrics** or fake
  percentages — the legacy site's "95% skill bars" are dropped in favor of grouped badges.
- **Emoji:** **none.** Not part of the brand. Iconography is handled by line icons.
- **Vibe:** *the quiet competence of a backend engineer.* Terminal-adjacent texture
  (mono labels, `//` comments, `$` prompts) used as seasoning, never as a costume.

**Example copy (in-voice):**
> `// 01 — ABOUT`
> **Java Backend Developer**
> I build the parts users never see but always feel — APIs, access control, and data
> layers engineered for performance, scale, and calm production nights.

> `$ whoami` → *Backend developer focused on Spring Boot, PostgreSQL and distributed systems.*

---

## VISUAL FOUNDATIONS

The full visual language. See `colors_and_type.css` for the canonical token values and the
Design System tab for live specimens.

### Mood
Clean, minimal, professional, **dark**. Engineering credibility over decoration. Generous
negative space, strong type hierarchy, one confident accent. Think a modern dev-tools
landing page (calm, precise) — not a neon arcade.

### Color
- **Surfaces** are deep, cool, slate-tinted darks — **never pure black**. A 4-step ladder
  builds depth: `--bg-0` (#0A0C10 page) → `--bg-1` (#0F1217 nav/sunken) → `--bg-2`
  (#141921 cards) → `--bg-3` (#1B212B hover/elevated). Code wells go *darker* than the
  page (`--bg-inset` #07090C).
- **One accent: sky-blue / cyan** `--accent` #38BDF8, with `--accent-bright` #7DD3FC (hover)
  and `--accent-deep` #0EA5E9 (pressed). Used for: links, the eyebrow labels, key icons,
  primary button fill, timeline node, focus rings, and tinted highlights
  (`--accent-dim`). **Restraint is the rule** — a little blue goes a long way on dark.
- **Text** is a 4-step neutral ramp: `--fg-1` #E9EEF3 (headings) → `--fg-2` #A8B3BF
  (body) → `--fg-3` #6C7884 (captions) → `--fg-4` #49525C (disabled).
- **Semantic colors** (`--info` blue, `--warning` amber, `--danger` red) exist but are
  rare; the accent carries almost all signal.
- **Imagery vibe:** cool, slightly desaturated, at home on dark. Photos get a subtle dark
  overlay / duotone-toward-slate treatment and a hairline border so they sit in the system.

### Type
- **Space Grotesk** — display & all headings. Tight tracking (`-0.02` to `-0.03em`),
  weights 600–700. Geometric, contemporary, a touch of character.
- **DM Sans** — body & UI. Highly legible, neutral, weights 400–600.
- **JetBrains Mono** — eyebrow labels, code, terminal prompts, tech badges' small text.
  This is where the "engineer" texture lives.
- Fluid scale via `clamp()` (`--text-display` → `--text-eyebrow`). Body never below 16px;
  eyebrows 12px tracked `+0.18em` uppercase.

### Spacing & layout
- 4px-based scale (`--space-1`…`--space-10`). Section rhythm `--section-y`
  (clamp 64–128px). Content max `--container` 1120px; prose `--container-narrow` 760px.
- Layout is calm and grid-aligned: single-column reading width for prose, 2–3 col grids
  for badges/cards. Sticky, slim top nav (`--bg-1` + blur). No fixed decorative chrome.

### Backgrounds
- Predominantly **flat dark surfaces**. Depth comes from the surface ladder + hairline
  borders, **not** gradients. Permitted texture, used sparingly: a faint **dotted grid**
  or single soft **sky-blue radial glow** behind the hero — at very low opacity. **No**
  matrix rain, nebula clouds, holographic sweeps, or full-bleed gradients.

### Borders, radii & cards
- **Hairline borders** (`--border` #222A34, `--border-strong` on focus). 1px, low-contrast
  — they define structure without shouting.
- **Radii:** `--radius-md` 10px (default), `--radius-lg` 14px (cards), `--radius-pill` for
  badges/chips. `--radius-sm` 6px for code/inputs.
- **Cards:** `--bg-2` fill + 1px `--border` + `--shadow-2`. On hover: border lifts to
  `--accent-line`, surface to `--bg-3`, and a `translateY(-2px)`. No colored left-border
  accent stripes. No heavy drop shadows.

### Shadows & elevation
- Dark-mode shadows are deep and soft (`--shadow-1/2/3`, built on near-black). Elevation =
  lighter surface + bigger shadow. The only colored shadow is the **focus ring**
  (`--ring-focus`) and an optional subtle `--shadow-glow` on the primary CTA.

### Motion
- **Smooth, subtle, purposeful.** Scroll-reveal: fade + 16–24px rise, `--dur-reveal` 800ms,
  `--ease-out`. Hovers: `--dur-fast` 140ms. Transitions on color/border/transform only.
- **No** glitch, no typewriter title, no infinite floating/twinkle/scan loops. Respect
  `prefers-reduced-motion` (disable reveals & transforms).

### States
- **Hover:** brighten accent (`--accent` → `--accent-bright`), lift surface one step,
  `translateY(-2px)` on cards/buttons.
- **Press:** settle back to `translateY(0)`, accent → `--accent-deep`.
- **Focus:** always visible — `--ring-focus` (3px sky-blue glow), never removed.
- **Disabled:** `--fg-4` text, reduced opacity, no pointer.

---

## ICONOGRAPHY

- **System: [Lucide](https://lucide.dev)** — this is what the source ships
  (`lucide-react ^0.539`). Use Lucide everywhere for consistency: clean, **2px stroke**,
  rounded line icons that match the minimal dark aesthetic.
  - In static HTML deliverables, load Lucide from CDN:
    `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`,
    or inline individual SVGs from https://lucide.dev.
  - Common icons in use: `github`, `mail`, `map-pin`, `arrow-right`, `arrow-up-right`,
    `external-link`, `download`, `code-2`, `server`, `database`, `cpu`, `git-branch`,
    `terminal`, `briefcase`, `graduation-cap`, `chevron-down`.
- **Tech / brand logos** (Java, Spring, PostgreSQL, Kafka, Docker, AWS, Redis, React,
  Next.js, TypeScript) — use [Simple Icons](https://simpleicons.org) (CDN:
  `https://cdn.simpleicons.org/<slug>/<hex>`) when a recognizable brand glyph is wanted on
  a skill badge. Keep them monochrome (tinted `--fg-2` or `--accent`) so badges stay calm.
- **Stroke weight:** 2px line icons (Lucide default). Don't mix filled + line styles.
- **Sizing:** 16px inline with text, 18–20px in buttons/badges, 24px section markers.
  Tint with `currentColor` so they inherit accent/neutral context.
- **No emoji.** **No** hand-drawn one-off SVG illustrations. **No** unicode glyph icons
  (the legacy `×`, `|`, `$` are kept only as *typographic* terminal seasoning, not as UI
  icons).

---

## INDEX — what's in this system

Root files:
- **`README.md`** — this file: context, content + visual foundations, iconography, index.
- **`colors_and_type.css`** — canonical color + type + spacing + radius + shadow + motion
  tokens. Import this first in any deliverable.
- **`SKILL.md`** — Agent-Skill manifest so this folder works as a downloadable skill.

Folders:
- **`assets/`** — `portrait.jpg` (owner's photo). Logos/brand glyphs are CDN-linked
  (Lucide, Simple Icons) rather than vendored.
- **`preview/`** — small HTML specimen cards that populate the Design System tab
  (colors, type, spacing, radii, shadows, buttons, badges, cards, timeline, nav).
- **`ui_kits/portfolio/`** — high-fidelity, interactive recreation of the redesigned
  portfolio: `index.html` (assembled page) + JSX components (`Nav`, `Hero`,
  `SkillBadges`, `ExperienceTimeline`, `ProjectCard`, `ContactCTA`, `Footer`, primitives).
  See its own `README.md`.
- **`codebase/`** — production Next.js files (mirrors the repo: `src/app`, `src/components`)
  that wire the redesign into the real app, organized as **section-by-section commits**.
  See `codebase/README.md` for the migration plan.

### How to use
1. Copy `colors_and_type.css` (and any assets you reference) into your working folder.
2. Read the relevant `ui_kits/portfolio/README.md` + components for ready-made UI.
3. Build static HTML for previews/mocks, or lift tokens/components into production code.
4. Follow CONTENT FUNDAMENTALS for copy and ICONOGRAPHY for icons.
