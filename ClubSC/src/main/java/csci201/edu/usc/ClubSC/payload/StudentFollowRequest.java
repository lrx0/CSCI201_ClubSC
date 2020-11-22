package csci201.edu.usc.ClubSC.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class StudentFollowRequest {
	@NotBlank
	@Size(min = 1, max = 20)
    private String name;
    private String club;
	
	public String getName() {
        return name;
    }
	public void setName(String name) {
        this.name = name;
    }
    public String getClub() {
        return club;
    }
	public void setClub(String club) {
        this.club = club;
    }
}
