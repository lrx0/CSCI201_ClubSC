package csci201.edu.usc.ClubSC.domain;

import org.springframework.data.repository.*;

public interface ClubRepository extends CrudRepository<Club, Long> {
	Club findByUsername(String username);
	Club findByClub_id(Long club_id);
}
