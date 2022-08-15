import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { UserSearchComponent } from './components/user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: UserSearchComponent },
  { path: 'user/:id', component: UserDisplayComponent },
  // !TODO implement PageNotFound
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
