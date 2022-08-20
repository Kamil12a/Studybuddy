using System;
using AutoMapper;

namespace StudyBuddy.Application.ViewModels
{
    public class PostForListVm
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public byte[] OwnerProfilePicture { get; set; }
        public DateTime PublishDate { get; set; }
        public string Topic { get; set; }
        public string Content { get; set; }
        public int Likes { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<StudyBuddy.Domain.Models.Post, PostForListVm>()
                .ReverseMap();
        }
    }
}