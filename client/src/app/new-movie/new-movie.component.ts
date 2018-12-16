import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../classes/movie';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor(
    private movieService : MovieService
  ) { }

  ngOnInit() {}

  private onSave(movie: Movie){
    this.movieService.addMovie(movie);
  }

}
