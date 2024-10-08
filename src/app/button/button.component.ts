import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = 'Button'; // Tekst dugmeta
  @Input() color: string = '#b77a37'; // Boja pozadine
  @Input() hoverColor: string = '#9b6530'; // Boja na hover
  @Input() textColor: string = 'white'; // Boja teksta
  @Input() padding: string = '18px 30px'; // Padding dugmeta
  @Input() fontSize: string = '15px'; // Veličina fonta
  @Input() routerLink: string = ''; // Ruta na koju treba da ide
  @Input() type: 'button' | 'submit' | 'router' = 'button'; // Tip dugmeta: `button`, `submit` ili `router`

  @Output() clickAction = new EventEmitter<void>(); // Definiši događaj kada dugme nije router ili submit

  constructor(private router: Router) {}

  // Funkcija koja se poziva na klik dugmeta
  handleClick(event: Event) {
    if (this.type === 'router' && this.routerLink) {
      // Ako je tip `router` i ruta je definisana, koristi router navigaciju
      this.router.navigate([this.routerLink]);
    } else if (this.type === 'submit') {
      // Ako je tip `submit`, emituje submit događaj
      console.log('Submit event emitted');
      this.clickAction.emit(); // Emituj događaj submit-a
    } else {
      // Za tip `button`, samo emituj clickAction događaj
      this.clickAction.emit();
    }
  }
}
