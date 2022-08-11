using System.Linq;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Domain.Interfaces
{
    public interface IUserRepository
    {
        User GetUserById(int userId);
        IQueryable<User> GetAllActiveUsers();
        int AddUser(User user);
        void UpdateUser(User user);
        void DeleteUser(int userId);
        void DeleteUserAbsolute(int userId);
    }
}