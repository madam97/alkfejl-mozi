import { Component, OnInit } from '@angular/core';
import { Movie } from '../classes/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _movies: Movie[];

  constructor(
    private _moviesService: MovieService
  ) { }

  ngOnInit() {
    this._movies = this._moviesService.getLastMovies(6);
  }

}
