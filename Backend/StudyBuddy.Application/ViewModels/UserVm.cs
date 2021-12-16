using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class UserVm : IMapFrom<User>
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Course { get; set; }
        public string Fullname { get; set; }

        public void Mapping(MappingProfile profile)
        {
            profile.CreateMap<User, UserVm>();
        }
    }
}