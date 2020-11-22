package csci201.edu.usc.ClubSC.domain;

import java.util.List;

import org.springframework.data.repository.*;

public interface AnnouncementRepository extends CrudRepository<Announcement, Long> {
    List <Announcement> findByclub_id(Long c);
}
