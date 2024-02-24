import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
    selector: 'app-contactmanager-app',
    template: `
    <app-sidenav></app-sidenav>
  `,
    styles: [],
    standalone: true,
    imports: [
      SidenavComponent
    ]
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
   }

  ngOnInit(): void {
  }

}
