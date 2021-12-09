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
       
        public virtual ICollection<Group> Groups { get; set; }
        public virtual UserProperty UserProperty { get; set; }
    }
}