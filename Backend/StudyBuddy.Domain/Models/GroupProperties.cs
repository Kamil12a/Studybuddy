using System;

namespace StudyBuddy.Domain.Models
{
    public class GroupProperties
    {
        public int Id { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public string Description { get; set; }

        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }

        public int GroupId { get; set; }
        public virtual Group Group { get; set; }
    }
}