import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor( private gifsService: GifsService ) { }

  ngOnInit(): void {
  }
  //ViewChild busca en el html la referencia local
  @ViewChild('txtBuscar') txtBuscar! : ElementRef<HTMLInputElement>; // ! => not null asert operator 

  buscar(){
    
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0 ){
      return;
    }
    
    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';

  }

}
