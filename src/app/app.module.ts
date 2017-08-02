import { Config } from './config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProfileComponent,
    SearchComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
