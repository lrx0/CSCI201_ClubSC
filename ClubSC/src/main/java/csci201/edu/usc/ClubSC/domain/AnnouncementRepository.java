package csci201.edu.usc.ClubSC.domain;

import org.springframework.data.repository.*;

public interface AnnouncementRepository extends CrudRepository<Announcement, Long> {
    Club findByclub_id(int club_id);
}
