import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'Fernando'
  genero: string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string [] = [
    "Maria", "Pedro", "juan"
  ];
  clientesMapa = {
    '=0': "no tenemos ningún cliente esperando",
    '=1': "tenemos un cliente esperando",
    '=2': "tenemos 2 clientes esperando",
    'other': "tenemos # clientes esperando",
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){

    this.nombre = 'Melissa';
    this.genero = 'femenino';

  }

  borrarCliente(){

    this.clientes.pop();

  }

  //keyValue Pipe
  persona = {
    nombre: 'Daniel',
    edad: 28,
    direccion: 'Colombia -Valle'

  }

  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Robin",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: false
    },
  ]
  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Tenemos data de promesa");
    }, 3500);
  });


}

