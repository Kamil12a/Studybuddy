using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class UserPropertyVm : IMapFrom<UserProperty>
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public int UserId { get; set; }

        public void Mapping(MappingProfile profile)
        {
            profile.CreateMap<UserProperty, UserPropertyVm>()
                .ReverseMap();
        }
    }
}