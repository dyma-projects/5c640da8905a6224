import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() plusEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() minusEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input('compteur') counter: number;

  constructor() { }

  ngOnInit() {
  }

  plus() {
    this.plusEvent.emit();
  }

  minus() {
    this.minusEvent.emit();
  }


}
