import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class CharacterDetailPage implements OnInit {
  characterId: string = '';
  character = null as any; //info del personaje
  episodes: any[] = []; //aca guardamos los episodios

  constructor(private actRoute: ActivatedRoute, private rickAndMortySvc: RickAndMortyService) {
    
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string 
    console.log(this.characterId)

   }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.getCharacter() //llamar a getCharacter cada vez que el usuario entra a esta pagina
  }

  //Obtener personajes
  getCharacter(){ 
    this.rickAndMortySvc.getCharacterById(this.characterId).subscribe({ //recibo el id del personaje

      next:(res:any) => {
        //console.log(res); //respuesta que devuelve este api
        
        this.character = res; //character igual a respuesta que nos devuelve el api
        this.getEpisodes() 

      },
      error:(error:any) => {
        
      },
    })
  }

  getEpisodes(){ 
    for (let url of this.character.episode){
      this.rickAndMortySvc.getByUrl(url).subscribe({ //recibo el id del personaje

        next:(res:any) => {
          console.log(res); //respuesta que devuelve este api
          this.episodes.push(res);
          
        },
        error:(error:any) => {
          
        },
      })
    }
    
  }

}
