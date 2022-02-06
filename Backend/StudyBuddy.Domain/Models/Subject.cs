namespace StudyBuddy.Domain.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }

        
        public int GroupPropertyId { get; set; }
        public virtual GroupProperty GroupProperty { get; set; }
        public virtual Topic Topic { get; set; }
    }
}