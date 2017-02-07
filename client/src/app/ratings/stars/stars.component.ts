import { Component, Input } from '@angular/core';

@Component({
  selector: 'ratings',
  template: `<div class="stars">
    <h4>Ratings</h4>
    <div class="rate" *ngFor="let i of numbers">
       <img class="imgStar" *ngIf="i<=rate-1" src="../../../assets/star_PNG1597.png">
       <img class="imgStar" *ngIf="i>rate-1" src="../../../assets/blackStar.png">
    </div>
    </div>`,
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  @Input() public rate:number;
  numbers = Array(5).fill("").map((x,i)=>i);
}
