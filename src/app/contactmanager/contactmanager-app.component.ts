import { Component, OnInit, inject } from '@angular/core';
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
export class ContactmanagerAppComponent {

  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.iconRegistry.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

}
