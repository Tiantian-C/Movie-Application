import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.movieService.getMovies('popular', 20).subscribe((movies) => {
      this.movies = movies;
    });
  }
}
