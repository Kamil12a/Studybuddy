namespace StudyBuddy.Domain.Models
{
    public class Number
    {
        public int Id { get; set; }

        public int GroupId { get; set; }
        public virtual Group Group { get; set; }
    }
}