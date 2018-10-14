package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.Cinema;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends CrudRepository<Cinema, Integer> {
    public Optional<Cinema> findByName(String name);  
}
