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
import csci201.edu.usc.ClubSC.domain.ClubPage;
import csci201.edu.usc.ClubSC.domain.ClubRepository;
import csci201.edu.usc.ClubSC.domain.ClubSearchRepository;

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
        Club c = repository.findByClub_id(key);
        Result.club_name = c.getUsername();
        Result.announcements = ar.findByclub_id(key);
        Result.club_desc = c.getDesc();
        return Result;
    }
}