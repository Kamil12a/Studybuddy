using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.Application.Interfaces
{
    public interface IGroupService
    {
        GroupVm GetGroup(int groupId);
        GroupPropertyVm GetGroupPropertyVm(int groupProperty);
        int AddGroup(GroupVm group);
        int AddGroupPropertyVm(GroupPropertyVm groupProperty);
        void UpdateGroup(GroupVm group);
        void UpdateGroupProperty(GroupPropertyVm groupProperty);
        void DeleteGroup(int groupId);
        void DeleteGroupProperty(int groupPropertyId);
    }
}