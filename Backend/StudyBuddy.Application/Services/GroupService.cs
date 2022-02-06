using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.Services
{
    public class GroupService : IGroupService
    {
        private readonly IGroupRepository _groupRepo;
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;

        public GroupService(IGroupRepository groupRepo, IUserRepository userRepo, IMapper mapper)
        {
            _groupRepo = groupRepo;
            _userRepo = userRepo;
            _mapper = mapper;
        }

        public int AddGroup(NewGroupVm groupVm)
        {
            var group = _mapper.Map<Group>(groupVm);
            group.IsActive = true;
            group.GroupOwner = _userRepo.GetUserById(groupVm.GroupOwnerId);

            if (group.GroupOwner == null)
            {
                throw new KeyNotFoundException(string.Format("Cannot find User for Id: {0}", groupVm.GroupOwnerId));
            }

            var id = _groupRepo.AddGroup(group);
            return id;
        }

        public int AddGroupPropertyVm(GroupPropertyVm groupPropertyVm)
        {
            var groupProperty = _mapper.Map<GroupProperty>(groupPropertyVm);
            var id = _groupRepo.AddGroupProperty(groupProperty);
            return id;
        }

        public int AddUserToGroup(int groupId, int userId)
        {
            var group = _groupRepo.GetGroupById(groupId);
            var user = _userRepo.GetUserById(userId);
            group.JoinedUsers.Add(user);

            _groupRepo.UpdateGroup(group);
            return 1;
        }

        public void DeleteGroup(int groupId)
        {
            _groupRepo.DeleteGroup(groupId);
        }

        public void DeleteGroupProperty(int groupPropertyId)
        {
            _groupRepo.DeleteGroupProperty(groupPropertyId);
        }

        public ListGroupForListVm GetAllGroups()
        {
            var groups = _groupRepo.GetAllActiveGroups()
                .ProjectTo<GroupForListVm>(_mapper.ConfigurationProvider).ToList();
            
            var groupList = new ListGroupForListVm()
            {
                Groups = groups,
                Count = groups.Count
            };

            return groupList;
        }

        public ListGroupForListVm GetAllGroups(int pageSize, int pageNo)
        {
            var groups = _groupRepo.GetAllActiveGroups()
                .ProjectTo<GroupForListVm>(_mapper.ConfigurationProvider).ToList();
            var groupsToShow = groups.Skip(pageSize*(pageNo - 1)).Take(pageSize).ToList();
            var groupList = new ListGroupForListVm()
            {
                PageSize = pageSize,
                CurrentPage = pageNo,
                Groups = groupsToShow,
                Count = groups.Count
            };

            return groupList;
        }

        public ListGroupForListVm GetAllGroups(int pageSize, int pageNo, string searchString)
        {
            // var groups = _groupRepo.GetAllActiveGroups().Where(p => p.Name.StartsWith(searchString))
            //     .ProjectTo<UserForListVm>(_mapper.ConfigurationProvider).ToList();
            // var usersToShow = users.Skip(pageSize*(pageNo - 1)).Take(pageSize).ToList();
            var groupList = new ListGroupForListVm()
            {
                PageSize = pageSize,
                CurrentPage = pageNo,
                SearchString = "NOT IMPLEMENTED YET - NEED MORE USER STORY INVESTIGATION ABOUT SEARCHSTRING",
                Groups = new List<GroupForListVm>(),
                Count = 0
            };

            return groupList;
        }

        public GroupVm GetGroupById(int groupId)
        {
            var group = _groupRepo.GetGroupById(groupId);
            var groupVm = _mapper.Map<GroupVm>(group);
            return groupVm;
        }

        public GroupPropertyVm GetGroupPropertyVm(int groupPropertyId)
        {
            var groupProperty = _groupRepo.GetGroupProperty(groupPropertyId);
            var groupVm = _mapper.Map<GroupPropertyVm>(groupProperty);
            return groupVm;
        }

        public void UpdateGroup(GroupVm groupVm)
        {
            var group = _mapper.Map<Group>(groupVm);
            _groupRepo.UpdateGroup(group);
        }

        public void UpdateGroupProperty(GroupPropertyVm groupPropertyVm)
        {
            var groupProperty = _mapper.Map<GroupProperty>(groupPropertyVm);
            _groupRepo.UpdateGroupProperty(groupProperty);
        }
    }
}