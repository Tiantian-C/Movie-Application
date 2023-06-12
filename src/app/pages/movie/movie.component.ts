import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  //create a service
  constructor(private route: ActivatedRoute) {}
  //when I go to the movie page(movie component) I will call this,read id for url
  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      console.log(id);
    });
  }
}
