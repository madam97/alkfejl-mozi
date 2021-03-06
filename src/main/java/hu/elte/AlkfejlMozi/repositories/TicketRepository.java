package hu.elte.AlkfejlMozi.repositories;

import hu.elte.AlkfejlMozi.entities.Projection;
import hu.elte.AlkfejlMozi.entities.Ticket;
import hu.elte.AlkfejlMozi.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, Integer> {
    Iterable<Ticket> findAllByUser(User user);
    Iterable<Ticket> findAllByProjection(Projection projection);
    Iterable<Ticket> findAllByRowAndSeat(Integer row, Integer seat);
}