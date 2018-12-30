import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// My imports
import { TelefoneComponent } from './telefone.component';
import { TelefoneFormComponent } from './telefone-form/telefone-form.component';
import { TelefoneListComponent } from './telefone-list/telefone-list.component';

const routes: Routes = [
  {path: '', component: TelefoneComponent,
     children : [
      { path: 'telefone-form', component: TelefoneFormComponent },
      { path: 'telefone-list', component: TelefoneListComponent },
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class TelefoneRoutingModule { }
