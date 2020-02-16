import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../models/todos';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todos>;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todos$ = this.todosService.fetchAll();
  }

}
