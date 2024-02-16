import { Component, Input } from '@angular/core';
import { fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input() Fruits: fruit[] = [];
  constructor() {}

  deletefruit(fruit: fruit) {
    this.Fruits = this.Fruits.filter((f) => f !== fruit);
  }
}
