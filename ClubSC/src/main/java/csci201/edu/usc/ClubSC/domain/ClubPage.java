package csci201.edu.usc.ClubSC.domain;

import java.sql.Timestamp;
import javax.persistence.*;

public class ClubPage {

	public String club_id;
	public String club_name;
	public String club_desc;
	public List <Announcement> announcements;
	public ClubPage()
	{

	}
	
}
