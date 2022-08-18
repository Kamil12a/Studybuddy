using System;

namespace StudyBuddy.Domain.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public DateTime PublishDate { get; set; }
        public string Content { get; set; }
        public virtual User User { get; set; }
    }
}