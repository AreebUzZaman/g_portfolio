import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../carousel/carousel.component';

// import { CarouselComponent } from './carousel/carousel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule,MatListModule,MatGridListModule,CommonModule,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00001.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00002.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00003.jpg',
      imageAlt: 'nature3',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00004.jpg',
      imageAlt: 'nature4',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00005.jpg',
      imageAlt: 'nature5',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00006.jpg',
      imageAlt: 'nature6',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00007.jpg',
      imageAlt: 'nature7',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00008.jpg',
      imageAlt: 'nature8',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00009.jpg',
      imageAlt: 'nature1',
    }
    
  ]
  id:any='';
  accordion(ids:any)
  {
    if(this.id == ids)
    {
      this.id='';
    }
    else
    {
      this.id=ids;
    }
    
  }
  
}