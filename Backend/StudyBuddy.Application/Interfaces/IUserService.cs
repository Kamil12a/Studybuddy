using System.Linq;
using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.Application.Interfaces
{
    public interface IUserService
    {
        UserVm GetUserById(int userId);
        ListUserForListVm GetAllUsers();
        ListUserForListVm GetAllUsers(int pageSize, int pageNo);
        ListUserForListVm GetAllUsers(int pageSize, int pageNo, string searchString);
        int AddUser(NewUserVm userVm);
        void UpdateUser(NewUserVm userVm);
        void DeleteUser(int userId);
        void DeleteUserAbsolute(int userId);
    }
}