---
trigger: always_on
---

# Portfolio Design & Engineering Guidelines: Bold Typographic Studio

## 1. Core Identity

- **Owner:** Sausan Asma' Mufiidah
- **Positioning:** Software Engineering & Data Analytics.
- **Vibe:** Bold, Expressive, Creative Studio, Confident, Minimalist but High-Impact.

## 2. The NEW Anti-Slop Rule

- **BANNED:** "Hello, I'm [Name]" or "Welcome to my portfolio".
- **BANNED:** Long, boring paragraphs in the hero section.
- **BANNED:** Generic SaaS illustrations, 3D floating emojis, or skill percentage bars.
- **BANNED:** Endless rigid card grids with heavy drop shadows.

## 3. Design System & Aesthetics

- **Background:** High-quality, smooth, immersive mesh gradients (e.g., warm yellow/orange fading into white or soft dynamic colors) are ALLOWED and encouraged for the hero section to match the creative reference.
- **Navigation:** Use a "Floating Pill" design (centered at the top, slightly transparent/glass or solid contrasting color) instead of a standard full-width navbar.
- **Typography (CRITICAL):**
  - **Hero Text:** MASSIVE display typography (e.g., taking up 50-80% of the viewport width). The name "Sausan" should dominate the screen.
  - **Fonts:** Use high-end grotesque or geometric sans-serifs (like PP Mori, Helvetica Now, or Clash Display) for the giant text. Inter is fine for small body text.
- **Interaction (Hover):** The massive hero text MUST have a creative hover state (e.g., transitioning from solid fill to transparent with a 1px stroke, or a gradient mask reveal). All animations must be 60fps smooth.

## 4. Engineering Standards

- Next.js App Router + Tailwind CSS + TypeScript.
- Semantic HTML.
- For the giant typography and smooth gradients, ensure CSS is optimized. Use `mix-blend-mode` or text masking where appropriate for creative effects.
