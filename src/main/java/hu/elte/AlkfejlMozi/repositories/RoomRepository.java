package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.Room;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<Room, Integer> {
    public Optional<Room> findByName(String name);  
}
