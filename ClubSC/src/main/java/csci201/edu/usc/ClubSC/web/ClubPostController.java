package csci201.edu.usc.ClubSC.web;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import csci201.edu.usc.ClubSC.domain.*;
import csci201.edu.usc.ClubSC.payload.*;
import csci201.edu.usc.ClubSC.service.ClubPostService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/app")
public class ClubPostController
{
    @Autowired
    ClubPostService service;
 
    @PostMapping("/clubpost")
    public void post( @Valid @RequestBody ClubPostRequest ClubPostRequest)
    {
        service.post(ClubPostRequest.getKey(), ClubPostRequest.getContent());
    }
}