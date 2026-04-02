## What this is
A simple one-page quiz game with a spinning wheel. After the wheel stops, a random question from the selected category is shown.

## Repo structure
- `index.html` - page layout
- `style.css` - responsive styling + dark mode
- `script.js` - wheel logic, question flow, sounds, RTL/LTR + theme/language handling
- `data.js` - quiz data (categories + questions)

## Tech notes
- Vanilla HTML/CSS/JavaScript only (no backend, no frameworks).
- Sounds are generated via the Web Audio API (no external audio files).
- RTL/LTR is handled via `dir`/`lang` attributes and CSS logical properties.

## How to run
1. Open `index.html` in a browser.
2. Click the wheel to spin.

## Activity Log
- 2026-04-02: Initial scaffolding + full implementation per user request.
- 2026-04-02: Rebuilt wheel UI with canvas, fixed responsiveness/layout overlap, synchronized rotating center, and separated spin button below wheel.

## Open questions / TODOs
- Add more categories/questions if desired.

