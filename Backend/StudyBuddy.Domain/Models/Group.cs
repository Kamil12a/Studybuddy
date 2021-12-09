using System.Collections.Generic;

namespace StudyBuddy.Domain.Models
{
    public class Group
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }

        public int TutorId { get; set; }
        public ICollection<int> StudentIds { get; set; }

        public int AdminId { get; set; }
        public virtual User Admin { get; set; }
    }
}