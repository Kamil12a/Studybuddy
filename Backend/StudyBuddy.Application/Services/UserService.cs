using AutoMapper;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Domain.Interfaces;

namespace StudyBuddy.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;

        public int AddUser()
        {
            return 0;
        }
    }
}