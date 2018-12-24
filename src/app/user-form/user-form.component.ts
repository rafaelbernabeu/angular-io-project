import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { User } from './../domains/permissions/entities/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();

  public salvar(user: User) {
    this._service.addUser(user).subscribe(
      role => this._router.navigate(['/user'])
    );
    
  }

  constructor(private _service:UserService, private _router: Router) { }

  ngOnInit() {
  }

}
