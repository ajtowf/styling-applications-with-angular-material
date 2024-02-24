import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private _users = new BehaviorSubject<User[]>([]);
  private dataStore: { users: User[]; } = { users: [] };

  http = inject(HttpClient);

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  addUser(user: User): User {
    user.id = this.dataStore.users.length + 1;
    this.dataStore.users.push(user);
    this._users.next(this.dataStore.users);

    return user;
  }

  userById(id: number) {
    return this.dataStore.users.find(x => x.id == id);
  }

  loadAll() {
    const usersUrl = '/assets/users.json'

    return this.http.get<User[]>(usersUrl)
    .subscribe({
      next: data => {        
        this.dataStore.users = data;
        this._users.next(this.dataStore.users);
      },
      error: error => console.log("Failed to fetch users")
    })
  }

}
