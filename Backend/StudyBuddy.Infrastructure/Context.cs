using Microsoft.EntityFrameworkCore;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Infrastructure
{
    public class Context : DbContext
    {
        public DbSet<Group> Groups { get; set; }
        public DbSet<GroupProperty> GroupProperties { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserProperty> UserProperties { get; set; }

        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>()
                .HasOne(u => u.UserProperty)
                .WithOne(up => up.User)
                .HasForeignKey<UserProperty>(e => e.UserId);

            builder.Entity<User>()
                .HasMany(g => g.CreatedGroups)
                .WithOne(u => u.GroupOwner);
            
            builder.Entity<Group>()
                .HasMany(g => g.JoinedUsers)
                .WithMany(n => n.JoinedGroups);

            builder.Entity<Group>()
                .HasOne(g => g.GroupProperty)
                .WithOne(gp => gp.Group)
                .HasForeignKey<GroupProperty>(gp => gp.GroupId);

            builder.Entity<GroupProperty>()
                .HasOne(gp => gp.Subject)
                .WithOne(s => s.GroupProperty)
                .HasForeignKey<Subject>(s => s.GroupPropertyId);

            builder.Entity<Subject>()
                .HasOne(s => s.Topic)
                .WithOne(t => t.Subject)
                .HasForeignKey<Topic>(t => t.SubjectId);

            builder.Entity<User>()
                .HasMany(u => u.Posts)
                .WithOne(p => p.User)
                .HasForeignKey(e => e.OwnerId);
        }
    }
}