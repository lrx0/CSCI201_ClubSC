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
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.ClubRepository;
import csci201.edu.usc.ClubSC.domain.ERole;

@SpringBootApplication
@EnableAsync
public class ClubScApplication {
	
	 @Autowired 
	 private RoleRepository repository;
	 @Autowired
	 ClubRepository ClubRepository;

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
		  ClubRepository.save(new Club((long)100,"We are The Advanced Spacecraft Propulsion and Energy (ASPEN) Laboratory","ASPEN"));
		  ClubRepository.save(new Club((long)101,"We are The AeroDesign Team of USC","ADT"));
		  ClubRepository.save(new Club((long)102,"We are The USC Chapter of the American Academy of Environmental Engineers and Scientists","AAEES"));
		  ClubRepository.save(new Club((long)103,"We are The American Society of Civil Engineers","ASCE"));
		  ClubRepository.save(new Club((long)104,"We are The American Society of Mechanical Engineers","ASME"));
		  ClubRepository.save(new Club((long)105,"We are USC’s Autonomous Underwater Vehicle Design Team","AUV"));
		  ClubRepository.save(new Club((long)106,"We are  Center for AI in Societys Student Branch","CAIS++"));
		  ClubRepository.save(new Club((long)107,"We are Cyber Security and Forensics Organization","CybOrg"));
		  ClubRepository.save(new Club((long)108,"We are Girls in Tech","GIT"));
		  ClubRepository.save(new Club((long)109,"We are LavaLab","Lava"));
		  ClubRepository.save(new Club((long)110,"We are SparkSc","SparkSC"));
		   /* 
		    (109,'We are LavaLab','LAVA'),
		    (110,'We are SparkSc','SparkSC');
		  ClubRepository.save(new Club())*/
		  
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
