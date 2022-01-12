using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.Application.Interfaces
{
    public interface IForumService
    {
        PostVm GetPost(int postId);
        int AddPost(PostVm post);
        void UpdatePost(PostVm post);
        void DeletePost(int postId);
    }
}