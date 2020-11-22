package csci201.edu.usc.ClubSC.domain;

import javax.persistence.*;
import java.util.*;

@Entity
public class Follow {
    public Long student_id;
    public Long club_id;
    public Follow(Long s, Long c)
    {
        student_id = s;
        club_id = c;
    }
}