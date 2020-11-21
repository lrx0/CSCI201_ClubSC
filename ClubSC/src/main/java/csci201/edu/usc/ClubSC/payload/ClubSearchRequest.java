package csci201.edu.usc.ClubSC.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ClubSearchRequest {
	@NotBlank
	@Size(min = 3, max = 20)
    private String key;
	
	public String getKey() {
        return key;
    }
	public void setKey(String key) {
        this.key = key;
    }
}
