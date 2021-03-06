import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class Configuration {
  public server = "http://jsonplaceholder.typicode.com/"
  public apiUrl = "";
  public serverWithApiUrl = this.server + this.apiUrl;
}

export class BaseService {

  protected actionUrl: string;
  protected configuration: Configuration;

  constructor(protected http: HttpClient, endpointName: string) {
      this.actionUrl = new Configuration().serverWithApiUrl + `${endpointName}/`;
  }

  protected getRequestUrl(): string {
    return this.actionUrl;
  }

  protected getHttpHeaders(): any {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
  }
}
