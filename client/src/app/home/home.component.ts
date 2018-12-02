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
<<<<<<< HEAD
    this._movies = await this._moviesService.getMovies();
=======
    this._movies = await this._moviesService.getLastMovies(6);
>>>>>>> 4f15cb92b242c7efa56e343d06ddc8a3f5fb46fd
  }

}
