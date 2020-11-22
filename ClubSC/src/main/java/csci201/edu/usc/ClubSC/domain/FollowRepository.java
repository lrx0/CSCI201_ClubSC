package csci201.edu.usc.ClubSC.domain;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
 
 
@Repository
public interface FollowRepository extends PagingAndSortingRepository<Follow, Long> {
    //get followed club id list from student
	List <Follow> findByStudent_id(String student_id);
}