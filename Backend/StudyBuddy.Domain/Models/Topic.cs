namespace StudyBuddy.Domain.Models
{
    public class Topic
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }
    }
}