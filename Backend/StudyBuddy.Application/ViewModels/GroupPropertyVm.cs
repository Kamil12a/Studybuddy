using System;
using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class GroupPropertyVm : IMapFrom<GroupProperty>
    {
        public int Id { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public string Description { get; set; }
        public int GroupId { get; set; }

        public void Mapping(MappingProfile profile)
        {
            profile.CreateMap<GroupProperty, GroupPropertyVm>()
                .ReverseMap();
        }
    }
}