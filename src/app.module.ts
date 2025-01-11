import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { moviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [moviesService],
})
export class AppModule {}
