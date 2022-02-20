namespace StudyBuddy.Domain.Models
{
    public class UserProperty
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}