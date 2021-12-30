using System.Collections.Generic;

namespace StudyBuddy.Domain.Models
{
    public class Group
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }

        public int TutorId { get; set; }
        public virtual ICollection<User> StudentIds { get; set; }

        public int AdminId { get; set; }
        public User Admin { get; set; }

        public virtual GroupProperty GroupProperty { get; set; }
    }
}