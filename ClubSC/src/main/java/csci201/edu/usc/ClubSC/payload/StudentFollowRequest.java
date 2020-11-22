package csci201.edu.usc.ClubSC.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class StudentFollowRequest {
	@NotBlank
	@Size(min = 1, max = 20)
    private Long name;
    private Long club;
	
	public Long getName() {
        return name;
    }
	public void setName(Long name) {
        this.name = name;
    }
    public Long getClub() {
        return club;
    }
	public void setClub(Long club) {
        this.club = club;
    }
}
