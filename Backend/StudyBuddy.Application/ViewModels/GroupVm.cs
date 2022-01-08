using System.Collections.Generic;
using AutoMapper;
using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class GroupVm : IMapFrom<StudyBuddy.Domain.Models.Group>
    {
        public int Id { get; set; }
        public int TutorId { get; set; }
        //public ICollection<User> StudentIds { get; set; }
        public int AdminId { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<GroupVm, StudyBuddy.Domain.Models.Group>()
                .ReverseMap();
        }
    }
}