---
name: hiep-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for Nguyen Hoang Hiep's developer portfolio — a clean, minimal, professional dark-mode brand for a Java backend engineer — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick orientation
- `colors_and_type.css` — import first. Canonical color / type / spacing / radius / shadow /
  motion tokens. Direction: clean minimal **dark mode**, one restrained **sky-blue** accent
  (#38BDF8), Space Grotesk (display) + DM Sans (body) + JetBrains Mono (labels/code).
- `README.md` — full context, CONTENT FUNDAMENTALS (voice/casing), VISUAL FOUNDATIONS,
  ICONOGRAPHY (Lucide line icons + Simple Icons brand glyphs; no emoji).
- `assets/` — the owner's portrait.
- `preview/` — small specimen cards for every token group.
- `ui_kits/portfolio/` — ready-made React/JSX components recreating the full site
  (Nav, Hero, About, Experience timeline, Skill badges, Projects, Contact). Lift these.

## Non-negotiables
- Dark surfaces, never pure black; depth from the surface ladder + hairline borders, not
  gradients. Sky-blue used sparingly.
- No cyberpunk/neon/glitch/matrix effects (the legacy source had these — do not reuse).
- Copy: first-person, understated, action-verb led. No emoji. Canonical tech casing.
- Icons: Lucide (2px stroke). Brand glyphs: Simple Icons, monochrome.
