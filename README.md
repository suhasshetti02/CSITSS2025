# CSITSS 2025 Conference Website

A Next.js website for the 9th International Conference on Computational Systems and Information Technology for Sustainable Solutions (CSITSS-2025), organised by R.V. College of Engineering. The repository includes conference information pages, committee and speaker data, schedule and registration views, and a site-wide theme context.

## Implemented site sections

The Pages Router application contains pages for:

- Home / conference overview.
- About and conference information.
- Committee and committee-member details.
- Awards, speakers, tracks, and technical information.
- Paper submission information.
- Registration and sponsorship.
- Programme schedule.
- Contact information.

The shared React components include navigation, header imagery, gallery, timeline, speaker and committee cards, countdown timer, and thank-you popup. The theme context stores the selected light/dark preference in browser localStorage.

## Technology stack

| Area | Technologies |
|---|---|
| Framework | Next.js 15 (Pages Router) |
| UI | React 19, TypeScript / TSX |
| Styling | Tailwind CSS, PostCSS |
| Components | Custom React components, Lucide / React icon libraries |
| Theme | React Context with localStorage persistence |
| Build / tooling | npm, ESLint, Prettier |

## Repository structure

- `pages/` — conference pages and dynamic committee detail route.
- `components/` — navigation, cards, gallery, timeline, countdown, and shared UI.
- `context/ThemeContext.tsx` — application theme state.
- `data/` — conference chairs, committees, patrons, and related content data.
- `public/` — static images and assets.
- `styles/` — global / component styles.
- `next.config.js`, `tailwind.config.js`, `tsconfig.json` — framework and build configuration.

## Run locally

Requirements: a Node.js version supported by the Next.js version in `package.json`, and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js (normally `http://localhost:3000`).

Production build:

```bash
npm run build
npm start
```

## Known repository notes

- The root README previously described only a small front-end styling task; the repository contains a multi-page conference website and supporting content data.
- The home page currently contains a paper-submission link whose URL references a CSITSS 2024 submission portal. Confirm the intended 2025 destination before using the site for real submissions.
- The package manifest contains framework/tooling version mismatches (including Next.js 15 with an older `eslint-config-next` major). Reconcile the dependency versions and validate a clean install/build before deployment.
- The checked-in content includes conference-specific information; verify dates, committee membership, venue, links, and registration details before reusing the site for another event.
- The theme preference is stored locally in the browser; it is not a server-side user preference.

## License

See repository license and third-party component terms.
