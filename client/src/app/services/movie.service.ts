import { Injectable } from '@angular/core';
import { Movie } from '../classes/movie'; 
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private route: string = "movies";

  constructor(
    private httpService: HttpService
  ) { }

  public getMovies() : Promise<Movie[]> {
    return this.httpService.get<Movie[]>(this.route);
  }

  public getMovie(id: number) : Promise<Movie> {
    return this.httpService.get<Movie>(this.route + "/" + id);
  }

  public addMovie(movie: Movie): void {
    this.httpService.post<Movie>(this.route, movie);
  }

  public getLastMovies(size: number): Promise<Movie[]>{
    return this.httpService.get<Movie[]>(this.route);
  }

}
