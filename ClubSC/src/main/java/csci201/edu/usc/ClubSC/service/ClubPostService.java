package csci201.edu.usc.ClubSC.service;

import java.sql.Timestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import csci201.edu.usc.ClubSC.domain.Announcement;
import csci201.edu.usc.ClubSC.domain.AnnouncementRepository;
import csci201.edu.usc.ClubSC.domain.ClubRepository;

@Service
public class ClubPostService
{
    @Autowired
    AnnouncementRepository ar;
    @Autowired
    ClubRepository cr; 
    public void post(String body)
    {
		Timestamp ts = new Timestamp(System.currentTimeMillis());
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long id = ((UserDetailsImpl) auth.getPrincipal()).getId();
        Announcement a = new Announcement(id, body, ts);
        ar.save(a);
    }
}