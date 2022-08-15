import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserDisplayInfoComponent } from './components/user-display/user-display-info/user-display-info.component';
import { UserDisplayReposComponent } from './components/user-display/user-display-repos/user-display-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    UserSearchComponent,
    UserDisplayInfoComponent,
    UserDisplayReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
