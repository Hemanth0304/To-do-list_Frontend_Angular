import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [

  { path:'', redirectTo:'todo',pathMatch:'full'},
  { path:'todos', component: TodoListComponent},
  { path:'todo/:id', component: TodoDetailsComponent},
  { path:'add', component: AddTodoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
