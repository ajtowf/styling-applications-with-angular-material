import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'contactmanager', loadChildren: () => import("./contactmanager/contactmanager.routes").then(r => r.CONTACTMANAGER_ROUTES) },
    { path: 'demo', loadChildren: () => import("./demo/demo.routes").then(r => r.DEMO_ROUTES) },
    { path: '**', redirectTo: 'contactmanager' }
];