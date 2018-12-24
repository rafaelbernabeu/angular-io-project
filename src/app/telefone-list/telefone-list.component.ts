import { Component, OnInit } from '@angular/core';
import { TelefoneService } from '../telefone.service';
import { Telefone } from '../domains/permissions/entities/Telefone';

@Component({
  selector: 'app-telefone-list',
  templateUrl: './telefone-list.component.html',
  styleUrls: ['./telefone-list.component.css']
})
export class TelefoneListComponent implements OnInit {

  telefones: Array<Telefone> = []

  public getTelefones(){
    this._service.getTelefones().subscribe(
      tels => this.telefones = tels
    )
  }

  constructor(
    private _service: TelefoneService
  ) { }

  ngOnInit() {
    this.getTelefones();
  }

}
