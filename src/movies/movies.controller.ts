import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { moviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: moviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `Search title : ${searchingYear}`;
  }

  @Get('/:id')
  getOneMovie(@Param('id') id: number) {
    return `This is movie with id: ${id}`;
  }

  @Post()
  addMovie(@Body() movieData) {
    console.log('movieData: ' + JSON.stringify(movieData));
    // return 'This adds a new movie';
    return movieData;
  }

  @Delete('/:id')
  delMovie(@Param('id') id: number) {
    return `This deletes movie with id: ${id}`;
  }

  @Patch('/:id')
  updateMovie(@Param('id') id: number, @Body() updateData) {
    // return `This updates movie with id: ${id}`;
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
