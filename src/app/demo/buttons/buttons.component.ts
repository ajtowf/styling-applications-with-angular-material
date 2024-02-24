import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-buttons',
    template: `
  <button mat-button>
    <mat-icon>face</mat-icon>
    Click me!
  </button>
  <mat-checkbox>Check me!</mat-checkbox>
  `,
    styles: [],
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatCheckboxModule]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
