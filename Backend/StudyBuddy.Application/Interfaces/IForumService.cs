using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.Application.Interfaces
{
    public interface IForumService
    {
        PostVm GetPost(int postId);
        ListPostForListVm GetAllPosts();
        ListPostForListVm GetAllPosts(int pageSize, int pageNo);
        ListPostForListVm GetAllPosts(int pageSize, int pageNo, string searchString);
        int AddPost(NewPostVm postVm);
        void UpdatePost(PostVm postVm);
        void DeletePost(int postId);
    }
}