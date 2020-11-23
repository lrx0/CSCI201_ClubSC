package csci201.edu.usc.ClubSC;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.Executor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import csci201.edu.usc.ClubSC.domain.Role;
import csci201.edu.usc.ClubSC.domain.*;
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
	 @Autowired
	 UserRepository UserRepository;
	 @Autowired
	 AnnouncementRepository AnnouncementRepository;

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
		  ClubRepository.save(new Club((long)1,"ASPEN","We are The Advanced Spacecraft Propulsion and Energy (ASPEN) Laboratory"));
		  ClubRepository.save(new Club((long)2,"ADT","We are The AeroDesign Team of USC"));
		  ClubRepository.save(new Club((long)3,"AAEES","We are The USC Chapter of the American Academy of Environmental Engineers and Scientists"));
		  ClubRepository.save(new Club((long)4,"ASCE","We are The American Society of Civil Engineers"));
		  ClubRepository.save(new Club((long)5,"ASME","We are The American Society of Mechanical Engineers"));
		  ClubRepository.save(new Club((long)6,"AUV","We are USC’s Autonomous Underwater Vehicle Design Team"));
		  ClubRepository.save(new Club((long)7,"CAIS++","We are  Center for AI in Societys Student Branch"));
		  ClubRepository.save(new Club((long)8,"CybOrg","We are Cyber Security and Forensics Organization"));
		  ClubRepository.save(new Club((long)9,"GIT","We are Girls in Tech"));
		  ClubRepository.save(new Club((long)10,"Lava","We are LavaLab"));
		  ClubRepository.save(new Club((long)11,"SparkSC","We are SparkSc"));
		  UserRepository.save(new User("ASPEN","ASPEN@usc.edu","ASPEN","We are The Advanced Spacecraft Propulsion and Energy (ASPEN) Laboratory"));
		  UserRepository.save(new User("ADT","ADT@usc.edu","ADT","We are The AeroDesign Team of USC"));
		  UserRepository.save(new User("AAEES","AAEES@usc.edu","AAEES","We are The USC Chapter of the American Academy of Environmental Engineers and Scientists"));
		  UserRepository.save(new User("ASCE","ASCE@usc.edu","ASCE","We are The American Society of Civil Engineers"));
		  UserRepository.save(new User("ASME","ASME@usc.edu","ASME","We are The American Society of Mechanical Engineers"));
		  UserRepository.save(new User("AUV","AUV@usc.edu","AUV","We are USC’s Autonomous Underwater Vehicle Design Team"));
		  UserRepository.save(new User("CAIS++","CAIS@usc.edu","CAIS++","We are  Center for AI in Societys Student Branch"));
		  UserRepository.save(new User("CybOrg","CybOrg@usc.edu","CybOrg","We are Cyber Security and Forensics Organization"));
		  UserRepository.save(new User("GIT","GIT@usc.edu","GIT","We are Girls in Tech"));
		  UserRepository.save(new User("Lava","Lava@usc.edu","Lava","We are LavaLab"));
		  UserRepository.save(new User("SparkSC","SparkSC@usc.edu","SparkSC","We are SparkSc"));
		  DateFormat df = new SimpleDateFormat("dd/MM/yy HH:mm:ss");
	        Date dateobj = new Date();
	        String ts = df.format(dateobj);
		  
	      AnnouncementRepository.save(new Announcement(1,"Welcome to our club ASPEN",ts,"ASPEN"));
	      AnnouncementRepository.save(new Announcement(2,"Welcome to our club ADT",ts,"ADT"));
	      AnnouncementRepository.save(new Announcement(3,"Welcome to our club AAEES",ts,"AAEES"));
	      AnnouncementRepository.save(new Announcement(4,"Welcome to our club ASCE",ts,"ASCE"));
	      AnnouncementRepository.save(new Announcement(5,"Welcome to our club ASME",ts,"ASME"));
	      AnnouncementRepository.save(new Announcement(6,"Welcome to our club AUV",ts,"AUV"));
	      AnnouncementRepository.save(new Announcement(7,"Welcome to our club CAIS++",ts,"CAIS++"));
	      AnnouncementRepository.save(new Announcement(8,"Welcome to our club CybOrg",ts,"CybOrg"));
	      AnnouncementRepository.save(new Announcement(9,"Welcome to our club GIT",ts,"GIT"));
	      AnnouncementRepository.save(new Announcement(10,"Welcome to our club Lava",ts,"Lava"));
	      AnnouncementRepository.save(new Announcement(11,"Welcome to our club SparkSC",ts,"SparkSC"));
		  
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
