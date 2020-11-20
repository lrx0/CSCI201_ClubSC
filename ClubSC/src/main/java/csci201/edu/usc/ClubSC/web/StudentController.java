package csci201.edu.usc.ClubSC.web;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import csci201.edu.usc.ClubSC.domain.*;

@RestController
public class StudentController {
	@Autowired
	private StudentRepository repository;
	
	@RequestMapping("/students")
    public Iterable<Student> getStudents() {
		return repository.findAll();
    }
}
