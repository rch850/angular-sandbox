import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor() { }

  sum(a: number, b: number): number {
    return a + b;
  }
}
