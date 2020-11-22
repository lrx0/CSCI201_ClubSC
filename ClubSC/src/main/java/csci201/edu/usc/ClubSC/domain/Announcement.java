package csci201.edu.usc.ClubSC.domain;

import java.sql.Timestamp;
import javax.persistence.*;

@Entity
public class Announcement {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long post_id;
	private long club_id;
	private String body;
	private Timestamp timestamp;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "club")
	private Club club;
	
	public Announcement() {
		
	}

	public Announcement(long club_id, String body, Timestamp timestamp2, Club club) {
		this.club_id = club_id;
		this.body = body;
		this.timestamp = timestamp2;
		this.club = club;
	}
	
	public Club getClub() {
		return club;
	}
	public void setClub(Club club) {
		this.club = club;
	}
	public long getPost_id() {
		return post_id;
	}
	public void setPost_id(long post_id) {
		this.post_id = post_id;
	}
	public long getClub_id() {
		return club_id;
	}
	public void setClub_id(long club_id) {
		this.club_id = club_id;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
}
