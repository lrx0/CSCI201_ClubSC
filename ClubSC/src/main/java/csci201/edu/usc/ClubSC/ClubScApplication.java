package csci201.edu.usc.ClubSC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import csci201.edu.usc.ClubSC.domain.Role;
import csci201.edu.usc.ClubSC.domain.RoleRepository;
import csci201.edu.usc.ClubSC.domain.ERole;

@SpringBootApplication
public class ClubScApplication {
	
	 @Autowired 
     private RoleRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(ClubScApplication.class, args);
	}

	@Bean
    CommandLineRunner runner(){
      return args -> {
    	  Role studentRole = new Role(ERole.ROLE_STUDENT);
    	  Role clubRole = new Role(ERole.ROLE_CLUB);
    	  Role adminRole = new Role(ERole.ROLE_ADMIN);
    	  repository.save(studentRole);
    	  repository.save(clubRole);
    	  repository.save(adminRole);
      };
    }
}
