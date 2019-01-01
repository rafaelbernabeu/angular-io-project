import { httpOptions } from '../role.service';
import { tap } from 'rxjs/operators';
import { Telefone } from '../domains/permissions/entities/Telefone';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  private telefoneEndPointUrl = 'telefone';

  getTelefones(): Observable<Telefone[]> {
    return this.http.get<Telefone[]>(this.telefoneEndPointUrl, this.authService.getHeaders())
      .pipe(tap(heroes => console.log('User save...')),
        // catchError()
      );
  }

  addTelefone (tel: Telefone): Observable<Telefone> {
    return this.http.post<Telefone>(this.telefoneEndPointUrl, tel, this.authService.getHeaders()).pipe(
      tap((tel1: Telefone) => console.log(`added telefone w/ id=${tel1.id}`))
    );
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
}
