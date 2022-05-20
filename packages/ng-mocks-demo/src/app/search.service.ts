import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

type HttpBinGetResult = {
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(query: string) {
    return this.http.get<HttpBinGetResult>('https://httpbin.org/get', {
      params: {query}
    }).pipe(
      map(o => o.url)
    )
  }
}
