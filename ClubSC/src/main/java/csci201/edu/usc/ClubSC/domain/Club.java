package csci201.edu.usc.ClubSC.domain;

import javax.persistence.*;
import java.util.*;

@Entity
public class Club {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, updatable = false)
	private long club_id;
	@Column(nullable = false, unique = true)
	private String username;
	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
	private String description;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="club")
	private List<Announcement> announcements;
	
	@ManyToMany(mappedBy = "followedClubs")
	private Set<Student> followerStudents;

	public Club() {
		
	}
	
	public Club(String username, String email, String password, String description) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.description = description;
	}
	
	public void postAnnouncement(String text)
	{
		announcements.add(new Announcement(club_id, text, new Timestamp(System.currentTimeMillis()), username));
	}
	public List<Announcement> getAnnouncements() {
		return announcements;
	}
	public void setAnnouncements(List<Announcement> announcements) {
		this.announcements = announcements;
	}
	public Set<Student> getFollowerStudents() {
		return followerStudents;
	}
	public void setFollowerStudents(Set<Student> followerStudents) {
		this.followerStudents = followerStudents;
	}
	public long getClub_id() {
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
