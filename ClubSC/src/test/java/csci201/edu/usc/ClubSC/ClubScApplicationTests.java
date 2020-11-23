package csci201.edu.usc.ClubSC;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import csci201.edu.usc.ClubSC.web.*;

@SpringBootTest
class ClubScApplicationTests {
	
	@Autowired
	private AuthController acontroller;
	@Autowired
	private ClubPageController pagecontroller;
	@Autowired
	private ClubPostController postcontroller;
	@Autowired
	private ClubSearchController searchcontroller;
	@Autowired
	private StudentFeedController feedcontroller;
	@Autowired
	private StudentFollowController followcontroller;
	@Autowired
	private ClubsFollowedController FollowedClubsController;

	@Test
	void contextLoads() {
		assertThat(acontroller).isNotNull();
		assertThat(pagecontroller).isNotNull();
		assertThat(postcontroller).isNotNull();
		assertThat(searchcontroller).isNotNull();
		assertThat(feedcontroller).isNotNull();
		assertThat(followcontroller).isNotNull();
		assertThat(FollowedClubsController).isNotNull();
	}

}
