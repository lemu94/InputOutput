import { Component } from '@angular/core';
import { fruit } from './models/fruit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'InputOutput';
  Nom: string = '';
  Categorie: string = '';
  Fruits: fruit[] = [];
  constructor() {}

  Ajouter() {
    if (this.Nom == '' || this.Categorie == '') {
      alert('Champ(s) vide(s)');
    } else {
      this.Fruits.push({ nom: this.Nom, categorie: this.Categorie });
      this.Nom = '';
      this.Categorie = '';
    }
  }
}
