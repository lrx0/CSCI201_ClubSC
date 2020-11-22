package csci201.edu.usc.ClubSC.domain;

import java.sql.Timestamp;
import javax.persistence.*;

@Entity
public class Announcement {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long postid;
	private long clubid;
	private String body;
	private Timestamp timestamp;
	
	
	public Announcement() {
		
	}

	public Announcement(long clubid, String body, Timestamp timestamp2) {
		this.postid = 101;
		//this.post_id = timestamp2.getTime();
		this.clubid = clubid;
		this.body = body;
		this.timestamp = timestamp2;
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
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
}
