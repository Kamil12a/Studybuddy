using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using StudyBuddy.Domain.Interfaces;

namespace StudyBuddy.Application.Services
{
    public class GroupService : IGroupService
    {
        private readonly IGroupRepository _groupRepo;

        public GroupService(IGroupRepository groupRepo)
        {
            _groupRepo = groupRepo;
        }

        public int AddGroup(GroupVm group)
        {
            return _groupRepo.AddGroup(new Domain.Models.Group());
        }

        public int AddGroupPropertyVm(GroupPropertyVm groupProperty)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteGroup(int groupId)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteGroupProperty(int groupPropertyId)
        {
            throw new System.NotImplementedException();
        }

        public GroupVm GetGroup(int groupId)
        {
            throw new System.NotImplementedException();
        }

        public GroupPropertyVm GetGroupPropertyVm(int groupProperty)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateGroup(GroupVm group)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateGroupProperty(GroupPropertyVm groupProperty)
        {
            throw new System.NotImplementedException();
        }
    }
}