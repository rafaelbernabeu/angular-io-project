import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

// My import
import { User } from '../../domains/permissions/entities/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User> = [];

  public getRoles() {
    this._service.getUsers().subscribe(
      roles => this.users = roles
    );
  }

  constructor(
    private _service: UserService
  ) { }

  ngOnInit() {
    this.getRoles();
  }

}
