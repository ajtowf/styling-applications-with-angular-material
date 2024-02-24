import { Component, OnInit, inject } from '@angular/core';

import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-new-contact-dialog',
    templateUrl: './new-contact-dialog.component.html',
    styleUrls: ['./new-contact-dialog.component.scss'],
    standalone: true,
    imports: [
      CommonModule, 
      MatDialogModule,
      MatFormFieldModule, 
      MatSelectModule, 
      MatIconModule, 
      MatInputModule, 
      MatDatepickerModule, 
      MatButtonModule,
      FormsModule, 
      ReactiveFormsModule,
    ]
})
export class NewContactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user!: User;

  private dialogRef = inject(MatDialogRef<NewContactDialogComponent>);
  private userService = inject(UserService);

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit(): void {
    this.user = new User();
  }

  save() {
    this.user.name = this.name.value ? this.name.value : '';

    let addedUser = this.userService.addUser(this.user);
    this.dialogRef.close(addedUser);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
