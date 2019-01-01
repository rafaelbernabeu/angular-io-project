import { httpOptions } from '../role.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../domains/permissions/entities/User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../login/auth.service';

@Injectable()
export class UserService {

  private usersUrl = 'user';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, this.authService.getHeaders())
      .pipe(
        tap(heroes => console.log('User save...')),
        // catchError()
      );
  }

  addUser (role: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, role, this.authService.getHeaders()).pipe(
      tap((user: User) => console.log(`added user w/ id=${user.id}`))
    );
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
}
