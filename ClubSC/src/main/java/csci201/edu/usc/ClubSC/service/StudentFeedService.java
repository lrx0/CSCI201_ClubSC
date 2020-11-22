package csci201.edu.usc.ClubSC.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import csci201.edu.usc.ClubSC.domain.Announcement;
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubSearchRepository;
import csci201.edu.usc.ClubSC.domain.Follow;
import csci201.edu.usc.ClubSC.domain.FollowRepository;

@Service
public class StudentFeedService
{
    @Autowired
    FollowRepository fr;
     
    public List <Announcement> fetchFeed(String studentName)
	{
		long timeback = 600000000;
		List <Announcement> fetchedAnnouncements = new ArrayList<Announcement> ();
        //iterate through all
        List<Follow> followedClubs = fr.getFollow(studentName);
		for(Follow f : followedClubs)
		{
            String c = f.club_id;
			if (annrepo.findByclub_id(c) == null)
				return null;
			fetchedAnnouncements.addAll(annrepo.findByclub_id(c));
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
}