package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.Ticket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, Integer> {

}