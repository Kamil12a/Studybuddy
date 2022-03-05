using System;
using System.Collections.Generic;

namespace StudyBuddy.Domain.Models
{
    public class Group
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public string Place { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public DateTime MeetingDate { get; set; }

        public int SubjectId { get; set; }
        public int TutorId { get; set; }
        public int GroupOwnerId { get; set; }
        public virtual Subject Subject { get; set; }
        public virtual User Tutor { get; set; }
        public virtual User GroupOwner { get; set; }
        public virtual ICollection<User> JoinedUsers { get; set; }
        public virtual GroupProperty GroupProperty { get; set; }
    }
}