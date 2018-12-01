import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../classes/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.css']
})
export class OneMovieComponent implements OnInit {

  private _movie : Movie;

  constructor(
    private route: ActivatedRoute,
    private _moviesService: MovieService
  ) { }

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this._movie = await this._moviesService.getMovie(id);
  }
}
