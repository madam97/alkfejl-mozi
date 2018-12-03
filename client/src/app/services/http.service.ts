import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options = {
  "headers": new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46YWRtaW4=', // admin:admin
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL = 'http://localhost:8080/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public get<T>(route): Promise<T> {
    return this.httpClient.get(this.URL + route, options)
      .toPromise() as Promise<T>;
  }

  public post<T>(route, body): Promise<T> {
    return this.httpClient.post(this.URL + route, body, options)
      .toPromise() as Promise<T>;
  }

  public put<T>(route, body): Promise<T> {
    return this.httpClient.put(this.URL + route, body, options)
      .toPromise() as Promise<T>;
  }

  public patch<T>(route, body): Promise<T> {
    return this.httpClient.patch(this.URL + route, body, options)
      .toPromise() as Promise<T>;
  }

  public delete<T>(route): Promise<T> {
    return this.httpClient.delete(this.URL + route, options)
      .toPromise() as Promise<T>;
  }
}