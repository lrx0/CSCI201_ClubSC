package csci201.edu.usc.ClubSC.domain;

import javax.persistence.*;

@Entity
public class Club {
	@Id
	@Column(nullable = false, unique = true)
	private Long clubid;
	@Column(nullable = false, unique = true)
	private String username;
	@Column(nullable = false, unique = false)
	private String description;

	public Club() {
		
	}
	
	public Club(Long club_id, String username, String description) {
		super();
		this.clubid = club_id;
		this.username = username;
		this.description = description;
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
