using System;
using System.Collections.Generic;
using AutoMapper;
using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class PostVm : IMapFrom<Post>
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public byte[] OwnerProfilePicture { get; set; }
        public DateTime PublishDate { get; set; }
        public string Topic { get; set; }
        public string Content { get; set; }
        public int Likes { get; set; }
        public List<Comment> Comments { get; set; }
        public int CommentsCount { get => Comments.Count; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Post, PostVm>()
                .ReverseMap();
        }
    }
}