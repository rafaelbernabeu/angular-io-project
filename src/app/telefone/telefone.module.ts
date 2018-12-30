import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TelefoneRoutingModule } from './telefone-routing.module';
import { TelefoneFormComponent } from './telefone-form/telefone-form.component';
import { TelefoneListComponent } from './telefone-list/telefone-list.component';
import { TelefoneComponent } from './telefone.component';
import { TelefoneService } from './telefone.service';

@NgModule({
  declarations: [
    TelefoneComponent,
    TelefoneFormComponent,
    TelefoneListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TelefoneRoutingModule
  ],
  exports: [
    TelefoneComponent,
    TelefoneFormComponent,
    TelefoneListComponent
  ],
  providers: [
    TelefoneService
  ]
})
export class UserModule { }
