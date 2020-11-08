package csci201.edu.usc.ClubSC;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.Date;
import java.sql.Timestamp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import csci201.edu.usc.ClubSC.domain.Announcement;
import csci201.edu.usc.ClubSC.domain.Club;
import csci201.edu.usc.ClubSC.domain.Student;
import csci201.edu.usc.ClubSC.domain.StudentRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class StudentRepositoryTest {
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private StudentRepository repository;
	
	@Test
	public void saveStudent() {
		for(int i = 0; i < 50; i++) {
			Student student = new Student("lucasmhuang" + i%6 + i, "lmhuang@usc.edu" + i%6 + i, "password" + i%6 + i);
			entityManager.persistAndFlush(student);
			assertThat(student.getStudent_id()).isNotNull();
			assertThat(student.getEmail()).isNotNull();
			assertThat(student.getPassword()).isNotNull();
			Club club = new Club("scope" + i%6 + i, "scope@usc.edu" + i%6 + i, "scope" + i%6 + i, "test" + i%6 + i);
			Timestamp timestamp = new Timestamp(System.currentTimeMillis());
			Announcement announcement = new Announcement((long) i%6 + i, "test" + i%6 + i, timestamp, club);
			entityManager.persistAndFlush(announcement);
			assertThat(announcement.getPost_id()).isNotNull();
			assertThat(announcement.getClub_id()).isNotNull();
			assertThat(announcement.getBody()).isNotNull();
			assertThat(announcement.getTimestamp()).isNotNull();
		}
	}
	
	@Test
	public void deleteStudents() {
		for(int i = 0; i < 50; i++) {
			Student student1 = new Student("ryanli" + i%6 + i, "ryanli@usc.edu" + i%6 + i, "password" + i%6 + i);
			Student student2 = new Student("carloslao" + i%6 + i, "clao@usc.edu" + i%6 + i, "password" + i%6 + i);
			entityManager.persistAndFlush(student1);
			entityManager.persistAndFlush(student2);
			long id1 = student1.getStudent_id();
			long id2 = student1.getStudent_id();
			repository.delete(student1);
			assertThat(repository.findAll()).isEmpty();
			assertEquals(true, repository.existsById(id1));
			assertEquals(false, repository.existsById(id2));
			repository.deleteAll();
			assertThat(repository.findAll()).isEmpty();
			assertEquals(false, repository.existsById(id1));
			assertEquals(false, repository.existsById(id2));
		}
	}
}