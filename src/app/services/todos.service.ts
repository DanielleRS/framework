import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Todos } from '../models/todos';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseRestService } from './base-rest.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService extends BaseRestService<Todos>{

  constructor(public http: HttpClient) {
    super(http, "todos");
  }
}
