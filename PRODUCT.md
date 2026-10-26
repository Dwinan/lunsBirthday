# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS (vanilla, no framework)

## Users

Primary: Moon (recipient, romantic partner turning 20)
Secondary: Creator (gift-giver, author of the message and curator of memories)

## Product Purpose

A personal birthday website gifted to Moon on their 20th birthday. It delivers a handwritten letter, a curated scrapbook of shared memories, and a custom video as the emotional centerpiece. Success = Moon feels the depth of the relationship through nostalgic warmth; the site becomes a keepsake they return to.

## Positioning

Not a template, not a generic card. A hand-coded love letter disguised as a website — every imperfection (wobbly rotations, hand-drawn fonts, washi tape) is intentional evidence of time spent. Neighboring products (e-cards, social posts, template sites) cannot truthfully copy the specific shared history encoded in the copy, photos, and video.

## Operating Context

- Viewed once on birthday, potentially revisited on anniversaries or hard days
- Primarily mobile (phone in hand, likely bed or couch)
- May be shared with close friends later ("look what they made")
- No login, no backend, no analytics — pure static gift

## Capabilities and Constraints

- Four sections: Hero (intro), Message (letter modal), Gallery (scrapbook modal with 4 photos), Present (video player)
- Three modals: message diary, gallery scrapbook, lightbox zoom
- Hand-drawn fonts: Caveat (titles), Patrick Hand (body)
- Texture background (texture.png) repeating
- Video: Project MOON.mov (local file, plays inline and fullscreen)
- All content is fixed/authored — no CMS, no dynamic data
- Must work offline after first load (video cached)

## Brand Commitments

- Name: "Moon's Birthday" (displayed in navbar)
- Voice: Intimate, slightly messy, genuine — "Halooo sayangkuuu", "HAHAHAH", unpolished but deep
- Visual world: Retro scrapbook/journal — hand-drawn, sketchy, happy, cute
- Key materials: washi tape, paper clips, polaroids, stamps, notebook paper, film frames
- References: Project MOON.mov (video aesthetic), lejournalsociety.com, tiagofragoso.com
- Color palette: Warm paper (#45403b), cream (#edefe6), warm gray (#c9c4ba), dark ink (#241e17)

## Evidence on Hand

- Letter copy (in index.html modal-body) — real, specific, unchangeable
- 4 photos: 1.jpg, 2.jpg, 3.jpeg, 4.jpeg (real memories, captions fixed)
- Video: Project MOON.mov (the centerpiece gift)
- Texture: texture.png (paper grain)
- Fonts: Google Fonts (Caveat, Patrick Hand)

## Product Principles

1. **Imperfection is proof of care** — Wobbly lines, uneven rotations, handwritten messiness signal "I made this for you" better than pixel perfection.
2. **The video is the climax** — Every section builds anticipation; the present section must feel like unwrapping.
3. **Nostalgia over novelty** — Familiar scrapbook materials (tape, clips, polaroids) trigger memory; avoid trendy UI patterns.
4. **Mobile-first intimacy** — Designed for thumb-scroll in bed; desktop is secondary.
5. **Zero friction to the feeling** — No loaders, no auth, no distractions. Open → feel.

## Accessibility & Inclusion

- Keyboard-navigable modals and buttons (focus management, ESC to close)
- Semantic HTML, ARIA labels on interactive elements
- Focus indicators meet 3:1 contrast
- Reduced motion respected for animations (future enhancement)
- Text size readable at default zoom on mobile