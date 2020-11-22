package csci201.edu.usc.ClubSC.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import csci201.edu.usc.ClubSC.domain.AnnouncementRepository;
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubSearchRepository;

@Service
public class StudentFollowService
{
    @Autowired
    AnnouncementRepository ar;
    @Autowired
    ClubRepository cr; 
    public void post(Long clubid, String body)
    {
		ts = Timestamp(System.currentTimeMillis());
		myclub = cr.findByClub_id(clubid);
        Announcement a = new Announcement(clubid, body, ts, myclub);
        ar.save(a);
    }
}