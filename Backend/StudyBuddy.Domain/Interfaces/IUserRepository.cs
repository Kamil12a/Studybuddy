using System.Linq;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Domain.Interfaces
{
    public interface IUserRepository
    {
        User GetUserById(int userId);
        IQueryable<User> GetAllActiveUsers();
        UserProperty GetUserProperty(int userPropertyId);
        int AddUser(User user);
        int AddUserProperty(UserProperty userProperty);
        void UpdateUser(User user);
        void UpdateUserProperty(UserProperty userProperty);
        void DeleteUser(int userId);
        void DeleteUserAbsolute(int userId);
        void DeleteUserProperty(int userPropertyId);
        void DeleteUserPropertyAbsolute(int userPropertyId);
    }
}