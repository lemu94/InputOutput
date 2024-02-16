import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css',
})
export class FruitComponent implements OnInit {
  @Input({ required: true }) Fruit!: fruit;
  @Output() DeleteF = new EventEmitter<fruit>();

  constructor() {}

  ngOnInit(): void {}
  DeleteFruit() {
    this.DeleteF.emit(this.Fruit);
  }
}
