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
        int AddGroup(Group group);
        void UpdateGroup(Group group);
        void DeleteGroup(int groupId);
        void DeleteGroupAbsolute(int groupId);
        bool GroupIsActive(int groupId);  
    }
}