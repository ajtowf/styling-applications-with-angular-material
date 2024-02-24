import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { NotesComponent } from '../notes/notes.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
    standalone: true,
    imports: [
      CommonModule, 
      MatProgressSpinnerModule, 
      MatCardModule, 
      MatIconModule, 
      MatTabsModule, 
      NotesComponent
    ]
})
export class MainContentComponent implements OnInit {

  user: User | null | undefined;
  
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = 1;
      this.user = null;

      this.userService.users.subscribe(users => {
        if (users.length == 0) return;

        setTimeout(() => {
          this.user = this.userService.userById(id);
        }, 500)
      });

    })
  }

}
