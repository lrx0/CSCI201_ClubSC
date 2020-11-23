package csci201.edu.usc.ClubSC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import csci201.edu.usc.ClubSC.domain.Follow;
import csci201.edu.usc.ClubSC.domain.FollowRepository;

@Service
public class StudentFollowService
{
    @Autowired
    FollowRepository fr;
     
    public void followClub(Long id)
    {
        //add student, club pair to follow database
    	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long name = ((UserDetailsImpl) auth.getPrincipal()).getId();
        Follow f = new Follow(name,id);
        fr.save(f);
    }

	
}