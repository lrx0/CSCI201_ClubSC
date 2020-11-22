package csci201.edu.usc.ClubSC.domain;

import javax.persistence.*;
import java.util.*;

@Entity
public class Follow {
    public String student_id;
    public String club_id;
    public Follow(String s, String c)
    {
        student_id = s;
        club_id = c;
    }
}