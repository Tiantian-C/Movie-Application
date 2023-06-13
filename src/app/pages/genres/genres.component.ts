import { Component } from '@angular/core';
import { Genre } from '../../models/genre';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
  genres: Genre[] = [];

  constructor(private movieService: MoviesService) { }
  
  ngOnInit(): void{
    this.movieService.getMoviesGenres().subscribe(genresData => {
      this.genres = genresData;
    })
  }
}
