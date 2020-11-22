package csci201.edu.usc.ClubSC.payload;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ClubSearchResponse {
	@NotBlank
	@Size(min = 3, max = 20)
    private List<String> clubs;
	
	public List<String> getclubs() {
        return clubs;
    }
	public void setKey(List<String> club) {
        this.clubs = club;
    }
}
