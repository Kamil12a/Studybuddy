using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.Application.Interfaces
{
    public interface IGroupService
    {
        GroupVm GetGroupById(int groupId);
       
        ListGroupForListVm GetAllGroups();
        ListGroupForListVm GetAllGroups(int pageSize, int pageNo);
        ListGroupForListVm GetAllGroups(int pageSize, int pageNo, string searchString);
        int AddGroup(NewGroupVm groupVm);
        int AddUserToGroup(int groupId, int userId);
        void UpdateGroup(EditGroupVm groupVm);
        void DeleteGroup(int groupId);
        void DeleteGroupAbsolute(int groupId);
    }
}