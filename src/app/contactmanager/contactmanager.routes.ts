import { Routes } from "@angular/router";

import { ContactmanagerAppComponent } from "./contactmanager-app.component";
import { MainContentComponent } from "./components/main-content/main-content.component";

export const CONTACTMANAGER_ROUTES: Routes = [
    {
      path: '', component: ContactmanagerAppComponent,
      children: [
        { path: ':id', component: MainContentComponent },
        { path: '', component: MainContentComponent }
      ]
    }
  ];