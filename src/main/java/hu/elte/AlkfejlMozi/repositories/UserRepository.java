package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository a User entitásnak
 * 
 * @author Mézes Ádám
 */
public interface UserRepository extends CrudRepository<User, Integer> {
    public Optional<User> findByName(String name);
}
