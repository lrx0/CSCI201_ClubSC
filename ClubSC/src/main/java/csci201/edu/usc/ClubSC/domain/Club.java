package csci201.edu.usc.ClubSC.domain;

import javax.persistence.*;
import java.util.*;

@Entity
public class Club {
	@Id
	@Column(nullable = false, unique = true)
	private Long club_id;
	@Column(nullable = false, unique = true)
	private String username;
	
	
	@ManyToMany(mappedBy = "followedClubs")
	private Set<Student> followerStudents;

	public Club() {
		
	}
	
	public Club(Long club_id, String username) {
		super();
		this.club_id = club_id;
		this.username = username;
	}
	

	public Set<Student> getFollowerStudents() {
		return followerStudents;
	}
	public void setFollowerStudents(Set<Student> followerStudents) {
		this.followerStudents = followerStudents;
	}
	public Long getClub_id() {
		return club_id;
	}
	public void setClub_id(long club_id) {
		this.club_id = club_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
}
