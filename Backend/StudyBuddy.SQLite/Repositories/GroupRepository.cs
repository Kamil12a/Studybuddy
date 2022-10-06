using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;
using StudyBuddy.SQLite;

namespace StudyBuddy.Infrastructure.Repositories
{
    public class GroupRepository : IGroupRepository
    {
        private readonly Context _context;

        public GroupRepository(Context context)
        {
            _context = context;
        }

        public int AddGroup(Group group)
        {
            _context.Groups.Add(group);
            _context.SaveChanges();
            return group.Id;
        }

        public void DeleteGroup(int groupId)
        {
            var result = _context.Groups.SingleOrDefault(i => i.Id == groupId && i.IsActive);

            if (result != null)
            {
                var item = result;
                item.IsActive = false;
                _context.Entry(result).CurrentValues.SetValues(item);
                _context.SaveChanges();
            }
        }

        public void DeleteGroupAbsolute(int groupId)
        {
            var group = _context.Groups.Find(groupId);
            _context.Groups.Remove(group);
            _context.SaveChanges();
        }

        public IQueryable<Group> GetAllActiveGroups()
        {
            return _context.Groups.Where(i => i.IsActive);
        }

        public Group GetGroupById(int groupId)
        {
            return _context.Groups.FirstOrDefault(i => i.Id == groupId);;
        }

        public ICollection<User> GetGroupJoinedUsersByGroupId(int groupId)
        {
            return _context.Groups.Where(i => i.Id == groupId).Select(elem => elem.JoinedUsers).FirstOrDefault();
        }

        public bool GroupIsActive(int groupId)
        {
            return (_context.Groups.SingleOrDefault(i => i.Id == groupId && i.IsActive)) != null;
        }

        public void UpdateGroup(Group group)
        {
            _context.Attach(group);
            _context.Entry(group).Property("TutorId").IsModified = true;
            _context.Entry(group).Property("GroupOwnerId").IsModified = true;
            _context.Entry(group).State = EntityState.Modified;

            _context.SaveChanges();
        }
    }
}