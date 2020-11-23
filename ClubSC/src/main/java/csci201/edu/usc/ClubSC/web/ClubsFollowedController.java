package csci201.edu.usc.ClubSC.web;
import java.text.ParseException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import csci201.edu.usc.ClubSC.domain.*;
import csci201.edu.usc.ClubSC.service.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/app")
public class ClubsFollowedController
{
    @Autowired
    ClubsFollowedService service;
 
    @GetMapping("/clubsfollowed")
    @PreAuthorize("hasRole('ROLE_STUDENT') or hasRole('ROLE_ADMIN')")
    public List<Club> getFollowedClubs() throws ParseException
    {
    	List<Club> list = service.getFollowedClubs();
        
        return list;
    }
}