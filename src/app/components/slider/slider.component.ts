import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Item } from '../item/item';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('1s')]),
    ])
  ]
})
export class SliderComponent {
  @Input() items: Item[] = [];
  @Input() isBanner: boolean = false;
  currenSlideIndex: number = 0;
  readonly imageSizes = IMAGES_SIZES;

  ngOnInit(): void{
    if (!this.isBanner) {
      setInterval(() => {
        this.currenSlideIndex = ++this.currenSlideIndex % this.items.length;
      }, 5000);
    }
    
  }

}
