package csci201.edu.usc.ClubSC.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class StudentFeedRequest {
	@NotBlank
	@Size(min = 1, max = 20)
    private String name;
	
	public String getName() {
        return name;
    }
	public void setName(String name) {
        this.name = name;
    }

    
}
