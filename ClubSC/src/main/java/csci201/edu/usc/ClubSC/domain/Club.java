package csci201.edu.usc.ClubSC.domain;

import javax.persistence.*;
import java.util.*;

@Entity
public class Club {
	@Id
	@Column(nullable = false)
	private Long club_id;
	@Column(nullable = false, unique = true)
	private String username;
	private String description;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="club")
	private List<Announcement> announcements;
	
	@ManyToMany(mappedBy = "followedClubs")
	private Set<Student> followerStudents;

	public Club() {
		
	}
	
	public Club(Long club_id, String username) {
		super();
		this.club_id = club_id;
		this.username = username;
		this.description = "";
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
