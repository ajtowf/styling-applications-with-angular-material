import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-new-contact-dialog',
    templateUrl: './new-contact-dialog.component.html',
    styleUrls: ['./new-contact-dialog.component.scss'],
    standalone: true,
    imports: [CommonModule, MatDialogTitle, MatDialogContent, MatFormFieldModule, MatSelectModule, FormsModule, MatIconModule, MatOptionModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, MatDialogActions, MatButtonModule]
})
export class NewContactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user!: User;
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService) { }

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
