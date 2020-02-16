import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BaseRestService<T> extends BaseService {

  constructor(protected http: HttpClient, endpointName: string) { 
    super(http, endpointName);
  }

  public fetchAll(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }
}