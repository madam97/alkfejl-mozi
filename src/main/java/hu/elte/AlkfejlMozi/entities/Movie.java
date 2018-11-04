package hu.elte.AlkfejlMozi.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
public class Movie implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    @NotNull
    private String title;
    
    @Column
    @NotNull
    private String description;
    
    @Column
    @NotNull
    private Float rate;
    
    @Column
    @NotNull
    private Integer agelimit;
    
    @Column
    @NotNull
    @OneToMany(mappedBy = "projectionmovie")
    private List<Projection> projections;
}