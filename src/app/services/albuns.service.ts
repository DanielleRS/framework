import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Albuns } from '../models/albuns';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseRestService } from './base-rest.service';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService extends BaseRestService<Albuns>{

  constructor(public http: HttpClient) {
    super(http, "albums");
  }
}