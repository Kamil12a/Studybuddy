using AutoMapper;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using StudyBuddy.Domain.Interfaces;

namespace StudyBuddy.Application.Services
{
    public class ForumService : IForumService
    {
        private readonly IForumRepository _forumRepo;
        private readonly IMapper _mapper;
        
        public int AddPost(PostVm post)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteGroupProperty(int groupPropertyId)
        {
            throw new System.NotImplementedException();
        }

        public PostVm GetPost(int postId)
        {
            throw new System.NotImplementedException();
        }

        public void UpdatePost(PostVm post)
        {
            throw new System.NotImplementedException();
        }
    }
}