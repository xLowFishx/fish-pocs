import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Ionic keeps previous pages alive for smoother native-like navigation.
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // This is the Angular app layer router; Ionic enhances the transition behavior.
    provideRouter(routes, withComponentInputBinding()),
    // This registers Ionic's UI system and platform services for the Angular app.
    provideIonicAngular({
      mode: 'ios',
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
