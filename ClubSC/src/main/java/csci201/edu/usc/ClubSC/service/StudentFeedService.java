package csci201.edu.usc.ClubSC.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import csci201.edu.usc.ClubSC.domain.Announcement;
import csci201.edu.usc.ClubSC.domain.AnnouncementRepository;
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubSearchRepository;
import csci201.edu.usc.ClubSC.domain.Follow;
import csci201.edu.usc.ClubSC.domain.FollowRepository;

@Service
public class StudentFeedService
{
    @Autowired
    FollowRepository fr;
    @Autowired
    AnnouncementRepository annrepo;
    public List <Announcement> fetchFeed()
	{
		long timeback = 600000000;
		List <Announcement> fetchedAnnouncements = new ArrayList<Announcement> ();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long id = ((UserDetailsImpl) auth.getPrincipal()).getId();
        List<Follow> followedClubs = fr.findByStudentid(id);
        List <Follow> followedlinked = new LinkedList <Follow> ();
        PriorityQueue<Integer> recentpost = new PriorityQueue<Integer>(); 
        for(Follow f : followedClubs) 
		{
        	
            Long c = f.clubid;
            recentpost.add(c.intValue());
            followedlinked.add(f);
			fetchedAnnouncements.addAll(annrepo.findByclubid(c));
			System.out.println(annrepo.findByclubid(c).size());
		}
		Collections.sort(fetchedAnnouncements, new Comparator<Announcement>() {
			public int compare(Announcement a1, Announcement a2) {
				
				return a1.getTimestamp().compareTo(a2.getTimestamp());
			}
		});
		List <Announcement> timechecked = new ArrayList<Announcement> ();
		int tc = 0;
		long currtime = System.currentTimeMillis();
		while (tc<fetchedAnnouncements.size() &&currtime - fetchedAnnouncements.get(tc).getTimestamp().getTime() < timeback)
		{
			timechecked.add(fetchedAnnouncements.get(tc));
			tc++;
		} 
		return timechecked;
	}
}