import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;
      this.router.navigate(['/user']);
    } else {
      this.usuarioAutenticado = false;
      usuario.nome = '';
      usuario.senha = '';
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
