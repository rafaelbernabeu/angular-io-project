import { RoleService } from './../role.service';
import { Component, OnInit } from '@angular/core';

// My imports
import { Role } from '../domains/permissions/entities/Role';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles: Array<Role> = []

  public getRoles(){
    this._service.getRoles().subscribe(
      roles => this.roles = roles
    )
  }

  constructor(
    private _service: RoleService
  ) { }

  ngOnInit() {
    this.getRoles();
  }

}
