package csci201.edu.usc.ClubSC.domain;

import javax.persistence.*;
import java.util.*;

@Entity
public class Club {
	@Id
	@Column(nullable = false, unique = true)
	private Long clubid;
	@Column(nullable = false, unique = true)
	private String username;

	@Column(nullable = false, unique = false)
	private String description;


	
	@ManyToMany(mappedBy = "followedClubs")
	private Set<Student> followerStudents;

	public Club() {
		
	}
	
	public Club(Long club_id, String username) {
		super();
		this.clubid = club_id;
		this.username = username;
	}


	public Set<Student> getFollowerStudents() {
		return followerStudents;
	}
	public void setFollowerStudents(Set<Student> followerStudents) {
		this.followerStudents = followerStudents;
	}
	public Long getClub_id() {
		return clubid;
	}
	public void setClub_id(long club_id) {
		this.clubid = club_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDesc()
	{
		return description;
	}
	public void setDesc(String d)
	{
		this.description = d;
	}
}
