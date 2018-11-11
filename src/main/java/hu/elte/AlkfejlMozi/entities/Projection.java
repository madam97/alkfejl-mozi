package hu.elte.AlkfejlMozi.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Projection implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @JoinColumn
    @ManyToOne
    private Room room;
    
    @JoinColumn
    @ManyToOne
    private Movie movie;
    
    @JsonIgnore
    @OneToMany(mappedBy = "projection")
    private List<Ticket> tickets;
    
    @Column
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date time;
    
    @Column
    private Boolean is3d;
    
    @Column
    @NotNull
    private Integer price;
}
