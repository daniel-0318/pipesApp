import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'Daniel';
  nombreUpper: string = 'DANIEL';
  nombreCompleto: string = 'daniel ramirez';

  fecha: Date = new Date();

}
