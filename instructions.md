# KyronHQ.dev — Design Iteration Instructions

## PURPOSE
You are a design-focused agent responsible for building the KyronHQ.dev website **iteratively**.
You must **design one section at a time**, pause, and wait for explicit approval before continuing.

DO NOT move ahead unless approval is clearly given.

---

## GLOBAL CONSTRAINTS (APPLY ALWAYS)

- Dark mode only
- Premium, minimal, technical aesthetic
- Motion-first design
- Non-linear, spring-based animations only
- Gesture physics everywhere (hover, scroll, click)
- Rubber-band effects on release
- Microfeedback on every interaction
- All elements appear with staggered animations
- No sticky elements
- No scroll-jacking
- No buzzwords
- No fake metrics, testimonials, or status indicators

If any constraint is violated, stop and fix before proceeding.

---

## COLOR SYSTEM

- Background: `#0b0b0b`
- Surface: `#121212`
- Primary Text: `#eaeaea`
- Muted Text: `#5f5f5f`
- Accent: `#8be182`

Accent usage rules:
- CTAs only
- Active / focused states only
- Never decorative

---

## TYPOGRAPHY

- Font: Inter / Geist / SF Pro (safe fallback)
- Weights: 400, 500, 600
- Tight line-height
- No decorative or playful fonts

---

## ANIMATION & PHYSICS RULES (MANDATORY)

- Use spring-based motion only
- No linear easing
- Include overshoot + settle
- Micro-delays: 20–60ms
- Stagger entrances for all appearing elements
- Motion should feel elastic, alive, and expensive
- No instant state changes

---

## PAGE STRUCTURE

Pages:
1. Landing
2. About

---

# ITERATION FLOW (STRICT)

You must follow the steps below **in order**.
After each step, STOP and ask for approval.

---

## STEP 1 — NAVBAR (LANDING PAGE)

### Build:
- Non-sticky navbar
- Initial state:
  - Normal, top-aligned
  - Transparent
  - Full-width
- On scroll (~80px):
  - Morph into a centered pill
  - Liquid-glass effect (blur + translucency)
  - Moves toward horizontal center
  - Spring-based motion
  - Rubber-band feel on release
- On scroll up:
  - Reverts naturally with inertia

### Navbar content:
- Center: `KyronHQ`
- Right: `About`

### Requirements:
- Motion must feel fluid, not mechanical
- No snapping
- No jitter

### After completion:
STOP.
Ask: **“Approve navbar design? (yes / changes)”**

---

## STEP 2 — HERO SECTION (LANDING PAGE)

### Build:
Centered hero section.

Text:
- Headline:  
  `We build execution systems.`
- Subtext:  
  `Automation, software, and infrastructure—engineered for leverage.`

CTA:
- Label: `About Us`
- Color: Accent (`#8be182`)

CTA behavior:
- On click:
  - Smooth animated transition
  - Scrolls to Capabilities section (not a route change)
  - Shared-element style motion
  - Elastic settle on arrival

### Requirements:
- Generous spacing
- Calm, confident tone
- No visual noise

### After completion:
STOP.
Ask: **“Approve hero section? (yes / changes)”**

---

## STEP 3 — CAPABILITIES SECTION (LANDING PAGE)

### Build:
Capabilities section appears after hero.

Elements:
- Section enters with staggered animation

Cards (3):
1. Automation
2. Software
3. Infrastructure

Each card:
- Title + one short descriptive line only
- No paragraphs

Card interaction:
- Float slightly on hover
- Gentle depth + tilt
- Cursor proximity subtly affects motion
- Rubber-band return on mouse leave
- Accent color only on active focus

### Requirements:
- Cards feel tactile
- Motion is subtle, not flashy
- No glow, no gradients

### After completion:
STOP.
Ask: **“Approve capabilities section? (yes / changes)”**

---

## STEP 4 — FOOTER (LANDING PAGE)

### Build:
Minimal, static footer.

Content:
- © KyronHQ
- contact@kyronhq.dev

### Requirements:
- Muted styling
- No animations beyond subtle entrance

### After completion:
STOP.
Ask: **“Approve footer? (yes / changes)”**

---

## STEP 5 — ABOUT PAGE (STRUCTURE + ENTRY)

### Build:
About page with soft vertical glide entry.

Entry behavior:
- Page enters smoothly
- Elements appear in staggered sequence
- Micro delays between elements

### After completion:
STOP.
Ask: **“Approve About page entry animation? (yes / changes)”**

---

## STEP 6 — ABOUT PAGE CONTENT

### Build:
Content only. No extra sections.

Text:
