import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre:string = 'peter'
  public age:number = 18;

  get capitalizeName():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.nombre} - ${this.age}`;
  }

  changeHero():void{
    this.nombre = "thor";
  }

  changeAge(){
    this.age = 25;
  }

  resetForm():void{
    this.nombre = 'peter';
    this.age = 18;
  }
}
