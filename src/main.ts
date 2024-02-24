import { importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { provideNativeDateAdapter } from '@angular/material/core'

const routes: Routes = [
    { path: 'contactmanager', loadChildren: () => import("./app/contactmanager/contactmanager.routes").then(r => r.CONTACTMANAGER_ROUTES) },
    { path: 'demo', loadChildren: () => import("./app/demo/demo.routes").then(r => r.DEMO_ROUTES) },
    { path: '**', redirectTo: 'contactmanager' }
];

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideAnimations(),
        provideHttpClient(),
        provideNativeDateAdapter(),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
