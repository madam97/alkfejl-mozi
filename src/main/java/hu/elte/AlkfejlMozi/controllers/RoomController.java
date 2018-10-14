package hu.elte.AlkfejlMozi.controllers;

import hu.elte.AlkfejlMozi.entities.Room;
import hu.elte.AlkfejlMozi.repositories.RoomRepository;
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
@RequestMapping("/rooms")
public class RoomController {
    @Autowired
    private RoomRepository roomRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Room>> getAll() {
        return ResponseEntity.ok(roomRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Room> get(@PathVariable Integer id) {
        Optional<Room> oRoom = roomRepository.findById(id);
        if (!oRoom.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oRoom.get());
    }
    
    @DeleteMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Room> oRoom = roomRepository.findById(id);
        if (!oRoom.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        roomRepository.delete(oRoom.get());
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Room> post(@RequestBody Room room) {
        Optional<Room> oRoom = roomRepository.findById(room.getId());
        if (oRoom.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        room.setId(null);
        return ResponseEntity.ok(roomRepository.save(room));
    }
    
    @PutMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Room> put(@RequestBody Room room) {
        Optional<Room> oRoom = roomRepository.findById(room.getId());
        if (!oRoom.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(roomRepository.save(room));
    }
}
