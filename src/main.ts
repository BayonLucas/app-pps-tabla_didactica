import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"ppappspps","appId":"1:906736048341:web:b051d5b9d35c866c3eea5c","storageBucket":"ppappspps.appspot.com","apiKey":"AIzaSyCBB8TkVPVYEphO_KYIJht2URLOSLx8crI","authDomain":"ppappspps.firebaseapp.com","messagingSenderId":"906736048341"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
