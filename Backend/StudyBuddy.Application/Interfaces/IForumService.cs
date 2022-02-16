using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.Application.Interfaces
{
    public interface IForumService
    {
        PostVm GetPost(int postId);
        int AddPost(NewPostVm postVm);
        void UpdatePost(PostVm postVm);
        void DeletePost(int postId);
    }
}