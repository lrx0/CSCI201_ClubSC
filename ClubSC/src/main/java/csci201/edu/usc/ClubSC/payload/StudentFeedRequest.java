package csci201.edu.usc.ClubSC.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class StudentFeedRequest {
	@NotBlank
	@Size(min = 1, max = 20)
    private Long key;
	
	public Long getKey() {
        return key;
    }
	public void setKey(Long key) {
        this.key = key;
    }

    
}
