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

  async ngOnInit() {
    this._movies = await this._moviesService.getMovies();
  }

}
