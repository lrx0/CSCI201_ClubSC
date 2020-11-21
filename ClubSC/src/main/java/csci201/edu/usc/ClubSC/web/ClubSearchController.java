package csci201.edu.usc.ClubSC.web;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import csci201.edu.usc.ClubSC.domain.*;
import csci201.edu.usc.ClubSC.payload.*;
import csci201.edu.usc.ClubSC.service.ClubSearchService;
@RestController
@RequestMapping("/clubsearch")
public class ClubSearchController
{
    @Autowired
    ClubSearchService service;
 
    @GetMapping
    public ResponseEntity<List<Club>> getAllClubs( @Valid @RequestBody ClubSearchRequest ClubSearchRequest)
    {
        List<Club> list = service.getAllClubs(ClubSearchRequest.getKey());
 
        return new ResponseEntity<List<Club>>(list, new HttpHeaders(), HttpStatus.OK); 
    }
}