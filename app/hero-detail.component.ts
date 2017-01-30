import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero" class="details">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles: [`
    .details {
      width: 60%;
      float: left;
      text-align: center;
      margin-top: 10%;
    }
  `]
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
