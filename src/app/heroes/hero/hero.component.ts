import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:  string = 'ironman';
  public age:   number = 45;

  get capitalizedName(): string {
    return this.name.replace(/^\w/, (c) => c.toUpperCase());
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`
  }

  public changeName( value: string = 'spiderman' ):void{
    this.name = value;
  }

  public changeAge( value: number = 32 ): void{
    this.age = value;
  }

  public resetForm(){
    this.name = 'ironman';
    this.age = 45;
  }
}
