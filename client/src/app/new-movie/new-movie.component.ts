import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../classes/movie';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private movieService : MovieService
  ) { }

  ngOnInit() {}

  private onSave(movie: Movie){
    this.movieService.addMovie(movie);
  }

}
