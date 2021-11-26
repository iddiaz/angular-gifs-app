import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //ViewChild busca en el html la referencia local
  @ViewChild('txtBuscar') txtBuscar! : ElementRef<HTMLInputElement>; // ! => not null asert operator 

  buscar(){
    
    const valor = this.txtBuscar.nativeElement.value;
    console.log( valor );

    this.txtBuscar.nativeElement.value = '';

  }

}
