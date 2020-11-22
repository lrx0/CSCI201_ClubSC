package csci201.edu.usc.ClubSC.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ClubPostRequest {
	@NotBlank
	@Size(min = 1, max = 20000)
    private Long key;
	private String content;
	public Long getKey() {
        return key;
    }
	public void setKey(Long key) {
        this.key = key;
    }
    public String getContent() {
        return content;
    }
	public void setContent(String content) {
        this.content = content;
    }
}
