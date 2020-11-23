package csci201.edu.usc.ClubSC.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubSearchRepository;

@Service
public class ClubSearchService
{
    @Autowired
    ClubSearchRepository repository;
     
    public List<Club> getAllClubs(String key)
    {
 
        List<Club> Result = repository.findAllClubs(key);

         
        if(Result!=null) {
            return Result;
        } else {
            return new ArrayList<Club>();
        }
    }
}