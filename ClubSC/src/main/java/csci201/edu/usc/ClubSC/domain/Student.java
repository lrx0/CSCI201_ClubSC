package csci201.edu.usc.ClubSC.domain;

import java.util.Set;

import javax.persistence.*;

@Entity
public class Student {
	@Id
	@Column(nullable = false, unique = true)
	private Long student_id;
	@Column(nullable = false, unique = true)
	private String username;
	
	@ManyToMany
	@JoinTable(name = "Follower", joinColumns = @JoinColumn(name = "student_id"), 
		inverseJoinColumns = @JoinColumn(name = "club_id"))
	private Set<Club> followedClubs;
	
	public Student() {
		
	}
	
	public Student(Long student_id, String username) {
		super();
		this.student_id = student_id;
		this.username = username;
	}
	
	public Set<Club> getFollowedClubs() {
		return followedClubs;
	}
	public void setFollowedClubs(Set<Club> followedClubs) {
		this.followedClubs = followedClubs;
	}
	public Long getStudent_id() {
		return student_id;
	}
	public void setStudent_id(long student_id) {
		this.student_id = student_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
}
