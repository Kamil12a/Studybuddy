using System.Collections.Generic;
using AutoMapper;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.Services
{
    public class ForumService : IForumService
    {
        private readonly IForumRepository _forumRepo;
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;

        public ForumService(IForumRepository forumRepo, IUserRepository userRepo, IMapper mapper)
        {
            _forumRepo = forumRepo;
            _userRepo = userRepo;
            _mapper = mapper;
        }

        public int AddPost(NewPostVm postVm)
        {
            var post = _mapper.Map<Post>(postVm);
            post.User = _userRepo.GetUserById(postVm.OwnerId);
            
            if (post.User == null)
            {
                throw new KeyNotFoundException(string.Format("Cannot find User for Id: {0}", postVm.OwnerId));
            }
            post.IsActive = true;
            
            var id = _forumRepo.AddPost(post);
            return id;
        }

        public void DeletePost(int postId)
        {
            _forumRepo.DeletePost(postId);
        }

        public PostVm GetPost(int postId)
        {
            var post = _forumRepo.GetPost(postId);
            var postVm = _mapper.Map<PostVm>(post);
            return postVm;
        }

        public void UpdatePost(PostVm postVm)
        {
            var post = _mapper.Map<Post>(postVm);
            _forumRepo.UpdatePost(post);
        }
    }
}