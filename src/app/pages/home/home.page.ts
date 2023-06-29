import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  //inyectar servicio
  constructor(private rickAndMortySvc: RickAndMortyService) { }


  ngOnInit() {
    this.params.page = 0; //comienza en cero la pagina
    this.getCharacters() //al cero le suma 1 y es pagina 1
  }

  //Obtener personajes
  getCharacters(event?: any){ 
    this.params.page += 1;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({

      next:(res:any) => {
        this.characters.push(...res.results)//aca dentro guardo los personajes (express opereitor ...)
        //results (lo obtiene desde la api (Get all characters))
        console.log(this.characters); //veo que me devuelva en el (inspeccionar(console)navegador) los personajes
       
        if(event) event.target.complete(); //se crea porque al principio solo me dejaba cargar 40 personajes nomas

      },
      error:(error:any) => {
        if(event) event.target.complete();

      },
    })
  }

    //Filtrar personajes por nombres
    searchCharacters(){ 
      this.params.page = 1;
  
      this.rickAndMortySvc.getCharacters(this.params).subscribe({
  
        next:(res:any) => {

          this.characters = res.results

        },
        error:(error:any) => {
         
  
        },
      })
    }
}
