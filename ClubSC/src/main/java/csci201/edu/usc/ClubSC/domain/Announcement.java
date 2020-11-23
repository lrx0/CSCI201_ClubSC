package csci201.edu.usc.ClubSC.domain;

import java.sql.Timestamp;
import javax.persistence.*;

@Entity
public class Announcement {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long postid;
	@Column(nullable = false, unique = false)
	private long clubid;
	@Column(nullable = false, unique = false)
	private String body;
	@Column(nullable = false, unique = false)
	private String timestamp;
	@Column(nullable = false, unique = false)
	private String username;
	
	
	public Announcement() {
		
	}


	public Announcement(long clubid, String body, String timestamp2, String username) {
		//this.postid = (long) 1;
		this.clubid = clubid;
		this.body = body;
		this.timestamp = timestamp2;
		this.username = username;
	}
	public long getPostid() {
		return postid;
	}
	public void setPostid(long post_id) {
		this.postid = post_id;
	}
	public long getClubid() {
		return clubid;
	}
	public void setClubid(long clubid) {
		this.clubid = clubid;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}
	public String getUsername(){
		return this.username;
	}
	public void setUsername(String username){
		this.username = username;
	}
}
