package hu.elte.AlkfejlMozi.controllers;

import hu.elte.AlkfejlMozi.entities.Actor;
import hu.elte.AlkfejlMozi.repositories.ActorRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/actors")
public class ActorController {
    @Autowired
    private ActorRepository actorRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Actor>> getAll() {
        return ResponseEntity.ok(actorRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Actor> get(@PathVariable Integer id) {
        Optional<Actor> oActor = actorRepository.findById(id);
        if (!oActor.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oActor.get());
    }
    
    @DeleteMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Actor> oActor = actorRepository.findById(id);
        if (!oActor.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        actorRepository.delete(oActor.get());
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Actor> post(@RequestBody Actor actor) {
        Optional<Actor> oActor = actorRepository.findById(actor.getId());
        if (oActor.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        actor.setId(null);
        return ResponseEntity.ok(actorRepository.save(actor));
    }
    
    @PutMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Actor> put(@RequestBody Actor actor) {
        Optional<Actor> oActor = actorRepository.findById(actor.getId());
        if (!oActor.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(actorRepository.save(actor));
    }
}
