using System.Collections.Generic;

namespace StudyBuddy.Domain.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public virtual ICollection<Group> AssignedGroups { get; set; }
        public virtual Topic Topic { get; set; }
    }
}