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
import csci201.edu.usc.ClubSC.domain.ClubSearchRepository;

@Service
public class StudentFollowService
{
    @Autowired
    FollowRepository fr;
     
    public void followClub(String name, String id)
    {
        //add student, club pair to follow database
        fr.save(name,id);
    }
}