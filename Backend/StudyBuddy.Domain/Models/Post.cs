namespace StudyBuddy.Domain.Models
{
    public class Post
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public int OwnerId { get; set; }
        public string Description { get; set; }
        
        public virtual User User { get; set; }
    }
}