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
        UserPropertyVm GetUserPropertyVm(int userPropertyId);
        int AddUser(NewUserVm userVm);
        int AddUserPropertyVm(UserPropertyVm userPropertyVm);
        void UpdateUser(NewUserVm userVm);
        void UpdateUserProperty(UserPropertyVm userPropertyVm);
        void DeleteUser(int userId);
        void DeleteUserProperty(int userPropertyId); 
        void DeleteUserAbsolute(int userId);
        void DeleteUserPropertyAbsolute(int userPropertyId);
    }
}