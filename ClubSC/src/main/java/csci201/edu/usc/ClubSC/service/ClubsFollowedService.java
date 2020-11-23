package csci201.edu.usc.ClubSC.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubRepository;
import csci201.edu.usc.ClubSC.domain.Follow;
import csci201.edu.usc.ClubSC.domain.FollowRepository;
@Service
public class ClubsFollowedService {
	@Autowired
    FollowRepository fr;
	@Autowired
    ClubRepository Clubrepository;
	
	public List<Club> getFollowedClubs(){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long id = ((UserDetailsImpl) auth.getPrincipal()).getId();
		List<Follow> list = fr.findByStudentid(id);;
		List<Club> clublist = new ArrayList<Club>();
		for(Follow f : list)
		{
			clublist.add(Clubrepository.findByClubid(f.clubid));
		}
		
		
		return clublist;
	}
}
