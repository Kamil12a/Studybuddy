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

        public int AddUser(NewUserVm userVm)
        {
            var user = _mapper.Map<User>(userVm);
            user.IsActive = true;
            var id = _userRepo.AddUser(user);
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
                Count = usersToShow.Count
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
                Count = usersToShow.Count
            };

            return usersList;
        }

        public UserVm GetUserById(int userId)
        {
            var user = _userRepo.GetUserById(userId);
            var userVm = _mapper.Map<UserVm>(user);
            return userVm;
        }

        public void UpdateUser(NewUserVm userVm)
        {
            var user = _mapper.Map<User>(userVm);
            _userRepo.UpdateUser(user);
        }
    }
}