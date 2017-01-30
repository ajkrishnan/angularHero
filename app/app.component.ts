import { Component } from '@angular/core';

import { Hero } from './hero';

// export class Hero {
//   id: number;
//   name: string;
// }

const HEROES: Hero[] = [
  { id: 1, name: 'WOLVERINE' },
  { id: 2, name: 'DEADPOOL' },
  { id: 3, name: 'BATMAN' },
  { id: 4, name: 'SUPERMAN' },
  { id: 5, name: 'SPIDERMAN' },
  { id: 6, name: 'JEAN' },
  { id: 7, name: 'IRONMAN' },
  { id: 8, name: 'SHAKTIMAN' },
  { id: 9, name: 'KRISH' },
  { id: 10, name: 'DINGAN' }
];

@Component({
  selector: 'my-app',
  template:  `
    <h1 class="alignText">{{title}}</h1>
    <h2 class="alignText">My Heroes actually rockzzz....</h2>
    <ul class="heroes">
      <li *ngFor="let person of heroes"
        [class.selected]="person === selectedHero"
        (click)="onSelect(person)">
        <span class="badge">{{person.id}}</span> {{person.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles: [`
  	.alignText {
  		text-align: center;
  	}
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      list-style-type: none;
	    padding: 0;
	    float: left;
	    width: 30%;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .details {
    	width: 60%;
	    float: left;
	    text-align: center;
	    margin-top: 10%;
    }
  `]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(person: Hero): void {
    this.selectedHero = person;
  }
}