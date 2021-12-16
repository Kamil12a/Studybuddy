using System.Collections.Generic;
using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class GroupVm : IMapFrom<Group>
    {
        public int Id { get; set; }
        public int TutorId { get; set; }
        public ICollection<User> StudentIds { get; set; }
        public int AdminId { get; set; }

        public void Mapping(MappingProfile profile)
        {
            profile.CreateMap<Group, GroupVm>();
        }
    }
}