package csci201.edu.usc.ClubSC.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import csci201.edu.usc.ClubSC.domain.Announcement;
import csci201.edu.usc.ClubSC.domain.AnnouncementRepository;
import csci201.edu.usc.ClubSC.domain.Follow;
import csci201.edu.usc.ClubSC.domain.FollowRepository;

@Service
public class StudentFeedService
{
    @Autowired
    FollowRepository fr;
    @Autowired
    AnnouncementRepository annrepo;
    public List <Announcement> fetchFeed() throws ParseException
	{
    	long timeback = 600000000;
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long id = ((UserDetailsImpl) auth.getPrincipal()).getId();
        List<Follow> followedClubs = fr.findByStudentid(id);
        PriorityQueue<Announcement> recentpost = new PriorityQueue<Announcement>(new Comparator<Announcement>() {
			public int compare(Announcement a1, Announcement a2) {
				
				return a1.getTimestamp().compareTo(a2.getTimestamp());
			}
		}); 
        for(Follow f : followedClubs) 
		{
            Long c = f.clubid;
            recentpost.addAll(annrepo.findByclubid(c));
		}
		List <Announcement> timechecked = new ArrayList<Announcement> ();
		long currtime = System.currentTimeMillis();
		DateFormat df = new SimpleDateFormat("dd/MM/yy HH:mm:ss");
		Date date = df.parse(recentpost.peek().getTimestamp());
		while (!recentpost.isEmpty() && currtime - date.getTime() < timeback)
		{
			timechecked.add(recentpost.poll());
		} 
		return timechecked;
	}
}