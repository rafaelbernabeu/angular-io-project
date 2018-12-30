import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// My imports
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role/role-form/role-form.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'role', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'telefone', loadChildren: './telefone/telefone.module#TelefoneModule' },
  { path: 'role', component: RoleComponent },
  { path: 'role-form', component: RoleFormComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
