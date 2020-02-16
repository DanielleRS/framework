import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns/albuns.component';
import { PostagensComponent } from './postagens/postagens.component';
import { TodosComponent } from './todos/todos.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'albuns', component: AlbunsComponent },
  { path: 'postagens', component: PostagensComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'albuns' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
