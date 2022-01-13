using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }

        public int AddUser(UserVm userVm)
        {
            var user = _mapper.Map<User>(userVm);
            var id = _userRepo.AddUser(user);
            return id; 
        }

        public int AddUserPropertyVm(UserPropertyVm userPropertyVm)
        {
            var userProperty = _mapper.Map<UserProperty>(userPropertyVm);
            var id = _userRepo.AddUserProperty(userProperty);
            return id;
        }

        public void DeleteUser(int userId)
        {
            _userRepo.DeleteUser(userId);
        }

        public void DeleteUserAbsolute(int userId)
        {
            _userRepo.DeleteUserAbsolute(userId);
        }

        public void DeleteUserProperty(int userPropertyId)
        {
            _userRepo.DeleteUserProperty(userPropertyId);
        }

        public void DeleteUserPropertyAbsolute(int userPropertyId)
        {
            _userRepo.DeleteUserPropertyAbsolute(userPropertyId);
        }

        public ListUserForListVm GetAllUsers()
        {
            var users = _userRepo.GetAllActiveUsers()
                .ProjectTo<UserForListVm>(_mapper.ConfigurationProvider).ToList();
            
            var usersList = new ListUserForListVm()
            {
                Users = users,
                Count = users.Count
            };

            return usersList;
        }
        
        public ListUserForListVm GetAllUsers(int pageSize, int pageNo, string searchString)
        {
            var users = _userRepo.GetAllActiveUsers().Where(p => p.Name.StartsWith(searchString))
                .ProjectTo<UserForListVm>(_mapper.ConfigurationProvider).ToList();
            var usersToShow = users.Skip(pageSize*(pageNo - 1)).Take(pageSize).ToList();
            var usersList = new ListUserForListVm()
            {
                PageSize = pageSize,
                CurrentPage = pageNo,
                SearchString = searchString,
                Users = usersToShow,
                Count = users.Count
            };

            return usersList;
        }

        public ListUserForListVm GetAllUsers(int pageSize, int pageNo)
        {
            var users = _userRepo.GetAllActiveUsers()
                .ProjectTo<UserForListVm>(_mapper.ConfigurationProvider).ToList();
            var usersToShow = users.Skip(pageSize*(pageNo - 1)).Take(pageSize).ToList();
            var usersList = new ListUserForListVm()
            {
                PageSize = pageSize,
                CurrentPage = pageNo,
                Users = usersToShow,
                Count = users.Count
            };

            return usersList;
        }

        public UserVm GetUserById(int userId)
        {
            var user = _userRepo.GetUserById(userId);
            var userVm = _mapper.Map<UserVm>(user);
            return userVm;
        }

        public UserPropertyVm GetUserPropertyVm(int userPropertyId)
        {
            var userProperty = _userRepo.GetUserProperty(userPropertyId);
            var userPropertyVm = _mapper.Map<UserPropertyVm>(userProperty);
            return userPropertyVm;
        }

        public void UpdateUser(UserVm userVm)
        {
            var user = _mapper.Map<User>(userVm);
            _userRepo.UpdateUser(user);
        }

        public void UpdateUserProperty(UserPropertyVm userPropertyVm)
        {
            var userProperty = _mapper.Map<User>(userPropertyVm);
            _userRepo.UpdateUser(userProperty);
        }
    }
}