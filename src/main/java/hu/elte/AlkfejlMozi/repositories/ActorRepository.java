package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.Actor;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActorRepository extends CrudRepository<Actor, Integer> {
    public Optional<Actor> findByName(String name);  
}
