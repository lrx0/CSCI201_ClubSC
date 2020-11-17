package csci201.edu.usc.ClubSC.domain;

import org.springframework.data.repository.*;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    List <Announcement> findByclub_id(String club_id);
}
