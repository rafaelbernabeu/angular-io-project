import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';

// My imports
import { Role } from './../domains/permissions/entities/Role';
import { Router } from "@angular/router";

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

   role: Role = new Role();

  public salvar(role: Role) {
    this._service.addRole(role).subscribe(
      role => this._router.navigate(['/role'])
    );
    
  }

  constructor(private _service:RoleService, private _router: Router) { }

  ngOnInit() {
  }

}
