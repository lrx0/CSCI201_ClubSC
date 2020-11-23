package csci201.edu.usc.ClubSC.domain;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface ClubSearchRepository extends PagingAndSortingRepository<Club, Long> {
	 @Query(value = "SELECT * FROM club c WHERE " +
	            "c.username LIKE" + " " + ":searchTerm" + "% " +
			     "group by username",
	            nativeQuery = true)
	    List<Club> findAllClubs(@Param("searchTerm") String searchTerm);
}
