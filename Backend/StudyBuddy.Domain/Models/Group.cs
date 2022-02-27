using System;
using System.Collections.Generic;

namespace StudyBuddy.Domain.Models
{
    public class Group
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public string TutorName { get => Tutor.Name; }
        public string Place { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public DateTime MeetingDate { get; set; }

        public virtual User Tutor { get; set; }
        public virtual User GroupOwner { get; set; }
        public virtual ICollection<User> JoinedUsers { get; set; }
        public virtual GroupProperty GroupProperty { get; set; }
    }
}