import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../classes/movie';
import { Projection } from '../classes/projection';
import { MovieService } from '../services/movie.service';
import { ProjectionService } from '../services/projection.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.css']
})
export class OneMovieComponent implements OnInit {

  private _movie : Movie;
  private _projections: Projection[];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,

    private _moviesService: MovieService,
    private _projectionService: ProjectionService
  ) { }

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this._movie = await this._moviesService.getMovie(id);

    let allProjections : Projection[] = await this._projectionService.getProjections();

    for (let key in allProjections) {
      if (allProjections[key].movie.id === this._movie.id) {
        if (this._projections === undefined) {
          this._projections = [allProjections[key]];
        } else {
          this._projections.push(allProjections[key]);
        }
      }
    }
  }
}
