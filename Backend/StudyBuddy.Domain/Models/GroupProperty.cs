using System;

namespace StudyBuddy.Domain.Models
{
    public class GroupProperty
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public string Description { get; set; }

        public virtual Subject Subject { get; set; }
        public int GroupId { get; set; }
        public virtual Group Group { get; set; }
    }
}