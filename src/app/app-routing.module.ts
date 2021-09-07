import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchBooksComponent} from "./search-books/search-books.component";

const routes: Routes = [
  {path:'',redirectTo:'/book',pathMatch:'full'},
  {path:'book',component: SearchBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
