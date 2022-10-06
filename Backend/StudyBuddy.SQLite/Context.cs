using Microsoft.EntityFrameworkCore;
using StudyBuddy.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace StudyBuddy.SQLite
{
    public class Context : DbContext
    {
        public DbSet<Group>? Groups { get; set; }
        public DbSet<Post>? Posts { get; set; }
        public DbSet<Subject>? Subjects { get; set; }
        public DbSet<Topic>? Topics { get; set; }
        public DbSet<Comment>? Comments { get; set; }
        public DbSet<User>? Users { get; set; }

        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlite("Data Source=Data\\StudyBuddyDevelopmentDB.db");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Group>().ToTable("Groups");
            builder.Entity<Post>().ToTable("Posts");
            builder.Entity<Subject>().ToTable("Subjects");
            builder.Entity<Topic>().ToTable("Topics");
            builder.Entity<User>().ToTable("Users");
            builder.Entity<Comment>().ToTable("Comments");

            builder.Entity<User>()
                .HasMany(g => g.CreatedGroups)
                .WithOne(u => u.GroupOwner);

            builder.Entity<Group>()
                .HasMany(g => g.JoinedUsers)
                .WithMany(n => n.JoinedGroups);

            builder.Entity<Subject>()
                .HasMany(s => s.AssignedGroups)
                .WithOne(g => g.Subject);

            builder.Entity<Subject>()
                .HasOne(s => s.Topic)
                .WithOne(t => t.Subject)
                .HasForeignKey<Topic>(t => t.SubjectId);

            builder.Entity<User>()
                .HasMany(u => u.Posts)
                .WithOne(p => p.User)
                .HasForeignKey(e => e.OwnerId);

            builder.Entity<User>()
                .HasMany(u => u.TutoredGroups)
                .WithOne(p => p.Tutor)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<Post>()
                .HasMany(c => c.Comments)
                .WithOne(p => p.Post)
                .HasForeignKey(a => a.PostId);

            builder.Entity<Comment>()
                .HasOne(u => u.User)
                .WithMany(c => c.Comments);
        }
    }
}
