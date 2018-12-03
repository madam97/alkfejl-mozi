
package hu.elte.AlkfejlMozi.controllers;

import hu.elte.AlkfejlMozi.entities.Projection;
import hu.elte.AlkfejlMozi.entities.User;
import hu.elte.AlkfejlMozi.repositories.ProjectionRepository;
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
@RequestMapping("/api/projections")
public class ProjectionController {
    @Autowired
    private ProjectionRepository projectionRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Projection>> getAll() {
        return ResponseEntity.ok(projectionRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Projection> get(@PathVariable Integer id) {
        Optional<Projection> oProjection = projectionRepository.findById(id);
        if (!oProjection.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oProjection.get());
    }
    
    /*@GetMapping("/{id}/tickets")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Iterable<User>> getUsers(@PathVariable Integer id) {
        Optional<Projection> oProjection = projectionRepository.findById(id);
        if (!oProjection.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oProjection.get().getUsers());
    }*/
    
    @DeleteMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Projection> oProjection = projectionRepository.findById(id);
        if (!oProjection.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        projectionRepository.delete(oProjection.get());
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Projection> post(@RequestBody Projection projection) {
        Optional<Projection> oProjection = projectionRepository.findById(projection.getId());
        if (oProjection.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        projection.setId(null);
        return ResponseEntity.ok(projectionRepository.save(projection));
    }
    
    @PutMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Projection> put(@RequestBody Projection projection) {
        Optional<Projection> oProjection = projectionRepository.findById(projection.getId());
        if (!oProjection.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(projectionRepository.save(projection));
    }
    
}
