import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RabbitmqService {
  messages: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  group: BehaviorSubject<String> = new BehaviorSubject("start");
  constructor() { 
  }
}