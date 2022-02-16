using AutoMapper;
using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class NewPostVm : IMapFrom<Post>
    {
        public int OwnerId { get; set; }
        public string Description { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Post, NewPostVm>()
                .ReverseMap();
        }
    }
}