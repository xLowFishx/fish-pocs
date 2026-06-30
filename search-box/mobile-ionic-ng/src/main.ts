import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Angular bootstraps the web app here.
// Ionic is layered on top through providers in app.config.ts.
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
