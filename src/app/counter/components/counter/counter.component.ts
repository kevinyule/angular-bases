import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})

export class CounterComponet {

  public counter: number =  0;

  constructor() { }

  ngOnInit() {
    this.counter = 10;
   }

   increaseBy():  void {
    this.counter++;
   }

   resetCounter(): void {
    this.counter = 0;
   }

   decreaseBy(): void {
    this.counter--;
   }
}
