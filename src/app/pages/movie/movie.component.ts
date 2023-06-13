import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imagesSizes = IMAGES_SIZES;
  movieImages: MovieImages | null = null;
  //create a service
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}
  //when I go to the movie page(movie component) I will call this,read id from url
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
    });
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: string) {
    this.movieService.getMovieVideos(id).subscribe(movieVideosData => {
      this.movieVideos = movieVideosData;
    })
  }
  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    })
  }
}
