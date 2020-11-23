package csci201.edu.usc.ClubSC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import csci201.edu.usc.ClubSC.domain.AnnouncementRepository;
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubPage;
import csci201.edu.usc.ClubSC.domain.ClubRepository;

@Service
public class ClubPageService
{
    @Autowired
    ClubRepository repository;
    @Autowired
    AnnouncementRepository ar;
     
    public ClubPage getClubPage(Long key)
    {
 
        ClubPage Result = new ClubPage();
        Result.club_id = key;
        Club c = repository.findByClubid(key);
        Result.club_name = c.getUsername();
        Result.announcements = ar.findByclubid(key);
        Result.club_desc = c.getDesc();
        return Result;
    }
}