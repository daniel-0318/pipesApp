import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  mayusc:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(){
    this.mayusc = !this.mayusc;
  }

}
