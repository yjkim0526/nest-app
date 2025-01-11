import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class moviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getOneMovie(id: number): Movie {
    return this.movies.find((movie) => movie.id === id);
  }
}
