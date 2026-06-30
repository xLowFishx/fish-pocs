# fish-pocs

## Summary

This repository contains small proof-of-concept apps.

The new Ionic Angular app lives at `search-box/mobile-ionic-ng`.

## Recommended approach

Use the browser workflow for day-to-day development first, then use Capacitor only when you want a native iOS shell:

- Angular app layer: app bootstrap, routing, state, standalone components.
- Ionic UI components: `ion-*` elements and mobile navigation behavior.
- Capacitor native runtime: wraps the built web app into an iOS app and bridges native plugins.
- Browser/PWA runtime: regular web development loop while the app is still just HTML, CSS, and TypeScript.

## Example

Run the app in the browser:

```bash
cd search-box/mobile-ionic-ng
pnpm install
pnpm start
```

Run the app on iOS:

```bash
cd search-box/mobile-ionic-ng
pnpm install
pnpm run ios:run
```

Useful scripts:

- `pnpm start`: runs the Angular dev server.
- `pnpm run ios:run`: adds iOS if needed, builds the app, syncs Capacitor, and runs the native app.
- `pnpm run ios:open`: builds, syncs, and opens the native Xcode project.

## Caveats

- The app is intentionally basic and uses Angular standalone APIs.
- Ionic currently scaffolded this app on Angular `20.3.x`, which appears to be the current Ionic-supported Angular major produced by the latest starter on June 29, 2026.
- iOS execution depends on the local Xcode simulator service being healthy. If the simulator is unavailable, the web app can still be validated with `npm start` and the native project can still be opened with Xcode.
