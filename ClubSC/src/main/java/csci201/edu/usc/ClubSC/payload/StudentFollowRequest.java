package csci201.edu.usc.ClubSC.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class StudentFollowRequest {
    private Long club;
	
    public Long getClub() {
        return club;
    }
	public void setClub(Long club) {
        this.club = club;
    }
}
