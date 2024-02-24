import { Routes } from "@angular/router";

import { ButtonsComponent } from "./buttons/buttons.component";
import { FlexboxComponent } from "./flexbox/flexbox.component";

export const DEMO_ROUTES: Routes = [
    { path: 'buttons', component: ButtonsComponent },
    { path: 'flexbox', component: FlexboxComponent },
    { path: '**', redirectTo: 'buttons' }
  ];
  