using System;
using AutoMapper;

namespace StudyBuddy.Application.ViewModels
{
    public class CommentVm
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        //public byte[] OwnerLogo { get; set; }
        public DateTime PublishDate { get; set; }
        public string Content { get; set; }
        
        public void Mapping(Profile profile)
        {
            profile.CreateMap<CommentVm, StudyBuddy.Domain.Models.Comment>()
                .ReverseMap();
        }
    }
}