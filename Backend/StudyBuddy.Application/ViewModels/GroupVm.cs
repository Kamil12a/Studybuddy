using System;
using System.Collections.Generic;
using AutoMapper;
using AutoMapper.Configuration.Annotations;
using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class GroupVm : IMapFrom<StudyBuddy.Domain.Models.Group>
    {
        public int Id { get; set; }
        public int TutorId { get; set; }
        public string TutorName { get; set; }
        public string Place { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public DateTime MeetingDate { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public int JoinedUsersCount { get => JoinedUsers.Count; }
        public List<UserVm> JoinedUsers { get; set; }
        public int GroupOwnerId { get; set; }
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
        
        public void Mapping(Profile profile)
        {
            profile.CreateMap<GroupVm, StudyBuddy.Domain.Models.Group>()
                .ReverseMap()
                .ForMember(opt => opt.TutorName, conf => conf.MapFrom(x => x.Tutor.Fullname))
                .ForMember(opt => opt.TutorId, conf => conf.MapFrom(x => x.Tutor.Id))
                .ForMember(opt => opt.SubjectName, conf => conf.MapFrom(x => x.Subject.Name));
        }
    }
}