import { TelefoneComponent } from './telefone/telefone.component';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

// External imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// My imports
import { RoleService } from './role.service';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RoleFormComponent } from './role-form/role-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';
import { TelefoneListComponent } from './telefone-list/telefone-list.component';
import { TelefoneFormComponent } from './telefone-form/telefone-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoleComponent,
    TelefoneComponent,
    RoleListComponent,
    UserListComponent,
    RoleFormComponent,
    UserFormComponent,
    TelefoneListComponent,
    TelefoneFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

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
