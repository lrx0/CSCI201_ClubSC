package csci201.edu.usc.ClubSC;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import csci201.edu.usc.ClubSC.web.StudentController;

@SpringBootTest
class ClubScApplicationTests {
	
	@Autowired
	private StudentController controller;
	private ClubController controller1;
	private AnnouncementController controller2;

	@Test
	void contextLoads() {
		assertThat(controller).isNotNull();
		assertThat(controller1).isNotNull();
		assertThat(controller2).isNotNull();
	}

}
