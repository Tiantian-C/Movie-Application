import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {

  movie: Movie | null = null;
  //create a service
  constructor(private route: ActivatedRoute,private movieService:MoviesService) {}
  //when I go to the movie page(movie component) I will call this,read id from url
  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe(movieData => {
      this.movie = movieData;
    })
  }
}
