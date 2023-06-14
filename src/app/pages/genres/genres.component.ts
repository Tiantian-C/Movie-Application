import { Component } from '@angular/core';
import { Genre } from '../../models/genre';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
  genres: Genre[] = [];
  tvShowGenres: Genre[] = [];
  constructor(
    private movieService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.movieService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });

    this.tvShowsService.getTvShowsGenres().subscribe((genresData) => {
      this.tvShowGenres = genresData;
    });
  }
}
