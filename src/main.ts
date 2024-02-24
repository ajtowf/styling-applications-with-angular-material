import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { MatNativeDateModule } from '@angular/material/core'

const routes: Routes = [
    { path: 'contactmanager', loadChildren: () => import("./app/contactmanager/contactmanager.routes").then(r => r.CONTACTMANAGER_ROUTES) },
    { path: 'demo', loadChildren: () => import("./app/demo/demo.routes").then(r => r.DEMO_ROUTES) },
    { path: '**', redirectTo: 'contactmanager' }
];


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(MatNativeDateModule),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
