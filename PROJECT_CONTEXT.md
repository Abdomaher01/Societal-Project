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
- 2026-04-17: Mobile/tablet responsiveness and background stability: fixed `#background` stacking (no extreme negative z-index), lighter blur on small screens, safe-area padding + `viewport-fit=cover`, tablet/short-landscape layout tweaks, removed global `* { max-width: 100% }` that broke fixed layers and flex children, second `requestAnimationFrame` wheel resize after starting a round.
- 2026-04-17: Scroll + background follow-up: document scroll moved to `html` (body stays `overflow-y: visible`), removed `transform` on `body`, `#background` uses `inset:0` only (viewport-locked, not content height), dropped JS `--vh` + synthetic `resize` that relayouted the page, `.page` uses `overflow-x: hidden`, wheel `canvas` uses `touch-action: pan-y` so scrolling can start on the wheel.
- 2026-04-17: Round questions: dedupe by `slot:cat-idx` plus normalized English `text:` key; mark as used when the question is shown; round end uses `countAskedSlotsThisRound()`. Background/overlay: fixed layer extends past viewport with safe-area insets to avoid rubber-band gaps and blur halos; `html`/`body` add `100vh` fallbacks before `dvh`/`svh` for older browsers; `color-scheme` on `html`.

## Open questions / TODOs
- Add more categories/questions if desired.

