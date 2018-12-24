import { Role } from './domains/permissions/entities/Role';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private rolesUrl = 'api/roles';

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl)
      .pipe(
        tap(heroes => console.log(heroes)),
        //catchError()
      );
  }

  addRole (role: Role): Observable<Role> {
    return this.http.post<Role>(this.rolesUrl, role, httpOptions).pipe(
      tap((hero: Role) => console.log(`added hero w/ id=${role.id}`))
    );
  }

  constructor(
    private http: HttpClient) { }
}
