using System.Collections.Generic;

namespace StudyBuddy.Domain.Models
{
    public class Group
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public int TutorId { get; set; }

        //public int GroupOwnerId { get; set; }
        public virtual User GroupOwner { get; set; }
        public virtual ICollection<User> JoinedUsers { get; set; }

        public virtual GroupProperty GroupProperty { get; set; }
    }
}