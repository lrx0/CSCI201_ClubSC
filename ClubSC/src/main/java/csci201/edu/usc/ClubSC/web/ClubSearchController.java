package csci201.edu.usc.ClubSC.web;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Vector;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import csci201.edu.usc.ClubSC.domain.*;
import csci201.edu.usc.ClubSC.payload.*;
import csci201.edu.usc.ClubSC.service.ClubSearchService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/app")
public class ClubSearchController
{
    @Autowired
    ClubSearchService service;
 
    @PostMapping("/clubsearch")
    public List<Club> getAllClubs( @Valid @RequestBody ClubSearchRequest ClubSearchRequest) throws InterruptedException, ExecutionException
    {
    	String key = ClubSearchRequest.getKey();
    	String[] keys = key.split(",");
    	Vector<CompletableFuture<List<Club>>> list = new 
    			Vector<CompletableFuture<List<Club>>>();
    	int numTerms = keys.length;
    	for(int i = 0; i < numTerms; i++) {
    		CompletableFuture<List<Club>> future = service.getAllClubs(keys[i]);
    		list.add(future);
    	}
    	CompletableFuture.allOf(list.toArray(new CompletableFuture[list.size()])).join();
  
    	Set<Club> clubList = new HashSet<Club>();
    	for(int i = 0; i < numTerms; i++) {
    		clubList.addAll(list.get(i).get());
    	}
    	List<Club> returnList = new ArrayList<Club>();
    	returnList.addAll(clubList);
        return returnList;
    }
}