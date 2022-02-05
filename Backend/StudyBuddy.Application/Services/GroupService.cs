using System;
using System.Collections.Generic;
using AutoMapper;
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

        public void DeleteGroup(int groupId)
        {
            _groupRepo.DeleteGroup(groupId);
        }

        public void DeleteGroupProperty(int groupPropertyId)
        {
            _groupRepo.DeleteGroupProperty(groupPropertyId);
        }

        public GroupVm GetGroup(int groupId)
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