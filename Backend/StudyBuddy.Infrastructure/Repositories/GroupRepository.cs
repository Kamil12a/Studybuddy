using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
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
            var group = _context.Groups.FirstOrDefault(i => i.Id == groupId);
            ICollection<User> joinedGroups = _context.Groups.Where(i => i.Id == groupId).Select(elem => elem.JoinedUsers).FirstOrDefault();
            group.JoinedUsers = joinedGroups;

            return group;
        }

        // var foo = myICollection.OfType<YourType>().FirstOrDefault();
        // // or use a query
        // var bar = (from x in myICollection.OfType<YourType>() where x.SomeProperty == someValue select x)
        // .FirstOrDefault();

        public GroupProperty GetGroupProperty(int groupPropertyId)
        {
            return _context.GroupProperties.FirstOrDefault(i => i.Id == groupPropertyId);
        }

        public void UpdateGroup(Group group)
        {
            _context.Attach(group);
            _context.Entry(group).Property("TutorId").IsModified = true;
            _context.Entry(group).Property("GroupOwnerId").IsModified = true;
            //_context.Entry(group).Reference(x => x.JoinedUsers).EntityEntry<ICollection<User>>;
            _context.Entry(group).State = EntityState.Modified;
            //_context.Entry(group).Property("JoinedUsers").IsModified = true;
            //_context.Entry(group).Collection("JoinedUsers").Load();
            //_context.Entry(group).Collection("JoinedUsers");

            _context.SaveChanges();
        }

        public void UpdateGroupProperty(GroupProperty groupProperty)
        {
            throw new System.NotImplementedException();
        }
    }
}