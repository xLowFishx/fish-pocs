import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
    IonNote,
    IonTitle,
    IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonTitle,
    IonToolbar,
    RouterLink,
  ],
})
export class HomePage {
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

  // Angular lifecycle hooks like ngOnInit still work.
  // Ionic page hooks like ionViewWillEnter become useful when data should refresh on every visit.
  ionViewWillEnter(): void {
    console.info('HomePage entered via Ionic navigation lifecycle.');
  }
}
