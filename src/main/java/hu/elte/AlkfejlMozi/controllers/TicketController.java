package hu.elte.AlkfejlMozi.controllers;

import hu.elte.AlkfejlMozi.entities.Projection;
import hu.elte.AlkfejlMozi.entities.Ticket;
import hu.elte.AlkfejlMozi.entities.User;
import hu.elte.AlkfejlMozi.repositories.TicketRepository;
import hu.elte.AlkfejlMozi.repositories.UserRepository;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProjectionRepository projectionRepository;
    
    @GetMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Ticket>> getAll() {
        Iterable<Ticket> tickets = ticketRepository.findAll();
        return ResponseEntity.ok(tickets);
    }
    
    @GetMapping("user/{id}")
    public ResponseEntity<Iterable<Ticket>> getByUser(@PathVariable Integer id) {
        Optional<User> oUser = userRepository.findById(id);
        if (!oUser.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(ticketRepository.findAllByUser(oUser.get()));
    }
    
    @GetMapping("projection/{id}")
    public ResponseEntity<Iterable<Ticket>> getByProjection(@PathVariable Integer id) {
        Optional<Projection> oProjection = projectionRepository.findById(id);
        if (!oProjection.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(ticketRepository.findAllByProjection(oProjection.get()));
    }
    
    @PostMapping("")
    @Secured({ "ROLE_ADMIN", "ROLE_USER" })
    public ResponseEntity<Ticket> post(@RequestBody Ticket ticket) {
        Iterable<Ticket> iTicket = ticketRepository.findAllByRowAndSeat(ticket.getRow(), ticket.getSeat());
        
        boolean reserved = false;
        for (Ticket t : iTicket) {
            if (ticket.getProjection().getId() == t.getProjection().getId()) {
                reserved = true;
            }
        }
        
        if (reserved) {
            return ResponseEntity.badRequest().build();
        }
        ticket.setId(null);
        return ResponseEntity.ok(ticketRepository.save(ticket));
    }
    
    @GetMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Ticket> get(@PathVariable Integer id) {
        Optional<Ticket> oTicket = ticketRepository.findById(id);
        if (!oTicket.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oTicket.get());
    }
    
    @DeleteMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Ticket> oTicket = ticketRepository.findById(id);
        if (!oTicket.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        ticketRepository.delete(oTicket.get());
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("user/{id}/{ticketid}")
    public ResponseEntity deleteUserTicketByID(@PathVariable Integer id, @PathVariable Integer ticketid) {
        Optional<Ticket> oTicket = ticketRepository.findById(ticketid);
        if (!oTicket.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        else{
            Ticket ticket = oTicket.get();
            if(ticket.getUser().getId().equals(id)){
                ticketRepository.delete(ticket);
                return ResponseEntity.ok().build();
            }
            else{
                return ResponseEntity.status(401).build();
            }
        }
    }
}
