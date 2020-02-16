import { Injectable } from '@angular/core';
import { Postagens } from '../models/postagens';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseRestService } from './base-rest.service';

@Injectable({
  providedIn: 'root'
})
export class PostagensService extends BaseRestService<Postagens> {

  constructor(public http: HttpClient) {
    super(http, "posts");
  }
}
