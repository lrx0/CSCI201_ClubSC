package csci201.edu.usc.ClubSC.service;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

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
    	DateFormat df = new SimpleDateFormat("dd/MM/yy HH:mm:ss");
        Date dateobj = new Date();
        String ts = df.format(dateobj);
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long id = ((UserDetailsImpl) auth.getPrincipal()).getId();
        Announcement a = new Announcement(id, body, ts);
        ar.save(a);
    }
}