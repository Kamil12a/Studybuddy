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
        private readonly ISubjectRepository _subjectRepo;
        private readonly IMapper _mapper;

        public GroupService(IGroupRepository groupRepo, IUserRepository userRepo, ISubjectRepository subjectRepo, IMapper mapper)
        {
            _groupRepo = groupRepo;
            _userRepo = userRepo;
            _mapper = mapper;
            _subjectRepo = subjectRepo;
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

        public int AddUserToGroup(int groupId, int userId)
        {
            var group = _groupRepo.GetGroupById(groupId);
            var user = _userRepo.GetUserById(userId);

            List<User> joinedUsers = new List<User>();
            joinedUsers.Add(user);
            group.JoinedUsers = joinedUsers;
            
            _groupRepo.UpdateGroup(group);
            return 1;
        }

        public void DeleteGroup(int groupId)
        {
            _groupRepo.DeleteGroup(groupId);
        }

        public void DeleteGroupAbsolute(int groupId)
        {
            _groupRepo.DeleteGroupAbsolute(groupId);
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
            group.JoinedUsers = _groupRepo.GetGroupJoinedUsersByGroupId(groupId);
            group.Tutor = _userRepo.GetUserById(group.TutorId);
            group.Subject = _subjectRepo.GetSubjectById(group.SubjectId);

            var groupVm = _mapper.Map<GroupVm>(group);
            return groupVm;
        }

        public void UpdateGroup(EditGroupVm groupVm)
        {
            // if (!_groupRepo.GroupIsActive(groupVm.Id)) 
            //     throw new KeyNotFoundException();
            
            var group = _mapper.Map<Group>(groupVm);
            group.GroupOwner = _userRepo.GetUserById(groupVm.GroupOwnerId);
            group.Tutor = _userRepo.GetUserById(groupVm.TutorId);
            group.IsActive = true;

            _groupRepo.UpdateGroup(group);
        }
    }
}