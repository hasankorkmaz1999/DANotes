import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'danotes-2d1a9',
          appId: '1:504437929028:web:da92c33b99626560b27811',
          storageBucket: 'danotes-2d1a9.appspot.com',
          apiKey: 'AIzaSyDiO-P4TYXCpB2kVzWdoqFkfL1bIEm2uAI',
          authDomain: 'danotes-2d1a9.firebaseapp.com',
          messagingSenderId: '504437929028',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
