package hu.elte.AlkfejlMozi.controllers;

import hu.elte.AlkfejlMozi.entities.Ticket;
import hu.elte.AlkfejlMozi.repositories.TicketRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketRepository ticketRepository;
    
    @GetMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Ticket>> getAll() {
        Iterable<Ticket> tickets = ticketRepository.findAll();
        return ResponseEntity.ok(tickets);
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
}
