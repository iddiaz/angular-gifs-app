import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = 'P88sYnaTcNSBWVQPiloP6uBwbLkJt4sg';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados :Gif[] = [];

  get historial(){
    
    return [...this._historial];
  }
  
  constructor( private http: HttpClient ) { 
    
      this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
      this.resultados= JSON.parse( localStorage.getItem('resultados')! ) || [];
      
    // if ( localStorage.getItem('hisorial') ) {
    //   this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    // }

  }


   buscarGifs( query: string){
  // async buscarGifs( query: string){ op2

    query = query.trim().toLowerCase();
    
    if( !this._historial.includes( query ) ){
      
      this._historial.unshift( query );

      localStorage.setItem('historial', JSON.stringify( this._historial ) );

    }

    this._historial = this._historial.splice(0,10);
    console.log(this._historial);
  

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=P88sYnaTcNSBWVQPiloP6uBwbLkJt4sg&limit=10&q=Goku')
    //   .then( resp => {
    //     resp.json().then( data => { console.log('data', data) })
    //   }) op 1 

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=P88sYnaTcNSBWVQPiloP6uBwbLkJt4sg&limit=10&q=Goku');
    // const data = await resp.json();
    // console.log(data) op2

    const params = new HttpParams()
        .set('api_key', this.apikey )
        .set('limit', '10' )
        .set('q', query);

        console.log(params.toString())

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params } )
      .subscribe( (resp ) => {
        // console.log(resp.data )
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados ) );

      })




  
  }



}

