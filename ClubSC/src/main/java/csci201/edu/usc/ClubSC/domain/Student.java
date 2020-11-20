package csci201.edu.usc.ClubSC.domain;

import java.security.Timestamp;
import java.util.List;
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
	@Autowired
  	private AnnouncementRepository annrepo;
	public Student() {
		
	}
	
	public Student(Long student_id, String username) {
		super();
		this.student_id = student_id;
		this.username = username;
	}
	//returns a list of announcements that form feed
	//input parameter is the length of time to go back in s
	public List <Announcement> fetchFeed(int times)
	{
		long timeback = times * 1000;
		List <Announcement> fetchedAnnouncements = new ArrayList<Announcement> ();
		//iterate through all
		for(Club c : followedClubs)
		{
			if (annrepo.findByclub_id(c.getclub_id()) == null)
				return null;
			fetchedAnnouncements.addAll(annrepo.findByclub_id(c.getclub_id()));
		}
		Collections.sort(fetchedAnnouncements, new Comparator<Announcement>() {
			@Override
			public int compare(Announcement a1, Announcement a2) {
				return a1.getTimestamp().compareTo(a2.getTimestamp());
			}
		});
		List <Announcement> timechecked = new ArrayList<Announcement> ();
		int tc = 0;
		long currtime = System.currentTimeMillis();
		while (currtime - fetchedAnnouncements.get(tc).getTimestamp().getTime() < timeback)
		{
			timechecked.add(fetchedAnnouncements.get(tc));
			tc++;
		} 
		return timechecked;
	}
	public void follow (String clubname){
		ClubRepository cr = new ClubRepository();
		Club c = cr.findByUsername(clubname);
		followedClubs.add(c);
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
