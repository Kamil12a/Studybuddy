using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.Application.Interfaces
{
    public interface IGroupService
    {
        GroupVm GetGroupById(int groupId);
       
        ListGroupForListVm GetAllGroups();
        ListGroupForListVm GetAllGroups(int pageSize, int pageNo);
        ListGroupForListVm GetAllGroups(int pageSize, int pageNo, string searchString);
        GroupPropertyVm GetGroupPropertyVm(int groupPropertyId);
        int AddGroup(NewGroupVm groupVm);
        int AddGroupPropertyVm(GroupPropertyVm groupPropertyVm);
        int AddUserToGroup(int groupId, int userId);
        void UpdateGroup(EditGroupVm groupVm);
        void UpdateGroupProperty(GroupPropertyVm groupPropertyVm);
        void DeleteGroup(int groupId);
        void DeleteGroupAbsolute(int groupId);
        void DeleteGroupProperty(int groupPropertyId);
        void DeleteGroupPropertyAbsolute(int groupPropertyId);     
    }
}