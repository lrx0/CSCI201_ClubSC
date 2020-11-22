package csci201.edu.usc.ClubSC.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubPage;
import csci201.edu.usc.ClubSC.domain.ClubSearchRepository;
import sun.tools.serialver.Res;

@Service
public class ClubPageService
{
    @Autowired
    ClubRepository repository;
     
    public ClubPage getClubPage(Long key)
    {
 
        ClubPage Result = new ClubPage();
        Result.club_id = key;
        Club c = findByClub_id(key);
        Result.club_name = c.getUsername();
        Result.announcements = c.getAnnouncements();
        Result.club_desc = c.getDesc();
        return Result;
    }
}