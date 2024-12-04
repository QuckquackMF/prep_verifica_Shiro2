import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  macchine: string[];
  constructor(){
    this.macchine = ["Ruspa", "Autocarro", "Gru", "Furgone"]
  }
}
