import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './components/folders/folders.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //after will implements for all the tabs will do here specific component-path for each tab
  { path: 'folders', component: FoldersComponent },
  { path: '', redirectTo: '/folders', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
