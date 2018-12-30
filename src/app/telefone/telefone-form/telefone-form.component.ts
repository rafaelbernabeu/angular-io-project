import { Router } from '@angular/router';
import { TelefoneService } from '../telefone.service';
import { Telefone } from './../../domains/permissions/entities/Telefone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefone-form',
  templateUrl: './telefone-form.component.html',
  styleUrls: ['./telefone-form.component.css']
})
export class TelefoneFormComponent implements OnInit {

  tel: Telefone = new Telefone();

  public salvar(tel: Telefone) {
    this._service.addTelefone(tel).subscribe(
      role => this._router.navigate(['/telefone'])
    );
  }

  constructor(private _service: TelefoneService, private _router: Router) { }

  ngOnInit() {
  }

}
