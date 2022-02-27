using AutoMapper;
using StudyBuddy.Application.Common.Mapping;

namespace StudyBuddy.Application.ViewModels
{
    public class GroupForListVm : IMapFrom<StudyBuddy.Domain.Models.Group>
    {
        public int Id { get; set; }
        public int GroupOwnerId { get; set; }
        public string ShortDescription { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<StudyBuddy.Domain.Models.Group, GroupForListVm>()
                .ReverseMap();
        }
    }
}