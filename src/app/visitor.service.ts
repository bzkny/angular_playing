import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VisitorService {

  constructor() { }

  visitors = [
    'new', 'frequent', 'accidental'
  ];

  vistorTypes() {
    return 'hello visitor!';
  }

}
