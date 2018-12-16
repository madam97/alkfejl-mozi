package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.Movie;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {
    public Optional<Movie> findById(Integer id);
    public Optional<Movie> findByTitle(String name);  
}
