package hu.elte.AlkfejlMozi.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * Entitás osztály a felhasználók kezeléséhez
 * 
 * @author Mézes Ádám
 */

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    @Enumerated(EnumType.STRING)
    private Role role;
    
    @Column(unique=true)
    @NotNull
    private String name;
    
    @Column
    @NotNull
    private String pass;
    
    @Column
    @NotNull
    private Integer age;
    
    @JsonIgnore
    @ManyToMany(mappedBy = "users")
    private List<Projection> projections;
    
    public enum Role {
        ROLE_QUEST, ROLE_USER, ROLE_ADMIN
    }
}
