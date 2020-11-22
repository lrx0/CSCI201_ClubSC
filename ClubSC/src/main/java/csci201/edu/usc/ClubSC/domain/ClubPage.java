package csci201.edu.usc.ClubSC.domain;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.*;

public class ClubPage {

	public Long club_id;
	public String club_name;
	public String club_desc;
	public List <Announcement> announcements;
	public ClubPage()
	{

	}
	
}
