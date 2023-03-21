import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _jsonURL = 'assets/users.json';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._jsonURL);
  }
}
