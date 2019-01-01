import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../domains/permissions/entities/User';
import { Observable, observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Token } from './token';

@Injectable()
export class AuthService {

  private token: Token = null;
  private usuarioAutenticado = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  private criaUrlLogin(usuario: Usuario) {
    return `oauth/token?grant_type=password&username=${usuario.nome}&password=${usuario.senha}`;
  }

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Basic Y2xpZW50OjEyMw==' })
    };
  }

  async fazerLogin(usuario: Usuario) {
    this.token = null;
    this.usuarioAutenticado = false;

    this.token = await this.http.post(this.criaUrlLogin(usuario), null, this.getAuthHeaders()).toPromise() as Token;

    if (this.token != null) {

      console.log(this.token);
      this.usuarioAutenticado = true;
      this.router.navigate(['/user']);

    } else {

      console.log('Dados nao conferem!');
      this.usuarioAutenticado = false;
      usuario.senha = '';

    }
  }

  public usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  public getAccessToken(): String {
    return this.token == null ? null : this.token.access_token;
  }

  public getHeaders() {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.getAccessToken() })
    };
  }

}
