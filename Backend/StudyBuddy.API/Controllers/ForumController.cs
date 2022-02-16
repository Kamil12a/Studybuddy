using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.API.Controllers
{
    [ApiController]
    [Route("/[controller]/[action]")]
    public class ForumController : Controller
    {
        private readonly ILogger<ForumController> _logger;
        private readonly IForumService _forumService;

        public ForumController(ILogger<ForumController> logger, IForumService forumService)
        {
            _logger = logger;
            _forumService = forumService;
        }

        [HttpGet]
        public IActionResult GetPost(int postId)
        {
            var post = _forumService.GetPost(postId);
            return new JsonResult(post);
        }

        [HttpPost]
        public IActionResult AddPost(NewPostVm post)
        {
            var id = _forumService.AddPost(post);
            return new JsonResult(id);
        }

        [HttpPost]
        public IActionResult EditPost(PostVm post)
        {
            try
            {
                _forumService.UpdatePost(post);
            }
            catch
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeletePost(int postId)
        {
            try
            {
                _forumService.DeletePost(postId);
            }
            catch
            {
                return NotFound();
            }
            return Ok();
        }
    }
}