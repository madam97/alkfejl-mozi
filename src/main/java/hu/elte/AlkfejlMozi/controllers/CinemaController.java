/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.AlkfejlMozi.controllers;

import hu.elte.AlkfejlMozi.entities.Cinema;
import hu.elte.AlkfejlMozi.repositories.CinemaRepository;
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
@RequestMapping("/cinemas")
public class CinemaController {
    @Autowired
    private CinemaRepository cinemaRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Cinema>> getAll() {
        return ResponseEntity.ok(cinemaRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Cinema> get(@PathVariable Integer id) {
        Optional<Cinema> oCinema = cinemaRepository.findById(id);
        if (!oCinema.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oCinema.get());
    }
    
    @DeleteMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Cinema> oCinema = cinemaRepository.findById(id);
        if (!oCinema.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        cinemaRepository.delete(oCinema.get());
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Cinema> post(@RequestBody Cinema cinema) {
        Optional<Cinema> oCinema = cinemaRepository.findById(cinema.getId());
        if (oCinema.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        cinema.setId(null);
        return ResponseEntity.ok(cinemaRepository.save(cinema));
    }
    
    @PutMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Cinema> put(@RequestBody Cinema cinema) {
        Optional<Cinema> oCinema = cinemaRepository.findById(cinema.getId());
        if (!oCinema.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(cinemaRepository.save(cinema));
    }
}
