package csci201.edu.usc.ClubSC.service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubSearchRepository;

@Service
public class ClubSearchService
{
    @Autowired
    ClubSearchRepository repository;
     
    @Async
    public CompletableFuture<List<Club>> getAllClubs(String key)
    {
    	
        List<Club> Result = repository.findAllClubs(key);

         
        if(Result!=null) {
            return CompletableFuture.completedFuture(Result);
        } else {
            return CompletableFuture.completedFuture(new ArrayList<Club>());
        }
    }
}