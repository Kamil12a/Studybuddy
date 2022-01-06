using System.Linq;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;

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

        public int AddGroupProperty(GroupProperty groupProperty)
        {
            _context.GroupProperties.Add(groupProperty);
            _context.SaveChanges();
            return groupProperty.Id;
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
            var item = _context.Groups.Find(groupId);
            _context.Groups.Remove(item);
            _context.SaveChanges();
        }

        public void DeleteGroupProperty(int groupPropertyId)
        {
            DeleteGroupPropertyAbsolute(groupPropertyId);
        }

        public void DeleteGroupPropertyAbsolute(int groupPropertyId)
        {
            var groupProperty = _context.GroupProperties.Find(groupPropertyId);
            _context.GroupProperties.Remove(groupProperty);
            _context.SaveChanges();
        }

        public IQueryable<Group> GetAllActiveGroups()
        {
            return _context.Groups.Where(i => i.IsActive);
        }

        public Group GetGroupById(int groupId)
        {
            return _context.Groups.FirstOrDefault(i => i.Id == groupId);
        }

        public GroupProperty GetGroupProperty(int groupPropertyId)
        {
            return _context.GroupProperties.FirstOrDefault(i => i.Id == groupPropertyId);
        }

        public void UpdateGroup(Group group)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateGroupProperty(GroupProperty groupProperty)
        {
            throw new System.NotImplementedException();
        }
    }
}