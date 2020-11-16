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

	@Test
	void contextLoads() {
		assertThat(controller).isNotNull();
	}

}
