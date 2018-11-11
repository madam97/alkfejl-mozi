package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.Projection;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectionRepository extends CrudRepository<Projection, Integer> {

}
