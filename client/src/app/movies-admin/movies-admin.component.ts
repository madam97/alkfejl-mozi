import { Component, OnInit } from '@angular/core';
import { Movie } from '../classes/movie';
import { MovieService } from '../services/movie.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-movies-admin',
  templateUrl: './movies-admin.component.html',
  styleUrls: ['./movies-admin.component.css']
})
export class MoviesAdminComponent implements OnInit {

  private movies: Movie[];
  private displayedColumns = ['title', 'description', 'length', 'rate'];

  constructor(private movieService: MovieService, private authService: AuthService) { }

  async ngOnInit() {
    this.movies = await this.movieService.getMovies();
  }

  async deleteMovie(id: number){
    await this.movieService.deleteMovie(id);
    this.movies = await this.movieService.getMovies();
  }
}
