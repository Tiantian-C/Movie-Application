import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  @Input() items: Movie[] = [];
  currenSlideIndex: number = 0;

  ngOnInit(): void{
    setInterval(() => {
      this.currenSlideIndex = ++this.currenSlideIndex % this.items.length;
    }, 5000)
  }

}
