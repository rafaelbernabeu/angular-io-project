import { TelefoneFormComponent } from './telefone/telefone-form/telefone-form.component';
import { TelefoneComponent } from './telefone/telefone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';

// My imports
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role/role-form/role-form.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'telefone', pathMatch: 'full' },
  { path: 'user',
        loadChildren: './user/user.module#UserModule'
  },
  { path: 'role', component: RoleComponent },
  { path: 'telefone', component: TelefoneComponent },
  { path: 'role-form', component: RoleFormComponent },
  { path: 'telefone-form', component: TelefoneFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
