package csci201.edu.usc.ClubSC.domain;

import java.util.Set;

import javax.persistence.*;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, updatable = false)
	private long student_id;
	@Column(nullable = false, unique = true)
	private String username;
	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
	
	@ManyToMany
	@JoinTable(name = "Follower", joinColumns = @JoinColumn(name = "student_id"), 
		inverseJoinColumns = @JoinColumn(name = "club_id"))
	private Set<Club> followedClubs;
	
	public Student() {
		
	}
	
	public Student(String username, String email, String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}
	
	public Set<Club> getFollowedClubs() {
		return followedClubs;
	}
	public void setFollowedClubs(Set<Club> followedClubs) {
		this.followedClubs = followedClubs;
	}
	public long getStudent_id() {
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
