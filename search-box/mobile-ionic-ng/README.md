# mobile-ionic-ng

Very small Ionic + Angular app created inside `search-box/mobile-ionic-ng`.

## How this app is layered

- Angular app layer: standalone bootstrap, dependency injection, router config, component code.
- Ionic UI layer: `ion-*` components, mobile-style layout primitives, page transitions, theming.
- Capacitor native runtime: turns the built web app into a native iOS shell and exposes native plugins.
- Browser runtime: what you use during normal web development with `ng serve`.

## Run in the browser

```bash
pnpm install
pnpm start
```

Open `http://localhost:4200`.

## Run on iOS

Prerequisites:

- macOS with Xcode installed
- Xcode command line tools enabled
- An available iOS simulator runtime

Commands:

```bash
pnpm install
pnpm run ios:run
```

What `pnpm run ios:run` does:

1. Adds the iOS platform if it does not exist yet.
2. Builds the Angular app into `www/`.
3. Syncs the build into the Capacitor iOS project.
4. Asks Capacitor to run the app on an iOS simulator/device.

If you want to inspect the native project directly in Xcode:

```bash
pnpm run ios:open
```

## Notes for Angular developers

- Routing is still Angular Router. Ionic enhances navigation UX with `ion-router-outlet`.
- Angular lifecycle hooks still apply. Ionic page hooks such as `ionViewWillEnter` are useful when a page is revisited from the navigation stack.
- Most Ionic-specific setup lives in `src/app/app.config.ts`, `src/global.scss`, and `capacitor.config.ts`.
