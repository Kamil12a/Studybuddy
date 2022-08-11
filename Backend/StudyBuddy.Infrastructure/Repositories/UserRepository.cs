using System.Linq;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly Context _context;

        public UserRepository(Context context) =>
            _context = context;

        public int AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user.Id;
        }

        public void DeleteUser(int userId)
        {
            var result = _context.Users.SingleOrDefault(i => i.Id == userId && i.IsActive);

            if (result != null)
            {
                var user = result;
                user.IsActive = false;
                _context.Entry(result).CurrentValues.SetValues(user);
                _context.SaveChanges();
            }
        }

        public void DeleteUserAbsolute(int userId)
        {
            var user = _context.Users.Find(userId);

            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

        public IQueryable<User> GetAllActiveUsers()
        {
            return _context.Users.Where(i => i.IsActive);
        }

        public User GetUserById(int userId)
        {
            return _context.Users.FirstOrDefault(i => i.Id == userId);
        }

        public void UpdateUser(User user)
        {
            _context.Attach(user);
            _context.Entry(user).Property("Name").IsModified = true;
            _context.Entry(user).Property("Surname").IsModified = true;
            _context.Entry(user).Property("Course").IsModified = true;

            _context.SaveChanges();
        }
    }
}