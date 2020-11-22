package csci201.edu.usc.ClubSC.domain;

import javax.persistence.*;
import java.util.*;
import java.util.Date; 
import java.util.Calendar; 
@Entity
public class Follow {
	@Id
	@Column(nullable = false, unique = true)
	private Long follow_id;
	@Column(nullable = false, unique = false)
	public Long studentid;
	@Column(nullable = false, unique = false)
	public Long clubid;
	public Follow() {
	follow_id = System.currentTimeMillis();
    studentid = (long) 0;
    clubid = (long) 0;}
    public Follow(Long s, Long c)
    {
    	follow_id = System.currentTimeMillis();
        studentid = s;
        clubid = c;
    }
}