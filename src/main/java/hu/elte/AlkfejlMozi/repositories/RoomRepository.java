package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.Room;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<Room, Integer> {
    
}
