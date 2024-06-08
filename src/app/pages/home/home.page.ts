import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonImg, IonFabList, IonIcon, IonFabButton, IonFab } from '@ionic/angular/standalone';
import { ImgPaths } from 'src/app/models/img-paths';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { AudioPaths } from 'src/app/models/audio-paths';

type Tematicas = 'numeros' | 'animales' | 'colores';
type Idiomas = 'español' | 'ingles' | 'portugues';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonIcon, IonFabList, IonImg, IonItem, IonLabel, IonCol, IonRow, 
    IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule
  ],
})
export class HomePage {
  private authServ:AuthService = inject(AuthService);
  private router:Router = inject(Router);
  
  private _tematicaSelecta:Tematicas = 'numeros';
  private _idiomaSelecto:Idiomas = 'español';
  
  currentAudio: string = '';
  audio = new Audio();

  imgPaths:ImgPaths = {
    numeros: [
      '../../../assets/imagenes/numeros/1.png',
      '../../../assets/imagenes/numeros/2.png',
      '../../../assets/imagenes/numeros/3.png',
      '../../../assets/imagenes/numeros/4.png',
      '../../../assets/imagenes/numeros/5.png',
      '../../../assets/imagenes/numeros/6.png',
    ],
    animales: [
      '../../../assets/imagenes/animales/perro.png',
      '../../../assets/imagenes/animales/jirafa.png',
      '../../../assets/imagenes/animales/gato.png',
      '../../../assets/imagenes/animales/iguana.png',
      '../../../assets/imagenes/animales/buho.png',
      '../../../assets/imagenes/animales/leon.png',
    ],
    colores: [
      '../../../assets/imagenes/colores/rojo.png',
      '../../../assets/imagenes/colores/azul.png',
      '../../../assets/imagenes/colores/verde.png',
      '../../../assets/imagenes/colores/rosa.png',
      '../../../assets/imagenes/colores/naranja.png',
      '../../../assets/imagenes/colores/amarillo.png',
    ],
  }
  audioPaths: AudioPaths = {
    español:{
      colores:[
        '../../../assets/audios/español/colores/rojo.mp3',
        '../../../assets/audios/español/colores/azul.mp3',
        '../../../assets/audios/español/colores/verde.mp3',
        '../../../assets/audios/español/colores/rosa.mp3',
        '../../../assets/audios/español/colores/naranja.mp3',
        '../../../assets/audios/español/colores/amarillo.mp3',
      ],
      numeros: [
        '../../../assets/audios/español/numeros/1.mp3',
        '../../../assets/audios/español/numeros/2.mp3',
        '../../../assets/audios/español/numeros/3.mp3',
        '../../../assets/audios/español/numeros/4.mp3',
        '../../../assets/audios/español/numeros/5.mp3',
        '../../../assets/audios/español/numeros/6.mp3',
      ],
      animales:[
        '../../../assets/audios/español/animales/perro.mp4',
        '../../../assets/audios/español/animales/jirafa.mp4',
        '../../../assets/audios/español/animales/gato.mp4',
        '../../../assets/audios/español/animales/iguana.mp4',
        '../../../assets/audios/español/animales/buho.mp4',
        '../../../assets/audios/español/animales/leon.mp4',
      ]
    },
    ingles:{
      colores:[
        '../../../assets/audios/ingles/colores/red.mp3',
        '../../../assets/audios/ingles/colores/blue.mp3',
        '../../../assets/audios/ingles/colores/green.mp3',
        '../../../assets/audios/ingles/colores/pink.mp3',
        '../../../assets/audios/ingles/colores/orange.mp3',
        '../../../assets/audios/ingles/colores/yellow.mp3',
      ],
      numeros: [
        '../../../assets/audios/ingles/numeros/one.mp3',
        '../../../assets/audios/ingles/numeros/two.mp3',
        '../../../assets/audios/ingles/numeros/three.mp3',
        '../../../assets/audios/ingles/numeros/four.mp3',
        '../../../assets/audios/ingles/numeros/five.mp3',
        '../../../assets/audios/ingles/numeros/six.mp3',
      ],
      animales:[
        '../../../assets/audios/ingles/animales/dog.mp4',
        '../../../assets/audios/ingles/animales/giraffe.mp4',
        '../../../assets/audios/ingles/animales/cat.mp4',
        '../../../assets/audios/ingles/animales/iguana.mp4',
        '../../../assets/audios/ingles/animales/owl.mp4',
        '../../../assets/audios/ingles/animales/lion.mp4',
      ]
    },
    portugues:{
      colores:[
        '../../../assets/audios/portugues/colores/vermelho.mp3',
        '../../../assets/audios/portugues/colores/azul.mp3',
        '../../../assets/audios/portugues/colores/verd.mp3',
        '../../../assets/audios/portugues/colores/grosa.mp3',
        '../../../assets/audios/portugues/colores/laranje.mp3',
        '../../../assets/audios/portugues/colores/amarelo.mp3',
      ],
      numeros: [
        '../../../assets/audios/portugues/numeros/um.mp3',
        '../../../assets/audios/portugues/numeros/dois.mp3',
        '../../../assets/audios/portugues/numeros/treis.mp3',
        '../../../assets/audios/portugues/numeros/quatro.mp3',
        '../../../assets/audios/portugues/numeros/cinco.mp3',
        '../../../assets/audios/portugues/numeros/seis.mp3',
      ],
      animales:[
        '../../../assets/audios/portugues/animales/cau.mp4',
        '../../../assets/audios/portugues/animales/girafa.mp4',
        '../../../assets/audios/portugues/animales/gat.mp4',
        '../../../assets/audios/portugues/animales/iguana.mp4',
        '../../../assets/audios/portugues/animales/coruja.mp4',
        '../../../assets/audios/portugues/animales/liaon.mp4',
      ]
    },
  }

  //#region prop. Tematicas
  get tematicaSelecta(): Tematicas {
    return this._tematicaSelecta;
  }

  set tematicaSelecta(value: Tematicas) {
    this._tematicaSelecta = value;
  }
  
  get selectedImages(): string[] {
    return this.imgPaths[this.tematicaSelecta];
  }
  //#endregion

  //#region prop. Idiomas
  get idiomaSelecto(): Idiomas {
    return this._idiomaSelecto;
  }
  
  set idiomaSelecto(value: Idiomas) {
    this._idiomaSelecto = value;
  }
  
  get selectedIdioma(): string[] {
    return this.audioPaths[this.idiomaSelecto][this.tematicaSelecta];
  }
  //#endregion

  seteatIdioma(idioma:Idiomas){
    this.idiomaSelecto = idioma;
    console.log(this.idiomaSelecto);
  }

  seteatTematica(tematica:Tematicas){
    this.tematicaSelecta = tematica
    console.log(this.tematicaSelecta);
  }

  async play(index:number){
    this.audio.src = this.selectedIdioma[index];
    await this.audio.play();
  }
  cerrarSesion(){
    this.authServ.singOutUser().then(() => this.router.navigateByUrl('/login'));
  }

}
