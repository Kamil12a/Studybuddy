using System.Linq;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Domain.Interfaces
{
    public interface IForumRepository
    {
        Post GetPost(int postId);
        int AddPost(Post post);
        void UpdatePost(Post post);
        void DeletePost(int postId);
        IQueryable<Post> GetAllActivePosts();
    }
}