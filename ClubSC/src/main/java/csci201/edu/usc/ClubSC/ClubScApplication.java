package csci201.edu.usc.ClubSC;

import java.util.concurrent.Executor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import csci201.edu.usc.ClubSC.domain.Role;
import csci201.edu.usc.ClubSC.domain.RoleRepository;
import csci201.edu.usc.ClubSC.domain.ERole;

@SpringBootApplication
@EnableAsync
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
	
	@Bean
	public Executor taskExecutor() {
		ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
	    executor.setCorePoolSize(4);
	    executor.setMaxPoolSize(4);
	    executor.setQueueCapacity(500);
	    executor.setThreadNamePrefix("ClubLookup-");
	    executor.initialize();
	    return executor;
	}
}
