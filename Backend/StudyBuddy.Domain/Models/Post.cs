using System;
using System.Collections.Generic;

namespace StudyBuddy.Domain.Models
{
    public class Post
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public DateTime PublishDate { get; set; }
        public string? Topic { get; set; }
        public string? Content { get; set; }
        public int Likes { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        
        public int OwnerId { get; set; }
        public virtual User User { get; set; }
    }
}