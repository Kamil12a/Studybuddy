using System.Collections.Generic;
using System.Linq;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Domain.Interfaces
{
    public interface IGroupRepository
    {
        Group GetGroupById(int groupId);
        ICollection<User> GetGroupJoinedUsersByGroupId(int groupId);
        IQueryable<Group> GetAllActiveGroups();
        GroupProperty GetGroupProperty(int groupPropertyId);
        int AddGroup(Group group);
        int AddGroupProperty(GroupProperty groupProperty);
        void UpdateGroup(Group group);
        void UpdateGroupProperty(GroupProperty groupProperty);
        void DeleteGroup(int groupId);
        void DeleteGroupAbsolute(int groupId);
        void DeleteGroupProperty(int groupPropertyId);
        void DeleteGroupPropertyAbsolute(int groupPropertyId);         
        bool GroupIsActive(int groupId);  
    }
}