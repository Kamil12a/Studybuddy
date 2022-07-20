using System;
using System.Collections.Generic;
using AutoMapper;
using StudyBuddy.Application.Common.Mapping;

namespace StudyBuddy.Application.ViewModels
{
    public class EditGroupVm : IMapFrom<StudyBuddy.Domain.Models.Group>
    {
        public int Id { get; set; }
        public int TutorId { get; set; }
        public string Place { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public DateTime MeetingDate { get; set; }
        public int GroupOwnerId { get; set; }
        public int SubjectId { get; set; }
    
        public void Mapping(Profile profile)
        {
            profile.CreateMap<EditGroupVm, StudyBuddy.Domain.Models.Group>()
                .ReverseMap();
        }
    }
}