package csci201.edu.usc.ClubSC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import csci201.edu.usc.ClubSC.domain.Student;
import csci201.edu.usc.ClubSC.domain.StudentRepository;

@SpringBootApplication
public class ClubScApplication {
	
	 @Autowired 
     private StudentRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(ClubScApplication.class, args);
	}

	@Bean
    CommandLineRunner runner(){
      return args -> {
        // Demo data
      };
    }
}
