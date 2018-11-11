package hu.elte.AlkfejlMozi.controllers;

import hu.elte.AlkfejlMozi.entities.Movie;
import hu.elte.AlkfejlMozi.repositories.MovieRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
public class MovieController {
    @Autowired
    private MovieRepository movieRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Movie>> getAll() {
        return ResponseEntity.ok(movieRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Movie> get(@PathVariable Integer id) {
        Optional<Movie> oMovie = movieRepository.findById(id);
        if (!oMovie.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oMovie.get());
    }
    
    @DeleteMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Movie> oMovie = movieRepository.findById(id);
        if (!oMovie.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        movieRepository.delete(oMovie.get());
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Movie> post(@RequestBody Movie movie) {
        Optional<Movie> oMovie = movieRepository.findByTitle(movie.getTitle());
        if (oMovie.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        //movie.setId(null);
        return ResponseEntity.ok(movieRepository.save(movie));
    }
    
    @PutMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Movie> put(@RequestBody Movie movie) {
        Optional<Movie> oMovie = movieRepository.findByTitle(movie.getTitle());
        if (!oMovie.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(movieRepository.save(movie));
    }
}
