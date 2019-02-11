import { Component } from '@angular/core';
import { VisitorService } from './visitor.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <h1>Three types of bees:</h1>
  <ul [class.list_reset]="listClass">
    <li [ngClass]="listClasses">{{ beeObject.wings}}</li>
    <li>{{ beeObject.color}}</li>
    <li>{{ beeObject.role}}</li>
    <li *ngFor="let arr of beeRoles">{{ arr }}</li> 
    <li *ngIf="beeRoles">{{beeRoles.length}} roles</li> 
    <li *ngIf="beeRoles != 'busy'">Bees are not busy</li> 
    <li *ngIf="beeRoles; then birdObject else flowersObject">Birds and bees and flowers and the trees</li> 
    <li class="buttonClass"><button [disabled]="buttonStatus">Disabled button</button></li>
    <li class="buttonClass"><button (click)="anEvent($event)">Button Event Tester</button></li>
  </ul>

  <ng-template #birdObject>Many types of Birds</ng-template>

  <img [@animateMe]='state' (click)="grow()" src="{{ singleBee }}">
  <img [src]="beasBees">
  <img bind-src="beasBees">

  <footer>{{ someProperty }}</footer>
  `,
  // styleUrls: ['./app.component.scss']
  styles: [`

  .list_reset {
    list-style-type: simp-chinese-informal;
    color: #2E2E2E
  }

  .list--firstLine {
    color: gold
  }

  button {
    background-color: gold;
    border: none;
  }

  `],
  animations: [
    trigger('animateMe', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('med', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> med', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
        style({opacity: 0, transform: 'translateY(0)', offset: 1}),
      ]))),
    ]),
  ]

})

export class AppComponent {
  title = `Bea's Angular project`;

  beeObject = {
    wings: true,
    color: 'yellow and black',
    role: ['queen', ' drones', ' workers']
  };

  beeRoles = ['queen', ' drones', ' workers'];

  flowers = ['rose', 'hydrangea', 'milkweed'];
  
  beasBees = '../assets/bees/beea_queen_worker_drone.jpeg';
  singleBee = '../assets/bees/bee_gold.jpeg';

  buttonStatus = false;

  anEvent(event) {
    console.log(event);
  }
  
  listClass = true;
  listClasses = {
    'list_reset': true,
    'list--firstLine': true
  }

  buttonClass = 'button'

  state: string = 'small'

  constructor(private visitorService:VisitorService){

  }
  someProperty:string = '';

  ngOnInit() {
    console.log(this.visitorService.visitors);

    this.someProperty = this.visitorService.vistorTypes();
  }


  grow() {
    this.state = (this.state === 'small' ? 'med' : 'small');
  }

}
