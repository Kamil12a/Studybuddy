using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;
using StudyBuddy.SQLite;

namespace StudyBuddy.Infrastructure.Repositories
{
    public class ForumRepository : IForumRepository
    {
        private readonly Context _context;

        public ForumRepository(Context context)
        {
            _context = context;
        }

        public int AddPost(Post post)
        {
            _context.Posts.Add(post);
            _context.SaveChanges();
            return post.Id;
        }

        public void DeletePost(int postId)
        {
            var result = _context.Posts.SingleOrDefault(i => i.Id == postId && i.IsActive);

            if (result != null)
            {
                var item = result;
                item.IsActive = false;
                _context.Entry(result).CurrentValues.SetValues(item);
                _context.SaveChanges();
            }
            else
            {
                throw new KeyNotFoundException(string.Format("Cannot find post for Id: {0}", postId));
            }
        }

        public IQueryable<Post> GetAllActivePosts()
        {
            return _context.Posts.Where(i => i.IsActive);
        }

        public Post GetPost(int postId)
        {
            return _context.Posts.SingleOrDefault(i => i.Id == postId && i.IsActive);
        }

        public void UpdatePost(Post post)
        {
            _context.Attach(post);
            _context.Entry(post).Property("Description").IsModified = true;
            _context.SaveChanges();
        }
    }
}