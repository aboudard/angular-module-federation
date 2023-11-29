import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  public getCore(): string {
    return 'this is the core service';
  }

}
