package csci201.edu.usc.ClubSC.domain;

import org.springframework.data.repository.*;

public interface StudentRepository extends CrudRepository<Student, Long> {
	Student findByUsername(String username);
}
