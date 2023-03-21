import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFileContent } from '../models/user-file-content-model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _jsonURL = 'assets/users.json';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<UserFileContent[]> {
    return this.http.get<UserFileContent[]>(this._jsonURL);
  }
}
