import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-legacy-page',
  standalone: true,
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonItem, IonLabel, IonList, IonNote, RouterLink],
  templateUrl: './legacy.page.html',
  styleUrls: ['./legacy.page.scss'],
})
export class LegacyPage {
  readonly appLayers = [
    {
      title: 'Angular app layer',
      description: 'Owns DI, routing configuration, state, and standalone components.',
    },
    {
      title: 'Ionic UI components',
      description: 'Provide mobile-friendly UI primitives like ion-header, ion-content, and ion-button.',
    },
    {
      title: 'Capacitor native runtime',
      description: 'Packages the web build into a native iOS app and bridges native device APIs.',
    },
    {
      title: 'Browser/PWA runtime',
      description: 'Runs the same Angular + Ionic UI in a normal browser during day-to-day development.',
    },
  ];
}
