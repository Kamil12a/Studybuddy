using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Infrastructure
{
    public class Context : DbContext
    {
        private readonly ICurrentUserService _userService;

        public DbSet<Group> Groups { get; set; }
        public DbSet<GroupProperty> GroupProperties { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserProperty> UserProperties { get; set; }

        public Context(DbContextOptions<Context> options, ICurrentUserService userService) : base(options)
        {
            _userService = userService;
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
        }

        // public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        // {
        //     foreach(var entry in ChangeTracker.Entries<AuditableEntity>)
        //     {
        //         switch(entry.State)
        //         {
        //             case EntityState.Added:
        //                 entry.Entity.CreatedBy = _userService.Email;
        //         }
        //     }
        // }
    }
}