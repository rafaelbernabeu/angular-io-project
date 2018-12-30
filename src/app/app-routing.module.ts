import { TelefoneFormComponent } from './telefone/telefone-form/telefone-form.component';
import { TelefoneComponent } from './telefone/telefone.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// My imports
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role/role-form/role-form.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent },
  { path: 'telefone', component: TelefoneComponent },
  { path: 'role-form', component: RoleFormComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'telefone-form', component: TelefoneFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
