import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookComponent } from './components/book/add-book/add-book.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { AddLibraryComponent } from './components/library/add-library/add-library.component';
import { LibraryListComponent } from './components/library/library-list/library-list.component';
import { LibraryDetailsComponent } from './components/library/library-details/library-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'library', component: LibraryListComponent },
  { path: 'library/:id', component: LibraryDetailsComponent },
  { path: 'library/add', component: AddLibraryComponent },
  { path: 'book', component: BookListComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'book/add', component: AddBookComponent },
  { path: 'book/library/:id', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
