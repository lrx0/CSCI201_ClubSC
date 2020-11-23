package csci201.edu.usc.ClubSC.domain;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
 
 
@Repository
public interface FollowRepository extends PagingAndSortingRepository<Follow, Long> {
    //get followed club id list from student
	List <Follow> findByStudentid(Long studentid);
}