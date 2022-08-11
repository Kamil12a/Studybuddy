using System.Collections.Generic;

namespace StudyBuddy.Domain.Models
{
    public class User
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Course { get; set; }
        public string Fullname { get => $"{Name} {Surname}"; }
        public string Email { get; set; }
        public string Password { get; set; }
       
        public virtual ICollection<Group> TutoredGroups { get; set; }
        public virtual ICollection<Group> CreatedGroups { get; set; }
        public virtual ICollection<Group> JoinedGroups { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
    }
}