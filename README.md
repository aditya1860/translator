# Slab 1 — For Beginners

A single Vite + React + Tailwind app covering all three tasks:

1. **Text Translator** (`/translator`) — English → target language, axios call.
   Runs out of the box against MyMemory's free API (no key needed).
   To switch to RapidAPI as originally specified, see the comment block
   at the top of `handleTranslate` in `src/pages/Translator.jsx`.

2. **Random String Generator** (`/random-string`) — uses `useState`,
   `useCallback`, and `useEffect` as required, with a length slider and
   character-set toggles.

3. **Client-side routing** — `react-router-dom` wired in `src/main.jsx`
   (BrowserRouter) and `src/App.jsx` (Routes), with a Navbar using
   `NavLink` for active-state styling.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Project structure

```
src/
  main.jsx          # BrowserRouter + root render
  App.jsx           # Route definitions
  components/
    Navbar.jsx       # NavLink-based nav
  pages/
    Home.jsx
    Translator.jsx
    RandomString.jsx
```

## Notes for using RapidAPI (per the original task spec)

1. Go to RapidAPI, subscribe to a translation API (e.g. "Google Translate").
2. Add a `.env` file at the project root:
   ```
   VITE_RAPIDAPI_KEY=your_key_here
   ```
3. Swap the axios call in `Translator.jsx` per the commented example —
   it's already written out, just uncomment and remove the MyMemory call.
