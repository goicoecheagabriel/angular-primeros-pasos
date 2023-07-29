import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button pButton (click)="increaseBy(+1)" type="button">+1</button>
    <button class="mx-3" pButton (click)="reset()" type="button">reset</button>
    <button pButton (click)="increaseBy(-1)" type="button">-1</button>`
})
export class CounterComponent {

  public counter: number = 10

  public increaseBy( value: number = 10 ){
    this.counter += value;
  }

  public reset( value: number = 10 ){
    this.counter = value;
  }

}

