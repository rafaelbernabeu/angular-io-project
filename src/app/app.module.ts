import { TelefoneComponent } from './telefone/telefone.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// External imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// My imports
import { RoleService } from './role.service';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { AppRoutingModule } from './app-routing.module';
import { RoleListComponent } from './role/role-list/role-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoleFormComponent } from './role/role-form/role-form.component';
import { UserService } from './user/user.service';
import { TelefoneListComponent } from './telefone/telefone-list/telefone-list.component';
import { TelefoneFormComponent } from './telefone/telefone-form/telefone-form.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    TelefoneComponent,
    RoleListComponent,
    RoleFormComponent,
    TelefoneListComponent,
    TelefoneFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [RoleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
