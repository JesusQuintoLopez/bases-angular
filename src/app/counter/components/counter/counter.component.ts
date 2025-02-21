import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
  <h4>count: {{counter}}</h4>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {

  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter+=value;
  }
  reset(){
    this.counter = 10;
  }
}